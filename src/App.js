// App.js
import React, { useState, useEffect } from "react";
import Header from "./components/Header.js";
import "./App.css";
import ReportAbuseForm from "./components/ReportAbuseForm.js";
import Footer from "./components/Footer.js";
import { motion, useScroll, useSpring, useIsPresent, AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import Register from "./components/register.js";
import SuccessStories from "./components/SuccessStories.js";
import Cards from "./components/Cards.js";
import Main from "./components/Main.js";
import GoogleMaps from "./components/GoogleMaps.js";
import BookSession from './components/BookSession.js';
import Home from "./components/Home.js"; 
import SwitchLayout from "./components/SwitchLayout";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Login from "./components/Login.js";
import Registerr from "./components/registeraccount.js";

const App = () => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const location = useLocation();
  const [showPrivacyScreen, setShowPrivacyScreen] = useState(true);
  const isPresent = useIsPresent();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    if (!isSwitchOn) {
      window.scrollTo(0, 0); 
    }
  }, [isSwitchOn]);

  useEffect(() => {
    setShowPrivacyScreen(true);
    const timer = setTimeout(() => setShowPrivacyScreen(false), 500);
    return () => clearTimeout(timer);
  }, [location]);

  if (!isSwitchOn) {
    return <SwitchLayout onSwitch={() => setIsSwitchOn(true)} />;
  }

  return (
    <>
    <Analytics/>
    <SpeedInsights/>
    <motion.div className="app" layout>
      <motion.div className="progress-bar" style={{ scaleX }} />
      <Header />
      {<AnimatePresence>
        {showPrivacyScreen && (
          <motion.div
            initial={{ scaleX: 1 }}
            animate={{ scaleX: 0, transition: { duration: 0.5, ease: "circOut" } }}
            exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }}
            style={{ originX: isPresent ? 0 : 1 }}
            className="privacy-screen"
          />
        )}
      </AnimatePresence>}
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/report" element={<ReportAbuseForm />} />
        <Route path="/success-stories" element={<SuccessStories />} />
        <Route path="/booksession" element={<BookSession />} />
        <Route path="/login" element = {<Login/>}/>
        <Route path="/registeraccount" element = {<Registerr/>}/>
      </Routes>
      <Footer />
    </motion.div>
    </>
  );
};

export default App;
