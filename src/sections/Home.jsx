import Hero from './Hero';
import Services from './Services';
import MenuSection from './MenuSection';
import Schedule from './Schedule';
import Contact from './Contact';

const Home = () => {
    return (
        <div className="flex flex-col gap-0">
            <Hero />
            <Services />
            <MenuSection />
            <Schedule />
            <Contact />
        </div>
    );
};

export default Home;
