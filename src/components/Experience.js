import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion"
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">

      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll(
    {
      target: ref,
      offset: ["start end", "center start"]
    }
  )
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">

        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top 
  md:w-[2px] md:left-[30px] xs:left-[20px] dark:bg-primaryDark dark:shadow-3xl
  "  />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Freelance Full Stack Developer"
            company="UpWork"
            companyLink="https://upwork.com"
            time="2023 - Present"
            address="MILTON, ON."
            work="Continuously refining my skills as a Full Stack Developer, I actively seek out new technologies and industry best practices to stay at the forefront of web development trends. This enables me to bring innovative and creative solutions to challenging tasks, finding efficient and elegant ways to solve complex puzzles."
          />

          <Details
            position="UX/UI Designer"
            company="Questrade Technology Group"
            companyLink="https://questrade.com"
            time="Summer 2022"
            address="TORONTO, ON."
            work="Collaborating with stakeholders to improve User Experience through customer feedback, data analysis, problem solving, building vulnerability assessment reports, and actively contributing to Scrum meetings for process improvements."
          />

          <Details
            position="Research Assistant"
            company="Sheridan College"
            companyLink="https://www.sheridancollege.ca/en"
            time="2021-2022"
            address="Oakville, ON."
            work="Collaborated with Dr. Abdul Mustafa in developing a Network Security algorithm to detect malicious content. Captured packets for an Android Lifecycle Project with SOTI as the Industry Partner. Implemented automated malware collection using OpenPhishing and Appium APIs. Verified accuracy with Virus Total API, and developed data visualization tools using Angular and Highcharts."
          />

          <Details
            position="Peer Mentor"
            company="Sheridan College"
            companyLink="https://www.sheridancollege.ca/en"
            time="2020-2021"
            address="Oakville, ON."
            work="Trained students in programming skills and API utilization (OpenPhishing, Appium). Enhance the Game Design Curriculum with AI implementation in Unity Engine. Validated ML algorithm accuracy using Virus Total API and developed data visualization tools with Angular and Highcharts."
          />
          {/* 
          <Details
            position="Research Assistant"
            company="Sheridan College"
            companyLink="https://mit.edu"
            time="Fall 2018"
            address="Massachusetts Ave, Cambridge, MA."
            work="Assisted in teaching a course on computer programming, held office
              hours to help students with assignments, and graded exams and
              assignments."
          />


*/}

        </ul>
      </div>
    </div>
  );
};

export default Experience;
