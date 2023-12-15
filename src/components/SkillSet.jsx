import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoJquery } from "react-icons/bi";
import { SiMongodb } from "react-icons/si";
import { DiBootstrap } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa6";
import { SiCsharp } from "react-icons/si";
import { SiDotnet } from "react-icons/si";
import { SiFirebase } from "react-icons/si";


export default function SkillSet() {
  return (
    <div id="skills" className="section-margin-padding">
      <div className="container">
        <h2 className="text-center text-e0e0e0 h2 pb-2">Skill set</h2>
        <div className="row">
          <div className="col-6 col-md-3">
            <div className="card">
              <div className="card-body">
                <SiDotnet className='dotnet skill-icon' />
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="card">
              <div className="card-body">
                <SiCsharp className='csharp skill-icon' />
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="card">
              <div className="card-body">
                <FaHtml5 className='html skill-icon' />
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="card">
              <div className="card-body">
                <FaCss3 className='css skill-icon' />
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="card">
              <div className="card-body">
                <IoLogoJavascript className='js skill-icon' />
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="card">
              <div className="card-body">
                <BiLogoJquery className='jquery skill-icon' />
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="card">
              <div className="card-body">
                <SiFirebase className='firebase skill-icon' />
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="card">
              <div className="card-body">
                <SiMongodb className='mongodb skill-icon' />
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="card">
              <div className="card-body px-2 py-3">
                <img
                  src={require("../img/mysql.png")}
                  className="b-img"
                  alt="alt"
                  height="60"
                  width="88"
                />
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="card">
              <div className="card-body bootstrap-card">
                <DiBootstrap className='bootstrap skill-icon' />
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="card">
              <div className="card-body">
                <FaReact className='react skill-icon' />
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="card">
              <div className="card-body">
                <FaNode className='node skill-icon' />
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="card">
              <div className="card-body p-3">
                {/* <FaJenkins className='jenkins skill-icon' /> */}
                {/* <Jenkins className="img-fluid"/> */}
                <img
                    src={require("../img/jenkins.png")}
                    className="b-img"
                    alt="firebase"
                  />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

