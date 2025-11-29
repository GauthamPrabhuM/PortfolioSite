import React from "react";
import "./Research.css";

const publications = [
  {
    id: 1,
    title: "QuCardio: Application of Quantum Machine Learning for Detection of Cardiovascular Diseases",
    authors: "S. Prabhu, S. Gupta, G. M. Prabhu, A. V. Dhanuka, K. V. Bhat",
    journal: "IEEE Access (Q1)",
    volume: "vol. 11, pp. 136122–136135, 2023",
    citations: "30+",
    doi: "10.1109/ACCESS.2023.3338145",
    link: "https://ieeexplore.ieee.org/document/10335179",
    highlight: "Q1 Journal • High Impact"
  },
  {
    id: 2,
    title: "Addressing Vaccine Misinformation on Social Media by leveraging Transformers and User Association Dynamics",
    authors: "Rao, C., Prabhu, G.M., Kumar, A.R., Gupta, S., Shetty, N.P.",
    journal: "Procedia Computer Science (ICMLDE 2023)",
    volume: "vol. 235, pp. 1803–1813, 2024",
    citations: null,
    doi: "10.1016/j.procs.2024.04.171",
    link: "https://www.sciencedirect.com/science/article/pii/S1877050924008470",
    highlight: "Conference Proceedings"
  },
  {
    id: 3,
    title: "VIKAS: A Multimodal Framework to Aid in Effective Disaster Management",
    authors: "Prabhu, G.M., Gupta, T., Srujan, M.V., Soumya, A.R., Palorkar, A., Chowdhury, A.",
    journal: "ATIS 2022 — Springer CCIS",
    volume: "vol. 1804, 2023",
    citations: null,
    doi: "10.1007/978-981-99-2264-2_22",
    link: "https://link.springer.com/chapter/10.1007/978-981-99-2264-2_22",
    highlight: "Springer Conference"
  },
  {
    id: 4,
    title: "EyeEncrypt: A Cyber-Secured Framework for Retinal Image Segmentation",
    authors: "Hegde, G., Gupta, S., Prabhu, G.M., Bhandary, S.V.",
    journal: "ATIS 2022 — Springer CCIS",
    volume: "vol. 1804, 2023",
    citations: null,
    doi: "10.1007/978-981-99-2264-2_9",
    link: "https://link.springer.com/chapter/10.1007/978-981-99-2264-2_9",
    highlight: "Springer Conference"
  },
  {
    id: 5,
    title: "SatelTensor: Satellite Data Exploration via Tensor Decomposition",
    authors: "Prabhu, G.M., Gupta, S.",
    journal: "TCML Workshop, Indian Institute of Science (IISc)",
    volume: "Bengaluru, 2023",
    citations: null,
    doi: null,
    link: null,
    highlight: "Workshop Paper"
  },
  {
    id: 6,
    title: "A Systematic Review of Deep Learning Approaches for Vessel Segmentation in Retinal Fundus Images",
    authors: "Hegde, G., Prabhu, S., Gupta, S., Prabhu, G.M., Palorkar, A., Srujan, M.V., Bhandary, S.V.",
    journal: "IOP Journal of Physics: Conference Series",
    volume: "vol. 2571, pp. 012021, 2023",
    citations: null,
    doi: "10.1088/1742-6596/2571/1/012021",
    link: "https://iopscience.iop.org/article/10.1088/1742-6596/2571/1/012021",
    highlight: "Peer-Reviewed"
  }
];

export default function Research(props) {
  return (
    <div className="research_main" id={props.light ? "lightid" : null}>
      <div className="research_header">
        <h2>Research & Publications</h2>
        <p className="research_subtitle">Peer-reviewed publications and research contributions</p>
      </div>
      
      <div className="research_grid">
        {publications.map((pub) => (
          <div key={pub.id} className="research_pub_card">
            <div className="research_card_header">
              <span className="research_badge">{pub.highlight}</span>
            </div>
            
            <h3 className="research_title">{pub.title}</h3>
            
            <p className="research_authors">{pub.authors}</p>
            
            <div className="research_meta">
              <div className="research_journal">{pub.journal}</div>
              <div className="research_volume">{pub.volume}</div>
              {pub.citations && (
                <div className="research_citations">
                  <span className="citations_label">Citations:</span>
                  <span className="citations_count">{pub.citations}</span>
                </div>
              )}
            </div>
            
            <div className="research_footer">
              {pub.doi && (
                <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noreferrer" className="research_doi_link">
                  DOI: {pub.doi}
                </a>
              )}
              {pub.link && (
                <a href={pub.link} target="_blank" rel="noreferrer" className="research_view_btn">
                  View Publication →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
