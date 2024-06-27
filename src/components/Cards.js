import { motion, useScroll, useSpring } from "framer-motion";
import "../App.css";
import rehab1 from "../assets/rehab1.jpg";
import rehab2 from "../assets/rehab2.jpg";
import rehab3 from "../assets/rehab3.jpg";


function Cards() {
    return (
        <motion.div className="cards-container"initial = {{opacity : 0}}
      whileInView={{opacity : 1}}>
        <motion.div className="card"
        whileHover={{scale : 1.2}}
        whileTap={{scale : 1.1}}>
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
        </motion.div>
        <motion.div className="card"
        whileHover={{scale : 1.2}}
        whileTap={{scale : 1.1}}>
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
        </motion.div>
        <motion.div className="card"
        whileHover={{scale : 1.2}}
        whileTap={{scale  :1.1}}>
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
        </motion.div>
        
        
        
      </motion.div>
    );

}

export default Cards;