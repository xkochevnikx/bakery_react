import React from "react";
import "./SectionMap.css";

const SectionMap = () => {
  return (
    <>
      <div className="maps__box">
        <iframe
          id="maps"
          src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d11697.021448626729!2d74.57094!3d42.867454!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2skg!4v1667106976106!5m2!1sru!2skg"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </>
  );
};

export default SectionMap;
