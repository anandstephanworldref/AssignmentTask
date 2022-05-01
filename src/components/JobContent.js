import React from "react";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ApartmentIcon from "@mui/icons-material/Apartment";
import WbIncandescentIcon from "@mui/icons-material/WbIncandescent";
import Button from "./Button";
const JobContent = () => {
  return (
    <div className="job-content">
      <span className="title">Solidity Developer</span>
      <span className="subTitle">
        GAMI India Remote 1 week ago 56 applicants
      </span>
      <span className="job-type">
        {/* icon */}
        <BusinessCenterIcon />
        Full-time
      </span>
      <span className="emp-count">
        {/* icon */}
        <ApartmentIcon />
        11-50 employees
      </span>
      <span className="recent-hiring">
        {/* icon */}
        <WbIncandescentIcon />
        See recent hiring trends for NirogStreet. Try Premium for free
      </span>
      <span className="buttons">
        <Button
          variant="outlined"
          style={{
            borderRadius: "30px",
            backgroundColor: "#0a66c2",
            color: "white",
          }}
        >
          Easy Apply
        </Button>
        <Button
          style={{
            borderRadius: "30px",
            backgroundColor: "#0a66c2",
            color: "white",
          }}
        >
          Save
        </Button>
      </span>
      <span className="content">
        We are a British gaming company with a development team in Delhi India,
        we are looking to grow our blockchain team by hiring experienced and
        enthusiastic solidity developers who love web3 and who love the gaming
        space.
      </span>
      <span className="requirement">
        <span className="title">Requirements</span>
        <ul>
          {[...Array(15)].map((item, index) => {
            return (
              <li key={index}>
                Experience with Solidity, web3.js, ethers.js with a strong
                understanding of the EVM
              </li>
            );
          })}
        </ul>
      </span>
      <span className="nice-to-have">
        <span className="title">Nice To have</span>
        <ul>
          {[...Array(10)].map((item, index) => {
            return (
              <li key={index}>
                Experience with Solidity, web3.js, ethers.js with a strong
                understanding of the EVM
              </li>
            );
          })}
        </ul>
      </span>
    </div>
  );
};

export default JobContent;
