import React from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import CurveDivider from '../../components/ui/CurveDivider';
import { CONTACT_INFO } from '../../constants/contact';

const Privacy = () => {
    const today = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <div className="min-h-screen bg-white">
            {/* Page Hero */}
            <header className="relative w-full min-h-[30vh] flex flex-col bg-charcoal overflow-hidden">
                <Navbar />

                <div className="relative z-10 flex-grow flex flex-col items-center px-8 text-center pt-10 pb-20">
                    <h5 className="text-primary font-outfit font-bold tracking-[0.3em] uppercase mb-4 text-sm">
                        Legal Information
                    </h5>
                    <h1 className="text-5xl md:text-7xl font-outfit font-black text-white uppercase tracking-tighter italic">
                        Privacy <span className="text-primary">Policy</span>
                    </h1>
                </div>

                <CurveDivider />
            </header>

            {/* Privacy Content */}
            <section className="py-24 px-8 max-w-4xl mx-auto">
                <div className="prose prose-lg prose-invert max-w-none text-gray-600 space-y-12">
                    
                    <div className="space-y-4">
                        <p className="italic font-medium text-midnight border-l-4 border-primary pl-6 py-2 bg-primary/5 rounded-r-md">
                            It is Nargo's First Class’s policy to respect your privacy regarding any information we may collect while operating our website. This Privacy Policy applies to <a href="https://nargosfirstclass.com" className="text-primary">nargosfirstclass.com</a> (hereinafter, “us”, “we”, or “nargosfirstclass.com”).
                        </p>
                        <p>
                            We respect your privacy and are committed to protecting personally identifiable information you may provide us through the Website. We have adopted this privacy policy (“Privacy Policy”) to explain what information may be collected on our Website, how we use this information, and under what circumstances we may disclose the information to third parties.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-3xl font-outfit font-black text-midnight uppercase tracking-tight">Website Visitors</h2>
                        <p>
                            Like most website operators, Nargo's First Class collects non-personally-identifying information of the sort that web browsers and servers typically make available, such as the browser type, language preference, referring site, and the date and time of each visitor request. Our purpose in collecting non-personally identifying information is to better understand how our visitors use its website.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-3xl font-outfit font-black text-midnight uppercase tracking-tight">Gathering of Personally-Identifying Information</h2>
                        <p>
                            Certain visitors to Nargo's First Class’s websites choose to interact with us in ways that require us to gather personally-identifying information. The amount and type of information that we gather depends on the nature of the interaction. For example, we may ask visitors who contact us via our website to provide their name, phone number, and email address.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-3xl font-outfit font-black text-midnight uppercase tracking-tight">Security</h2>
                        <p>
                            The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-3xl font-outfit font-black text-midnight uppercase tracking-tight">Protection of Certain Information</h2>
                        <p>
                            Nargo's First Class discloses potentially personally-identifying and personally-identifying information only to those of its employees, contractors and affiliated organizations that (i) need to know that information in order to process it on our behalf or to provide services available at our website, and (ii) that have agreed not to disclose it to others. 
                        </p>
                        <p>
                            Nargo's First Class will not rent or sell potentially personally-identifying and personally-identifying information to anyone. Other than to its employees, contractors and affiliated organizations, we disclose information only in response to a subpoena, court order or other governmental request.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-3xl font-outfit font-black text-midnight uppercase tracking-tight">Cookies</h2>
                        <p>
                            To enrich and perfect your online experience, Nargo's First Class uses “Cookies”, similar technologies and services provided by others to display personalized content and store your preferences on your computer.
                        </p>
                        <p>
                            A cookie is a string of information that a website stores on a visitor’s computer, and that the visitor’s browser provides to the website each time the visitor returns. Nargo's First Class uses cookies to help us identify and track visitors, their usage of our website, and their website access preferences.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-3xl font-outfit font-black text-midnight uppercase tracking-tight">E-commerce</h2>
                        <p>
                            Those who engage in transactions with Nargo's First Class – by purchasing our services or products, are asked to provide additional information, including as necessary the personal and financial information required to process those transactions. In each case, we collect such information only insofar as is necessary or appropriate to fulfill the purpose of the visitor’s interaction with us.
                        </p>
                    </div>

                    <div className="pt-12 border-t border-gray-100 mt-20">
                        <p className="text-midnight font-bold mb-2">Contact Information</p>
                        <p>
                            If you have any questions about this Privacy Policy, please contact us via email at <a href={`mailto:${CONTACT_INFO.email}`} className="text-primary hover:underline">{CONTACT_INFO.email}</a> or via phone at <span className="text-primary">{CONTACT_INFO.phone}</span>.
                        </p>
                        <p className="mt-8 text-sm text-gray-400">
                            This document was last updated on {today}
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Privacy;
