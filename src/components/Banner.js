import React from "react";
import image from "../assets/tebbo2.png";
import { FaGithub, FaYoutube, FaTwitter, FaLinkedin } from "react-icons/fa";
import { TbBrandFiverr } from "react-icons/tb";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";

const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto ">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading[0.8] lg:text-[90px] mb-10 mt-10"
            >
              LEE <span>TEBBS</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[25px] lg:text-[45px] font-secondary
    font-semibold uppercase leading-[1]"
            >
              <span className="text-white mr-2">I am a </span>
              <TypeAnimation
                sequence={[
                  "Web Developer",
                  2000,
                  "Blockchain Developer",
                  2000,
                  "Solidity Developer",
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Unlock the full potential of blockchain technology with a skilled
              and experienced web3 developer. From smart contract
              development to decentralized app creation, I can help bring your
              web3 project to life.
              <br />
              Hire me as your freelance web3 blockchain developer and let's build
              a decentralized future together.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.8)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <Link to="contact" smooth={true} spy={true}>
                <button className="btn btn-lg">Contact me</button>
              </Link>
              <Link to="work" smooth={true} spy={true}><a href="#" className="text-gradient btn-link">
                My Portfolio
              </a></Link>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.9)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 pb-[60px] max-w-max mx-auto lg:mx-0 "
            >
              <a href="https://github.com/leetebbs">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/tebbo-/">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com/LTebbs2">
                <FaTwitter />
              </a>
              <a href="https://www.fiverr.com/leetebbs/be-your-expert-web3-developer-for-your-blockchain-projects">
                <TbBrandFiverr />
              </a>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            // viewport={{ once: false, amount: 0.7 }}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] mx-auto"
          >
            <img src={image} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
