import React from "react";
import JobList from "./JobList";
import JobContent from "./JobContent";
import { useMediaQuery } from "@mui/material";

const Sidebar = () => {
  const matches = useMediaQuery("(min-width:700px");
  return (
    <div style={matches ? { display: "flex" } : {}}>
      <JobList />
      <JobContent />
    </div>
  );
};

export default Sidebar;
