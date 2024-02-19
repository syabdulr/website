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
            position="Project Manager and UX/UI Designer"
            company="Alt Ctrl Studios"
            companyLink="https://cabbbagee.itch.io/miniature-nightmares"
            time="Fall 2023 - Present"
            address="Oakville, ON."
            work="Worked on a student project showcased at GDC 2024 in San Francisco. Lead the team to build this game from the ground up and designed workflows and wireframes to illustrate the user experience."
          />

          <Details
            position="Junior UX/UI Designer"
            company="Lighthouse Labs"
            companyLink="https://www.lighthouselabs.ca/"
            time="Summer 2023"
            address="TORONTO, ON."
            work="Developed wireframes and prototypes that successfully communicated design ideas to stakeholders. Led the redesign of a user interface enhancing user experience. Conducted extensive user research, facilitating datadriven design decisions."
          />

          <Details
            position="UX/UI Design Intern"
            company="QuestTechnology Group"
            companyLink="https://www.questrade.com/"
            time="Summer 2022"
            address="Toronto, ON."
            work="Brainstormed and designed compelling user interfaces to improve user experience. Assisted senior UX designers with research tasks and the preparation of user testing sessions. Contributed in enhancing user activity by 17% for the mobile app"
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
