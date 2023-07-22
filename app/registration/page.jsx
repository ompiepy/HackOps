"use client";

import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from '../../styles/registration.module.css';

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
    <label for="exampleInputText" class="form-label">Full Name</label>
    <input type="text" class="form-control" id="exampleInputText" aria-describedby="textHelp" required/>
  </div>
  <div class="mb-3">
    <label for="exampleInputText" class="form-label">Address</label>
    <input type="text" class="form-control" id="exampleInputText" aria-describedby="textHelp" required/>
  </div>
  <div class="mb-3">
    <label for="exampleInputText" class="form-label">College</label>
    <input type="text" class="form-control" id="exampleInputText" aria-describedby="textHelp" required/>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>
<Footer />
    </>
  )
}

export default page