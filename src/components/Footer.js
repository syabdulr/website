import Link from "next/link";
import React from "react";
import Layout from "./Layout";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base">
      <Layout className="py-8 flex flex-col items-center justify-center lg:flex-col lg:py-6">
        <span>
          {new Date().getFullYear()} &copy; Built With{" "}
          <span className="text-primary dark:text-primaryDark text-2xl px-1">&#9825;</span>
          by&nbsp;
          <Link
            href="https://github.com/syabdulr"
            className="underline underline-offset-2"
            target={"_blank"}
          >
            Abdul
          </Link>
        </span>
      </Layout>
    </footer>
  );
};

export default Footer;
