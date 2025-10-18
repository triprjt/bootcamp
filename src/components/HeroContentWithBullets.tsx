import { useState, useEffect } from "react";
import CardTestimonial from "./CardTestimonial";
const HeroContentWithBullets = () => {
    const bulletArray = [
        {
            id: 1,
            title: "Most people think building with AI takes months of learning and deep technical skills.",
            description1: "It doesn't.",
            description2: "With the right approach, AI can boost your productivity by 100x.",
            description3: "That's why we created this bootcamp — a series of sprints where you'll learn to think like a developer, leverage AI tools, and build real, working products alongside a group of others."
        },
        {
            id: 2,
            title: "Focus, execute, repeat, win",
            description1: "97% developers are good at only one thing. frontend, backend, design, deployment.",
            description2: "With AI its now possible that 1 person can have all these skills, and more.",
            description3: "Learn 80% in 20% of the time."
        },
        {
            id: 3,
            title: 'Learn to build AI agents, multi-agent workflows, and AI-powered tools',
            description1: 'Youtube videos never go beyond hello world apps.',
            description2: 'Instead you build real projects, used by real people, get job promotions or earn passive income.',
            description3: 'What will you learn:',
            listOfSkills: [
                "Ideate, Build, Launch",
                "Gen AI full stack development",
                "AI cost optimization",
                'Debugging with AI',
                'Multi-agent Workflows',
                'Software Design',
                'Deployment & Monitoring tools'
            ]
        },
        {
            id: 4,
            title: "Word on the street",
            description1: "Here's what people are saying about their experience",
            description2: "",
            listOfReviews: [
                { id: 1, name: "Renuka C",currentRole: "Frontend, 3Y", image: "https://blog-meme.blr1.digitaloceanspaces.com/bootcampimage3.jpeg", testimonial: "I think the Youtube videos on AI projects are mostly surafce level. I want to build full stack projects, so that switch from frontend to full stack." },
                { id: 2, name: "Saurav R",currentRole: "Backend, 2Y", image: "https://blog-meme.blr1.digitaloceanspaces.com/bootcampimage2.jpeg", testimonial: "The first project was the most difficult. Because I had to learn frontend from scratch. Right now i am at my 3rd project. And it takes lesser time now. Thanks to the great mentorship." },
                { id: 3, name: "Prashant T",currentRole: "PM, 5Y", image: "https://blog-meme.blr1.digitaloceanspaces.com/bootcampimage1.jpeg", testimonial: " The most important skill in the future is the ability to think like a developer. After this bootcamp, I am now very comfortable at talking to developers about product decisions. Development is not just about coding, it is about thinking." },
                { id: 4, name: "Sagar S",currentRole: "Devops, 7Y", image: "https://blog-meme.blr1.digitaloceanspaces.com/bootcampimage4.jpeg", testimonial: "High paced content, with more emphasis on building projects. Rajat helped me clear my doubts and get started with the projects." }
            ]
        }
    ]
    const [rowVisible, setRowVisible] = useState(false)
    const [currentRow, setCurrentRow] = useState(0)
    const handleScrollBehavior = () => {
        if (window.scrollY > 100) {
            setRowVisible(true)
        } else {
            setRowVisible(false)
        }
    }

    const imp = "The most important skill in the future is the ability to think like a developer"
    useEffect(() => {
        window.addEventListener('scroll', handleScrollBehavior)
        return () => {
            window.removeEventListener('scroll', handleScrollBehavior)
        }
    }, [])
    const containerTitle = (id: number) => {
        const containerTitleContent = [{ id: 1, title: 'The shift' }, { id: 2, title: 'Take action' }, { id: 3, title: 'The framework' }, { id: 4, title: 'Testimonials' }]
        return <div className="text-xl flex items-center justify-center font-bold my-auto rounded-[20px] border border-indigo-200 px-2 py-1 gap-2">
            <p className="text-lg font-bold my-auto">{id}</p>
            <span>{'|'}</span>
            <p className="text-lg font-bold my-auto">{containerTitleContent.find((item) => item.id === id)?.title}</p>
        </div>
    }
    return (
        <div className="flex flex-col w-full h-full px-1 sm:px-4 md:px-8 lg:px-20 mt-10">
            <div className="flex flex-col items-start justify-start w-full h-full gap-20">
                {bulletArray.map((bullet) => (
                    <div key={bullet.id} className="flex flex-col items-start justify-start w-full h-full gap-5">
                        {/* <p className="text-2xl font-bold my-auto">O</p> */}
                        {containerTitle(bullet.id)}
                        <div className="flex flex-col items-start justify-start w-full h-full lg:px-4 px-1 sm:px-1 md:px-2 gap-2 ">
                            <h1 className="text-2xl font-bold">{bullet.title}</h1>
                            <p className="text-lg">{bullet.description1}</p>
                            <p className="text-lg">{bullet.description2}</p>
                            <p className="text-lg">{bullet.description3}</p>
                            {bullet.listOfSkills && bullet.listOfSkills.map((skill) => (
                                <li key={skill} className="text-lg">{skill}</li>
                            ))}
                            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-1 sm:px-4 gap-2">
                                {bullet.listOfReviews && bullet.listOfReviews.map((item, id) => {
                                    return <CardTestimonial key={id} name={item.name} image={item.image} currentRole={item.currentRole} testimonial={item.testimonial} />
                                })}
                            </div>

                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
};

export default HeroContentWithBullets;