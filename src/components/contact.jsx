import React, { useState } from 'react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    customer_name: '',
    company_name: '', 
    customer_email: '',
    customer_phone: '', 
    query_txt: ''
  });
  
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('http://127.0.0.1:8000/query/contactus/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.status === 'success') {
        setStatus({ type: 'success', message: "Thank you! Your message has been sent successfully." });
        setFormData({
          customer_name: '',
          company_name: '',
          customer_email: '',
          customer_phone: '',
          query_txt: ''
        });
      } else {
        setStatus({ type: 'error', message: data.message || 'Something went wrong.' });
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus({ type: 'error', message: 'Could not connect to the backend server.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-section" style={{ 
      backgroundColor: '#ffffff', 
      fontFamily: 'sans-serif', 
      padding: '80px 20px', 
      maxWidth: '100%',
      margin: '0 auto',
      minHeight: '80vh'
    }}>
      
      {/* Header Container */}
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h1 style={{ color: '#2d4a22', fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '15px' }}>
          Let’s Build Something Exceptional
        </h1>
        <p style={{ color: '#555555', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6', fontSize: '1.05rem' }}>
          Ready to elevate your digital presence? Tell us about your project and let's create something remarkable together.
        </p>
      </div>

      {/* Main Split Layout */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '50px', justifyContent: 'center', maxWidth: '1100px', margin: '0 auto' }}>
        
        {/* Left Side: Interactive Dynamic Form */}
        <div style={{ flex: '1.3', minWidth: '320px', maxWidth: '650px' }}>
          
          {status.message && (
            <div style={{ 
              padding: '14px', 
              marginBottom: '20px', 
              borderRadius: '8px', 
              backgroundColor: status.type === 'success' ? '#e2f0d9' : '#fce4e4', 
              color: status.type === 'success' ? '#2d5a27' : '#a82c2c',
              fontWeight: '500'
            }}>
              {status.message}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            
            {/* Row 1: Full Name */}
            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', marginBottom: '8px', color: '#333333', fontWeight: '500', fontSize: '0.95rem' }}>Full Name *</label>
              <input 
                type="text" 
                name="customer_name" 
                placeholder="John Doe" 
                value={formData.customer_name}
                onChange={handleChange}
                required
                style={{ width: '100%', padding: '14px', borderRadius: '8px', border: '1px solid #dcdcdc', backgroundColor: '#ffffff', color: '#222222', boxSizing: 'border-box', fontSize: '1rem' }} 
              />
            </div>

            {/* Row 2: Email Address */}
            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', marginBottom: '8px', color: '#333333', fontWeight: '500', fontSize: '0.95rem' }}>Email Address *</label>
              <input 
                type="email" 
                name="customer_email" 
                placeholder="john@company.com" 
                value={formData.customer_email}
                onChange={handleChange}
                required
                style={{ width: '100%', padding: '14px', borderRadius: '8px', border: '1px solid #dcdcdc', backgroundColor: '#ffffff', color: '#222222', boxSizing: 'border-box', fontSize: '1rem' }} 
              />
            </div>

            {/* New Row 3: Company Name & Phone (Side-by-Side Grid Layout) */}
            <div style={{ display: 'flex', gap: '20px', marginBottom: '24px', flexWrap: 'wrap' }}>
              <div style={{ flex: '1', minWidth: '140px' }}>
                <label style={{ display: 'block', marginBottom: '8px', color: '#333333', fontWeight: '500', fontSize: '0.95rem' }}>Company Name</label>
                <input 
                  type="text" 
                  name="company_name" 
                  placeholder="Yugam AI" 
                  value={formData.company_name}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '14px', borderRadius: '8px', border: '1px solid #dcdcdc', backgroundColor: '#ffffff', color: '#222222', boxSizing: 'border-box', fontSize: '1rem' }} 
                />
              </div>
              
              <div style={{ flex: '1', minWidth: '140px' }}>
                <label style={{ display: 'block', marginBottom: '8px', color: '#333333', fontWeight: '500', fontSize: '0.95rem' }}>Phone Number</label>
                <input 
                  type="text" 
                  name="customer_phone" 
                  placeholder="10-digit number" 
                  maxLength="10"
                  value={formData.customer_phone}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '14px', borderRadius: '8px', border: '1px solid #dcdcdc', backgroundColor: '#ffffff', color: '#222222', boxSizing: 'border-box', fontSize: '1rem' }} 
                />
              </div>
            </div>

            {/* Row 4: Project Details */}
            <div style={{ marginBottom: '30px' }}>
              <label style={{ display: 'block', marginBottom: '8px', color: '#333333', fontWeight: '500', fontSize: '0.95rem' }}>Project Details *</label>
              <textarea 
                name="query_txt" 
                placeholder="Tell us about your project..." 
                value={formData.query_txt}
                onChange={handleChange}
                required
                rows="5" 
                style={{ width: '100%', padding: '14px', borderRadius: '8px', border: '1px solid #dcdcdc', backgroundColor: '#ffffff', color: '#222222', boxSizing: 'border-box', fontSize: '1rem', resize: 'vertical' }} 
              />
            </div>

            <button 
              type="submit" 
              disabled={loading}
              style={{ 
                padding: '14px 40px', 
                backgroundColor: loading ? '#888888' : '#4d6237', 
                color: '#ffffff', 
                border: 'none', 
                borderRadius: '8px', 
                fontSize: '1rem', 
                fontWeight: '600', 
                cursor: loading ? 'not-allowed' : 'pointer',
                transition: 'background-color 0.2s',
                boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
              }}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>

        {/* Right Side: Contact Cards Info */}
        <div style={{ flex: '1', minWidth: '280px', maxWidth: '380px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          <div style={{ 
            padding: '30px', 
            backgroundColor: '#ffffff', 
            border: '1px solid #eaeaea', 
            borderRadius: '12px', 
            boxShadow: '0 4px 20px rgba(0,0,0,0.03)' 
          }}>
            <h4 style={{ margin: '0 0 12px 0', color: '#333333', fontSize: '1.1rem', fontWeight: '600' }}>Email Us</h4>
            <p style={{ margin: 0, color: '#555555', fontWeight: '500' }}>hello@yugamai.com</p>
          </div>
          
          <div style={{ 
            padding: '30px', 
            backgroundColor: '#ffffff', 
            border: '1px solid #eaeaea', 
            borderRadius: '12px', 
            boxShadow: '0 4px 20px rgba(0,0,0,0.03)' 
          }}>
            <h4 style={{ margin: '0 0 12px 0', color: '#333333', fontSize: '1.1rem', fontWeight: '600' }}>Based In</h4>
            <p style={{ margin: 0, color: '#555555', lineHeight: '1.5', fontSize: '0.95rem' }}>San Francisco, CA · Remote Worldwide</p>
          </div>

        </div>

      </div>
    </div>
  );
}