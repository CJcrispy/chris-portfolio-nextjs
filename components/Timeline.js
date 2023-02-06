import userData from "../constant/data";

const Timeline = () => {
    return(
        <div className="container-fluid">
            <div className="row example-centered">
                <div className="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2">
                    <ul className="timeline timeline-centered">
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
                    </ul>
                </div>
            </div>
        </div>
    )
}

const TimelineItem = ({ title, date, companyLink, company, desc, desc2, desc3, desc4 }) => {
    return(
        <li className="timeline-item" >
            <div className="timeline-info">
                <span>{date}</span>
            </div>
            <div className="timeline-marker"></div>
            <div className="timeline-content">
                <a href={companyLink}><h3 className="timeline-title">{company}</h3></a>
                <p>{title}</p>
                <p>{desc}</p>
                <p>{desc2}</p>
                <p>{desc3}</p>
                <p>{desc4}</p>
            </div>
        </li>
    )
}

export default Timeline;