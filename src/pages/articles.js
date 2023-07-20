import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { motion, useMotionValue } from "framer-motion";
import article1 from "../../public/images/articles/Collaboration.jpeg";
import article2 from "../../public/images/articles/LinkedListDataStructure.jpeg";
import article3 from "../../public/images/articles/Cloud5.png";
import article4 from "../../public/images/articles/AnorLondo.png";
import article5 from "../../public/images/articles/AfterHoursSMB.png";
import article6 from "../../public/images/articles/FiniteStateMachine.jpeg";
import article7 from "../../public/images/articles/DataStructures.jpeg";
import article8 from "../../public/images/articles/StackDataStructure.jpeg";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }

  function handleMouseLeave(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }

  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize text-xl font-semibold hover:underline">
        {title}
      </h2>
      <FramerImage
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        ref={imgRef}
        src={img}
        alt={title}
        className="z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden"
      />
    </Link>
  );
};

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-2 rounded-xl flex items-center
        justify-between bg-light text-dark first:mt-0 border border-solid border-dark
        border-r-4 border-b-4 dark:border-light dark:bg-dark dark:text-light
        sm:flex-col
        "
    >
      <MovingImg title={title} img={img} link={link} />
      <span className="text-primary font-semibold pl-4 dark:text-primaryDark sm:self-start sm:pl-0 xs:text-sm">
        {date}
      </span>
    </motion.li>
  );
};

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className="relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl dark:bg-dark dark:border-light">
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark
    rounded-br-3xl
    "
      />
      <Link
        href={link}
        target="_blank"
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2">{summary}</p>
      <span className="text-primary font-semibold dark:text-primaryDark">
        {time}
      </span>
    </li>
  );
};

const articles = () => {
  return (
    <>
      <Head>
        <title>Articles Page</title>
        <meta
          name="description"
          content="Browse through Abdul's collection of articles on web development, React and Next js."
        />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Words Can Change The World!"
            className="mb-16
          lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl
          "
          />
          <ul className="grid grid-cols-2 gap-16 sm:gap-8 md:grid-cols-1 md:gap-y-16">
            <FeaturedArticle
              img={article1}
              title="Unlocking the Power of Pair Programming: Enhancing Learning, Productivity, and Code Quality"
              time="5 min read"
              summary="Learn how to utilize pair programming to enhance your learning, productivity, and code quality."
              link="https://medium.com/@abdulsyed1998/unlocking-the-power-of-pair-programming-enhancing-learning-productivity-and-code-quality-414e3527f29b"
            />

            <FeaturedArticle
              img={article2}
              title="The Linked List Data Structure: A Beginner’s Guide"
              time="10 min read"
              summary="Linked Lists are a fundamental data structure in computer science, serving as building blocks for many more complex structures and algorithms. Whether you’re an active developer or a future one, understanding linked lists is a stepping stone to grasping broader computer science concepts."
              link="https://medium.com/@abdulsyed1998/the-linked-list-data-structure-7adc394c9b19"
            />
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
            All Articles
          </h2>
          <ul className="flex flex-col items-center relative">
            <Article
              title="Stack Data Structure: Implementation and Applications with a Focus on Call Stack"
              date="April 4, 2023"
              img={article8}
              link="https://medium.com/@abdulsyed1998/stack-data-structure-implementation-and-applications-with-a-focus-on-call-stack-78d1975ff1df"
            />
            <Article
              title="Application and Analysis of Tree Data Structures: A Deeper Look into Binary Search Trees"
              img={article7}
              date="March 31, 2023"
              link="https://medium.com/@abdulsyed1998/application-and-analysis-of-tree-data-structures-a-deeper-look-into-binary-search-trees-1376d7f3f99c"
            />
            <Article
              title="Analyzing Design Choices in my Personal Game After Hours vs Super Mario Bros"
              img={article5}
              date="January 29, 2023"
              link="https://medium.com/@abdulsyed1998/retrospective-design-patterns-39f43fd778f0"
            />
            <Article
              title="Level Design Analysis - Dark Souls"
              img={article4}
              date="January 23, 2023"
              link="https://docs.google.com/document/d/1Mpg99YIafp4TawF6hsM3ogMrKxrVlx3TYXskjNCWJsQ/edit?usp=sharing"
            />
            <Article
              title="Finite State Machine - AI Programming in Unity"
              img={article6}
              date="January 17, 2023"
              link="https://medium.com/@abdulsyed1998/ai-programming-creating-a-vibrant-ecosystem-with-tony-bunny-and-peach-618544f5fc"
            />
              <Article
                title="Game Level Design Document for Original Game"
                img={article3}
                date="May 22, 2021"
                link="https://docs.google.com/document/d/1maZWAH4YNOTRdDCP84XFGf2EmEJ5o2--X5fwaZwTHM0/edit?usp=sharing"
              />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default articles;
