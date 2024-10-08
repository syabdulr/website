import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
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
            rel="noopener noreferrer"
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
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"]
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top 
          md:w-[2px] md:left-[30px] xs:left-[20px] dark:bg-primaryDark dark:shadow-3xl"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Quality Assurance"
            company="DocTalk"
            companyLink="https://www.doctalk.com/"
            time=""
            address="Toronto, ON"
            work="Developed and executed QA plans with Playwright, including functional, performance, and end-to-end testing. Automated regression tests, integrated them into the CI/CD pipeline, and conducted performance testing to optimize application stability. Collaborated with stakeholders to create detailed test cases and reports, ensuring comprehensive coverage and actionable insights for continuous improvement."
          />

          <Details
            position="Lead Unity QA Engineer"
            company="Alt Ctrl Studios"
            companyLink="https://drive.google.com/file/d/1_p5bsjTKkCSkLx1TQ1BP_DAzQS5EhKuj/view"
            time=""
            address="Oakville, ON"
            work="Developed and executed comprehensive QA tests in Unity for an Augmented Reality game, ensuring smooth performance and gameplay quality for the GDC 2024 showcase in San Francisco. Conducted user testing sessions and collaborated with the development team to refine gameplay mechanics, resulting in a 26% increase in player engagement and a 15% improvement in user experience."
          />

          <Details
            position="Front End QA/Developer Co-Op"
            company="Lighthouse Labs"
            companyLink="https://www.lighthouselabs.ca/"
            time=""
            address="Toronto, ON"
            work="Performed front-end testing and debugging, ensuring the accuracy and functionality of UI components during a major redesign that enhanced user experience."
          />

          <Details
            position="Client Experience Specialist"
            company="QuestTechnology Group"
            companyLink="https://www.questrade.com/home"
            time=""
            address="Toronto, ON"
            work="Managed client interactions and documented issues to ensure quality assurance, tracking and resolving pain points through detailed ticketing."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
