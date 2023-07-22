"use client";

import { useState, useEffect } from "react";
import styles from "../../styles/apply.module.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Footer from "../../components/Footer";

const page = () => {
  const [pastHackathons, setPastHackathons] = useState([]);

  useEffect(() => {
    // Fetch data from the remote API
    fetch("https://notices.tcioe.edu.np/api/units/")
      .then((response) => response.json())
      .then((data) => setPastHackathons(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <>
    <div className={styles.wrapper}>

    
      <div className={styles.container + " container"}>
        <div className={styles.left_container}>
          <h3 className={styles.topics}>
            {pastHackathons.map((item) => (
              <button key={item.id}>{item.name}</button>
            ))}
          </h3>
          {pastHackathons.map((item) => (
            <h5 key={item.id}>{item.description}</h5>
          ))}
          <button><a href="/">
              Back
            </a></button>
        </div>
        
        <div className={styles.right_container}>
          <button>
            <a href="/registration" className={styles.active}>
              Apply Here
            </a>
          </button>
          <button>
            <a href="/login">Log In</a>
          </button>
        </div>
      </div>
      <Footer />
      </div>
    </>
  );
};

export default page;
