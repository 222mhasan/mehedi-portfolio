
const About = () => {
    return (
        <div className="">
            <h1 className=" my-7 text-5xl text-center font-bold">About Me</h1>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="/src/components/About/muslim.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Who am I ?</h1>
                        <p className="py-6">A focused and diligent Frontend Developer. Experienced in using JavaScript, as well as the React.js library to develop front end applications. Curious and eager to learn new technologies. Passionate about giving best and following coding practice. I create responsive secure websites for my clients. My superior focus and attention to detail combined with my extensive knowledge of HTML, CSS, Bootstrap, Tailwind CSS, JavaScript, React, Redux, Node.js, Express.js, React Native, MongoDB and Git makes me an exceptional choice. Being a fast learner, I quickly pick up business knowledge related to my project.</p>
    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;