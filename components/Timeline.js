import userData from "../constant/data";

const Timeline = () => {
    return(
        <section className="w-full">
            <div className="container-flex mx-auto flex flex-col items-center gap-8 mt-2">
                <h1 className=" text-5xl md:text-9xl font-bold py-20 md:text-left">
                Experience
                </h1>
            </div>
            <div className="container-flex">
                {userData.experience.map((time, idx) => (
                    <TimelineItem
                    title={time.title}
                    company={time.company}
                    companyLink={time.companyLink}
                    desc={time.desc}
                    desc2={time.desc2}
                    desc3={time.desc3}
                    desc4={time.desc4}
                    date={time.date}
                    key={idx}
                />
            ))}
            </div>
        </section>
    )
}

const TimelineItem = ({ title, date, companyLink, company, desc, desc2, desc3, desc4 }) => {
    return(
        <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-blue-500 text-white relative z-10 title-font font-medium text-sm"></div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                <div className="flex-shrink-0 w-24 h-24 bg-blue-100 text-blue-500 rounded-full inline-flex items-center justify-center">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-12 h-12" viewBox="0 0 24 24">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                </div>
                <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                    <h2 className="font-medium title-font mb-1 text-xl">{title}</h2><span>{date}</span>
                    <a href={companyLink}><h3 className="">{company}</h3></a>
                    <p className="leading-relaxed">{desc}</p>
                    <p className="leading-relaxed">{desc2}</p>
                    <p className="leading-relaxed">{desc3}</p>
                    <p className="leading-relaxed">{desc4}</p>
                </div>
            </div>
        </div>
    )
}

export default Timeline;