import React from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import Button from '../../components/ui/Button';
import CurveDivider from '../../components/ui/CurveDivider';
import { Phone, Mail, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '../../constants/contact';

// Reusing some assets
import teamPhoto from '../../assets/images/home_gallery_4.jpg';
import member1 from '../../assets/images/home_gallery_1.jpg';
import member2 from '../../assets/images/home_gallery_2.jpg';
import member3 from '../../assets/images/home_gallery_3.jpg';
import member4 from '../../assets/images/home_gallery.jpg';
import heroBg from '../../assets/images/home_hero_bg.jpg';

import { teamData } from '../../constants/team';
import TeamMemberCard from './components/TeamMemberCard';
import PromoBanner from './components/PromoBanner';

const About = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* Page Hero */}
            <header className="relative w-full min-h-[30vh] flex flex-col bg-charcoal overflow-hidden">
                <Navbar />

                <div
                    className="absolute inset-0 z-0 opacity-40 bg-cover bg-center"
                    style={{ backgroundImage: `url(${heroBg})` }}
                />

                <div className="relative z-10 flex-grow flex items-center justify-center">
                    <h1 className="text-5xl md:text-7xl font-outfit font-black text-white uppercase tracking-tighter italic">
                        About Us
                    </h1>
                </div>

                <CurveDivider />
            </header>

            {/* Story Section */}
            <section className="py-24 px-8 max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-16 items-start">
                    {/* Empty spacer to maintain layout position */}
                    <div className="hidden lg:block lg:w-1/2" />

                    <div className="w-full lg:w-1/2">
                        <h5 className="text-primary font-outfit font-bold tracking-widest uppercase mb-4">
                            It's All About Our Story
                        </h5>
                        <h2 className="text-3xl md:text-4xl font-outfit font-extrabold text-midnight mb-8 leading-tight">
                            Where Art Meets <span className="text-primary italic">Precision</span>
                        </h2>

                        <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                            <p>
                                We are more than just a grooming studio; we are a destination where creativity,
                                precision, and top-tier hygiene converge. Born from a passion for total transformation,
                                Nargo's First Class has redefined the standard of male grooming in Ghana.
                            </p>
                            <p>
                                We specialize in high-precision fades, artistic beard sculpting, and non-surgical hair restoration
                                systems — delivering exceptional craftsmanship and confidence with every chair session.
                                Whether it's your first fade or a bold restoration, our dedicated team is here to bring
                                your vision of excellence to life.
                            </p>
                            <p className="font-bold text-midnight">
                                Your presence is our canvas — let's create a masterpiece together.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-24 bg-section-bg px-8">
                <div className="max-w-7xl mx-auto text-center mb-16">
                    <h5 className="text-primary font-outfit font-bold tracking-widest uppercase mb-4">
                        Meet Our Awesome Team
                    </h5>
                    <h2 className="text-3xl md:text-5xl font-outfit font-extrabold text-midnight mb-6">
                        The Artists Behind The Magic
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto text-lg">
                        Our talented team is made up of skilled artists and industry professionals dedicated to turning
                        your grooming vision into reality with precision and passion.
                    </p>
                </div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                    {teamData.map((member, index) => (
                        <TeamMemberCard key={index} member={member} />
                    ))}
                    <PromoBanner variant="card" />
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default About;
