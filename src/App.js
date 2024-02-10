// App.js
import React, { useState } from "react";
import Header from "./Header";
import "./App.css"; // Import your main CSS file
import manImage from "./manfree.jpeg";
import rehab1 from "./rehab1.jpg";// Importing the image
import ReportAbuseForm from "./ReportAbuseForm";
import rehab2 from "./rehab2.jpg";
import rehab3 from "./rehab3.jpg";
import Footer from "./Footer";


const App = () => {
  return (
    <div className="app">
      <Header />

      <div className="main-content">
        <div className="left-section">
          <h1 className="about-us-heading">About Us</h1>
          <p className="about-us-text">
            SoberSafalta is a real-time website based in Delhi, India, that
            provides a supportive and inspiring platform for individuals seeking
            to overcome alcohol addiction. Our mission is to guide alcohol
            addicts to their nearest alcohol de-addiction centers and allow
            users to report drug abuse happening near them.
          </p>
          <div className="buttons-container">
            <button className="test-button">Learn More</button>
            <a
        href="https://mainform.netlify.app/"
        className="test-button"
      >Book a Session</a>
          </div>
        </div>
        <div className="right-section">
          <img src={manImage} alt="Man" className="man-image" />
        </div>
      </div>
      <div className="blue-box">
        <div className="blue-box-left">
          <iframe
            src="https://www.google.com/maps/d/embed?mid=16mQo8nbhZvRHfq58WJbwzrqZH1Do038&hl=en&ehbc=2E312F"
            width="700"
            height="500"
          ></iframe>
        </div>
        <div className="blue-box-right">
            <div className="card card-blue-lorem">
              <h5></h5>
              <p>
              Our website seamlessly integrates Google Maps to provide users with an intuitive way to locate nearby rehab centers.
               Leveraging the power of Google Maps API,
                users can easily visualize the proximity of rehabilitation facilities within their vicinity
                . Through geocoding, addresses are converted into map coordinates, ensuring precise placement of markers.
                 
                   
              </p>
            </div>
          </div>
      </div>
      <div className="cards-container">
        <div className="card">
          <img src={rehab1} alt="Card 1" className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">Simran Shri Rehab Centre </h5>
            <p className="card-text">
            Simran Shri Rehabilitation Centre was established with the aim of changing the lives of the people who s
            uffer from addiction.The aim is to create a society which is free from any kind of addictions and its ill effects.
             Through a holistic approach, we address the physical, mental, and emotional aspects of the disease.
              Our team of qualified professionals includes psychiatrists, psychologists, sports therapists,
               physicians, and counselors. Our treatment is modeled around the 12-Step program, and we are a Love and Care rehab center. 
            We provide our patients a safe and secure environment to grow as they embark on their journey t
            owards recovery to lead a sober and meaningful life.
            </p>
          </div>
        </div>
        <div className="card">
          <img src={rehab2} alt="Card 2" className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">Guru Kripa Rehab Centre </h5>
            <p className="card-text">
            Our organization’s primary focus is to provide quality care & 
            treatment for the people suffering from various Neuro-Psychological illnesses.

We provide family centered team approach to help people with debilitating illnesses to manage their symptoms, live fully & keep control over their lives.
 We provide total health care solutions to ameliorate the quality of life of not only the patients but their family members also in these chronic illnesses.
            </p>
          </div>
        </div>
        <div className="card">
          <img src={rehab3} alt="Card 3" className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">Lifeline Foundations</h5>
            <p className="card-text">
            Lifeline Foundations is helping the society in its campaign against drug addiction. We are a structured and reputed rehabilitation centre in Chandigarh.
            Our Nasha Mukti Kendra in Chandigarh is fully dedicated to its aim of serving the society with effective health solutions. Likewise, we have adopted unique and advanced drug rehabilitation therapies.
            At Lifeline Foundations, patients will get fully-fledged medical assistance and can get rid of this dreadful evil of drug addiction. Visit us today and start making efforts to get your life as it was earlier.
            Moreover, we also have branches in many other cities like Nasha Mukti Kendra in Patiala, Nasha Mukti Kendra in Jalandhar, and Nasha Mukti Kendra in Ludhiana as well.
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default App;
