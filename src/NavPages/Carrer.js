import React from 'react';
import Footer from "../Home/Footer/Footer";
import { useState } from 'react';
import Navbar from '../Utility/Navbar';
import LogoColumn from '../Home/LogoColumn';
import Topbar from '../Home/Topbar';
import swal from 'sweetalert';
import CareerImg from '../images/card.png'


function Career() {
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
    if (!formData.candidate_name.trim()) newErrors.candidate_name = "Full name is required";
    if (!formData.candidate_email.trim() || !/\S+@\S+\.\S+/.test(formData.candidate_email)) newErrors.candidate_email = "Valid email required";
    if (!formData.phone_number.trim() || formData.phone_number.length < 10) newErrors.phone_number = "Valid phone number required";
    if (!formData.description.trim()) newErrors.description = "Description is required";
    if (!formData.cv) newErrors.cv = "Resume is required";
    return newErrors;
  }

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  }

  const handleSubmit = async (e) => {
    console.log("40");
    e.preventDefault();
    console.log("42");
    const validationErrors = validate();
    console.log(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    console.log("50");

    setErrors({});
    setIsSubmitting(true);

    const submissionData = new FormData();
    submissionData.append('candidate_name', formData.candidate_name);
    submissionData.append('candidate_email', formData.candidate_email);
    submissionData.append('phone_number', formData.phone_number);
    submissionData.append('description', formData.description);
    submissionData.append('cv', formData.cv);
    submissionData.append('source', "AsliKahani");

    try {
      const response = await fetch('https://backend.aslikahani.com/purity/v1/career/submit', {
        method: 'POST',
        body: submissionData
      });

      if (response.ok) {
        // alert("Application submitted successfully!");
        setFormData({
          candidate_name: '',
          candidate_email: '',
          phone_number: '',
          description: '',
          cv: null
        });
        swal({
          title: "Query Submitted",
          text: "Team will get back to you shortly",
          icon: "success"
        })
      } else {
        // alert("Failed to submit application.");
        swal({
          title: "Failed!!!",
          text: "Please check your details and try again",
          icon: "error"
        })
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <Topbar />
      <LogoColumn />
      <Navbar />

      <section className='inner-pages-section'>
        <div className='container'>
          <div class="sub-hading">
            <h5 className='letsBuild'>Let's Build Real Stories Together</h5>
            <h2>Apply Now<strong> Submit your details</strong></h2>
          </div>
          <div className='carrerCont'>
            <div className='row'>
              <div className='col-md-7'>

                <div className='headPart'>
                  <div className='img-prt'>
                    <img className='img-fluid' src={CareerImg} alt="career" />
                  </div>
                </div>
              </div>
              <div className='col-md-5'>
                <form className='onForm' onSubmit={handleSubmit}>
                  <div className='row'>
                    <div className="col-md-6 form-group">
                      <div className="form-input">
                        <label className='label-partners'>Full Name <span>*</span></label>
                        <input
                          type="text"
                          name="candidate_name"
                          value={formData.candidate_name}
                          onChange={handleChange}
                          required
                        />
                        {errors.candidate_name && <small className="text-danger">{errors.candidate_name}</small>}
                      </div>
                    </div>

                    <div className="col-md-6 form-group">
                      <div className="form-input">
                        <label className='label-partners'>Email <span>*</span></label>
                        <input
                          type="email"
                          name="candidate_email"
                          value={formData.candidate_email}
                          onChange={handleChange}
                          required
                        />
                        {errors.candidate_email && <small className="text-danger">{errors.candidate_email}</small>}
                      </div>
                    </div>

                    <div className="col-md-6 form-group">
                      <div className="form-input">
                        <label className='label-partners'>Mobile <span>*</span></label>
                        <input
                          type="tel"
                          name="phone_number"
                          value={formData.phone_number}
                          onChange={handleChange}
                          required
                        />
                        {errors.phone_number && <small className="text-danger">{errors.phone_number}</small>}
                      </div>
                    </div>

                    <div className="col-md-6 form-group">
                      <div className="form-input fileType">
                        <label className='label-partners'>Upload Resume <span>*</span></label>
                        <input
                          type="file"
                          name="cv"
                          accept=".pdf,.doc,.docx"
                          onChange={handleChange}
                          required
                        />
                        {errors.cv && <small className="text-danger">{errors.cv}</small>}
                      </div>
                    </div>

                    <div className="col-md-12 form-group">
                      <div className="form-input textArd">
                        <label className='label-partners'>Why are you a good fit for the organization? <span>*</span></label>
                        <textarea
                          name="description"
                          value={formData.description}
                          onChange={handleChange}
                          required
                        ></textarea>
                        {errors.description && <small className="text-danger">{errors.description}</small>}
                      </div>
                    </div>

                    <div className='col-md-12'>
                      <div className='form-submit'>
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
  )
}

export default Career;