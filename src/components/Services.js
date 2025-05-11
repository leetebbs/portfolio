import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Outlet, Link } from "react-router-dom";

const services = [
  {
    id: 1,
    name: "Web Development",
    description:
      "Responsive websites built in react / next js from your designs.",
    link: "Learn More",
    url: "development",
  },
  {
    id: 2,
    name: "Dapp Development",
    description:
      "Decentralised Application development for any EVM chain.",
    link: "Learn More",
    url: "https://github.com/leetebbs/",
  },
  {
    id: 3,
    name: "Smart Contract Development",
    description:
      "ERC721, ERC1155, ERC404, ERC20, Escrow, MultiSig Wallets, Custom Solidity Contracts, Chainlink CCIP, Chainlink Smart Contracts.",
    link: "Learn More",
    url: "https://github.com/leetebbs/",
  },
  {
    id: 4,
    name: "Tech Stack",
    description:
      "React, Solidity, Ethers, Web3, HTML, CSS, Javascript, GraphQL, Chainlink",
    link: "Learn More",
    url: "https://github.com/leetebbs/",
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6 mt-6">What I do.</h2>
            <h3 className="h3 max-w-[445px] mb-20 lg:mb-10">
              I am a Freelance Web3 Developer with over 4 years of experience.
            </h3>
            {/* <Link to="/development"> */}
            {/* <button className="btn btn-sm">See my work</button> */}
            {/* </Link>
            <Outlet /> */}
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <div>
              {services.map((service, index) => {
                const { name, description, link, url } = service;
                return (
                  <div
                    className="border-b border-white/20 h-[146px] mb-[38px] flex"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight">
                        {description}
                      </p>
                    </div>
                    {/* <div className="flex flex-col flex-1 items-end">
                      <a
                        href={url}
                        className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                      >
                        <BsArrowUpRight />
                      </a>
                      <a href={url} className="text-gradient text-sm">
                        {link}
                      </a>
                    </div> */}
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
        {/* 57.28 */}
      </div>
    </section>
  );
};

export default Services;
