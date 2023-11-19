
const Projects = () => {
    return (
        <div>
            <h1 className=" my-7 text-5xl text-center font-bold">Projects</h1>
            <div className="flex">
                {/* projects 1 */}
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Personal Fitness Trainer</h2>
                        <p className="text-justify">Personal fitness training project where a trainer creates and delivers safe and effective exercise programs for apparently healthy individuals.</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Live Demo</button>
                            <button className="btn btn-primary">Source Code</button>
                        </div>
                    </div>
                </div>

                {/* projects 2 */}
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Personal Fitness Trainer</h2>
                        <p className="text-justify">Personal fitness training project where a trainer creates and delivers safe and effective exercise programs for apparently healthy individuals.</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Live Demo</button>
                            <button className="btn btn-primary">Source Code</button>
                        </div>
                    </div>
                </div>

                {/* projects 3 */}
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Personal Fitness Trainer</h2>
                        <p className="text-justify">Personal fitness training project where a trainer creates and delivers safe and effective exercise programs for apparently healthy individuals.</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Live Demo</button>
                            <button className="btn btn-primary">Source Code</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Projects;