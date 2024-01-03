import { IoLogoReact, IoLogoNodejs } from "react-icons/io5";
import {
  BiLogoTailwindCss,
  BiLogoSpringBoot,
  BiLogoFlask,
  BiSolidData,
  BiLogoAws,
} from "react-icons/bi";
import {
  SiGrafana,
  SiKibana,
  SiDocker,
  SiKubernetes,
  SiGitlab,
} from "react-icons/si";
import img from "../assets/java.png";
import img1 from "../assets/company-app.png";
import img2 from "../assets/python-app.png";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";
SwiperCore.use([Autoplay]);

export default function About() {
  // const [educationMenuOpen, setEducationMenuOpen] = useState(false);
  // const [experienceMenuOpen, setExperienceMenuOpen] = useState(false);
  // const [certMenuOpen, setCertMenuOpen] = useState(false);

  return (
    <div className="lg:px-40">
      <div className="hero min-h-fit">
        <div className="hero-content flex-col w-max">
          <div className="flex justify-center items-center flex-col gap-10">
            <img
              src="/Brenden.jpeg"
              alt="img of Brenden King"
              width={200}
              height={150}
              className="rounded-full"
            />
            <div className="flex gap-5">
              <h2 className="text-xl font-bold">Developer</h2>
              <h2 className="text-xl font-bold">Architect</h2>
              <h2 className="text-xl font-bold">Maintainer</h2>
            </div>
          </div>
        </div>
      </div>
      <div id="about" className="flex justify-center px-8 py-3 text-lg">
        <p>
          As a Mid-Level Software Developer at aqua IT, I work with a team of
          talented engineers to design, develop, and deploy innovative web
          applications for various clients and industries. I use my skills in
          Java, Python, JavaScript, Angular, Mongoose, and AWS to create
          user-friendly, secure, and scalable solutions that meet the business
          and technical requirements.
        </p>
      </div>
      <div id="skills" className="">
        <h2 className="text-2xl text-center py-5">Skills</h2>
        <Swiper
          slidesPerView={3}
          loop={true}
          allowTouchMove={false}
          autoplay={{
            delay: 500,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
          }}
          speed={2000}
        >
          <SwiperSlide>
            <div className="flex flex-col justify-center items-center">
              <IoLogoReact className="text-6xl" />
              <p>React</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col justify-center items-center">
              <IoLogoNodejs className="text-6xl" />
              <p>Node.js</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col justify-center items-center">
              <BiLogoTailwindCss className="text-6xl" />
              <p>Tailwind CSS</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col justify-center items-center">
              <BiLogoSpringBoot className="text-6xl" />
              <p>Spring Boot</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col justify-center items-center">
              <BiLogoFlask className="text-6xl" />
              <p>Flask</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col justify-center items-center">
              <BiSolidData className="text-6xl" />
              <p>Data</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col justify-center items-center">
              <BiLogoAws className="text-6xl" />
              <p>AWS</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col justify-center items-center">
              <SiGrafana className="text-6xl" />
              <p>Grafana</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col justify-center items-center">
              <SiKibana className="text-6xl" />
              <p>Kibana</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col justify-center items-center">
              <SiDocker className="text-6xl" />
              <p>Docker</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col justify-center items-center">
              <SiKubernetes className="text-6xl" />
              <p>Kubernetes</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex-col flex justify-center items-center">
              <SiGitlab className="text-6xl" />
              <p>GitLab</p>
            </div>{" "}
          </SwiperSlide>
        </Swiper>
        <div id="certs">
          <h2 className="text-center text-2xl py-5">Certs</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 px-8">
            <div className="btn">
              <div className="badge">Network+</div>
            </div>
            <div className="btn">
              <div className="badge">Security+</div>
            </div>
            <div className="btn">
              <div className="badge">CYSA+</div>
            </div>
            <div className="btn">
              <div className="badge">Project+</div>
            </div>
            <div className="btn">
              <div className="badge">ITIL v4 Foundations</div>
            </div>
            <div className="btn">
              <div className="badge">LPI Linux Essentials</div>
            </div>
            <div className="btn">
              <div className="badge">AWS Solutions Architect</div>
            </div>
          </div>
        </div>
      </div>
      <div id="education" className="px-3 pt-3">
        <h2 className="text-center text-2xl py-5">Education</h2>
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          <li>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start md:text-end mb-10">
              <time className="font-mono italic">2019</time>
              <div className="text-lg font-black">
                Associate of Space Operations
              </div>
              Developed fundamentals for Orbital Mechanics, 3-D modeling, Heat
              Transfer, and Sys Controls.
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end mb-10">
              <time className="font-mono italic">2022</time>
              <div className="text-lg font-black">
                Bachelor of Information Technology
              </div>
              Cloud Computing, Database Management, and Network Analysis
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start md:text-end mb-10">
              <time className="font-mono italic">2024</time>
              <div className="text-lg font-black">
                Masters in Computer Science
              </div>
              Secure Software, Full-Stack Web Development, OOP/OOD
            </div>
            <hr />
          </li>
        </ul>
      </div>
      <div id="experience">
        <h2 className="text-2xl text-center py-5">Experience</h2>
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" checked="checked" />
          <div className="collapse-title text-xl font-medium">
            Aqua-IT Software Developer
          </div>
          <div className="collapse-content">
            <ul>
              <li>
                Successfully migrated five key applications to OpenShift,
                enhancing the scalability and reliability of services, which led
                to a more agile and efficient project delivery process.
              </li>
              <li>
                Leveraged OpenShift's containerization technology, improving
                application performance and environment consistency, thus
                providing a more robust and responsive customer support
                experience.
              </li>
              <li>
                Implemented automated deployment pipelines in OpenShift for all
                five applications, significantly reducing deployment times and
                manual errors, and enabling faster feature rollouts and updates
                in response to customer feedback.
              </li>
            </ul>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            AWS Software Development Engineer
          </div>
          <div className="collapse-content">
            <ul>
              <li>
                Devised and executed an innovative solution to resolve a
                persistent job-sticking issue, resulting in annual savings of
                over $5400 and freeing up more than 20 development hours per
                month
              </li>
              <li>
                Led CI/CD automation for three enterprise level services,
                reduced new domain build workload by 73% saving 60,000+ in
                yearly revenue.
              </li>
              <li>
                Increased software security by developing code test coverage to
                at least 90%
              </li>
              <li>
                Improved operational oversight by onboarding Grafana (data
                visualization tool) which led to increased insights and
                discovery of 10+ system anomalies.
              </li>
            </ul>{" "}
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            Cloud Engineer Intern
          </div>
          <div className="collapse-content">
            <ul>
              <li>
                Developed a custom AWS Lambda function, automating a critical
                business process, resulting in increased efficiency and reduced
                manual effort.
              </li>
              <li>
                Constructed a user-friendly web application utilizing various
                AWS services, including EC2, S3, and RDS, delivering a seamless
                user experience
              </li>
              <li>
                Created a streamlined pipeline using CodePipeline and CodeBuild,
                enabling efficient code deployment and continuous integration,
                ultimately improving the development process.
              </li>
            </ul>{" "}
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            USSF Satellite System Operator
          </div>
          <div className="collapse-content">
            <ul>
              <li>
                Managed the responsibility for all technical aspects of
                satellite equipment installation, operations, configuration, and
                alignment to keep lines of communication up and running.
              </li>
              <li>
                Improved efficiency by assisting as an operational instructor.
              </li>
              <li>
                Enhanced employee engagement by developing OJT training material
                and taught 30+ new operators.
              </li>
              <li>
                Increased operational tempo by 30% by overseeing and improving
                several checklists.
              </li>
              <li>
                Resolved multiple on-orbit anomalies as well as maintained
                kinetic operations and refugee evacuation efforts in the Middle
                East.
              </li>
            </ul>{" "}
          </div>
        </div>
      </div>
      <div id="projects">
        <h2 className="text-2xl text-center py-5">Projects</h2>
        <div className=" gap-10 flex flex-col lg:flex-row pb-10">
          <div className="card w-96  h-96 bg-base-100 shadow-xl image-full">
            <figure>
              <img src={img2} alt="img of Brenden King" className="" />
            </figure>
            <div className="card-body flex justify-center flex-col items-center gap-10">
              <h2 className="card-title text-4xl text-white">Flask App</h2>
              <div className="card-actions justify-end">
                <a
                  className="btn btn-primary text-white"
                  href="https://github.com/BrendenKingTLG/flask-api"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit
                </a>
              </div>
            </div>
          </div>
          <div className="card w-96  h-96 bg-base-100 shadow-xl image-full">
            <figure>
              <img src={img1} alt="img of Brenden King" className="" />
            </figure>
            <div className="card-body flex justify-center flex-col items-center gap-10 pb-5">
              <h2 className="card-title text-4xl text-white">
                Geo Company App
              </h2>
              <div className="card-actions justify-end">
                <a
                  className="btn btn-primary text-white"
                  href="https://brendenkingtlg.github.io/examplecompanyapp/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit
                </a>
              </div>
            </div>
          </div>
          <div className="card w-96 h-96 bg-base-100 shadow-xl image-full">
            <figure>
              <img src={img} alt="img of Brenden King" className="" />
            </figure>
            <div className="card-body flex justify-center flex-col items-center gap-10">
              <h2 className="card-title text-4xl text-white">
                Java Servlet API
              </h2>
              <div className="card-actions justify-end">
                <a
                  className="btn btn-primary text-white"
                  href="https://bookstore-fo9w.onrender.com/bookstore/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
