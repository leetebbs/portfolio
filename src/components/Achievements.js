import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Outlet, Link } from "react-router-dom";
import chainlink from "../assets/achievments/chainlink.png";
import constellation from "../assets/achievments/constellation.png";
import lighthouse from "../assets/achievments/lighthouse.png";
import spacewarp from "../assets/achievments/spacewarp.png";
import filecoin from "../assets/achievments/filecoin.png";
import ethonline from "../assets/achievments/ethonline.png";
import airbnb from "../assets/achievments/airbnbnft.gif";
import netflix from "../assets/achievments/netflix.gif";
import metabuilder from "../assets/achievments/metabuilder.gif";
import angrybirds from "../assets/achievments/angrybirds.gif";
import senior from "../assets/achievments/learnweb3Senior.png";
import chainlink_ccip from "../assets/achievments/chainlink_ccip.gif";
import chainlink_rwa from "../assets/achievments/chainlink_rwa.gif";
import alchemy from "../assets/certificate.png";
const services = [
  {
    id: 1,
    name: "Moralis Builder NFT",
    description:
      "These NFTs are awarded to Moralis Mages who successfully completed the Hackathon Challenges!",
    image1: airbnb,
    image2: netflix,
    image3: metabuilder,
    image4: angrybirds,
    link: "Learn More",
    url: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/113461209507512867518933452141320285231135646094834536306130710982823765869044",
  },
  {
    id: 2,
    name: "LearnWeb3",
    description: "Decentralised Application development for any EVM chain.",
    link: "Learn More",
    image1: senior,
    url: "https://github.com/leetebbs/",
  },
  {
    id: 3,
    name: "Smart Contract Development",
    description:
      "NFT, ERC20, Escrow, MultiSig Wallets, Custom Solidity Contracts.",
    link: "Learn More",
    url: "https://github.com/leetebbs/",
  },
  {
    id: 4,
    name: "Tech Stack",
    description:
      "React, Solidity, Ethers, Web3, HTML, CSS, Javascript, GraphQL",
    link: "Learn More",
    url: "https://github.com/leetebbs/",
  },
];

