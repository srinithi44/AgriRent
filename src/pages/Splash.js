import React from 'react';
import { useNavigate } from 'react-router-dom';

function Splash() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>AgriRent</h1>
      <p style={styles.subtitle}>Rent Your Paddy Harvesting Machines Easily</p>
      <button style={styles.button} onClick={() => navigate('/language')}>
        Get Started
      </button>
    </div>
  );
}

const styles = {
  container: {
    height: '100vh',
    backgroundColor: '#228B22',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    fontSize: '48px',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: '18px',
    marginTop: '10px',
    marginBottom: '40px',
  },
  button: {
    padding: '12px 30px',
    fontSize: '18px',
    backgroundColor: '#fff',
    color: '#228B22',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
  },
};

export default Splash;
