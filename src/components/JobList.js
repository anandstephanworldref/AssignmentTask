import { Paper } from "@mui/material";
import React from "react";
const styles = {
  height: 30,
  width: 30,
};
const JobList = () => {
  return (
    <>
      <div className="job-list-container">
        <div className="header-sidebar">Jobs based on your Profile</div>
        {[...Array(10)].map((item, index) => {
          return <Job />;
        })}
      </div>
    </>
  );
};

const Job = () => {
  return (
    <div className="job-container">
      <div className="image-container">
        <img
          src="https://media-exp1.licdn.com/dms/image/C4E0BAQHJctJvspRAUQ/company-logo_100_100/0/1645543771108?e=2147483647&v=beta&t=ZkMkCKn8QCLKNzE9ALWIDhPkgjiLbt0nRDz4tIRULNQ"
          alt="company"
        />
      </div>
      <div className="details">
        <span className="title">Solidity Developer</span>

        <span className="company">
          {" "}
          <li-icon
            type="radar-screen-icon"
            class="job-flavors__icon job-flavors__icon--green7"
            size="medium"
            role="img"
            aria-label="Actively recruiting"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              class="mercado-match"
              width="24"
              height="24"
              focusable="false"
            >
              <path d="M12 20a8 8 0 010-16 7.91 7.91 0 014.9 1.69l-1.43 1.42a6 6 0 101.42 1.42l3.82-3.82a1 1 0 000-1.41A1 1 0 0020 3a1 1 0 00-.7.29l-1 1A10 10 0 1022 12h-2a8 8 0 01-8 8zm5-8a5 5 0 11-5-5 4.93 4.93 0 012.76.82l-2.24 2.24A2.24 2.24 0 0012 10a2 2 0 102 2 2.24 2.24 0 00-.07-.51l2.24-2.24A5 5 0 0117 12z"></path>
            </svg>
          </li-icon>
          Gami
        </span>
        <span className="location">India (Remote)</span>
        <span className="location">
          <span className="time">1 week ago</span>
          <span className="time">Easy Apply</span>
        </span>
      </div>
    </div>
  );
};

export default JobList;
