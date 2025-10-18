import HeroContent from "./HeroContent";
import HeroContentWithBullets from "./HeroContentWithBullets";
import HeroTitle from "./HeroTitle";
import { useState } from "react";

const Hero = () => {
    const [navButton, setNavButton] = useState<string>('the_opportunity')
    return (
        <div className="flex flex-col w-full min-h-[80vh] mt-10">
            <h1 className="text-4xl font-bold mx-auto py-5">With AI, you can build anything</h1>
            <HeroTitle navButton={navButton} setNavButton={setNavButton} />
            {navButton === 'the_opportunity' && <HeroContentWithBullets />}
            {navButton === 'about' && <HeroContent navButton={navButton} setNavButton={setNavButton} />}
            {/* <HeroContent navButton={navButton} setNavButton={setNavButton}/> */}
        </div>
    );
};

export default Hero;