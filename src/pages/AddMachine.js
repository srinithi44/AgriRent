import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import useLanguage from '../hooks/useLanguage'; // ✅ Import language hook

function AddMachine() {
  const navigate = useNavigate();
  const t = useLanguage(); // ✅ Get translations

  const [machine, setMachine] = useState({
    name: '',
    location: '',
    price: '',
    image: '',
  });

  const handleChange = (e) => {
    setMachine({ ...machine, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Machine added:", machine);
    alert("Machine added successfully!");
    navigate('/home');
  };

  return (
    <>
      <Navbar />
      <div style={styles.container}>
        <h2 style={styles.title}>{t.addMachine}</h2> {/* 🔁 Translated heading */}
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            name="name"
            placeholder="Machine Name"
            value={machine.name}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={machine.location}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            type="number"
            name="price"
            placeholder="Price per Day (₹)"
            value={machine.price}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={machine.image}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <button type="submit" style={styles.button}>
            {t.addMachine} {/* 🔁 Translated button */}
          </button>
        </form>
      </div>
    </>
  );
}

const styles = {
  container: {
    padding: '40px',
    fontFamily: 'Arial',
    backgroundColor: '#fffdf5',
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

export default AddMachine;
