import userData from "../constant/data";

export default function ProjectsSection() {
    return (
      <section className="game-section">
        <div className="max-w-6xl h-48">
            <h1 className=" text-5xl md:text-9xl font-bold py-20  md:text-left">
              Projects
            </h1>
          </div>
        <div className="cols mt-10">
          {userData.projects.map((proj, idx) => (
              <ProjectCard
                title={proj.title}
                description={proj.description}
                link={proj.link}
                imgUrl={proj.imgUrl}
                key={idx}
              />
            ))}
        </div>
      </section>
    );
  }

const ProjectCard = ({ title, link, imgUrl, description }) => {
    return (
        <a href={link}>
          <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <div className="item active" style={{backgroundImage: `url(${imgUrl})`}}>
              <div className="item-desc">
                <h3>{title}</h3>
                <p>{description}</p>   
              </div>
            </div>
          </div>
        </a>
    );
};
