interface HeroContentProps {
    navButton: string;
    setNavButton: (button: string) => void;
}

const HeroContent = ({ navButton, setNavButton }: HeroContentProps) => {


    const whatContent = {
        title: "In this age and time, if you dont understand how AI can help you become the top 1% of your field, then you need to think again. ",
        subtitle: "Can AI make your skills obsolete or make you a superhuman in your field?",
        content: ['Learn to build AI agents, multi-agent workflows, and AI-powered tools', '1 person can now build 0 to 1 apps with design, development, deploymeny, monitoring', 'not just tech skills, but stuff like for content automation, marketing, SEO, GTM', 'Build real projects, get promoted faster and earn more money']
    }
    const whyContent = {
        title: "AI is not perfect, it makes mistakes. AI cannot think for itself that's why it's called artificial intelligence, that's why it needs you to guide it.",
        subtitle: "AI is powerful, but not accurate. When used correctly, it can be a game changer.",
        content: ['AI is not just about coding, it is about thinking', 'Automated AI workflows save 90% of your time, when done correctly ', 'It is still early to start learning AI']

    }
    const howContent = {
        title: 'Learn. Build. Fail. Repeat.',
        subtitle: 'Beat the competition. Start building now. ',
        content: ['Come with an idea, and we will help you build it.', 'We will help you deploy it. ', 'We will help you market it. ', 'We will help you get ahead in your career']
    }

    const aboutContent = {
        title: "The story",
        subtitle: "For the last 6 years I am building products and helping people build products. Around 10 months ago, I quit my job to work as a startup AI consultant. I have worked with 10+ startups to help them integrate AI into their systems. I realised that most people are not aware of the opportunities that AI can provide to them. I want to help you maximise the AI potential in your life whether you are a developer or not",
        content: {
            listOfItems: [
                { id: 1, name: "Oxysystems.in", description: "0 to 1 Oxygen supply system on wheels ", specialRemark: "Successful exit" },
                { id: 2, name: "Grammit", description: "Habit building platform for programmers", specialRemark: "Failed startup" },
                { id: 3, name: "Charchagram", description: "Anonymous Community discussion platform ", specialRemark: "2000+ users" },
                { id: 4, name: "ESAB", description: "SOE optimsation tool", specialRemark: "ongoing project" }
            ],
            listOfexperience: [
                { id: 1, name: "Tech Lead", description: "Singapore based fintech and blockchain startup.", specialRemark: "1.5 years" },
                { id: 2, name: "Software Engineer", description: "ex-Jaguar Land Rover", specialRemark: "3.5 years" },
            ],
            imageUrl: ""
        }
    }
    const content: { [key: string]: { title: string, subtitle: string, content: any } } = { 'the_opportunity': whatContent, 'why': whyContent, 'about': aboutContent }
    const contentToShow = content[navButton];

    if (!contentToShow) return null;

    return (
        <div className="flex flex-col items-start w-full h-full lg:px-20 px-10 sm:px-4 md:px-8 mt-10">
            <div className="flex flex-col items-center justify-center w-full h-full  mb-10 gap-[2px]">
                <h1 className="text-2xl font-bold w-1/2 text-center w-full ">{contentToShow.title}</h1>
                <span className="border-b border-indigo-200 w-1/10"></span>
            </div>

            <div className="flex sm:flex-row flex-col items-center justify-center w-full h-full gap-10">
                <p className="text-lg w-full sm:w-4/5 text-start h-full my-auto">{contentToShow.subtitle}</p>

                <div className="flex justify-center items-center h-full w-full ">
                    <div className="p-6 border rounded-2xl flex flex-col items-center">
                        <img
                            src="https://blog-meme.blr1.digitaloceanspaces.com/profilepic.jpg"
                            alt="Profile picture"
                            className="w-full h-auto object-cover rounded-xl"
                        />
                        <div className="text-center">
                            <h1 className="font-outfit font-bold text-2xl">
                                Rajat Tripathi
                            </h1>
                            <p className="text-[#151515]/70">IITK graduate, 2X startup founder(1 exit), ex-tech lead at a fintech startup</p>
                        </div>
                    </div>
                </div>
            </div>


            {/* experience container start */}
            <div className="flex sm:flex-row flex-col items-start justify-start w-full h-full gap-10 py-10">
                <div className="flex flex-col items-start justify-start w-full h-full gap-2">
                    <h1 className="text-xl font-semibold">Startup experience (3+years)</h1>

                    <div className="flex flex-col w-full rounded-lg gap-4 p-4">
                        {contentToShow.content.listOfItems.map((item: any) => (
                            <div key={item.id} className="flex flex-col items-start justify-start w-full h-full gap-2">
                                <div className="flex items-center w-full h-full gap-1">
                                    <h2 className="font-semibold">{item.name}</h2>
                                    <p className={`text-xs text-gray-500 mt-[-10px] font-medium rounded-lg px-2 py-1 ${!item.specialRemark.includes('Failed') ? 'bg-green-200' : 'bg-orange-200'}`}>{item.specialRemark}</p>
                                </div>

                                <p className="text-sm text-gray-500">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col items-start justify-start w-full h-full gap-2">
                    <h1 className="text-xl font-semibold">Corporate experience (5+years)</h1>
                    <div className="w-full rounded-lg p-4">
                        {contentToShow.content.listOfexperience.map((item: any) => (
                            <div key={item.id} className="flex flex-col items-start justify-start w-full h-full gap-2 mb-4">
                                <div className="flex items-center w-full h-full gap-1">
                                    <h2 className="font-semibold">{item.name}</h2>
                                    <p className="text-xs text-gray-500 font-medium mt-[-10px] rounded-lg px-2 py-1 bg-blue-200">{item.specialRemark}</p>
                                </div>
                                <p className="text-sm text-gray-500">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* experience container end */}
        </div>
    )
};

export default HeroContent;