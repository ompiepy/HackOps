"use client";

import { useState, useEffect } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/LandingPage.module.css";

const LandingPage = () => {

  const [pastHackathons, setPastHackathons] = useState([]);

  useEffect(() => {
    // Fetch data from the remote API
    fetch('https://notices.tcioe.edu.np/api/units/') 
      .then(response => response.json())
      .then(data => setPastHackathons(data))
      .catch(error => console.error(error));
  }, []);


  return (
    <div>
      <div className={styles.container + " container"}>
        <div className={styles.left_container}>
          Past Hackathon
          <div className={styles.lists}>
          {pastHackathons.map(item => (
              <button key={item.id}>{item.name}</button>
            ))}
          </div>
        </div>
        <div className={styles.middle_container}>
          Happening Hackathon
          <div className={styles.lists}>
          {pastHackathons.map(item => (
              <button key={item.id}><a href="/apply" className={styles.active}>{item.name}</a></button>
            ))}
          </div>
          </div>
        <div className={styles.right_container}>
          Upcoming Hackathon
          <div className={styles.lists}>
          {pastHackathons.map(item => (
              <button key={item.id}>{item.name}</button>
            ))}
          </div>
          </div>
      </div>
    </div>
  );
};

export default LandingPage;
