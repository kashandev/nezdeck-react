import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { ChevronRight } from 'lucide-react';

const Policy: React.FC = () => {
    return (
        <div>
            <Navbar />
            <main className='pt-[72px]'>
                <section className="w-full pb-28 xl:w-[79%] mx-auto min-h-96 py-[100px] px-7 xl:px-0 flex flex-col gap-7">
                    <h1 className="text-[57px] font-semibold">Privacy & Policy</h1>
                    <div className="text-[16px] font-medium flex gap-2 items-center"><span>Home</span> <ChevronRight className='w-5 h-5' /> <span>Policy</span></div>

                    <p>Last updated: 01-09-2024</p>

                    <p>
                        Welcome to Nezdeck ("we," "our," or "us"). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <span className='bg-zinc-100 px-2 border rounded-md'>nezdeck.com</span> , use our software products, or interact with our services.
                    </p>

                    <div>
                        <h2 className='font-semibold'>1. Information We Collect</h2>
                        <p>We may collect various types of information, including:</p>
                        <ul>
                            <li>
                                Information that identifies you as an individual, such as your full name, email address, phone number. This information is collected when you voluntarily provide it to us through our website, software, or other communication channels.
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 className='font-semibold'>2. How We Use Your Information</h2>
                        <p>We use the information we collect for the following purposes:</p>
                        <ul>
                            <li>To provide and maintain our services, ensuring they function correctly and efficiently.</li>
                            <li>To personalize your experience, including tailoring content and recommendations to your preferences.</li>
                            <li>To communicate with you regarding updates, promotions, and other relevant information.</li>
                            <li>To improve our website, software, and services through analysis of usage data and user feedback.</li>
                            <li>To protect against fraudulent or unauthorized activities and maintain the security of our systems.</li>
                        </ul>
                    </div>

                    <div>

                        <h2 className='font-semibold'>4. Your Rights</h2>
                        <p>
                            You have the right to access our software demos. If you wish to exercise any of these rights, please contact us at [contact@nezdeck.tech].
                        </p>
                    </div>
                    <div>

                        <h2 className='font-semibold'>5. Data Security</h2>
                        <p>
                            We use administrative, technical, and physical security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is completely secure, and we cannot guarantee its absolute security.
                        </p>
                    </div>
                    <div>

                        <h2 className='font-semibold'>6. Changes to This Privacy Policy</h2>
                        <p>
                            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
                        </p>
                    </div>

                    <div>
                        <h2 className='font-semibold'>7. Contact Us</h2>
                        <p>
                            If you have any questions about this Privacy Policy, please contact us at:
                        </p>
                        <p>Email: <a href="mailto:contact@nezdeck.tech">contact@nezdeck.tech</a></p>
                        <p>Phone: <a href="tel:+923700120814">+92 3700 120814</a></p>
                    </div>

                </section>
            </main>
            <Footer />

        </div>
    );
};

export default Policy;
