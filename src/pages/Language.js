import React from 'react';
import { useNavigate } from 'react-router-dom';

function Language() {
  const navigate = useNavigate();

  const handleEnglish = () => {
    localStorage.setItem("selectedLanguage", "en");
    navigate('/login');
  };

  const handleTamil = () => {
    localStorage.setItem("selectedLanguage", "ta");
    navigate('/login');
  };

  const handleHindi = () => {
    localStorage.setItem("selectedLanguage", "hi");
    navigate('/login');
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Choose Your Language</h2>
      <div style={styles.buttonGroup}>
        <button style={styles.button} onClick={handleEnglish}>English</button>
        <button style={styles.button} onClick={handleTamil}>தமிழ்</button>
        <button style={styles.button} onClick={handleHindi}>हिंदी</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: '100vh',
    backgroundColor: '#f0f9f0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Arial',
  },
  title: {
    fontSize: '28px',
    marginBottom: '30px',
  },
  buttonGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  button: {
    padding: '12px 30px',
    fontSize: '18px',
    borderRadius: '6px',
    border: 'none',
    cursor: 'pointer',
    backgroundColor: '#228B22',
    color: '#fff',
  },
};

export default Language;
