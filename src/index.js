import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import ReactGA from 'react-ga4';

import Main from "./Components/Main/Main";
import SkillsPage from "./Components/SkillsPage/SkillsPage";
import ProjectsPage from "./Components/ProjectsPage/ProjectsPage";
import Ridecell from "./WorkPages/Ridecell/Ridecell";
import Apt from "./WorkPages/APT/Apt";
import Santanet from "./WorkPages/Santanet/Santanet";
import Pefo from "./WorkPages/PEFO/Pefo";

// Initialize Google Analytics with your Measurement ID
const GA_MEASUREMENT_ID = 'G-00HMGHTQSP';
ReactGA.initialize(GA_MEASUREMENT_ID);

// Component to track page views on route changes
function AnalyticsWrapper() {
  const location = useLocation();

  useEffect(() => {
    // Track page view whenever route changes
    ReactGA.send({
      hitType: 'pageview',
      page: location.pathname,
      title: document.title,
    });
  }, [location]);

  return null;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AnalyticsWrapper />
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="skills" element={<SkillsPage />} />
      <Route path="projects" element={<ProjectsPage />} />
      <Route path="ridecell" element={<Ridecell />} />
      <Route path="apt" element={<Apt />} />
      <Route path="santanet" element={<Santanet />} />
      <Route path="pefo" element={<Pefo />} />

      {/* <Route path="teams" element={<Teams />}>
          <Route path=":teamId" element={<Team />} />
          <Route path="new" element={<NewTeamForm />} />
        </Route> */}
    </Routes>
    {/* <Footer/> */}
  </BrowserRouter>
);
