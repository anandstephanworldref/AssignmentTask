import React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Input from "./Input";
import Button from "./Button";
import useMediaQuery from "@mui/material/useMediaQuery";

import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import BusinessCenterIcon from "@mui/icons-material/Business";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Menubar = () => {
  const matches = useMediaQuery("(min-width:700px");
  const styles = {
    containerPaper: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0px 15%",
      gap: "0.5%",
    },
    mobile: {
      display: "flex",
      alignItems: "center",
      gap: "0.5%",
      padding: "0 2% ",
    },
  };
  return (
    <>
      <Paper style={!matches ? styles.mobile : styles.containerPaper}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="34"
          height="34"
          viewBox="0 0 34 34"
          class="global-nav__logo"
        >
          <title>LinkedIn</title>

          <g>
            <path
              d="M34,2.5v29A2.5,2.5,0,0,1,31.5,34H2.5A2.5,2.5,0,0,1,0,31.5V2.5A2.5,2.5,0,0,1,2.5,0h29A2.5,2.5,0,0,1,34,2.5ZM10,13H5V29h5Zm.45-5.5A2.88,2.88,0,0,0,7.59,4.6H7.5a2.9,2.9,0,0,0,0,5.8h0a2.88,2.88,0,0,0,2.95-2.81ZM29,19.28c0-4.81-3.06-6.68-6.1-6.68a5.7,5.7,0,0,0-5.06,2.58H17.7V13H13V29h5V20.49a3.32,3.32,0,0,1,3-3.58h.19c1.59,0,2.77,1,2.77,3.52V29h5Z"
              fill="currentColor"
            ></path>
          </g>
        </svg>
        {/* search box 1 */}
        {/* search box 2 */}
        {matches ? (
          <>
            <Input />
            <Input isLocation={true} />
          </>
        ) : (
          <></>
        )}
        {/* search button */}
        {matches ? (
          <>
            <Button variant="outlined" style={{ borderRadius: "30px" }}>
              Search
            </Button>
          </>
        ) : (
          <></>
        )}
        {/* set of icons */}

        <ul className="menu-icons">
          <li>
            <HomeIcon />
          </li>
          <li>
            <PeopleIcon />
          </li>
          <li>
            <BusinessCenterIcon />
          </li>
          <li>
            <ChatBubbleIcon />
          </li>
          <li>
            <NotificationsIcon />
          </li>
          <li>
            <AccountCircleIcon />
          </li>
        </ul>
      </Paper>
    </>
  );
};

export default Menubar;
