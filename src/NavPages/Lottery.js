import React, { useState, useEffect } from 'react';
import swal from 'sweetalert';
import Topbar from '../Home/Topbar';
import LogoColumn from '../Home/LogoColumn';
import Navbar from '../Utility/Navbar';
import Footer from '../Home/Footer/Footer';
import './CareerForm.css';
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

    useEffect(() => {
        async function fetchSchema() {
            try {
                if (location) {
                    var tmp = location.pathname.slice(location.pathname.lastIndexOf("/"), location.pathname.length);
                    // setData(tmp) 
                    tmp = tmp.substring(1, tmp.length);
                }

                const res = await fetch(`${process.env.REACT_APP_BACKEND_HOST}/api/v1/lottery/list`);
                const data = await res.json();

                console.log(data);

                if (data.valid && data.valid.length > 0) {
                    const lottery = data.valid.find(item => item.unique_identifier === tmp); // take the first valid lottery

                    // 🚨 Remove ALL city fields
                    // const filteredFields = (lottery.lottery_form_fields || []).filter(
                    //     f => !f.FieldName.toLowerCase().includes("city") &&
                    //         !f.form_input_name.toLowerCase().includes("city")
                    // );

                    setSchema(lottery.lottery_form_fields || []);
                    setFormImage(lottery.image_url || '');
                    setLotteryId(lottery.unique_identifier);
                    setLotteryUrl(lottery.url);

                    // init form data
                    const init = {};
                    lottery.lottery_form_fields.forEach(f => {
                        init[f.form_input_name] = f.FieldType === 'Checkbox' ? false : '';
                    });
                    setFormData(init);
                }
            } catch (err) {
                console.error('Error fetching lottery schema', err);
            }
        }
        fetchSchema();
    }, []);

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
        return newErrors;
    };

    const handleChange = (e, field) => {
        const { value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [field.form_input_name]: type === 'checkbox' ? checked : value,
        }));
    };


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
                    text: 'Your lottery entry has been recorded successfully!',
                    icon: 'success',
                }).then(() => {
                    if (lotteryUrl) {
                        window.location.href = lotteryUrl;
                    }
                });
            } else {
                if (result?.error?.toLowerCase().includes('duplicate')) {
                    swal({
                        title: 'Already Registered',
                        text: 'You have already registered for this lottery.',
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
                                            <div className="form-submit">
                                                <button type="submit" disabled={isSubmitting}>
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
