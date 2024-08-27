import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { ChevronRight } from 'lucide-react';

const Terms: React.FC = () => {
    return (
        <div>
            <Navbar />
            <main className='pt-[72px]'>
                <section className="w-full pb-28 xl:w-[79%] mx-auto min-h-96 py-[100px] px-7 xl:px-0 flex flex-col gap-7">
                    <h1 className="text-[57px] font-semibold">Terms & Conditions</h1>
                    <div className="text-[16px] font-medium flex gap-2 items-center"><span>Home</span> <ChevronRight className='w-5 h-5' /> <span>Policy</span></div>

                    <p>Last updated: 01-09-2024</p>
                    <p>
                        Welcome to Nezdeck ("we," "our," or "us"). These Terms and Conditions outline the rules and regulations for the use of our website <span className='bg-zinc-100 px-2 border rounded-md'>nezdeck.com</span> and our software products. By accessing or using our services, you agree to comply with these terms. If you do not agree, please do not use our services.
                    </p>

                    <div>
                        <h2 className='font-semibold'>1. Acceptance of Terms</h2>
                        <p>
                            By accessing our website or using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
                        </p>
                    </div>

                    <div>
                        <h2 className='font-semibold'>2. Changes to Terms</h2>
                        <p>
                            We reserve the right to modify or replace these Terms and Conditions at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. Your continued use of our services after any changes signifies your acceptance of the new Terms and Conditions.
                        </p>
                    </div>

                    <div>
                        <h2 className='font-semibold'>3. User Accounts</h2>
                        <p>
                            To access certain features of our services, you may be required to create an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
                        </p>

                    </div>
                    <div>
                        <h2 className='font-semibold'>4. Use of Services</h2>
                        <p>
                            You agree to use our services only for lawful purposes and in a manner that does not infringe the rights of others or restrict or inhibit anyone else's use and enjoyment of our services.
                        </p>

                    </div>
                    <div>
                        <h2 className='font-semibold'>5. Intellectual Property</h2>
                        <p>
                            All content, trademarks, and other intellectual property on our website and within our software products are the property of Nezdeck or its licensors. You may not reproduce, distribute, or create derivative works from any content without our express written permission.
                        </p>

                    </div>
                    <div>
                        <h2 className='font-semibold'>6. Limitation of Liability</h2>
                        <p>
                            In no event shall Nezdeck, its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of, or inability to access or use, our services; (ii) any conduct or content of any third party on our services; (iii) any content obtained from our services; and (iv) unauthorized access, use, or alteration of your transmissions or content.
                        </p>

                    </div>
                 
                    <div>
                        <h2 className='font-semibold'>7. Contact Us</h2>
                        <p>
                            If you have any questions about these Terms and Conditions, please contact us at:
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

export default Terms;
