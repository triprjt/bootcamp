interface HeroTitleProps {
    navButton: string;
    setNavButton: (button: string) => void;
}

const HeroTitle = ({ navButton, setNavButton }: HeroTitleProps) => {

    return (
        <div className="flex items-center justify-center w-full  px-10 gap-10">
            <div className="flex flex-col items-center justify-center w-fit gap-1 relative">
                <h1 onClick={() => setNavButton('the_opportunity')} className={navButton === 'the_opportunity' ? 'text-indigo-500' : 'text-gray-500'}>The opportunity</h1>
                {navButton === 'the_opportunity' && <div className="w-[10px] h-[10px] bg-gray-200 rounded-full absolute bottom-[-10px] right-[40%] px-2"></div>}
            </div>
            <div className="w-fit gap-1 relative">
                <h1 onClick={() => setNavButton('about')} className={navButton === 'about' ? 'text-indigo-500' : 'text-gray-500'}>About</h1>
                {navButton === 'about' && <div className="w-[10px] h-[10px] bg-gray-200 rounded-full absolute bottom-[-10px] right-[30%] px-2"></div>}
            </div>

        </div>
    );
};

export default HeroTitle;