import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSignup = (e) => {
    e.preventDefault();
    console.log("User registered:", formData);
    navigate('/home'); // replace with actual home/dashboard
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Create Your AgriRent Account</h2>
      <form onSubmit={handleSignup} style={styles.form}>
        <input
          style={styles.input}
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          style={styles.input}
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          style={styles.input}
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit" style={styles.button}>Sign Up</button>
        <p style={styles.linkText}>
          Already have an account?{' '}
          <span style={styles.link} onClick={() => navigate('/login')}>
            Login
          </span>
        </p>
      </form>
    </div>
  );
}

const styles = {
  container: {
    height: '100vh',
    backgroundColor: '#fefefe',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Arial',
  },
  title: {
    fontSize: '26px',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
  },
  input: {
    padding: '12px',
    marginBottom: '15px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  button: {
    padding: '12px',
    backgroundColor: '#228B22',
    color: '#fff',
    fontSize: '16px',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  },
  linkText: {
    marginTop: '12px',
    textAlign: 'center',
  },
  link: {
    color: '#228B22',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
};

export default Signup;
