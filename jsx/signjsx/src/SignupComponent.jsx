import React, { useState } from 'react';
import axios from 'axios'; // Import Axios

const SignupComponent = () => {
    const [formData, setFormData] = useState({
        phone: '',
        emailid: '',
        password: '',
    });

    const [message, setMessage] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            // Send POST request to the API with CORS headers
            const response = await axios.post('http://localhost:5023/api/post', formData, {
                headers: {
                    'Content-Type': 'application/json', // Specify content type
                    'Access-Control-Allow-Origin': '*', // Allow all origins (or specify domain)
                    'Access-Control-Allow-Methods': 'POST', // Allow necessary HTTP methods
                }
            });
            console.log('Response:', response.data); // Log the response from the server
            alert('User registered successfully!');
        } catch (error) {
            console.error('Error:', error);
            console.error('Failed to register user.');
        }
    };
    

    return (
        <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', border: '1px solid rgb(59 140 217)', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
            <h2 style={{ textAlign: 'center' }}>Sign Up</h2>
            {message && <p style={{ color: message.includes('success') ? 'green' : 'red' }}>{message}</p>}
            <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', marginBottom: '5px' }}>Email ID</label>
                    <input
                        type="emailid"
                        name="emailid"
                        placeholder="Enter your Email Id"
                        value={formData.emailid}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                    />
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', marginBottom: '5px' }}>phone</label>
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Enter your Phone number"
                        value={formData.phone}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                    />
                </div>
                
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', marginBottom: '5px' }}>Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                    />
                </div>
                <button
                    type="submit"
                    style={{ width: '100%', padding: '10px', borderRadius: '4px', background: '#007BFF', color: '#fff', border: 'none', cursor: 'pointer' }}
                >
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default SignupComponent;
