const bootcampNutshell = () => {
    const listOfItems = [
        {
            id: 1,
            title: "Live online bootcamp"            
        },
        {
            id: 2,
            title: "Ideal for all skill levels "            
        },
        {
            id: 3,
            title: "Personalised Mentorship by ex tech leads and AI experts",
        },
        {
            id: 4,
            title: "Focus building real projects, and problem solving in software development",
        },
        {
            id: 5,
            title: "Price is 20,000 per seat. Limited seats available.",
        }
    ]
    return (
        <div className="flex flex-col items-start justify-start w-full h-full px-20 gap-20">
            <h1 className="text-2xl font-bold">Bootcamp Nutshell</h1>
            <div className="flex flex-col items-start justify-start w-full h-full px-20 gap-20">
                {listOfItems.map((item) => (
                    <div key={item.id} className="flex flex-col items-start justify-start w-full h-full px-20 gap-20">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2L2 22h20L12 2Z" stroke="black" stroke-width="2" stroke-linejoin="round"/>
                        </svg>
                        <h2 className="text-2xl font-bold">{item.title}</h2>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default bootcampNutshell;