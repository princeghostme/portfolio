import resume from '../assets/resume.pdf';
import GrowthStack from './GrowthStack';

const PageHeader = () => {

    return (
        <header className="relative text-rose-700 py-16 md:py-24 bg-gradient-to-t to-rose-300 from-white overflow-hidden">
            <div className="container mx-auto px-4 flex flex-col items-center z-10 relative">
                {/* Heading */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-center">
                    <span className="bg-clip-text text-transparent bg-rose-700">
                        Full Stack .NET Developer
                    </span>
                </h1>

                {/* Subheading */}
                <p className="text-xl md:text-2xl text-center mb-10 font-light">
                    Building <span className="font-semibold">robust web applications</span> with .NET, React, and modern technologies
                </p>

                {/* Timeline Component */}
                <GrowthStack />

                <a
                    href={resume}
                    className='inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-xl shadow-sm text-rose-600 bg-white bg-opacity-75 hover:bg-rose-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 transition-all'
                >
                    Download Resume
                </a>
            </div>


        </header>
    );
};

export default PageHeader;
