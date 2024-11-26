"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <section className="text-gray-600 dark:text-gray-200 body-font">
        <div className="container px-5 py-6 mx-auto">
          <div className="bg-white p-8 shadow-slate-200 dark:shadow-none rounded-lg">
            <div className="">
              <div className="">
                <h3 className="text-2xl text-center pb-2 font-medium title-font text-gray-800 dark:text-gray-600 text-center">Technical Skills</h3>
                <div className="flex items-center justify-between">
                  <img src="../images/windows-applications-svgrepo-com.svg" alt="Windows" title="Windows" className="w-8 h-8" />
                  <img src="../images/linux-tux-svgrepo-com.svg" alt="Linux" title="Linux" className="w-8 h-8" />
                  <img src="../images/microsoftoffice-svgrepo-com.svg" alt="Office" title="Office" className="w-8 h-8" />
                  <span className="px-2 py-1 rounded-lg text-sm text-slate-500 font-medium min-w-[46px] text-center"> </span>
                </div>
                <div className="w-full bg-slate-100 h-1 mb-6 mt-2">
                  <div className="bg-red-500 h-2 rounded" style={{ width: "65%" }}></div>
                </div>
                <div className="flex items-center justify-between">
                  <img src="../images/html-svgrepo-com.svg" alt="HTML" title="HTML" className="w-8 h-8" />
                  <img src="../images/css-3-svgrepo-com.svg" alt="CSS" title="CSS" className="w-8 h-8" />
                  <img src="../images/php-svgrepo-com.svg" alt="PHP" title="PHP" className="w-8 h-8" />
                  <img src="../images/python-svgrepo-com.svg" alt="PYTHON" title="PYTHON" className="w-8 h-8" />  
                  <span className="px-2 py-1 rounded-lg text-sm text-slate-500 font-medium min-w-[46px] text-center"></span>
                </div>
                <div className="w-full bg-slate-100 h-1 mb-6 mt-2">
                  <div className="bg-cyan-500 h-2 rounded" style={{ width: "65%" }}></div>
                </div>
                <div className="flex items-center justify-between">
                  <img src="../images/database-svgrepo-com.svg" alt="SQL" title="SQL" className="w-8 h-8" />
                  <img src="../images/sqlite-svgrepo-com.svg" alt="SQLite" title="SQLite" className="w-8 h-8" />
                  <img src="../images/mongo-svgrepo-com.svg" alt="MONGO DB" title="MONGO DB" className="w-8 h-8" />
                  <span className="px-2 py-1 rounded-lg text-sm text-slate-500 font-medium min-w-[46px] text-center"></span>
                </div>
                <div className="w-full bg-slate-100 h-1 mb-6 mt-2">
                  <div className="bg-cyan-500 h-2 rounded" style={{ width: "70%" }}></div>
                </div>

              </div>
            </div>
            

            <div className="">
              <div className="">
                <div className="flex items-center justify-between">
                  <img src="../images/vue-vuejs-javascript-js-framework-svgrepo-com.svg" alt="VUE JS" title="VUE JS" className="w-8 h-8" />
                  <img src="../images/node-js.svg" alt="NODE JS" title="NODE JS" className="w-8 h-8" />
                  <img src="../images/laravel-svgrepo-com.svg" alt="LARAVEL" title="LARAVEL" className="w-8 h-8" />

                  {/* <img src="../images/react-javascript-js-framework-facebook-svgrepo-com.svg" alt="REACT JS" title="REACT JS" className="w-8 h-8" /> */}
                  <span className="px-2 py-1 rounded-lg text-sm text-slate-500 font-medium min-w-[46px] text-center"></span>
                </div>
                <div className="w-full bg-slate-100 h-1 mb-6 mt-2">
                  <div className="bg-lime-600 h-2 rounded" style={{ width: "60%" }}></div>
                </div>
                <div className="flex items-center justify-between">
                  <img src="../images/docker-logo-svgrepo-com.svg" alt="DOCKER" title="DOCKER" className="w-8 h-8" />
                  <img src="../images/postman-icon-svgrepo-com.svg" alt="POSTMAN" title="POSTMAN" className="w-8 h-8" />
                  <img src="../images/git-svgrepo-com.svg" alt="GIT" title="GIT" className="w-8 h-8" />
                  {/* <img src="../images/nest-middleware-js-svgrepo-com.svg" alt="NEST JS" title="NEST JS" className="w-8 h-8" /> */}
                  <span className="px-2 py-1 rounded-lg text-sm text-slate-500 font-medium min-w-[46px] text-center"></span>
                </div>
                <div className="w-full bg-slate-100 h-1 mb-6 mt-2">
                  <div className="bg-sky-500 h-2 rounded" style={{ width: "60%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>



        <div className="container px-5 py-6 mx-auto">
          <div className="bg-white p-8  shadow-slate-200 dark:shadow-none rounded-lg">
            <h3 className="text-2xl text-center pb-2 font-medium title-font text-gray-800 dark:text-gray-600 text-center">Soft Skills</h3>
            <div className="flex items-center justify-between">
              <img src="../images/team-group-svgrepo-com.svg" alt="TEAM BUILDING" title="TEAM BUILDING" className="w-8 h-8" />
              <img src="../images/adaptation-svgrepo-com.svg" alt="ADAPTATION" title="ADAPTATION" className="w-8 h-8" />
              <img src="../images/man-and-big-ascending-arrow-svgrepo-com.svg" alt="EVOLUTION" title="EVOLUTION" className="w-8 h-8" />
              <span className="px-2 py-1 rounded-lg text-sm text-slate-500 font-medium min-w-[46px] text-center">80%</span>
            </div>
            <div className="w-full bg-slate-100 h-1 mb-6 mt-2">
              <div className="bg-blue-600 h-2 rounded" style={{ width: "80%" }}></div>
            </div>
          </div>
        </div>
      </section>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <section className="text-gray-600 dark:text-gray-200 body-font">
        <div className="container px-5 py-6 mx-auto">
          <div className="bg-white p-8  shadow-slate-200 dark:shadow-none rounded-lg">
            <h3 className="text-2xl pb-2 font-medium title-font text-gray-800 dark:text-gray-600 text-center">
              <u>EPITECH</u>
            </h3>
            <div className="flex items-center gap-x-4">
              <img 
                src="../images/epitech.png" 
                alt="Epitech" 
                title="Epitech" 
                className="w-22 h-16 rounded-md object-cover"
              />
              <h4 className="text-sm text-slate-500 font-medium">
                <strong>2023:</strong> Certificate in Web and Mobile Development
              </h4>
            </div>
          </div>
        </div>


        <div className="container px-5 py-6 mx-auto">
          <div className="bg-white p-8  shadow-slate-200 dark:shadow-none rounded-lg">
            <h3 className="text-2xl pb-2 font-medium title-font text-gray-800 dark:text-gray-600 text-center">
              <u>ESGIS</u>
            </h3>
            <div className="flex items-center gap-x-4">
              <img 
                src="../images/esgis.png" 
                alt="Esgis" 
                title="Esgis" 
                className="w-22 h-16 rounded-md object-cover"
              />
                {/* <h4 className="px-2 py-1 rounded-lg text-sm text-slate-500 font-medium min-w-[46px] text-center"><strong>Sytems, Network and Security</strong></h4> */}

              <h4 className="text-sm text-slate-500 font-medium">
                <strong>2022:</strong> Sytems, Network and Security Bachelor Degree's
              </h4>
            </div>
          </div>
        </div>
      </section>
    ),
  },
  {
    title: "Experiences",
    id: "experiences",
    content: (
      <section className="text-gray-600 dark:text-gray-200 body-font">


        <div className="container px-5 py-6 mx-auto">
          <div className="bg-white p-8  shadow-slate-200 dark:shadow-none rounded-lg">
            <div className="flex flex-col items-center">
              <h3 className="text-2xl text-center pb-2 font-medium title-font text-gray-800 dark:text-gray-600">
                Cybersecurity Analyst Internship
              </h3>
              <div className="flex items-center justify-center">
                <img 
                  src="../images/ASIN.png" 
                  alt="ASIN" 
                  title="ASIN" 
                  className="w-16 h-16"
                />
              </div>
              <h4 className="px-2 py-1 text-sm text-slate-500 font-medium text-center">
                <strong>12/2022 - 05/2023:</strong> ASIN
              </h4>
            </div>
          </div>
        </div>


        <div className="container px-5 py-6 mx-auto">
          <div className="bg-white p-8  shadow-slate-200 dark:shadow-none rounded-lg">
            <div className="flex flex-col items-center">
              <h3 className="text-2xl text-center pb-2 font-medium title-font text-gray-800 dark:text-gray-600">
                Cybersecurity Analyst Internship
              </h3>
              <div className="flex items-center justify-center">
                <img 
                  src="../images/ma_info.png" 
                  alt="MA-INFO" 
                  title="MA-INFO" 
                  className="w-16 h-16"
                />
              </div>
              <h4 className="px-2 py-1 text-sm text-slate-500 font-medium text-center">
                <strong>04/2022 - 09/2022:</strong> MA-INFO
              </h4>
            </div>
          </div>
        </div>
      </section>
    ),
  },
  {
    title: "Certifs",
    id: "certifications",
    content: (
      <section className="text-gray-600 dark:text-gray-200 body-font">
        <div className="container px-5 py-6 mx-auto">
          <div className="flex flex-wrap -m-4">
            {/* Carte 1 */}
            <div className="p-4 md:w-1/2 w-full">
              <div className="bg-white p-8  shadow-slate-200 dark:shadow-none rounded-lg h-full flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <img 
                    src="../images/postman.png" 
                    alt="Postman" 
                    title="Postman Student Expert" 
                    className="w-8 h-8"
                  />
                  <span className="px-2 py-1 text-sm text-slate-500 font-medium text-center">
                    <strong>Postman Student Expert</strong> <br /><br /> POSTMAN
                  </span>
                </div>
              </div>
            </div>
            {/* Carte 2 */}
            <div className="p-4 md:w-1/2 w-full">
              <div className="bg-white p-8  shadow-slate-200 dark:shadow-none rounded-lg h-full flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <img 
                    src="../images/CNSP.png" 
                    alt="CNSP" 
                    title="CNSP" 
                    className="w-8 h-8"
                  />
                  <span className="px-2 py-1 text-sm text-slate-500 font-medium text-center">
                    <strong>Certified Network Security Practitionner</strong> <br /><br /> THE SECOPS GROUP
                  </span>
                </div>
              </div>
            </div>
            {/* Carte 3 */}
            <div className="p-4 md:w-1/2 w-full">
              <div className="bg-white p-8  shadow-slate-200 dark:shadow-none rounded-lg h-full flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <img 
                    src="../images/CAP.png" 
                    alt="CAP" 
                    title="CAP" 
                    className="w-8 h-8"
                  />
                  <span className="px-2 py-1 text-sm text-slate-500 font-medium text-center">
                    <strong>Certified Application Pentester</strong> <br /><br /> THE SECOPS GROUP
                  </span>
                </div>
              </div>
            </div>
            {/* Carte 4 */}
            <div className="p-4 md:w-1/2 w-full">
              <div className="bg-white p-8  shadow-slate-200 dark:shadow-none rounded-lg h-full flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <img 
                    src="../images/fortinet.png" 
                    alt="NSE" 
                    title="NSE" 
                    className="w-8 h-8"
                  />
                  <span className="px-2 py-1 text-sm text-slate-500 font-medium text-center">
                    <strong>Network Security Expert 1 & 2</strong> <br /><br /> FORTINET
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="space-y-6">
        <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          <br /> 
          Passionate about technological innovation, I'm a Backend Web Developer with skills in NodeJs and MERN architecture. 
          With a pedagogical approach, I share my knowledge as a Pedagogical Assistant at EPITECH Benin, while paying particular attention to project management and new technologies. 
          <br /> 
          </p>
        <Image src="/images/about-image.png" width={500} height={500} />
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experiences")}
              active={tab === "experiences"}
            >
              {" "}
              Experiences{  " "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifs{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