const Acheivements = () => {
  return (
    <section className="section" id="acheivements">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1  lg:bg-bottom bg-no-repeat  mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6">Achievements.</h2>
            <h3 className="h3 max-w-[445px] mb-16">NFT's and POAP's.</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 lg:gap-x-1 mb-12">
              <a href="https://collectors.poap.xyz/token/7014298" target="_blank" rel="noreferrer" className="relative group">
                <img
                  className="group-hover:scale-125 transition-all duration-500 width-[150px] h-[150px] lg:w-[150px] lg:h-[150px] mb-12"
                  src={chainlink}
                  alt=""
                />
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-black text-white text-xs rounded py-1 px-2">
                Chainlink Bootcamp 2024 - Certificate of Completion
                </div>
              </a>
              <a href="https://collectors.poap.xyz/token/6957102" target="_blank" rel="noreferrer" className="relative group">
                <img
                  className="group-hover:scale-125 transition-all duration-500 width-[150px] h-[150px] lg:w-[150px] lg:h-[150px] mb-12"
                  src={constellation}
                  alt=""
                />
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-black text-white text-xs rounded py-1 px-2">
                Constellation: A Chainlink Hackathon
                </div>
              </a>
              <a href="https://collectors.poap.xyz/token/6330506" target="_blank" rel="noreferrer" className="relative group">
                <img
                  className="group-hover:scale-125 transition-all duration-500 width-[150px] h-[150px] lg:w-[150px] lg:h-[150px] mb-12"
                  src={lighthouse}
                  alt=""
                />
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-black text-white text-xs rounded py-1 px-2">
                Participating in Filecoin SpaceWarp Hackathon & Using Lighthouse 
                </div>
              </a>
              <a href="https://collectors.poap.xyz/token/6317793" target="_blank" rel="noreferrer" className="relative group">
                <img
                  className="group-hover:scale-125 transition-all duration-500 width-[150px] h-[150px] lg:w-[150px] lg:h-[150px] mb-12"
                  src={spacewarp}
                  alt=""
                />
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-black text-white text-xs rounded py-1 px-2">
                FVM Space Warp 2023 Staked Hacker
                </div>
              </a>
              <a href="https://collectors.poap.xyz/token/5929798" target="_blank" rel="noreferrer" className="relative group">
                <img
                  className="group-hover:scale-125 transition-all duration-500 width-[150px] h-[150px] lg:w-[150px] lg:h-[150px] mb-12"
                  src={filecoin}
                  alt=""
                />
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-black text-white text-xs rounded py-1 px-2">
                Hack FEVM 2022 Staked Hacker
                </div>
              </a>
              <a href="https://collectors.poap.xyz/token/5797358" target="_blank" rel="noreferrer" className="relative group">
                <img
                  className="group-hover:scale-125 transition-all duration-500 width-[150px] h-[150px] lg:w-[150px] lg:h-[150px] mb-12"
                  src={ethonline}
                  alt=""
                />
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-black text-white text-xs rounded py-1 px-2">
                ETHOnline 2022 Staked Hacker
                </div>
              </a>
              <a href="https://collectors.poap.xyz/token/7202859" target="_blank" rel="noreferrer" className="relative group">
                <img
                  className="group-hover:scale-125 transition-all duration-500 width-[150px] h-[150px] lg:w-[150px] lg:h-[150px] mb-12"
                  src={chainlink_ccip}
                  alt=""
                />
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-black text-white text-xs rounded py-1 px-2">
                Chainlink CCIP Bootcamp
                </div>
              </a>
              <a href="https://collectors.poap.xyz/token/7250733" target="_blank" rel="noreferrer" className="relative group">
                <img
                  className="group-hover:scale-125 transition-all duration-500 width-[150px] h-[150px] lg:w-[150px] lg:h-[150px] mb-12"
                  src={chainlink_rwa}
                  alt=""
                />
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-black text-white text-xs rounded py-1 px-2">
                  Chainlink Tokenized RWA Bootcamp
                </div>
              </a>
            </div>

            {/* <Link to="/development"> */}
            {/* <button className="btn btn-sm">See my work</button> */}
            {/* </Link>
            <Outlet /> */}
            <div className="relative group">
                  <img
                  className="group-hover:scale-125 transition-all duration-500 width-[250px] h-[150px] lg:w-[440px] lg:h-[275px] mb-12"
                  src={alchemy}
                  alt=""
                />
                <div className="absolute bottom-full left-[10%] transform -translate-x-1/2 mb-2 hidden group-hover:block bg-black text-white text-xs rounded py-1 px-2">
                  Alchemy EVM Chain Certification
                </div>
            </div>
          </motion.div>
         {/* <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <div>
              {services.map((service, index) => {
                const { name, description, link, url, image1, image2, image3,image4 } = service;
                return (
                  <div
                    className="border-b border-white/20 h-[136px] mb-[38px] flex"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h4>
                      <div className="flex gap-x-2">
                      <img className="w-[85px] h-[85px] lg:w-[105px] lg:h-[105px] mb-22 lg:mx-3" src={image1} alt="" />
                      <img className="w-[85px] h-[85px] lg:w-[105px] lg:h-[105px] mb-22 lg:mx-3" src={image2} alt="" />
                      <img className="w-[85px] h-[85px] lg:w-[105px] lg:h-[105px] mb-22 lg:mx-3" src={image3} alt="" />
                      <img className="w-[85px] h-[85px] lg:w-[105px] lg:h-[105px] mb-22 lg:mx-3" src={image4} alt="" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div> */}
        </div>
        {/* 57.28 */}
      </div>
    </section>
  );
};

export default Acheivements;
