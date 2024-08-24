import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Img1 from "../assets/portfolio-img1.png";
import Img2 from "../assets/portfolio-img2.png";
import Img3 from "../assets/portfolio-img5.png";
import Img4 from "../assets/realprop.png";
import Img5 from "../assets/portfolio-img4.png";
import Img6 from "../assets/logoAlianza.png";

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-10"
          >
            <div>
              <h2 className="h2 leading-tight text-accent">
                My Latest <br />
                Work
              </h2>
              <p className="max-w-sm mb-16">
                Decentralized applications (dApps) that offer secure and
                transparent solutions to real-world problems.
              </p>
              <button className="btn btn-sm">View all projects</button>
            </div>
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl mt-[55px]">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img4}
                alt=""
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">NFT Minting</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Realprop.io </span>
              </div>
            </div>
            <div className="flex gap-20 justify-center mt-[-40px]">
              <button className="btn btn-sm">
                <a href="https://github.com/Tebbo-Web-Devs/REALPROP">Code</a>
              </button>
              {/* <button className="btn btn-sm">
                <a href="https://www.realprop.io/en">Live site</a>
              </button> */}
            </div>
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl mt-[55px]">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img6}
                alt=""
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">
                  Chainlink CCIP Hackathon Entry
                </span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Alianza</span>
              </div>
            </div>
            <div className="flex gap-20 justify-center mt-[-40px]">
              <button className="btn btn-sm">
                <a href="https://github.com/leetebbs/Alianza">Code</a>
              </button>
              <button className="btn btn-sm">
                <a href="https://allianz-teal.vercel.app/">Live site</a>
              </button>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-10  lg:gap-y-2"
          >
            {/* <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img5}
                alt=""
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">Block Explorer</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">
                  Ethereum Block Explorer.{" "}
                </span>
              </div>
            </div>
            <div className="flex gap-20 justify-center ">
              <button className="btn btn-sm">
                <a href="https://github.com/leetebbs/Block-Explorer">Code</a>
              </button>
              <button className="btn btn-sm">
                <a href="https://block-explorer-gamma.vercel.app/">Live site</a>
              </button>
            </div> */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img3}
                alt=""
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">NFT Collection</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">BADCR</span>
              </div>
            </div>
            <div className="flex gap-20 justify-center ">
              <button className="btn btn-sm">
                <a href="https://github.com/leetebbs/BADCR">Code</a>
              </button>
              <button className="btn btn-sm">
                <a href="https://badcr.netlify.app/">Live site</a>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
