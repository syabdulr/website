import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import { motion } from "framer-motion";
import { LinkArrow, GithubIcon } from "@/components/Icons";
import profilePic from "../../public/images/profile/developer-pic-1.png";
import project1 from "../../public/images/projects/gameLogo.png";
import project2 from "../../public/images/projects/Jungle.png";
import project3 from "../../public/images/projects/PhotoLabs.png";
import project4 from "../../public/images/projects/Quiz-Bee.png";
import project5 from "../../public/images/projects/AfterHours.png";
import project6 from "../../public/images/projects/Tweeter.png";
import project7 from "../../public/images/projects/ballup-logo.png"
import project8 from "../../public/images/projects/design_thinking_journal.png"
import AnimatedText from "@/components/AnimatedText";

const FramerImage = motion(Image);

const Home = () => {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 -mt-14 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <div className="flex items-center justify-between w-full lg:flex-col">
                <div className="w-3/5 flex flex-col items-center self-center lg:w-full lg:text-center">
                  <AnimatedText
                    text="Hey, I'm Abdul!"
                    className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text=6xl md:!text-5xl sm:!text-3xl"
                  />
                  <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                  I’m a multidisciplinary designer who blends skills from <strong>UX/UI</strong>, <strong>technical prototyping</strong>, <strong>game design</strong>, and <strong>programming</strong>. It’s my mission to create delightful & memorable user experiences.
                  </p>
                  <div className="flex items-center self-start mt-2 lg:self-center">
                    <Link
                      href="/resume.pdf"
                      target={"_blank"}
                      className="flex items-center bg-dark text-light p-2.5 px-6
                      rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                      border-2 border-solid border-transparent hover:border-dark
                      dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
                      hover:dark:border-light md:p-2 md:px-4 md:text-base"
                      download={true}
                    >
                      Resume <LinkArrow className={"w-6 ml-1"} />
                    </Link>
                    <Link
                      href="mailto:abdulsyed1998@gmail.com"
                      target={"_blank"}
                      className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
                    >
                      Contact
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12">
              <FeaturedProject
                type="Alt Ctrl Game"
                title="Miniature Nightmares"
                summary="Miniature Nightmares is a 1v1 player versus player (PvP) game set in a physical house diorama, where Arduino is utilized as the controller. The digital game, constructed with the Unity Engine, features one player assuming the role of the monster, while the other player takes on the role of the human."
                summary2="Project Manager and Lead UX/UI Designer"
                summary3="GDC 2024 Finalist, Level Up 2nd Place Innovative Technology"
                img={project1}
                link="https://cabbbagee.itch.io/miniature-nightmares"
                github="https://cabbbagee.itch.io/miniature-nightmares"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Unity Game"
                title="After Hours - Role: UX Designer"
                img={project5}
                link="https://drive.google.com/file/d/12JLaN54dRvWo3p2iclywi0DuF8U1VfHk/view?usp=sharing"
                github="https://zealf.itch.io/afterhours"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Social Networking Game"
                title="BallUp - Role: Lead UX Designer"
                img={project7}
                link="https://ball-up-deployment.vercel.app/-79.4005188,43.6622882,12"
                github="https://github.com/lighthouse-buddies/BallUP"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Educational Game"
                img={project4}
                title="QuizBee - Education Gamified"
                link="https://drive.google.com/drive/folders/1Wp8ie31hZoCC_3R9a3eifQX1ur74T7X8"
                github="https://github.com/syabdulr/QuizBee"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Personal Journal"
                img={project8}
                title="Design Thinking"
                link="https://github.com/syabdulr/tweeter"
                github="https://github.com/syabdulr/tweeter"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

const FeaturedProject = ({ type, title, summary, summary2, summary3, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
      <Link href={github} target="_blank" className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full">
        <FramerImage src={img} alt={title} className="w-full h-auto" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }} priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw" />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">{type}</span>
        <Link href={link} target="_blank" className="hover:underline underline-offset-2">
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light lg:text-3xl xs:text-2xl">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">{summary}</p>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">{summary2}</p>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">{summary3}</p>
        <div className="mt-2 flex items-center">
          <Link href="mini_night_infograph.png" target="_blank" className="ml-0 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base">My Work</Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
      <Link href={github} target="_blank" className="w-full cursor-pointer overflow-hidden rounded-lg">
        <FramerImage src={img} alt={title} className="w-full h-auto" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }} />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">{type}</span>
        <Link href={link} target="_blank" className="hover:underline underline-offset-2">
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">{title}</h2>
        </Link>
        <div className="w-full flex items-center justify-between">
          <Link href={link} target="_blank" className="text-lg font-semibold underline md:text-base">Visit</Link>
          <Link href={github} target="_blank" className="w-8 md:w-6"> <GithubIcon /> </Link>
        </div>
      </div>
    </article>
  );
};

export default Home;
