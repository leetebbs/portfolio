import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto mb-6">
        <div className="flex flex-col mt-[-95px] gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[600px] mix-blend-lighten bg-top mb-14"
          ></motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent">About me.</h2>
            <h3 className="h3 mb-4">
              My name is Lee and I'm a Freelance Web3 Developer with over 4
              years of experience.
            </h3>
            <p className="mb-6">
              I have a passion for building decentralized applications and
              bringing innovative solutions to the world of blockchain
              technology. My experience has allowed me to work with a variety of
              clients and projects, from small startups to large-scale
              enterprises.
            </p>
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={4} duration={2} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of <br />
                  Experience
                </div>
              </div>
              {/* <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={3} duration={2}/> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">Years of <br/>
                Experience 
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={3} duration={2}/> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">Years of <br/>
                Experience 
                </div>
              </div> */}
            </div>
            <div className="flex gap-x-8 items-center mb-14">
            <Link to="contact" smooth={true} spy={true}><button className="btn btn-lg">Contact me</button></Link>
            <Link to="work" smooth={true} spy={true}><a href="#" className="text-gradient btn-link">
                My Portfolio
              </a></Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
