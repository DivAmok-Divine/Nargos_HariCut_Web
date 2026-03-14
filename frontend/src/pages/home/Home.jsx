import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/layout/Header';
import gallery1 from '../../assets/images/home_gallery_1.jpg';
import gallery2 from '../../assets/images/home_gallery_2.jpg';
import gallery3 from '../../assets/images/home_gallery_3.jpg';
import gallery4 from '../../assets/images/home_gallery.jpg';
import StaggeredCarousel from './components/StaggeredCarousel';

import Button from '../../components/ui/Button';

import Card from './components/CarouselCard';
import ServiceCarousel from './components/ServiceCarousel';

import { servicesData, pricingData } from '../../constants/services';
import PricingCard from './components/PricingCard';

// Import Pricing Backgrounds
import pricingBg from '../../assets/images/pricing_bg.png';
import ReviewSection from './components/ReviewSection';
import Footer from '../../components/layout/Footer';
import PromoBanner from '../about/components/PromoBanner';

const Home = () => {
  const images = [gallery1, gallery2, gallery3, gallery4];

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Welcome Section  */}
      <section className="py-32 px-8 max-w-7xl mx-auto bg-white overflow-hidden">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">

          {/* Left Side: Text Content */}
          <div className="w-full lg:w-2/5 text-left">
            <h5 className="text-primary font-outfit font-bold text-sm tracking-wider uppercase mb-2">
              Welcome To
            </h5>
            <h2 className="text-4xl md:text-5xl font-outfit font-extrabold text-midnight mb-8">
              Norgo's First Class
            </h2>

            <div className="space-y-6 text-gray-600 text-lg leading-relaxed max-w-lg">
              <p>
                Where grooming becomes art and every cut tells a story.
                Norgo's First Class is a sanctuary where precision, confidence,
                and style converge to redefine your presence.
              </p>
              <p>
                With our elite studio in Tamale, we specialize in high-precision fades,
                professional beard sculpting, and non-surgical hair restoration systems
                that turn back the clock and restore your edge.
              </p>
              <p>
                Built on a foundation of mastery and passion, Norgo's has become
                the gold standard in Ghanaian male grooming. Our growing community
                of loyal clients is a testament to the detail and respect we bring
                to every chair.
              </p>
            </div>

            <Link to="/about">
              <Button variant="primary" className="mt-10">
                Know More
              </Button>
            </Link>
          </div>

          {/* Right Side: Staggered Image Carousel - Exposing More */}
          <div className="w-full lg:w-3/5 flex items-center">
            <div className="w-[140%] lg:-mr-[40%]">
              <StaggeredCarousel images={images} />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section  */}
      <section className="py-20 bg-section-bg overflow-hidden">
        <div className="max-w-7xl mx-auto text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-outfit font-extrabold text-primary mb-4">
            High-Precision Craftsmanship For Every Occasion
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg tracking-wide">
            We offer a wide range of first-class grooming and restoration services
            designed to help you express yourself boldly and beautifully.
          </p>
        </div>

        <div className="w-full lg:px-[10%] px-8">
          <ServiceCarousel>
            {servicesData.map((service, index) => (
              <Card
                key={index}
                className="w-[300px] shrink-0"
                backgroundImage={service.bg}
                title={service.title}
                description={service.description}
                icon={<service.icon className="w-[60px] h-[60px] text-primary" />}
              />
            ))}
          </ServiceCarousel>
        </div>
      </section>

      {/* Promotional Banner */}
      <PromoBanner variant="horizontal" />

      {/* Pricing Section */}
      <section className="relative pt-32 pb-24">
        {/* Background Image Header */}
        <div className="absolute top-0 left-0 w-full h-[500px] z-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${pricingBg})` }}
          />
          <div className="absolute inset-0 bg-midnight/90 flex flex-col items-center justify-center px-8 text-center pb-32">
            <h2 className="text-4xl md:text-5xl font-outfit font-extrabold text-white mb-6">
              Priced To Suit Everyone
            </h2>
            <p className="text-white/70 max-w-2xl text-lg leading-relaxed font-light">
              Our services are thoughtfully priced so everyone can enjoy bold transformations,
              elite grooming, and premium restoration treatments — without breaking the bank.
            </p>
          </div>
        </div>

        {/* Pricing Cards Container - Staggered Layout */}
        <div className="relative z-10 max-w-7xl mx-auto px-8 mt-40">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
            {pricingData.map((data, index) => {
              const staggeredClasses = [
                "scale-90 lg:mt-0",
                "scale-95 lg:mt-12",
                "scale-100 lg:mt-24",
                "scale-105 lg:mt-36"
              ];
              return (
                <PricingCard
                  key={index}
                  title={data.title}
                  services={data.services}
                  className={staggeredClasses[index]}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* Review Us Section */}
      <ReviewSection />

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default Home;
