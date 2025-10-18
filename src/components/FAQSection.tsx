const FAQSection = () => {

    const faqArray = [
        {
            id: 1,
            question: "What is the purpose of this bootcamp?",
            answer: "The purpose of this bootcamp is to teach you how to build AI agents, multi-agent workflows, and AI-powered tools."
        },
        {
            id: 2,
            question: "What is the purpose of this bootcamp?",
            answer: "The purpose of this bootcamp is to teach you how to build AI agents, multi-agent workflows, and AI-powered tools."
        },
        {
            id: 3,
            question: "What is the purpose of this bootcamp?",
            answer: "The purpose of this bootcamp is to teach you how to build AI agents, multi-agent workflows, and AI-powered tools."
        },
        {
            id: 4,
            question: "What is the purpose of this bootcamp?",
            answer: "The purpose of this bootcamp is to teach you how to build AI agents, multi-agent workflows, and AI-powered tools."
        },
        {
            id: 5,
            question: "What is the purpose of this bootcamp?",
            answer: "The purpose of this bootcamp is to teach you how to build AI agents, multi-agent workflows, and AI-powered tools."
        }
    ]
    return (
        <div className="flex flex-col items-start justify-start w-full h-full px-20 gap-20">
            <h1 className="text-2xl font-bold">FAQ</h1>
            {faqArray.map((faq) => (
                <div key={faq.id} className="flex flex-col items-start justify-start w-full h-full px-20 gap-20">
                    <h2 className="text-2xl font-bold">{faq.question}</h2>
                    <p className="text-lg">{faq.answer}</p>
                </div>
            ))}
        </div>
    )
}

export default FAQSection;