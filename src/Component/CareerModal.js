import React, { useState } from 'react';
import { Modal, Button, Spinner } from 'react-bootstrap';
import swal from 'sweetalert';
import CareerImg from '../images/Micopen.png';
import './CareerModal.css';

function CareerModal({ show, handleClose }) {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    instagram: '',
    performanceCount: '',
    performanceType: '',
    how_did_you_know: '',
    work_sample_link: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.contact.trim() || formData.contact.length < 10) newErrors.contact = 'Valid contact number is required';
    if (!formData.instagram.trim()) newErrors.instagram = 'Instagram ID is required';
    if (!formData.performanceCount) newErrors.performanceCount = 'Select number of performances';
    if (!formData.performanceType) newErrors.performanceType = 'Select type of performance';
    if (formData.instagram_id && !/^@?[\w.]{1,30}$/.test(formData.instagram_id)) {
      newErrors.instagram_id = 'Invalid Instagram ID';
    }
  
    if (formData.work_sample_link && !/^https?:\/\/(drive\.google\.com|www\.drive\.google\.com)\/.+/.test(formData.work_sample_link)) {
      newErrors.work_sample_link = 'Enter a valid Google Drive link';
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
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
    submissionData.append('candidate_name', formData.name);
    submissionData.append('phone_number', formData.contact);
    submissionData.append('instagram_id', formData.instagram);
    submissionData.append('performance_count', formData.performanceCount);
    submissionData.append('performance_type', formData.performanceType);
    submissionData.append('source', 'AsliKahani');
    submissionData.append('how_did_you_know', formData.how_did_you_know);
    submissionData.append('work_sample_link', formData.work_sample_link);

    try {
      const response = await fetch('https://backend.aslikahani.com/purity/v1/career/openmic/submit', {
        method: 'POST',
        body: submissionData,
      });
      if (response.ok) {
        setFormData({
          name: '',
          contact: '',
          instagram: '',
          performanceCount: '',
          performanceType: '',
        });
        swal({
          title: 'Submitted',
          text: 'Team will get back to you shortly',
          icon: 'success',
        });
        handleClose();
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
                  <label>Name <span>*</span></label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-control" required />
                  {errors.name && <small className="text-danger">{errors.name}</small>}
                </div>
                <div className="col-md-12 form-group mb-2">
                  <label>Contact Number <span>*</span></label>
                  <input type="tel" name="contact" value={formData.contact} onChange={handleChange} className="form-control" required />
                  {errors.contact && <small className="text-danger">{errors.contact}</small>}
                </div>
                <div className="col-md-12 form-group mb-2">
                  <label>Instagram ID <span>*</span></label>
                  <input type="text" name="instagram" value={formData.instagram} onChange={handleChange} className="form-control" required />
                  {errors.instagram && <small className="text-danger">{errors.instagram}</small>}
                </div>
                <div className="col-md-12 form-group mb-2">
                  <label>Number of Performances <span>*</span></label>
                  <select name="performanceCount" value={formData.performanceCount} onChange={handleChange} className="form-control" required>
                    <option value="">Select</option>
                    {[...Array(10).keys()].map(i => (
                      <option key={i + 1} value={i + 1}>{i + 1}</option>
                    ))}
                    <option value="10+">10+</option>
                  </select>
                  {errors.performanceCount && <small className="text-danger">{errors.performanceCount}</small>}
                </div>
                <div className="col-md-12 form-group mb-2">
                  <label>Type of Performance <span>*</span></label>
                  <select name="performanceType" value={formData.performanceType} onChange={handleChange} className="form-control" required>
                    <option value="">Select</option>
                    <option value="Solo vocalist">Solo vocalist</option>
                    <option value="Standup comedy">Standup comedy</option>
                    <option value="Poetry">Poetry</option>
                    <option value="Rap">Rap</option>
                    <option value="Band">Band</option>
                    <option value="Storytelling">Storytelling</option>
                    <option value="Others">Others</option>
                  </select>
                  {errors.performanceType && <small className="text-danger">{errors.performanceType}</small>}
                </div>

                <div className="col-md-12 form-group mb-2">
                  <label>How did you get to know about us?</label>
                  <input
                    type="text"
                    name="how_did_you_know"
                    value={formData.how_did_you_know}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>

                <div className="col-md-12 form-group mb-2">
                  <label>Show us your work (Share a Google Drive video link)</label>
                  <input
                    type="url"
                    name="work_sample_link"
                    value={formData.work_sample_link}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="https://drive.google.com/..."
                  />
                  {errors.work_sample_link && (
                    <small className="text-danger">{errors.work_sample_link}</small>
                  )}
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