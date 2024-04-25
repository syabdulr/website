import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import { motion } from "framer-motion";
import { LinkArrow, GithubIcon } from "@/components/Icons";
import profilePic from "../../public/images/profile/developer-pic-1.png";
import project1 from "../../public/images/projects/ballup-logo.png";
import project2 from "../../public/images/projects/Jungle.png";
import project3 from "../../public/images/projects/PhotoLabs.png";
import project4 from "../../public/images/projects/Quiz-Bee.png";
import project5 from "../../public/images/projects/AfterHours.png";
import project6 from "../../public/images/projects/Tweeter.png";
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
                <div className="w-2/5 md:w-full">
                  <Image
                    src={profilePic}
                    alt="CodeBucks"
                    className="w-4/5 h-auto lg:hidden md:inline-block md:w-full"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                  />
                </div>
                <div className="w-3/5 flex flex-col items-center self-center lg:w-full lg:text-center">
                  <AnimatedText
                    text="Hey, I'm Abdul!"
                    className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text=6xl md:!text-5xl sm:!text-3xl"
                  />
                  <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                    As a UX/UI Designer with 2 years of experience, I am passionate about understanding people. Striving to improve the lives of others through design.
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
                type="Social Media Application"
                title="BallUp"
                summary="An application designed to help basketball players and enthusiasts find courts near them. The app caters to both non-registered and registered users. While non-registered users can find courts near them, registered users enjoy the privilege of adding new courts, viewing their contributions, and adding comments and addresses."
                summary2="Developed using ReactJS, NextJS, PostgreSQL and TailwindCSS"
                summary3="Deployed on Vercel"
                img={project1}
                link="https://ball-up-deployment.vercel.app/-79.4005188,43.6622882,12"
                github="https://github.com/lighthouse-buddies/BallUP"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Ruby on Rails Website"
                title="Implement Features on Existing Codebase"
                img={project2}
                link="https://github.com/syabdulr/jungle"
                github="https://github.com/syabdulr/jungle"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="React Website"
                title="Photo Media Sharing Website"
                img={project3}
                link="https://github.com/syabdulr/snapshot"
                github="https://github.com/syabdulr/snapshot"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                type="Express Javascript Website"
                title="QuizBee - A Quiz App"
                summary="The Quiz App is a web application that lets you create and share quizzes with your friends. The creator of the quiz can view and share all the results at the end of the quiz."
                summary2="Developed using PostgreSQL, Express, JQuery, and Ajax."
                img={project4}
                link="https://github.com/syabdulr/QuizBee"
                github="https://github.com/syabdulr/QuizBee"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Unity Engine Game Lead Developer"
                img={project5}
                title="After Hours - A 2D Horror Game with a twist"
                link="https://zealf.itch.io/afterhours"
                github="https://zealf.itch.io/afterhours"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Blog Website"
                img={project6}
                title="Tweeter - A Twitter Clone"
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
          <Link href={github} target="_blank" className="w-10"> <GithubIcon /> </Link>
          <Link href={link} target="_blank" className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base">Visit Project</Link>
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
