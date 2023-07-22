"use client";

import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from '../../styles/login.module.css';

const page = () => {
  return (
    <>
    <Navbar />
    <div className={styles.container + " container"}>


<form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Unique Code</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
  </div>
  <div className={styles.buttons}>
  <button type="submit" class="btn btn-primary"><a href="/dashboard">Login</a></button>
  <button type="button" class="btn btn-secondary"> <a href="/registration">Register</a></button>
  </div>

</form>
</div>
<Footer />
    </>
  )
}

export default page