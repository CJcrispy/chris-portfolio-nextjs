import React from "react";
import Image from "next/image";
import svgPic from "../public/computer.svg";
import userData from "../constant/data";

const Main = () => {
    return(
        <div>
            <main>
                <section className="body-font ">
                    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center " style={{ height: "100vh"}}>
                        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">Lets go on a date
                                <br className="hidden lg:inline-block"/> readymade gluten
                            </h1>
                            <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
                            <div className="flex justify-center">
                                <button className="inline-flex bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                                <button className="ml-4 inline-flex bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg">Button</button>
                            </div>
                        </div>
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                            <Image
                                className="object-cover object-center rounded" 
                                width="720px"
                                height="650px"
                                alt="hero" 
                                src={svgPic}
                            />
                        </div>
                    </div>
                </section>

                <section className="text-gray-700 body-font border-t border-gray-200">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-col text-center w-full mb-20">
                            <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">Here are some</h2>
                            <h1 className="sm:text-3xl text-2xl font-medium title-font ">Upcoming Projects</h1>
                        </div>
                        <div className="flex flex-wrap -m-4">
                            {userData.featuredProjects.map((proj, idx) => (
                                <FeaturedCard
                                    title={proj.title}
                                    description={proj.description}
                                    link={proj.link}
                                    key={idx}
                                />
                                ))}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

const FeaturedCard = ({title, description, link}) => {
    return(
        <div className="p-4 md:w-1/3">
            <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                </div>
                <h2 className="text-gray-900 text-lg title-font font-medium">{title}</h2>
                </div>
                <div className="flex-grow">
                <p className="leading-relaxed text-base">{description}</p>
                <a className="mt-3 text-indigo-500 inline-flex items-center" href={link}>Learn More
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </a>
                </div>
            </div>
        </div>
    )
}

export default Main;