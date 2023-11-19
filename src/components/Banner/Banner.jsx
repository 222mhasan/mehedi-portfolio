
const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/xh2ChNn/sackcloth-1280539-1920.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="text-center">
                        <p className="text-2xl">HI, I'M MD MEHEDI HASAN</p>
                        <h1 className="mb-5 text-6xl font-bold">Front End Developer</h1>
                        <div className="flex gap-4 justify-center">
                            <button className="btn btn-primary">Projects</button>
                            <button className="btn btn-primary">Contact</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;