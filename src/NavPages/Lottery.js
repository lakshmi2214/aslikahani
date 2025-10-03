import React, { useState, useEffect } from 'react';
import swal from 'sweetalert';
import Topbar from '../Home/Topbar';
import LogoColumn from '../Home/LogoColumn';
import Navbar from '../Utility/Navbar';
import Footer from '../Home/Footer/Footer';
import './CareerForm.css';
import './Lottery.css';
import { useLocation } from "react-router-dom";

function DrawForm() {
    const location = useLocation();
    const [schema, setSchema] = useState([]);
    const [formImage, setFormImage] = useState('');
    const [formData, setFormData] = useState({});
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [lotteryId, setLotteryId] = useState('');
    const [lotteryUrl, setLotteryUrl] = useState('');
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [endDateTime, setEndDateTime] = useState('');
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        async function fetchSchema() {
            try {
                if (location) {
                    var tmp = location.pathname.slice(location.pathname.lastIndexOf("/"), location.pathname.length);
                    // setData(tmp) 
                    tmp = tmp.substring(1, tmp.length);
                }

                const res = await fetch(`${process.env.REACT_APP_BACKEND_HOST}/api/v1/lottery/list`);
                // const res = await fetch(`http://localhost:8000/api/v1/lottery/list`);
                const data = await res.json();

                console.log(data);

                const lottery = data.valid.find(item => item.unique_identifier === tmp);
                if (!lottery.is_valid){
                    window.open(`${process.env.REACT_APP_DOMAIN_NAME}/winners/${tmp}`, '_self');
                }

                // take the first valid lottery

                // 🚨 Remove ALL city fields
                // const filteredFields = (lottery.lottery_form_fields || []).filter(
                //     f => !f.FieldName.toLowerCase().includes("city") &&
                //         !f.form_input_name.toLowerCase().includes("city")
                // );

                setSchema(lottery.lottery_form_fields || []);
                setFormImage(lottery.image_url || '');
                setLotteryId(lottery.unique_identifier);
                setLotteryUrl(lottery.url);
                setEndDateTime(lottery.end_datetime);

                // init form data
                const init = {};
                lottery.lottery_form_fields.forEach(f => {
                    init[f.form_input_name] = f.FieldType === 'Checkbox' ? false : '';
                });
                setFormData(init);
                
            } catch (err) {
                console.error('Error fetching lottery schema', err);
                
            }
        }
        fetchSchema();
    }, [location]);

    // Timer effect
    useEffect(() => {
        if (!endDateTime) return;

        const calculateTimeLeft = () => {
            const now = new Date().getTime();
            const endTime = new Date(endDateTime).getTime();
            const difference = endTime - now;

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);

                setTimeLeft({ days, hours, minutes, seconds });
            } else {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        };

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(timer);
    }, [endDateTime]);

    const validate = () => {
        const newErrors = {};
        schema.forEach(field => {
            if (field.Required && !formData[field.form_input_name]) {
                newErrors[field.FieldName] = `${field.FieldName} is required`;
            }
            if (field.FieldType.toUpperCase() === 'EMAIL' && formData[field.form_input_name]) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(formData[field.form_input_name])) {
                    newErrors[field.FieldName] = 'Invalid email address';
                }
            }
            if (field.FieldType.toUpperCase() === 'NUMBER' && formData[field.form_input_name]) {
                if (isNaN(formData[field.form_input_name])) {
                    newErrors[field.FieldName] = 'Must be a number';
                }
            }
        });
        
        // Check terms and conditions acceptance
        if (!termsAccepted) {
            newErrors.terms = 'You must accept the terms and conditions';
        }
        
        return newErrors;
    };

    const handleChange = (e, field) => {
        const { value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [field.form_input_name]: type === 'checkbox' ? checked : value,
        }));
    };

    // Copy to clipboard function
    const copyToClipboard = (elementId) => {
        const element = document.getElementById(elementId);
        if (element) {
            element.select();
            element.setSelectionRange(0, 99999); // For mobile devices
            document.execCommand('copy');
            
            // Show feedback
            const button = element.nextElementSibling;
            const originalText = button.textContent;
            button.textContent = 'Copied!';
            button.style.background = '#28a745';
            
            setTimeout(() => {
                button.textContent = originalText;
                button.style.background = '#007bff';
            }, 2000);
        }
    };

    // Make copyToClipboard available globally for the onclick handler
    useEffect(() => {
        window.copyToClipboard = copyToClipboard;
        return () => {
            delete window.copyToClipboard;
        };
    }, []);


    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        setErrors({});
        setIsSubmitting(true);

        try {
            const formPayload = new FormData();
            for (let key in formData) {
                formPayload.append(key, formData[key]);
            }
            // ✅ backend requires this key
            formPayload.append('lottery_identifier', lotteryId);

            const response = await fetch(
                `${process.env.REACT_APP_BACKEND_HOST}/api/v1/lottery/submit`,
                {
                    method: 'POST',
                    body: formPayload,
                }
            );

            const result = await response.json();

            if (response.ok) {
                setFormData({});
                swal({
                    title: 'Submitted',
                    text: 'Your Draw entry has been recorded successfully!',
                    icon: 'success',
                    content: {
                        element: "div",
                        attributes: {
                            innerHTML: `
                            <p>ನಿಮ್ಮ ಡ್ರಾ ದಾಖಲಾತಿ ಯಶಸ್ವಿಯಾಗಿ ಪೂರ್ಣಗೊಂಡಿದೆ!</p>
                                ${result.submission_transaction_id ? `
                                    <div style="margin: 20px 0; padding: 15px; background: #f8f9fa; border-radius: 8px; border: 1px solid #dee2e6;">
                                        <p style="margin: 0 0 10px 0; font-weight: bold; color: #495057; font-size: 10px;
    color: #F44336;">⚠️ Important: Copy this code now – it is your ONLY unique participation code for the draw results. Without it, you cannot claim your prize.</p>
                                        <div style="display: flex; align-items: center; gap: 10px;">
                                            <input type="text" value="${result.submission_transaction_id}" readonly style="flex: 1; padding: 8px 12px; border: 1px solid #ced4da; border-radius: 4px; background: white; font-family: monospace; font-size: 14px;" id="responseKeyInput">
                                            <button onclick="copyToClipboard('responseKeyInput')" style="padding: 8px 12px; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 12px;">Copy</button>
                                        </div>
                                    </div>
                                ` : ''}
                                <p>Subscribe to our YouTube channel <a href="https://www.youtube.com/@AsliKahani" target="_blank" rel="noopener noreferrer" style="color: #007bff; text-decoration: underline;">click here</a></p>
                            `
                        }
                    }
                }).then(() => {
                    // Redirect to YouTube channel
                    window.open('https://www.youtube.com/@AsliKahani', '_blank');
                    
                    if (lotteryUrl) {
                        window.location.href = lotteryUrl;
                    }
                });
            } else {
                if (result?.error?.toLowerCase().includes('duplicate')) {
                    swal({
                        title: 'Already Registered',
                        text: 'You have already registered for this Draw.',
                        icon: 'info',
                    });
                } else {
                    swal({
                        title: 'Failed!',
                        text: result?.error || 'Please check your details and try again',
                        icon: 'error',
                    });
                }
            }
        } catch (error) {
            console.error(error);
            alert('An error occurred. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };



    const renderField = (field) => {
        switch (field.FieldType.toUpperCase()) {
            case 'TEXT':
                return (
                    <input
                        type="text"
                        name={field.form_input_name}
                        value={formData[field.form_input_name] || ''}
                        onChange={(e) => handleChange(e, field)}
                        placeholder={field.PlaceHolder}
                        required={field.Required}
                    />
                );
            case 'EMAIL':
                return (
                    <input
                        type="email"
                        name={field.form_input_name}
                        value={formData[field.form_input_name] || ''}
                        onChange={(e) => handleChange(e, field)}
                        required={field.Required}
                    />
                );
            case 'NUMBER':
                return (
                    <input
                        type="number"
                        name={field.form_input_name}
                        value={formData[field.form_input_name] || ''}
                        onChange={(e) => handleChange(e, field)}
                        required={field.Required}
                    />
                );
            default:
                return null;
        }
    };

    return (
        <>
            <Topbar />
            <LogoColumn />
            <Navbar />
            <section className="inner-pages-section">
                <div className="container py-5">
                    {/* Countdown Timer */}
                    {endDateTime && (
                        <div className="countdown-timer mb-4">
                            <h4 className="text-center mb-3">Time Remaining</h4>
                            <div className="timer-grid">
                                <div className="timer-item">
                                    <div className="timer-number">{timeLeft.days}</div>
                                    <div className="timer-label">Days</div>
                                </div>
                                <div className="timer-item">
                                    <div className="timer-number">{timeLeft.hours}</div>
                                    <div className="timer-label">Hours</div>
                                </div>
                                <div className="timer-item">
                                    <div className="timer-number">{timeLeft.minutes}</div>
                                    <div className="timer-label">Minutes</div>
                                </div>
                                <div className="timer-item">
                                    <div className="timer-number">{timeLeft.seconds}</div>
                                    <div className="timer-label">Seconds</div>
                                </div>
                            </div>
                        </div>
                    )}
                    
                    <div className="sub-hading">
                        <h5 className="letsBuild">Join the Lucky Draw</h5>
                        <h2>Apply Now<strong> Fill your details</strong></h2>
                    </div>
                    <div className="carrerCont">
                        <div className="row" style={{ alignItems: "center" }}>
                            <div className="col-md-7">
                                <div className="headPart">
                                    <div className="img-prt">
                                        {formImage && (
                                            <img src={formImage} alt="Lottery Banner" className="img-fluid" style={{ maxHeight: "400px" }} />
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <form className="onForm" onSubmit={handleSubmit}>
                                    <div className="row">
                                        {schema.map(field => (
                                            <div key={field.id} className="col-md-12 form-group">
                                                <div className="form-input">
                                                    <label className="label-partners">
                                                        {field.FieldName}
                                                        {field.Required && <span>*</span>}
                                                    </label>
                                                    {field.HelpText && (
                                                        <small className="form-text text-muted">{field.HelpText}</small>
                                                    )}
                                                    {renderField(field)}
                                                    {errors[field.FieldName] && (
                                                        <small className="text-danger">{errors[field.FieldName]}</small>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <div className="form-check">
                                                    <input
                                                        type="checkbox"
                                                        className="form-check-input"
                                                        id="termsCheckbox"
                                                        checked={termsAccepted}
                                                        onChange={(e) => setTermsAccepted(e.target.checked)}
                                                        style={{
                                                            width: '20px',
                                                            height: '20px',
                                                            marginTop: '2px'
                                                        }}
                                                    />
                                                    <label className="form-check-label" htmlFor="termsCheckbox" style={{ fontSize: '14px', marginLeft: '8px',fontWeight:'500' }}>
                                                        I agree to the <a href="javascript:void(0)" target="_blank" rel="noopener noreferrer">Terms and Conditions</a>
                                                    </label>
                                                </div>
                                                {errors.terms && (
                                                    <small className="text-danger">{errors.terms}</small>
                                                )}
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-submit">
                                                <button type="submit" disabled={isSubmitting || !termsAccepted}>
                                                    {isSubmitting ? 'Submitting...' : 'Submit'}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default DrawForm;
