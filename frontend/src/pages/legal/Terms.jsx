import React from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import CurveDivider from '../../components/ui/CurveDivider';
import { CONTACT_INFO } from '../../constants/contact';

const Terms = () => {
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
                        Terms of <span className="text-primary">Service</span>
                    </h1>
                </div>

                <CurveDivider />
            </header>

            {/* Terms Content */}
            <section className="py-24 px-8 max-w-4xl mx-auto">
                <div className="prose prose-lg prose-invert max-w-none text-gray-600 space-y-12">
                    
                    <div className="space-y-4">
                        <p className="italic font-medium text-midnight border-l-4 border-primary pl-6 py-2 bg-primary/5 rounded-r-md">
                            These terms of service (“Agreement”) sets forth the general terms of service of your use of the “Nargo's First Class” website (“Website” or “Service”) and any of its related products and services (collectively, “Services”). This Agreement is legally binding between you (“User”, “you” or “your”) and Nargo's First Class (“Operator”, “we”, “us” or “our”).
                        </p>
                        <p>
                            By accessing and using the Website and Services, you acknowledge that you have read, understood, and agree to be bound by the terms of this Agreement. If you are entering into this Agreement on behalf of a business or other legal entity, you represent that you have the authority to bind such entity to this Agreement, in which case the terms “User”, “you” or “your” shall refer to such entity.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-3xl font-outfit font-black text-midnight uppercase tracking-tight">Accounts and membership</h2>
                        <p>
                            You must be at least 18 years of age to use the Website and Services. By using the Website and Services and by agreeing to this Agreement you warrant and represent that you are at least 18 years of age. If you create an account on the Website, you are responsible for maintaining the security of your account and you are fully responsible for all activities that occur under the account and any other actions taken in connection with it.
                        </p>
                        <p>
                            We may, but have no obligation to, monitor and review new accounts before you may sign in and start using the Services. Providing false contact information of any kind may result in the termination of your account. You must immediately notify us of any unauthorized uses of your account or any other breaches of security. 
                        </p>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-3xl font-outfit font-black text-midnight uppercase tracking-tight">User content</h2>
                        <p>
                            We do not own any data, information or material (collectively, “Content”) that you submit on the Website in the course of using the Service. You shall have sole responsibility for the accuracy, quality, integrity, legality, reliability, appropriateness, and intellectual property ownership or right to use of all submitted Content.
                        </p>
                        <p>
                            We may monitor and review the Content on the Website submitted or created using our Services by you. You grant us permission to access, copy, distribute, store, transmit, reformat, display and perform the Content of your user account solely as required for the purpose of providing the Services to you.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-3xl font-outfit font-black text-midnight uppercase tracking-tight">Prohibited uses</h2>
                        <p>
                            In addition to other terms as set forth in the Agreement, you are prohibited from using the Website and Services or Content: 
                            (a) for any unlawful     purpose; 
                            (b) to solicit others to perform or participate in any unlawful acts; 
                            (c) to violate any international, federal, provincial or state regulations, rules, laws, or local ordinances; 
                            (d) to infringe upon or violate our intellectual property rights or the intellectual property rights of others; 
                            (e) to harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate based on gender, sexual orientation, religion, ethnicity, race, age, national origin, or disability; 
                            (f) to submit false or misleading information; 
                            (g) to upload or transmit viruses or any other type of malicious code; 
                            (h) to spam, phish, pharm, pretext, spider, crawl, or scrape; 
                            (i) for any obscene or immoral purpose; or 
                            (j) to interfere with or circumvent the security features of the Website and Services.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-3xl font-outfit font-black text-midnight uppercase tracking-tight">Intellectual property rights</h2>
                        <p>
                            This Agreement does not transfer to you any intellectual property owned by the Operator or third parties, and all rights, titles, and interests in and to such property will remain (as between the parties) solely with the Operator. All trademarks, service marks, graphics and logos used in connection with the Website and Services, are trademarks or registered trademarks of Nargo's First Class or its licensors.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-3xl font-outfit font-black text-midnight uppercase tracking-tight">Limitation of liability</h2>
                        <p>
                            To the fullest extent permitted by applicable law, in no event will the Operator, its affiliates, directors, officers, employees, agents, suppliers or licensors be liable to any person for any indirect, incidental, special, punitive, cover or consequential damages (including, without limitation, damages for lost profits, revenue, sales, goodwill, use of content, impact on business, business interruption, loss of anticipated savings, loss of business opportunity) however caused.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-3xl font-outfit font-black text-midnight uppercase tracking-tight">Dispute resolution</h2>
                        <p>
                            The formation, interpretation, and performance of this Agreement and any disputes arising out of it shall be governed by the substantive and procedural laws of Ghana without regard to its rules on conflicts or choice of law. The exclusive jurisdiction and venue for actions related to the subject matter hereof shall be the courts located in Ghana.
                        </p>
                    </div>

                    <div className="pt-12 border-t border-gray-100 mt-20">
                        <p className="text-midnight font-bold mb-2">Contacting us</p>
                        <p>
                            If you would like to contact us to understand more about this Agreement or wish to contact us concerning any matter relating to it, you may send an email to <a href={`mailto:${CONTACT_INFO.email}`} className="text-primary hover:underline">{CONTACT_INFO.email}</a>
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

export default Terms;
