import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // TODO: Add real authentication
    console.log('Email:', email);
    console.log('Password:', password);
    navigate('/home'); // redirect to home page after login
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Login to AgriRent</h2>
      <form style={styles.form} onSubmit={handleLogin}>
        <input
          style={styles.input}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          style={styles.input}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button style={styles.button} type="submit">Login</button>
        <p style={styles.linkText}>
          Don't have an account?{' '}
          <span style={styles.link} onClick={() => navigate('/signup')}>
            Sign up
          </span>
        </p>
      </form>
    </div>
  );
}

const styles = {
  container: {
    height: '100vh',
    backgroundColor: '#f7fff7',
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

export default Login;
