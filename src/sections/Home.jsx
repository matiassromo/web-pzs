import { useState } from 'react';
import Hero from './Hero';
import Services from './Services';
import MenuSection from './MenuSection';
import Schedule from './Schedule';
import Contact from './Contact';
import CourseModal from '../components/CourseModal';

const Home = () => {
    const [showCourseModal, setShowCourseModal] = useState(true);

    return (
        <div className="flex flex-col gap-0">
            <Hero />
            <Services />
            <MenuSection />
            <Schedule />
            <Contact />
            {showCourseModal && (
                <CourseModal onClose={() => setShowCourseModal(false)} />
            )}
        </div>
    );
};

export default Home;
