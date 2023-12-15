import React from "react";
import { FaBloggerB } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { FaPhone, FaLinkedin } from "react-icons/fa";


export default function Footer() {
  return (
    <div className="container-fluid section-margin-padding bg-theme" id="contact">
      <h2 className="text-center text-e0e0e0 h2 pb-54">Contact Me</h2>
      <div className="text-center">
        <div className="s-icon d-inline-block mt-5 mt-md-0 blogger">
          <a href="https://anewbieprogrammer.blogspot.com/" target="_blank" rel="noopener noreferrer" aria-label="blogger icon">
            <FaBloggerB />
          </a>
        </div>
        <div className="s-icon d-inline-block mt-5 mt-md-0 github">
          <a href="https://github.com/atmanad" target="_blank" rel="noopener noreferrer" aria-label="github icon">
            <FaGithub />
          </a>
        </div>
        <div className="s-icon li d-inline-block mt-5 mt-md-0">
          <a
            href="https://www.linkedin.com/in/atmanad/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="linkedin icon"            >
            <FaLinkedin />
          </a>
        </div>
        <div className="s-icon phone d-inline-block mt-5 mt-md-0">
          <a href="tel:7008635343" aria-label="phone icon">
            <FaPhone />
          </a>
        </div>
        <div className="s-icon mail d-inline-block mt-5 mt-md-0">
          <a href="mailto:atmanad0001@gmail.com" aria-label="mail icon">
            <BiLogoGmail />
          </a>
        </div>
      </div>
    </div>
  );
}

