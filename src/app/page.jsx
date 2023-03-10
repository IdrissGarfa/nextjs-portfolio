"use client"
import { useState } from "react";

/* eslint-disable react/no-unescaped-entities */

import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Image from "next/image";

import deved from "../../public/dev-ed-wave.png";
import design from "../../public/design.png";
import code from "../../public/code.png";
import consulting from "../../public/consulting.png";

import web1 from "../../public/web1.png";
import web2 from "../../public/web2.png";
import web3 from "../../public/web3.png";
import web4 from "../../public/web4.png";
import web5 from "../../public/web5.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>

      <main className={`${darkMode ? "dark" : ""} bg-white px-0 md:px-20 lg:px-40 dark:bg-gray-900 transition-colors duration-500`}>
        <section className="min-h-screen">
          <nav className="py-10 px-5 md:px-10 mb-12 flex justify-between">
            <h1 className="text-xl font-semibold text-gray-70 dark:text-gray-100">Portfolio</h1>
            <ul className="flex items-center gap-6 md:gap-[2rem]">
              <li>
                {
                  !darkMode ? (
                    <BsFillMoonStarsFill className="cursor-pointer text-2xl text-gray-700 dark:text-gray-200"
                    onClick={() => { setDarkMode(!darkMode); console.log(darkMode); }} />
                  ) : (
                    <BsFillSunFill className="cursor-pointer text-2xl text-gray-700 dark:text-gray-200"
                    onClick={() => { setDarkMode(!darkMode); console.log(darkMode); }} />
                  )
                }
              </li>
              <li><a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md" href="#">Resume</a></li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-[3rem] py-2 text-teal-600 font-medium md:text-[5rem] lg:text-[5.5rem] dark:text-teal-500">Idriss Garfa</h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-gray-300">Developer and designer.</h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-2xl mx-auto dark:text-gray-200">Freelancer providing services for programming and design content needs.
              Join me down below and let's get cracking!</p>
          </div>
          <div className="text-5xl flex justify-center gap-8 md:gap-16 py-2 text-gray-600 dark:text-white">
            <a href="https://twitter.com/IdrissGarfa" rel="noreferrer" target="_blank"><AiFillTwitterCircle className="cursor-pointer"/></a>
            <a href="https://www.linkedin.com/in/idrissgarfa/" rel="noreferrer" target="_blank"><AiFillLinkedin className="cursor-pointer"/></a>
            <a href="https://github.com/IdrissGarfa" rel="noreferrer" target="_blank"><AiFillGithub className="cursor-pointer"/></a>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image src={deved} alt="persona" layout="fill" />
          </div>
        </section>
        <section className="px-10">
          <div className="my-10">
            <h3 className="text-3xl py-1 dark:text-white ">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500 dark:font-semibold"> agencies </span>
              consulted for <span className="text-teal-500 dark:font-semibold">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>

          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1 dark:bg-white">
              <Image className="mx-auto" src={design} alt="design" width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
              <p className="py-2">
                Creating elegant designs suited for your needs
                following core design theory.
              </p>
              <h4 className="py-4 text-teal-600 dark:font-semibold">Design tools I use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1 dark:bg-white">
              <Image src={code} className="mx-auto" alt="design" width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
              <p className="py-2">
                Creating elegant designs suited for your needs
                following core design theory.
              </p>
              <h4 className="py-4 text-teal-600 dark:font-semibold">Design tools I use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1 dark:bg-white">
              <Image src={consulting} className="mx-auto" alt="design" width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
              <p className="py-2">
                Creating elegant designs suited for your needs
                following core design theory.
              </p>
              <h4 className="py-4 text-teal-600 dark:font-semibold">Design tools I use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>

          </div>
        </section>
        <section className="px-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Portfolio</h3>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image src={web1} className="rounded-lg object-cover" width={'100%'} layout="responsive" alt="web1" />
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web2} className="rounded-lg object-cover" width={'100%'} layout="responsive" alt="web2" />
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web3} className="rounded-lg object-cover" width={'100%'} layout="responsive" alt="web3" />
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web4} className="rounded-lg object-cover" width={'100%'} layout="responsive" alt="web4" />
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web5} className="rounded-lg object-cover" width={'100%'} layout="responsive" alt="web5" />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
