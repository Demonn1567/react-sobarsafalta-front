import { motion } from "framer-motion";
import "../App.css";


function GoogleMaps() {
    return (
        <motion.div className="blue-box"
      initial = {{opacity : 0}}
      whileInView={{opacity : 1}}>
        <div className="blue-box-left">
          <iframe
            src="https://www.google.com/maps/d/embed?mid=16mQo8nbhZvRHfq58WJbwzrqZH1Do038&hl=en&ehbc=2E312F"
            width="700"
            height="500"
          ></iframe>
        </div>
        <div className="blue-box-right">
            <motion.div className="card card-blue-lorem"
            whileHover={{scale : 1.2}}
            whileTap={{scale : 1.1}}>
              <h5></h5>
              <p>
              Our website seamlessly integrates Google Maps to provide users with an intuitive way to locate nearby rehab centers.
               Leveraging the power of Google Maps API,
                users can easily visualize the proximity of rehabilitation facilities within their vicinity
                . Through geocoding, addresses are converted into map coordinates, ensuring precise placement of markers.
                 
                   
              </p>
            </motion.div>
          </div>
      </motion.div>
    );
}

export default GoogleMaps;