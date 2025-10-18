import { Badge } from "./ui/badge";

const BootcampCard = () => {
    const signUpButton = (
        <div className="flex w-full h-full justify-center items-center">
            <input type="email" placeholder="Enter your email" />
            <button className="bg-yellow-500 text-white px-4 py-2 rounded-md">Sign Up</button>
        </div>
    )
    return (
        <div className="lg:px-30 px-10 sm:px-4 md:px-8 py-20 w-full">
            <h1 className="text-2xl font-bold text-start w-full mb-6    ">Upcoming Events</h1>
            <div className="w-full sm:w-4/5 md:w-3/4 lg:w-2/3 min-w-[300px] bg-white mx-auto rounded-2xl items-center justify-center shadow-lg overflow-hidden">

                {/* Top Yellow Banner */}
                <div className="bg-yellow-400 lg:px-6 px-1 sm:px-4 md:px-8 py-3 text-center">
                    <h2 className="text-lg font-bold text-blue-900">10x productivity with AI</h2>
                </div>

                {/* Main Content */}
                <div className="lg:px-6 px-4 sm:px-4 md:px-8 py-2 space-y-4 w-full">
                    {/* Title */}
                    <div className="w-full">
                        <h1 className="text-2xl font-bold text-blue-900 mb-2 w-full">
                            AI webinar
                            <div className="w-20 h-1 bg-green-400 mt-1"></div>
                        </h1>
                        <p className="text-blue-900 text-sm leading-relaxed w-full">
                            A proven framework to go from idea to working app in less than two weeks, without writing code.
                        </p>
                    </div>

                    {/* Technology Badges */}
                    <div className="flex gap-2 flex-wrap">
                        <Badge variant="secondary" className="bg-blue-100 text-blue-900 px-3 py-1 rounded-lg">
                            Frontend
                        </Badge>
                        <Badge variant="secondary" className="bg-blue-100 text-blue-900 px-3 py-1 rounded-lg">

                            Github
                        </Badge>
                        <Badge variant="secondary" className="bg-blue-100 text-blue-900 px-3 py-1 rounded-lg">

                            Backend
                        </Badge>
                        <Badge variant="secondary" className="bg-blue-100 text-blue-900 px-3 py-1 rounded-lg">

                            Deployment
                        </Badge>                      
                    </div>

                    {/* Start Date */}
                    <div className="text-center">
                        <p className="text-blue-900 text-sm">
                            Next Webinar <span className="font-bold">Sunday, October 19</span>
                        </p>
                    </div>

                    {/* Dotted Divider */}
                    <div className="border-t-2 border-dotted border-gray-300"></div>

                    {/* Details */}
                    <div className="flex justify-between items-center">
                        <span className="font-bold text-blue-900">Beginner Friendly</span>                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BootcampCard;
