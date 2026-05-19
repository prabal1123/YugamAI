// import React, { useState } from 'react';

// export default function ContactForm() {
//   const [formData, setFormData] = useState({
//     customer_name: '',
//     company_name: '',
//     customer_email: '',
//     customer_phone: '',
//     query_txt: ''
//   });
//   const [status, setStatus] = useState({ type: '', message: '' });
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setStatus({ type: '', message: '' });

//     try {
//       // Points exactly to your nested Django app endpoint mapping
//       const response = await fetch('http://127.0.0.1:8000/query/contactus/', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();

//       if (response.ok && data.status === 'success') {
//         setStatus({ type: 'success', message: data.message });
//         // Clean out form fields upon success
//         setFormData({
//           customer_name: '',
//           company_name: '',
//           customer_email: '',
//           customer_phone: '',
//           query_txt: ''
//         });
//       } else {
//         setStatus({ type: 'error', message: data.message || 'Something went wrong.' });
//       }
//     } catch (error) {
//       console.error('Submission error:', error);
//       setStatus({ type: 'error', message: 'Could not connect to the backend server.' });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={{ maxWidth: '500px', margin: '40px auto', padding: '20px', border: '1px solid #ddd', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', fontFamily: 'sans-serif' }}>
//       <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Contact Expert Support</h2>
      
//       {status.message && (
//         <div style={{ padding: '12px', marginBottom: '15px', borderRadius: '5px', backgroundColor: status.type === 'success' ? '#d4edda' : '#f8d7da', color: status.type === 'success' ? '#155724' : '#721c24', fontWeight: 'bold' }}>
//           {status.message}
//         </div>
//       )}

//       <form onSubmit={handleSubmit}>
//         <div style={{ marginBottom: '15px' }}>
//           <input type="text" name="customer_name" placeholder="Full Name *" value={formData.customer_name} onChange={handleChange} required style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', boxSizing: 'border-box' }} />
//         </div>
//         <div style={{ marginBottom: '15px' }}>
//           <input type="text" name="company_name" placeholder="Company Name" value={formData.company_name} onChange={handleChange} style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', boxSizing: 'border-box' }} />
//         </div>
//         <div style={{ marginBottom: '15px' }}>
//           <input type="email" name="customer_email" placeholder="Email Address *" value={formData.customer_email} onChange={handleChange} required style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', boxSizing: 'border-box' }} />
//         </div>
//         <div style={{ marginBottom: '15px' }}>
//           <input type="text" name="customer_phone" placeholder="Phone Number (10 digits)" value={formData.customer_phone} onChange={handleChange} maxLength="10" style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', boxSizing: 'border-box' }} />
//         </div>
//         <div style={{ marginBottom: '20px' }}>
//           <textarea name="query_txt" placeholder="Tell us about your query... *" value={formData.query_txt} onChange={handleChange} required rows="4" style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', boxSizing: 'border-box', resize: 'vertical' }} />
//         </div>
//         <button type="submit" disabled={loading} style={{ width: '100%', padding: '12px', backgroundColor: loading ? '#6c757d' : '#007bff', color: 'white', border: 'none', borderRadius: '5px', fontSize: '16px', fontWeight: 'bold', cursor: loading ? 'not-allowed' : 'pointer' }}>
//           {loading ? 'Sending message...' : 'Submit Query'}
//         </button>
//       </form>
//     </div>
//   );
// }