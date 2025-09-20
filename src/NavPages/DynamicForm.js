import React, { useState, useEffect } from 'react';
import swal from 'sweetalert';
import CareerImg from '../images/Micopen.png';
import Topbar from '../Home/Topbar';
import LogoColumn from '../Home/LogoColumn';
import Navbar from '../Utility/Navbar';
import Footer from '../Home/Footer/Footer';
import './CareerForm.css';
import { useLocation } from "react-router-dom";


function DynamicForm() {
  const location = useLocation();
  const [schema, setSchema] = useState([]);
  const [formImage, setFormImage] = useState([]);
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    async function fetchSchema() {
    if (location) {
        var tmp = location.pathname.slice(location.pathname.lastIndexOf("/"), location.pathname.length);
        // setData(tmp) 
        tmp = tmp.substring(1, tmp.length);
        }
      try {
        const res = await fetch(`${process.env.REACT_APP_BACKEND_HOST}/purity/v1/career/dynamic-form/schema/${tmp}`);
        const data = await res.json();
        setSchema(data.fields || []);
        setFormImage(data.BannerImage || "");
        const init = {};
        (data.fields || []).forEach(f => (init[f.form_input_name] = f.FieldType === 'Checkbox' ? false : ''));
        setFormData(init);
        console.log(formData);
      } catch (err) {
        console.error('Error fetching schema', err);
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
      if (field.FieldType === 'Email' && formData[field.form_input_name]) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData[field.form_input_name])) {
          newErrors[field.FieldName] = 'Invalid email address';
        }
      }
      if (field.FieldType === 'Number' && formData[field.form_input_name]) {
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
    console.log(formData);
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
      let hasFile = schema.some(f => f.FieldType === 'File' && formData[f.form_input_name]);
      let response;

      console.log(formData);
      if (location) {
        var tmp = location.pathname.slice(location.pathname.lastIndexOf("/"), location.pathname.length);
        tmp = tmp.substring(1, tmp.length);
      }
      
      const formPayload = new FormData();
      for (let key in formData) {
        formPayload.append(key, formData[key]);
      }
      formPayload.append("form_identifier", tmp);
      
      response = await fetch(`${process.env.REACT_APP_BACKEND_HOST}/purity/v1/career/dynamic-form/submit`, {
        method: 'POST',
        body: formPayload,
      });

      if (response.ok) {
        setFormData({});
        swal({
          title: 'Submitted',
          text: 'Team will get back to you shortly',
          icon: 'success',
        });
      } else {
        swal({
          title: 'Failed!',
          text: 'Please check your details and try again',
          icon: 'error',
        });
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderField = (field) => {
    switch (field.FieldType) {
      case 'TEXT':
      case 'Email':
      case 'Number':
        return (
          <input
            type={field.FieldType.toLowerCase()}
            name={field.form_input_name}
            value={formData[field.form_input_name] || ''}
            onChange={(e) => handleChange(e, field)}
            className="form-control"
            placeholder={field.PlaceHolder}
            required={field.Required}
          />
        );
      case 'DropDown':
        return (
          <select
            name={field.form_input_name}
            value={formData[field.form_input_name] || ''}
            onChange={(e) => handleChange(e, field)}
            className="form-control"
            required={field.Required}
          >
            <option value="">Select</option>
            {field.Options?.map(opt => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        );
      case 'File':
        return (
          <input
            type="file"
            name={field.form_input_name}
            className="form-control"
            onChange={(e) => {
              setFormData(prev => ({
                ...prev,
                [field.form_input_name]: e.target.files[0] || null,
              }));
            }}
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
            <h5 className="letsBuild">Let's Build Real Stories Together</h5>
            <h2>Apply Now<strong> Submit your details</strong></h2>
          </div>
          <div className="career-form-page">
            <div className="row">
              <div className="col-md-6 d-flex align-items-center justify-content-center">
                <img src={formImage} alt="Career" className="img-fluid" style={{ maxHeight: 250 }} />
              </div>
              <div className="col-md-6">
                <form className="onForm" onSubmit={handleSubmit}>
                  <div className="row">
                    {schema.map(field => (
                      <div key={field.FieldName} className="col-md-12 form-group mb-2">
                        <label>{field.FieldName}{field.Required && <span>* &nbsp;</span>}</label>
                        {field.HelpText && (
                        <small className="form-text text-muted">{field.HelpText}</small>
                        )}
                        {renderField(field)}
                        {errors[field.FieldName] && (
                          <small className="text-danger">{errors[field.FieldName]}</small>
                        )}
                      </div>
                    ))}
                    <div className="col-md-12 d-flex justify-content-end">
                      <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                        {isSubmitting ? 'Submitting...' : 'Submit'}
                      </button>
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

export default DynamicForm;