

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Footer from '../../components/Footer'
import styles from '../../styles/dashboard.module.css'

const page = () => {
  return (
    <>
    <div className={styles.wrapper}>
        <div className={styles.logout}>
        <button><a href='/'>Logout</a></button>
        </div>
    
    <div className={styles.container + " container"}>
   
        <div className={styles.left_container}>
        <h5>Team : <span>Thapathalian</span></h5>
            <div className={styles.hackathon_coc}>
                <h3>Code of Conduct</h3>
                <ul>
                    <li>Be happy,</li>
                    <li>Be friendly,</li>
                    <li>Be honest</li>
                </ul>
            </div>
            <div className={styles.notification}>
            <h3>Notification Appear Here...</h3>
            </div>
            
            <div className={styles.event_lists}>
                <h4>Lists of events happening</h4>
            <table>
        <tr>
            <th>Events</th>
            <th>Time</th>
        </tr>
        <tr>
            <td>Introduction Program</td>
            <td>8:00 am to 9:00 am</td>
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
    </table>
            </div>
        </div>
        <div className={styles.right_contain}>
            <div className={styles.asked_questions}>
                
            <p>Ask Organizer</p>
            <div className={styles.input_fields}>
            <input type='text' placeholder='Problem Faced' />
            <button type='submit'>Send Problem</button>
            </div>
            <div className={styles.available_organizer}>
            <p>Available Organizer</p>
            <ul>
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
  )
}

export default page