import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Breadcrumb.css";
import ReactGA from 'react-ga4';

export default function Breadcrumb(props) {
  const location = useLocation();

  const getBreadcrumbs = () => {
    const pathnames = location.pathname.split("/").filter((x) => x);

    const breadcrumbMap = {
      projects: "All Projects",
      skills: "Skills",
      ridecell: "Ridecell",
      apt: "APT",
      santanet: "Santanet",
      pefo: "PEFO",
    };

    const breadcrumbs = [
      { name: "Home", path: "/" },
      ...pathnames.map((value, index) => {
        const path = "/" + pathnames.slice(0, index + 1).join("/");
        const name = breadcrumbMap[value] || value.charAt(0).toUpperCase() + value.slice(1);
        return { name, path };
      }),
    ];

    return breadcrumbs;
  };

  const handleBreadcrumbClick = (name, path) => {
    ReactGA.event('breadcrumb_click', {
      breadcrumb_name: name,
      breadcrumb_path: path,
      timestamp: new Date().toISOString(),
    });
  };

  const breadcrumbs = getBreadcrumbs();

  // Only show breadcrumbs if we're not on the home page
  if (breadcrumbs.length <= 1) {
    return null;
  }

  return (
    <nav className="breadcrumb_nav" id={props.light ? "breadcrumb_light" : null}>
      <div className="breadcrumb_container">
        {breadcrumbs.map((breadcrumb, index) => (
          <div key={index} className="breadcrumb_item">
            {index < breadcrumbs.length - 1 ? (
              <>
                <Link
                  to={breadcrumb.path}
                  className="breadcrumb_link"
                  onClick={() => handleBreadcrumbClick(breadcrumb.name, breadcrumb.path)}
                >
                  {breadcrumb.name}
                </Link>
                <span className="breadcrumb_separator"> / </span>
              </>
            ) : (
              <span className="breadcrumb_current">{breadcrumb.name}</span>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
}
