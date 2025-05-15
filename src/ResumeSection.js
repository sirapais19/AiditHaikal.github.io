import React from "react";

function ResumeSection() {
  return (
    <a
      href="/Aidit_RESUME.pdf"
      download="Aidit_Resume.pdf"
      style={{ textDecoration: "none" }}
    >
      <button type="button">
        Download Resume
      </button>
    </a>
  );
}

export default ResumeSection;