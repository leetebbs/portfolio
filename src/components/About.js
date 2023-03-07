import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div>
          <div className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"></div>
          <div>
            <h2>About me.</h2>
            <h3>
              I'm a Freelance Web3 Developer with over 3 years of experience.
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              commodi nisi, minima culpa consectetur quisquam fugiat quae qui
              neque soluta eaque laborum modi assumenda ullam ab reprehenderit
              consequatur officiis vel!
            </p>
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
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
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={3} duration={2}/> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">Years of <br/>
                Experience 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
