"use client";

import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Footer from "@/components/Footer";

import "./style.css";

const page = () => {
  return (
    <>
      <main id="main">
        <section id="header">
          <h1 id="title">Registration form - Hacks for Hackers</h1>
          <p id="description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
            incidunt ex perspiciatis alias aliquam, non corrupti repellat
            pariatur, fuga placeat ab sequi. Beatae, modi.
          </p>
          <p id="google-desc">
            The name and photo associated with your Google account will be
            recorded when you upload files and submit this form. Your email is
            not part of your response. <button><a href="/apply">
              Back
            </a></button>
          </p>
          <p class="flash">* Required</p>

        </section>


        <section>
          <form action="" id="survey-form">
            <div class="form-group">
              <label class="label" for="text" id="name-label">
                Team Name<span class="flash"> *</span>
              </label>
              <input
                type="text"
                name="text"
                id="name"
                placeholder="Your answer"
                required
              />
            </div>
            <div class="form-group">
              <label class="label" for="text" id="name-label">
                Leader Name<span class="flash"> *</span>
              </label>
              <input
                type="text"
                name="text"
                id="name"
                placeholder="Your answer"
                required
              />
            </div>
            <div class="form-group">
              <label class="label" for="text" id="name-label">
                Member2<span class="flash"> *</span>
              </label>
              <input
                type="text"
                name="text"
                id="name"
                placeholder="Your answer"
                required
              />
            </div>
            <div class="form-group">
              <label class="label" for="text" id="name-label">
                Member3
              </label>
              <input
                type="text"
                name="text"
                id="name"
                placeholder="Your answer"
              />
            </div>
            <div class="form-group">
              <label class="label" for="text" id="name-label">
                Member4
              </label>
              <input
                type="text"
                name="text"
                id="name"
                placeholder="Your answer"
              />
            </div>
            <div class="form-group">
              <label class="label" for="number" id="number-label">
                Leader Contact<span class="flash"> *</span>
              </label>
              <input
                type="number"
                name="number"
                id="number"
                min="10"
                max="99"
                placeholder="Your answer"
              />
            </div>
            <div class="form-group">
              <label class="label" for="email" id="email-label">
                Leader Email<span class="flash"> *</span>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your answer"
                required
              />
            </div>
            <div class="form-group">
              <label class="label" for="text" id="name-label">
                Project Idea<span class="flash"> *</span>
              </label>
              <input
                type="text"
                name="text"
                id="name"
                placeholder="Your answer"
              />
            </div>
            <div class="form-group">
              <label class="label" for="text" id="name-label">
                Project Description
              </label>
              <input
                type="text"
                name="text"
                id="name"
                placeholder="Your answer"
              />
            </div>
            <div class="form-group">
              <label class="label" for="text" id="name-label">
                Tools to be used<span class="flash"> *</span>
              </label>
              <input
                type="text"
                name="text"
                id="name"
                placeholder="Your answer"
              />
            </div>
            <div class="form-group">
              <label class="label" for="text" id="name-label">
                Previous Project URL (If any)
              </label>
              <input
                type="text"
                name="text"
                id="name"
                placeholder="Your answer"
              />
            </div>
            <div class="form-group">
              <label class="label" for="text" id="name-label">
                Anything else you would like to share with us
              </label>
              <input
                type="text"
                name="text"
                id="name"
                placeholder="Your answer"
              />
            </div>
            <div id="button-group">
              <button type="submit" id="submit">
                Submit
              </button>
              <button type="reset" id="reset">
                Clear form
              </button>
            </div>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default page;
