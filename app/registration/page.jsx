"use client";

import { useState } from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Footer from "@/components/Footer";

import "./style.css";


const page = () => {

  const handleReset = () => {
    setFormData({
      team_name: '',
      leader_name: '',
      member_2: '',
      member_3: '',
      member_4: '',
      leader_contact: '',
      leader_email: '',
      project_idea: '',
      projec_description: '',
      tools_to_be_used: '',
      prvious_projects: '',
      anything_else: '',
    });
  };

  const [formData, setFormData] = useState({
    team_name: '',
    leader_name: '',
    member_2: '',
    member_3: '',
    member_4: '',
    leader_contact: '',
    leader_email: '',
    project_idea: '',
    projec_description: '',
    tools_to_be_used: '',
    prvious_projects: '',
    anything_else: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const username = "admin";
    const password = "PasswOrd@khem";
    const basicAuth = "Basic " + btoa(username + ":" + password);

    try {
      const response = await fetch(
        "https://mlh-hacks.azurewebsites.net/registration_forms/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: basicAuth,
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      alert("Form submitted successfully!");
      setFormData({
        team_name: '',
        leader_name: '',
        member_2: '',
        member_3: '',
        member_4: '',
        leader_contact: '',
        leader_email: '',
        project_idea: '',
        projec_description: '',
        tools_to_be_used: '',
        prvious_projects: '',
        anything_else: '',
      });
    } catch (error) {
      alert("Error submitting form. Please try again later.");
    }
  };



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
          <form action="" id="survey-form" onSubmit={handleSubmit}>
            <div class="form-group">
              <label class="label" htmlFor="team_name" id="name-label">
                Team Name<span class="flash"> *</span>
              </label>
              <input
                type="text"
                name="team_name"
                id="team_name"
                placeholder="Your answer"
                value={formData.team_name}
                onChange={handleChange}
                required
              />
            </div>
            <div class="form-group">
              <label class="label" htmlFor="leader_name" id="name-label">
                Leader Name<span class="flash"> *</span>
              </label>
              <input
                type="text"
                name="leader_name"
                id="leader_name"
                placeholder="Your answer"
                value={formData.leader_name}
                onChange={handleChange}
                required
              />
            </div>
            <div class="form-group">
              <label class="label" htmlFor="member_2" id="name-label">
                Member2<span class="flash"> *</span>
              </label>
              <input
                type="text"
                name="member_2"
                id="member_2"
                placeholder="Your answer"
                value={formData.member_2}
                onChange={handleChange}
                required
              />
            </div>
            <div class="form-group">
              <label class="label" htmlFor="member_3" id="name-label">
                Member3
              </label>
              <input
                type="text"
                name="member_3"
                id="member_3"
                placeholder="Your answer"
                value={formData.member_3}
                onChange={handleChange}
              />
            </div>
            <div class="form-group">
              <label class="label" htmlFor="member_4" id="name-label">
                Member4
              </label>
              <input
                type="text"
                name="member_4"
                id="member_4"
                placeholder="Your answer"
                value={formData.member_4}
                onChange={handleChange}
              />
            </div>
            <div class="form-group">
              <label class="label" htmlFor="leader_contact" id="number-label">
                Leader Contact<span class="flash"> *</span>
              </label>
              <input
                type="number"
                name="leader_contact"
                id="leader_contact"
                placeholder="Your answer"
                value={formData.leader_contact}
                onChange={handleChange}
                required
              />
            </div>
            <div class="form-group">
              <label class="label" htmlFor="leader_email" id="email-label">
                Leader Email<span class="flash"> *</span>
              </label>
              <input
                type="email"
                name="leader_email"
                id="leader_email"
                placeholder="Your answer"
                value={formData.leader_email}
                onChange={handleChange}
                required
              />
            </div>
            <div class="form-group">
              <label class="label" htmlFor="project_idea" id="name-label">
                Project Idea<span class="flash"> *</span>
              </label>
              <input
                type="text"
                name="project_idea"
                id="project_idea"
                placeholder="Your answer"
                value={formData.project_idea}
                onChange={handleChange}
                required
              />
            </div>
            <div class="form-group">
              <label class="label" htmlFor="projec_description" id="name-label">
                Project Description
              </label>
              <input
                type="text"
                name="projec_description"
                id="projec_description"
                placeholder="Your answer"
                value={formData.projec_description}
                onChange={handleChange}
              />
            </div>
            <div class="form-group">
              <label class="label" htmlFor="tools_to_be_used" id="name-label">
                Tools to be used<span class="flash"> *</span>
              </label>
              <input
                type="text"
                name="tools_to_be_used"
                id="tools_to_be_used"
                placeholder="Your answer"
                value={formData.tools_to_be_used}
                onChange={handleChange}
                required
              />
            </div>
            <div class="form-group">
              <label class="label" htmlFor="prvious_projects" id="name-label">
                Previous Project URL (If any)
              </label>
              <input
                type="text"
                name="prvious_projects"
                id="prvious_projects"
                placeholder="Your answer"
                value={formData.prvious_projects}
                onChange={handleChange}
              />
            </div>
            <div class="form-group">
              <label class="label" htmlFor="anything_else" id="name-label">
                Anything else you would like to share with us
              </label>
              <input
                type="text"
                name="anything_else"
                id="anything_else"
                placeholder="Your answer"
                value={formData.anything_else}
                onChange={handleChange}
              />
            </div>
            <div id="button-group">
              <button type="submit" id="submit">
                Submit
              </button>
              <button type="reset" id="reset" onClick={handleReset}>
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
