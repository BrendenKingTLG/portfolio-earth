import "./App.css";
import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import Popup from "./components/Popup";
import Sphere from "./components/Sphere";
import {
  BiLogoTailwindCss,
  BiLogoSpringBoot,
  BiLogoFlask,
  BiSolidData,
  BiLogoAws,
  BiCaretDownCircle,
  BiSolidCaretDownCircle,
} from "react-icons/bi";
import { IoLogoReact, IoLogoNodejs } from "react-icons/io5";

import {
  SiNginx,
  SiGrafana,
  SiKibana,
  SiDocker,
  SiKubernetes,
  SiGitlab,
} from "react-icons/si";
import {
  setShowCerts,
  setShowEducation,
  setShowProjects,
  setShowHistory,
  setShowSkills,
} from "./stores/popupSlice";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const [showPop, setShowPop] = useState(true);
  const { showProjects, showHistory, showEducation, showCerts, showSkills } =
    useSelector((store) => store.popup);

  const updateEducation = () => {
    dispatch(setShowEducation());
  };

  const updateProjects = () => {
    dispatch(setShowProjects());
  };

  const updateSkills = () => {
    dispatch(setShowSkills());
  };
  const updateCerts = () => {
    dispatch(setShowCerts());
  };
  const updateHistory = () => {
    dispatch(setShowHistory());
  };
  return (
    <>
      <Canvas dpr={2}>
        <ambientLight intensity={10} />
        <pointLight intensity={0.7} position={[0, 0, 0]} />
        <Sphere />
        <OrbitControls enableZoom={false} enableRotate={true} />
      </Canvas>
      {showHistory ? (
        <Popup
          show={true}
          title={"History"}
          cmd={updateHistory}
          body={
            <span className="text-sm">
              <span className="mb-2 block">
                <strong>
                  Amazon, AWS Software Development Engineer, July 2022 - Present
                </strong>
              </span>
              <span className="ml-6 mb-2 block">
                Devised and executed an innovative solution to resolve a
                persistent job-sticking issue, resulting in annual savings of
                over $5400 and freeing up more than 20 development hours per
                month
              </span>
              <span className="ml-6 mb-2 block">
                Improved operational oversight by onboarding Grafana (data
                visualization tool) which led to increased insights and
                discovery of 10+ system anomalies.
              </span>
              <span className="mb-2 block">
                <strong>
                  Apex Systems, AWS Solutions Architect Intern, January 2022 –
                  April 2022
                </strong>
              </span>
              <span className="ml-6 mb-2 block">
                Developed a custom AWS Lambda function, automating a critical
                business process, resulting in increased efficiency and reduced
                manual effort.
              </span>
              <span className="ml-6 mb-2 block">
                Constructed a user-friendly web application utilizing various
                AWS services, including EC2, S3, and RDS, delivering a seamless
                user experience
              </span>
              <span className="mb-2 block">
                <strong>
                  Space Force, Satellite System Operator, October 2018 – October
                  2022
                </strong>
              </span>
              <span className="ml-6 mb-2 block">
                Managed the responsibility for all technical aspects of
                satellite equipment installation, operations, configuration, and
                alignment to keep lines of communication up and running.
              </span>
              <span className="ml-6 mb-2 block">
                Enhanced employee engagement by developing OJT training material
                and taught 30+ new operators.
              </span>
              <span className="ml-6 mb-2 block">
                Resolved multiple on-orbit anomalies as well as maintained
                kinetic operations and refugee evacuation efforts in the Middle
                East.
              </span>
            </span>
          }
        />
      ) : null}
      {showEducation ? (
        <Popup
          show={true}
          title={"Education"}
          cmd={updateEducation}
          body={
            <span>
              <strong>Virginia Tech, 4.0 GPA, Est Grad May 2025</strong>
              <br />
              <strong>
                Masters in Computer Science – Secure Software, Full-Stack Web
                Development, OOP/OOD
              </strong>
              <br />
              <br />
              <strong>Western Governors University, 3.89 GPA, July 2022</strong>
              <br />
              <strong>
                Bachelor of Information Technology – Cloud Computing, Database
                Management, and Network Analysis
              </strong>
              <br />
              <br />
              <strong>Associate of Space Operations</strong>
              <br />
              <strong>
                Community College of the Air Force, 4.0 GPA, May 2021
              </strong>
              <br />
              <strong>
                Developed fundamentals for Orbital Mechanics, 3-D Modeling, Heat
                Transfer, and Sys Controls.
              </strong>
            </span>
          }
        />
      ) : null}
      {showPop ? (
        <Popup
          show={true}
          title={"Hey There, I am Brenden King"}
          body={"Please click around the globe to learn more about me!"}
        />
      ) : null}
      {showCerts ? (
        <Popup
          show={true}
          cmd={updateCerts}
          title={"Certifications"}
          body={
            <ul className="list-disc">
              <li className="mb-2">CompTIA Network+</li>
              <li className="mb-2">CompTIA Security+</li>
              <li className="mb-2">CompTIA CYSA+</li>
              <li className="mb-2">CompTIA Project+</li>
              <li className="mb-2">ITIL v4 Foundations</li>
              <li className="mb-2">LPI Linux Essentials</li>
            </ul>
          }
        />
      ) : null}

      {showProjects ? (
        <Popup
          show={true}
          cmd={updateProjects}
          title={"Projects"}
          body={
            <div className=" text-black" id="projects">
              <h2 className=" text-4xl text-center py-3">Projects</h2>
              <div className="flex justify-center align-center flex-col gap-3 items-center sm:flex-row">
                <a
                  className="border-2 border-stone-400 w-60 h-80 overflow-hidden flex justify-center items-center flex-col"
                  href="https://brendenkingtlg.github.io/examplecompanyapp/"
                >
                  <img
                    src="/company-app.png"
                    alt="Image of Brenden King"
                    width={200}
                    height={150}
                    className=""
                  />
                  <p>Example Company App</p>
                </a>
                <a
                  className="border-2 border-stone-400 w-60 h-80 overflow-hidden flex justify-center items-center flex-col"
                  href="https://github.com/BrendenKingTLG/flask-api"
                >
                  <img
                    src="/python-app.png"
                    alt="Image of Brenden King"
                    width={150}
                    height={150}
                    className=""
                  />
                  <p>Flask API with web view</p>
                </a>
                <a
                  className="border-2 border-stone-400 w-60 h-80 overflow-hidden flex justify-center items-center flex-col"
                  href="https://bookstore-fo9w.onrender.com/bookstore/"
                >
                  <img
                    src="/java.png"
                    alt="Image of Brenden King"
                    width={350}
                    height={150}
                    className=""
                  />
                  <p>Java Servlet API</p>
                </a>
              </div>
            </div>
          }
        />
      ) : null}

      {showSkills ? (
        <Popup
          show={true}
          title={"Skills"}
          cmd={updateSkills}
          body={
            <div>
              <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-3 bg-white text-black">
                <h2 className=" text-4xl text-center">Skills</h2>
                <h2 className="text-center pt-6 text-lg font-semibold leading-8 text-gray-900 border-0">
                  Full Stack Development
                </h2>
                <div className="mx-auto my-5 grid grid-cols-3 items-center gap-8 justify-items-center">
                  <IoLogoReact size={50} />
                  <IoLogoNodejs size={50} />
                  <BiLogoFlask size={50} />
                  <BiLogoSpringBoot size={50} />
                  <BiLogoTailwindCss size={50} />
                  <BiSolidData size={50} />
                </div>
              </div>
              <div className="mx-auto max-w-7xl px-6 lg:px-8 py-3 bg-white text-black">
                <h2 className="text-center text-lg font-semibold leading-8">
                  Systems and Server Management/Architecture
                </h2>
                <div className="mx-auto my-5 grid grid-cols-3 items-center gap-8 justify-items-center">
                  <SiDocker size={50} />
                  <SiGitlab size={50} />
                  <SiGrafana size={50} />
                  <SiKubernetes size={50} />
                  <SiKibana size={50} />
                  <BiLogoAws size={50} />
                </div>
              </div>
            </div>
          }
        />
      ) : null}
    </>
  );
}

export default App;
