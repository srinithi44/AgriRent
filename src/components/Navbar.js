import React from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <nav style={styles.nav}>
      <h1 style={styles.logo}>AgriRent</h1>
      <div style={styles.links}>
        <button onClick={() => navigate('/home')} style={styles.button}>Home</button>
        <button onClick={() => navigate('/add-machine')} style={styles.button}>Add Machine</button>
        <button onClick={() => navigate('/booking')} style={styles.button}>Bookings</button>
        <button onClick={handleLogout} style={styles.logout}>Logout</button>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    backgroundColor: '#228B22',
    padding: '15px 30px',
    color: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontFamily: 'Arial',
  },
  logo: {
    fontSize: '22px',
    fontWeight: 'bold',
  },
  links: {
    display: 'flex',
    gap: '15px',
  },
  button: {
    background: 'none',
    border: 'none',
    color: 'white',
    fontSize: '16px',
    cursor: 'pointer',
  },
  logout: {
    backgroundColor: '#fff',
    color: '#228B22',
    border: 'none',
    borderRadius: '6px',
    padding: '6px 14px',
    fontSize: '14px',
    cursor: 'pointer',
  },
};

export default Navbar;
