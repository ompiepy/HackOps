"use client";

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import styles from '../../styles/dashboard.module.css'
import { useState, useEffect } from 'react';
const page = () => {


    const [pastHackathons, setPastHackathons] = useState([]);

    useEffect(() => {
      // Fetch data from the remote API
      fetch('https://notices.tcioe.edu.np/api/units/') 
        .then(response => response.json())
        .then(data => setPastHackathons(data))
        .catch(error => console.error(error));
    }, []);

  return (
    <>
    <Navbar />
    <div className={styles.container + " container"}>
        <div className={styles.display}>
            <div className={styles.teamname}><h4>Team Name :- <span>Thapathalian</span></h4></div>
            <div className={styles.uniquecode}><h4>Code :- <span>#gTh7Su</span></h4></div>
            <button>Ask Organizer</button>
        </div>
        <div className={styles.events_list}>
<h3>Event Happning List</h3>
{pastHackathons.map(item => (
              <li key={item.id}>{item.name}</li>
            ))}
        </div>
    </div>
    <Footer />
    </>
  )
}

export default page