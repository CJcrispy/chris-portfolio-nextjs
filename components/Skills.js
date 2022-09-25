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
                                number={`${idx + 1}`}
                            />
                        ))}
                        <div className="col" ontouchstart="this.classList.toggle('hover');">
                            <div className="card_container">
                                <div className="front" style={{backgroundImage: "url(https://unsplash.it/500/500/)"}}>
                                    <div className="inner">
                                        <p>Diligord</p>
                                        <span>Lorem ipsum</span>
                                    </div>
                                </div>
                                <div className="back">
                                    <div className="inner">
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col" ontouchstart="this.classList.toggle('hover');">
                            <div className="card_container">
                                <div className="front" style={{backgroundImage: "url(https://unsplash.it/511/511/)"}}>
                                    <div className="inner">
                                        <p>Rocogged</p>
                                        <span>Lorem ipsum</span>
                                    </div>
                                </div>
                                <div className="back">
                                    <div className="inner">
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col" ontouchstart="this.classList.toggle('hover');">
                            <div className="card_container">
                                <div className="front" style={{backgroundImage: "url(https://unsplash.it/502/502/)"}}>
                                    <div className="inner">
                                        <p>Strizzes</p>
                        <span>Lorem ipsum</span>
                                    </div>
                                </div>
                                <div className="back">
                                    <div className="inner">
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col" ontouchstart="this.classList.toggle('hover');">
                            <div className="card_container">
                                <div className="front" style={{backgroundImage: "url(https://unsplash.it/503/503/)"}}>
                                    <div className="inner">
                                        <p>Clossyo</p>
                                        <span>Lorem ipsum</span>
                                    </div>
                                </div>
                                <div className="back">
                                    <div className="inner">
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col" ontouchstart="this.classList.toggle('hover');">
                            <div className="card_container">
                                <div className="front" style={{backgroundImage: "url(https://unsplash.it/504/504/"}}>
                                    <div className="inner">
                                        <p>Rendann</p>
                                        <span>Lorem ipsum</span>
                                    </div>
                                </div>
                                <div className="back">
                                    <div className="inner">
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col" ontouchstart="this.classList.toggle('hover');">
                            <div className="card_container">
                                <div className="front" style={{backgroundImage: "url(https://unsplash.it/505/505/)"}}>
                                    <div className="inner">
                                        <p>Reflupper</p>
                                        <span>Lorem ipsum</span>
                                    </div>
                                </div>
                                <div className="back">
                                    <div className="inner">
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col" ontouchstart="this.classList.toggle('hover');">
                            <div className="card_container">
                                <div className="front" style={{backgroundImage: "url(https://unsplash.it/506/506/)"}}>
                                    <div className="inner">
                                        <p>Acirassi</p>
                                        <span>Lorem ipsum</span>
                                    </div>
                                </div>
                                <div className="back">
                                    <div className="inner">
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col" ontouchstart="this.classList.toggle('hover');">
                            <div className="card_container">
                                <div className="front" style={{backgroundImage: "url(https://unsplash.it/508/508/)"}}>
                                    <div className="inner">
                                        <p>Sohanidd</p>
                                        <span>Lorem ipsum</span>
                                    </div>
                                </div>
                                <div className="back">
                                    <div className="inner">
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const SkillsCard = ({ title, type, imgUrl, level }) => {
    return(
        <div className="col" ontouchstart="this.classList.toggle('hover');">
            <div className="card_container">
                <div className="front" style={{backgroundImage: `url(${imgUrl})`}}>
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