import React, { useState } from 'react';
import { Modal, Button, Spinner } from 'react-bootstrap';
import swal from 'sweetalert';
import CareerImg from '../images/Micopen.png';
import './CareerModal.css'

function CareerModal({ show, handleClose }) {
  const [formData, setFormData] = useState({
    candidate_name: '',
    candidate_email: '',
    phone_number: '',
    description: '',
    cv: null
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.candidate_name.trim()) newErrors.candidate_name = 'Full name is required';
    if (!formData.candidate_email.trim() || !/\S+@\S+\.\S+/.test(formData.candidate_email)) newErrors.candidate_email = 'Valid email required';
    if (!formData.phone_number.trim() || formData.phone_number.length < 10) newErrors.phone_number = 'Valid phone number required';
    if (!formData.description.trim()) newErrors.description = 'Description is required';
    if (!formData.cv) newErrors.cv = 'Resume is required';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
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
    const submissionData = new FormData();
    submissionData.append('candidate_name', formData.candidate_name);
    submissionData.append('candidate_email', formData.candidate_email);
    submissionData.append('phone_number', formData.phone_number);
    submissionData.append('description', formData.description);
    submissionData.append('cv', formData.cv);
    submissionData.append('source', 'StarGoldCompany');
    try {
      const response = await fetch('https://backend.aslikahani.com/purity/v1/career/submit', {
        method: 'POST',
        body: submissionData,
      });
      if (response.ok) {
        setFormData({
          candidate_name: '',
          candidate_email: '',
          phone_number: '',
          description: '',
          cv: null,
        });
        swal({
          title: 'Query Submitted',
          text: 'Team will get back to you shortly',
          icon: 'success',
        });
        handleClose();
      } else {
        swal({
          title: 'Failed!!!',
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

  return (
    <Modal show={show} onHide={handleClose} centered size="lg" className="career-modal-fix">
      <Modal.Header closeButton>
        <Modal.Title>Apply Now - Submit your details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <img src={CareerImg} alt="Career" className="img-fluid" style={{ maxHeight: 250 }} />
          </div>
          <div className="col-md-6">
            <form className="onForm" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-12 form-group mb-2">
                  <label>Full Name <span>*</span></label>
                  <input type="text" name="candidate_name" value={formData.candidate_name} onChange={handleChange} className="form-control" required />
                  {errors.candidate_name && <small className="text-danger">{errors.candidate_name}</small>}
                </div>
                <div className="col-md-12 form-group mb-2">
                  <label>Email <span>*</span></label>
                  <input type="email" name="candidate_email" value={formData.candidate_email} onChange={handleChange} className="form-control" required />
                  {errors.candidate_email && <small className="text-danger">{errors.candidate_email}</small>}
                </div>
                <div className="col-md-12 form-group mb-2">
                  <label>Mobile <span>*</span></label>
                  <input type="tel" name="phone_number" value={formData.phone_number} onChange={handleChange} className="form-control" required />
                  {errors.phone_number && <small className="text-danger">{errors.phone_number}</small>}
                </div>
                <div className="col-md-12 form-group mb-2">
                  <label>Upload Resume <span>*</span></label>
                  <input type="file" name="cv" accept=".pdf,.doc,.docx" onChange={handleChange} className="form-control" required />
                  {errors.cv && <small className="text-danger">{errors.cv}</small>}
                </div>
                <div className="col-md-12 form-group mb-2">
                  <label>Why are you a good fit for the organization? <span>*</span></label>
                  <textarea name="description" value={formData.description} onChange={handleChange} className="form-control" required></textarea>
                  {errors.description && <small className="text-danger">{errors.description}</small>}
                </div>
                <div className="col-md-12 d-flex justify-content-end">
                  <Button type="submit" variant="primary" disabled={isSubmitting}>
                    {isSubmitting ? <Spinner animation="border" size="sm" /> : 'Submit'}
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default CareerModal; 