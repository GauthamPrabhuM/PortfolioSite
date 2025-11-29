import React from "react";
import "./PositionsOfResponsibility.css";
import { FaRocket, FaUsers, FaStar } from "react-icons/fa";

export default function PositionsOfResponsibility(props) {
  const positions = [
    {
      id: 1,
      title: "Co-Founder & Technical Head",
      organization: "Project Kalpana",
      duration: "Dec 2022 - Sep 2023",
      icon: <FaRocket />,
      description:
        "Built an affordable radio astronomy platform to make hands-on radio observation accessible to undergraduate students. Led hardware and software development, including signal acquisition and processing using GNU Radio and SDR modules. Secured $13,000 institutional grant for equipment and research.",
      impact: [
        "Designed affordable telescope automation systems",
        "Led technical implementation and mentorship",
        "Secured major institutional funding"
      ]
    },
    {
      id: 2,
      title: "General Secretary & Treasurer",
      organization: "ACM Student Chapter, Manipal",
      duration: "Aug 2022 - Aug 2023",
      icon: <FaUsers />,
      description:
        "Led a student organization of 200+ active members across multiple computing domains. Organized 15+ workshops and events on machine learning, cloud computing, and competitive programming. Managed annual funding, sponsorships, and operational logistics.",
      impact: [
        "Managed 200+ member organization",
        "Organized 15+ technical workshops",
        "Handled budget and sponsorships"
      ]
    },
    {
      id: 3,
      title: "Technical Head",
      organization: "Astronomy Club of Manipal",
      duration: "Sep 2022 - Sep 2023",
      icon: <FaStar />,
      description:
        "Led technical initiatives including telescope automation, astrophotography workflows, and Raspberry Pi–based control systems. Conducted stargazing sessions and hands-on workshops on image stacking, calibration, and data analysis. Mentored students and coordinated observation setups for celestial events.",
      impact: [
        "Automated telescope control systems",
        "Conducted astrophotography workshops",
        "Led campus astronomy outreach"
      ]
    }
  ];

  return (
    <div className="positions_main" id={props.light ? "lightid" : null}>
      <div className="positions_header" id="positions">
        <h2>Leadership & Positions of Responsibility</h2>
        <p className="positions_subtitle">
          Building teams, leading initiatives, and driving impact
        </p>
      </div>

      <div className="positions_grid">
        {positions.map((position) => (
          <div key={position.id} className="position_card">
            <div className="position_icon_wrapper">{position.icon}</div>

            <div className="position_top">
              <h3 className="position_title">{position.title}</h3>
              <p className="position_org">{position.organization}</p>
              <p className="position_duration">📅 {position.duration}</p>
            </div>

            <p className="position_description">{position.description}</p>

            <div className="position_impact">
              <h4 className="impact_title">Key Achievements</h4>
              <ul className="impact_list">
                {position.impact.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
