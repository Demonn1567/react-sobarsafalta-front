import manImage from "../assets/manfree.png";
import { motion } from "framer-motion";
import "../App.css"
import { Link } from "react-router-dom";

function Main() {
    return (
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
            <Link to = "/booksession" className="test-button">
            Book a Session
            </Link>
          </div>
        </div>
        <div className="right-section">
          <motion.img src={manImage} alt="Man" className="man-image" width={80} height={0} 
          whileFocus={{scale:0.5}}
          whileHover={{scale:0.8}}
          whileTap={{scale : 0.5}} whileDrag={{scale : 0.9}}/>
        </div>
      </div>
    );
}

export default Main;