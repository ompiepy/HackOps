"use client";

import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Footer from "@/components/Footer";
import "./style.css";
import Image from "next/image";

const page = () => {
  return (
    <>
      <div className="wrapper">
        <div class="container">
          <div class="img">
            <Image
              src="/assets/bg.svg"
              alt="My Image"
              width={600}
              height={600}
            />
          </div>
          <div class="login-content">
            <form action="index.html">
              <h4 class="title">Hacks for Hackers</h4>
              <div class="input-div one">
                <div class="i">
                  <i class="fas fa-user"></i>
                </div>
                <div class="div">
                  <input type="email" class="input" placeholder="Email" />
                </div>
              </div>
              <div class="input-div pass">
                <div class="i">
                  <i class="fas fa-lock"></i>
                </div>
                <div class="div">
                  <input type="password" class="input" placeholder="Password" />
                </div>
              </div>
              <div id="notyet">
              <a href="/registration">Haven't register yet?</a>
              </div>
              
              <div className="buttons">
              <button type="submit" id="submit">
                <a href="/dashboard">Submit</a>
              </button>
              <button type="reset" id="reset">
                Clear
              </button>
              </div>

            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
