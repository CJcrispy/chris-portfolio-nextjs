import userData from "../constant/data"

const Skills = () => {
    return(
        <section className='w-full'>
            <div className='container-flex mx-auto flex flex-col items-center gap-8 mt-2'>
                <div className="skills_wrapper">
                    <h1 className=" text-5xl md:text-9xl font-bold py-20  md:text-left">
                    Tech Stack
                    </h1>
                    <div className="cols">
                        {userData.skills.map((skil, idx) => (
                            <SkillsCard
                                title={skil.title}
                                level={skil.level}
                                type={skil.type}
                                imgUrl={skil.imgUrl}
                                key={idx}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

const SkillsCard = ({ title, type, imgUrl, level }) => {
    return(
        <div className="col" to="this.classList.toggle('hover');">
            <div className="card_container">
                <div className="front" style={{backgroundImage: `url(${imgUrl})`}} >
                    <div className="inner">
                        <p>{title}</p>
                        <span>{level}</span>
                    </div>
                </div>
                <div className="back">
                    <div className="inner">
                    <p>{type}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;