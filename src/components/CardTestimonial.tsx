const CardTestimonial = ({ name, image, currentRole, testimonial }: { name: string, image: string, currentRole: string, testimonial: string }) => {
    return (
        <div className="flex flex-col items-start justify-start w-full h-full gap-2 rounded-lg py-2 px-[2px] border border-gray-400">
            <div className="flex flex-col items-center justify-center w-full h-fit gap-1 pb-2">
                <img src={image} alt={name} className="w-10 h-10 rounded-full " />
                <div className="flex flex-col items-center justify-center w-full h-fit gap-2 ">
                    <p className="text-lg font-bold">{name}</p>
                    <p className="text-xs text-gray-500 rounded-lg mt-[-10px] px-[8px] py-[1px] bg-gray-200">{currentRole}</p>
                </div>
            </div>
            <p className="text-lg text-center " >{testimonial}</p>
        </div>
    )
}

export default CardTestimonial;