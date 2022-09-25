import userData from "../constant/data";

const Timeline = () => {
    return(
        <div className="container-fluid">
            <div className="row example-centered">
                <div className="col-md-12 example-title">
                    <h2>Centered Timeline</h2>
                    <p>Medium devices (desktops, 992px and up).</p>
                </div>
                <div className="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2">
                    <ul className="timeline timeline-centered">
                        {userData.experience.map((time) => (
                            <TimelineItem
                                title={time.title}
                                company={time.company}
                                companyLink={time.companyLink}
                                desc={time.desc}
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

const TimelineItem = ({ title, date, companyLink, company, desc }) => {
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
            </div>
        </li>
    )
}

export default Timeline;