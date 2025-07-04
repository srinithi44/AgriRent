import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import useLanguage from '../hooks/useLanguage'; // ✅ Import language

function Booking() {
  const navigate = useNavigate();
  const t = useLanguage(); // ✅ Use translated text

  const [booking, setBooking] = useState({
    name: '',
    contact: '',
    date: '',
    location: '',
  });

  const handleChange = (e) => {
    setBooking({ ...booking, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking Info:', booking);
    alert('Booking confirmed!');
    navigate('/home');
  };

  return (
    <>
      <Navbar />
      <div style={styles.container}>
        <h2 style={styles.title}>{t.confirmBooking}</h2> {/* 🔁 Translated title */}
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={booking.name}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            type="text"
            name="contact"
            placeholder="Phone Number"
            value={booking.contact}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            type="date"
            name="date"
            value={booking.date}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            type="text"
            name="location"
            placeholder="Delivery Location"
            value={booking.location}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <button type="submit" style={styles.button}>
            {t.confirmBooking}
          </button>
        </form>
      </div>
    </>
  );
}

const styles = {
  container: {
    padding: '40px',
    backgroundColor: '#fefefe',
    fontFamily: 'Arial',
    minHeight: '100vh',
  },
  title: {
    fontSize: '24px',
    marginBottom: '20px',
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '400px',
    margin: '0 auto',
  },
  input: {
    padding: '12px',
    marginBottom: '16px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  button: {
    padding: '12px',
    backgroundColor: '#228B22',
    color: 'white',
    fontSize: '16px',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  },
};

export default Booking;
