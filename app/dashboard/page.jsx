'use client';

import { useState, useEffect } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Footer from "../../components/Footer";
import styles from "../../styles/dashboard.module.css";

const page = () => {
  const [pastHackathons, setPastHackathons] = useState([]);
  useEffect(() => {
  fetch("http://20.198.100.243:9000/events/")
  .then((response) => response.json())
  .then((data) => setPastHackathons(data))
  .catch((error) => console.error(error));
}, []);
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.logout}>
          <button>
            <a href="/">Logout</a>
          </button>
        </div>

        <div className={styles.container + " container"}>
          <div className={styles.left_container}>
            <h5>
              Team : <span>Thapathalian</span>
            </h5>
            <div className={styles.hackathon_coc}>
              <h3>Code of Conduct</h3>
              <ul>
                <li>Be Respectful, friendly and honest,</li>
                <li>Collaborate and Share,</li>
                <li>Follow the Rules,</li>
                <li>Respect the Venue,</li>
                <li>Abide by the Code of Conduct</li>
              </ul>
            </div>
            <div className={styles.notification}>
              <h3>Notification Appear Here...</h3>
            </div>

            <div className={styles.event_lists}>
              <h4>Lists of events happening</h4>
              <table className={styles.uppertable}>
                <thead>
                <tr>
                  <th>Events</th>
                  <th>Time</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>              {pastHackathons.map((item) => (
                <p key={item.id}>{item.title}</p>
              ))}</td>
                  <td>              {pastHackathons.map((item) => (
                <p key={item.id}>{item.time}</p>
              ))}</td>
                </tr>
                <tr>
                  <td>Lunch Time</td>
                  <td>1:00 pm to 2:00 pm</td>
                </tr>
                <tr>
                  <td>GitHub Workshop</td>
                  <td>4:00 pm to 5:00 pm</td>
                </tr>
                <tr>
                  <td>Dinner Time</td>
                  <td>9:00 pm to 10:00 pm</td>
                </tr>
                </tbody>
              </table>
              <div className={styles.mentors}>
                <h4>Meet Our Mentors</h4>
                <table>
                  <thead>
                  <tr>
                    <th>Name</th>
                    <th>Designation</th>
                    <th>Time</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>Introduction Program</td>
                    <td>8:00 am to 9:00 am</td>
                    <td>8:00 am to 9:00 am</td>
                  </tr>
                  <tr>
                    <td>Lunch Time</td>
                    <td>1:00 pm to 2:00 pm</td>
                    <td>8:00 am to 9:00 am</td>
                  </tr>
                  <tr>
                    <td>GitHub Workshop</td>
                    <td>4:00 pm to 5:00 pm</td>
                    <td>8:00 am to 9:00 am</td>
                  </tr>
                  <tr>
                    <td>Dinner Time</td>
                    <td>9:00 pm to 10:00 pm</td>
                    <td>8:00 am to 9:00 am</td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className={styles.right_contain}>
            <div className={styles.asked_questions}>
              <p>Ask Organizer</p>
              <div className={styles.input_fields}>
                <input type="text" placeholder="Problem Faced" />
                <button type="submit">Send Problem</button>
              </div>
              <div className={styles.available_organizer}>
                <p>Available Organizer</p>
                <ul>
                  <li>Om Prakash Sharma (9812345678)</li>
                  <li>Prashant Raj Bista (9812345678)</li>
                  <li>Kristina Ghimire (9812345678)</li>
                  <li>Khemraj Shrestha (9812345678)</li>
                  <li>Om Prakash Sharma (9812345678)</li>
                  <li>Prashant Raj Bista (9812345678)</li>
                  <li>Kristina Ghimire (9812345678)</li>
                  <li>Khemraj Shrestha (9812345678)</li>
                  <li>Om Prakash Sharma (9812345678)</li>
                  <li>Prashant Raj Bista (9812345678)</li>
                  <li>Kristina Ghimire (9812345678)</li>
                  <li>Khemraj Shrestha (9812345678)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default page;
