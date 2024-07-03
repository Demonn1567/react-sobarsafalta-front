import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import "../App.css";
import rehab1 from "../assets/rehab1.jpg";
import rehab2 from "../assets/rehab2.jpg";
import rehab3 from "../assets/rehab3.jpg";
import rehab4 from "../assets/rehab4.jpeg"; // Ensure this import is correct

const cards = [
  {
    img: rehab1,
    title: "Simran Shri Rehab Centre",
    text: "Simran Shri Rehabilitation Centre was established with the aim of changing the lives of the people who suffer from addiction. The aim is to create a society which is free from any kind of addictions and its ill effects. Through a holistic approach, we address the physical, mental, and emotional aspects of the disease. Our team of qualified professionals includes psychiatrists, psychologists, sports therapists, physicians, and counselors. Our treatment is modeled around the 12-Step program, and we are a Love and Care rehab center. We provide our patients a safe and secure environment to grow as they embark on their journey towards recovery to lead a sober and meaningful life.",
  },
  {
    img: rehab2,
    title: "Guru Kripa Rehab Centre",
    text: "Our organization's primary focus is to provide quality care & treatment for the people suffering from various Neuro-Psychological illnesses. We provide family-centered team approach to help people with debilitating illnesses to manage their symptoms, live fully & keep control over their lives. We provide total health care solutions to ameliorate the quality of life of not only the patients but their family members also in these chronic illnesses.",
  },
  {
    img: rehab3,
    title: "Lifeline Foundations",
    text: "Lifeline Foundations is helping the society in its campaign against drug addiction. We are a structured and reputed rehabilitation centre in Chandigarh. Our Nasha Mukti Kendra in Chandigarh is fully dedicated to its aim of serving the society with effective health solutions. Likewise, we have adopted unique and advanced drug rehabilitation therapies. At Lifeline Foundations, patients will get fully-fledged medical assistance and can get rid of this dreadful evil of drug addiction. Visit us today and start making efforts to get your life as it was earlier. Moreover, we also have branches in many other cities like Nasha Mukti Kendra in Patiala, Nasha Mukti Kendra in Jalandhar, and Nasha Mukti Kendra in Ludhiana as well.",
  },
  {
    img: rehab4,
    title: "AAS Rehab Centre",
    text: "AAS - The Rehabilitation Centre is premier state of the art rehabilitation centre that was established in 2014. In the years since its establishment, we have successfully treated over 800 patients in past 7 years. We have built our name in the field of patient care, rehabilitation programmes and world class facilities.",
  },
];

function Cards() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
          ease: "linear",
        },
      },
    });
  }, [controls]);

  return (
    <motion.div
      className="cards-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className="cards-wrapper"
        animate={controls}
      >
        {cards.concat(cards).map((card, index) => (
          <motion.div
            key={index}
            className="card"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 1.1 }}
          >
            <img src={card.img} alt={`Card ${index + 1}`} className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">{card.title}</h5>
              <p className="card-text">{card.text}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Cards;
