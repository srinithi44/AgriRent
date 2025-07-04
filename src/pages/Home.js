import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import Navbar from '../components/Navbar';
import useLanguage from '../hooks/useLanguage'; // ✅ Import language hook

const machines = [
  {
    id: 1,
    name: 'KUBOTA DC-68G Paddy Harvester',
    location: 'Thanjavur, Tamil Nadu',
    price: 2500,
    image: 'https://via.placeholder.com/300x180?text=Harvester+1',
  },
  {
    id: 2,
    name: 'JOHN DEERE W70',
    location: 'Madurai, Tamil Nadu',
    price: 2700,
    image: 'https://via.placeholder.com/300x180?text=Harvester+2',
  },
  {
    id: 3,
    name: 'New Holland 5880',
    location: 'Kumbakonam, Tamil Nadu',
    price: 2600,
    image: 'https://via.placeholder.com/300x180?text=Harvester+3',
  },
];

function Home() {
  const navigate = useNavigate();
  const t = useLanguage(); // ✅ Use translations

  return (
    <>
      <Navbar />

      <div style={styles.container}>
        <h2 style={styles.title}>{t.homeTitle}</h2> {/* ✅ Translated title */}
        <div style={styles.grid}>
          {machines.map((machine) => (
            <div key={machine.id} style={styles.card}>
              <img src={machine.image} alt={machine.name} style={styles.image} />
              <h3>{machine.name}</h3>
              <p>{machine.location}</p>
              <p>₹{machine.price} / day</p>
              <button
                style={styles.button}
                onClick={() => navigate('/booking')}
              >
                {t.rentNow} {/* ✅ Translated button */}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

const styles = {
  container: {
    padding: '30px',
    fontFamily: 'Arial',
    backgroundColor: '#f2fff2',
    minHeight: '100vh',
  },
  title: {
    textAlign: 'center',
    marginBottom: '30px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '20px',
  },
  card: {
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    borderRadius: '12px',
    padding: '16px',
    textAlign: 'center',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
  },
  image: {
    width: '100%',
    height: '180px',
    objectFit: 'cover',
    borderRadius: '10px',
    marginBottom: '10px',
  },
  button: {
    marginTop: '10px',
    padding: '10px 20px',
    backgroundColor: '#228B22',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  },
};

export default Home;
