import { ListEnd } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Section from '../components/Section';
import Image from '../components/Image';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import ChatBox from '../components/ChatBox';

const Home = () => {
    return (
        <>
            <div>
                <Navbar />
                <main>
                    <section className="bg-zinc-100 pt-[70px] lg:pt-0 grid grid-cols-1 lg:grid-cols-2 min-h-96 ">
                        <div className="w-full lg:max-w-[79%] xl:ml-auto pb-[32px] lg:py-[92px]">
                            <div className="pl-[20px] xl:pl-0 p-20 md:pr-40 lg:pr-0 xl:pr-[60px] xl:pr-[120px] flex flex-col gap-[3vw]">
                                <div className="">
                                    <div
                                        className="  bg-white px-[8px] py-0.5 mb-5 inline-block rounded-sm">Unlock Growth with Cutting-Edge IT Services</div>
                                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-medium">Power Your Business Growth with Tailored IT Solutions</h1>
                                </div>
                                <div>
                                    <p className=" mb-8 ">Unleash New Opportunities with Tailored IT Solutions <br />for Your Business</p>
                                    <div className="flex gap-5 items-center">
                                        <Link to={'/products'} target='_blank'><Button>Start Your Journey</Button></Link>
                                        <div className="flex items-center gap-3">
                                            <Link to={'/products'}>
                                                <button
                                                    className=" transition-all w-12 h-12 rounded-full bg-transparent hover:bg-black border border-black text-black hover:text-white py-3.5 text-sm font-medium flex justify-center items-center"><ListEnd /></button>
                                            </Link>
                                            <p className="font-medium text-sm">Explore Our Products</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hidden lg:block h-full flex items-center">
                            <Image className="h-full object-cover  rounded-md"
                                src="https://finpath.keydesign.xyz/business-consulting/wp-content/uploads/sites/10/2023/11/business-slide-a.jpg"
                                alt="Cutting-Edge IT Services" />

                        </div>
                    </section>
                    <section className="bg-primary  min-h-96  pb-[192px] ">
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            <div className="w-full lg:max-w-[79%] xl:ml-auto pt-[92px] pb-[32px] lg:py-[92px]">
                                <div className="pl-[20px] xl:pl-0 pr-[60px] xl:pr-[120px] flex flex-col gap-[3vw]">
                                    <div className="text-white">
                                        <div id="sectionTag" className=" bg-zinc-50/5 px-[8px] py-0.5 mb-5 inline-block rounded-sm">
                                            Our Commitment</div>
                                        <h1 id="sectiontext-3xlTimd:tle" className="text-[37px] lg:text-[47px] font-medium"
                                            style={{ lineHeight: '60px' }}>Driving Your Success with Expertise and Innovation</h1>
                                        <p>Why Choose Us?</p>
                                    </div>
                                </div>
                            </div>
                            <div className="pb-[92px] pt-0 lg:py-[92px] px-7">
                                <div>
                                    <div className="flex flex-col lg:flex-row items-center">
                                        <button
                                            className="w-full lg:max-w-[195px] h-[50px] text-primary  bg-white font-medium">Expertise</button>
                                        <button
                                            className="w-full lg:max-w-[195px] h-[50px] text-white bg-zinc-50/5 font-medium">Innovative</button>
                                        <button
                                            className="w-full lg:max-w-[195px] h-[50px] text-white bg-zinc-50/5 font-medium">Accountability</button>
                                    </div>
                                    <div className="mt-[30px] text-white max-w-full lg:max-w-[585px]">
                                        <p >With over a decade of industry experience, we deliver reliable IT solutions that propel your business forward. Our expert team is committed to your long-term success.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="w-full xl:max-w-[79%] flex justify-center flex-col md:flex-row gap-5 lg:gap-8 xl:mx-auto px-7 xl:px-0">

                            <div
                                className="cards w-full  h-[284px] bg-zinc-50/5 md:border-b-2 border-zinc-100/60 flex justify-center items-center flex-col">
                                <Image
                                    src="https://finpath.keydesign.xyz/business-consulting/wp-content/uploads/sites/10/2023/11/57.svg"
                                    alt="Years of Excellence" />
                                <p className="animateText text-[36px] text-white font-medium">02+</p>
                                <p className="animateText text-[16px] text-white px-2 text-center">Years of Excellence</p>
                            </div>

                            <div
                                className="cards w-full  h-[284px] bg-zinc-50/5 md:border-b-2 border-zinc-100/60 flex justify-center items-center flex-col">
                                <Image
                                    src="https://finpath.keydesign.xyz/business-consulting/wp-content/uploads/sites/10/2023/11/52.svg"
                                    alt="Successful Projects" />
                                <p className="animateText text-[36px] text-white font-medium">50+</p>
                                <p className="animateText text-[16px] text-white px-2 text-center">Successful Projects</p>
                            </div>

                            <div
                                className="cards w-full  h-[284px] bg-zinc-50/5 md:border-b-2 border-zinc-100/60 flex justify-center items-center flex-col">
                                <Image
                                    src="https://finpath.keydesign.xyz/business-consulting/wp-content/uploads/sites/10/2023/11/53.svg"
                                    alt="Ultra Software Products" />
                                <p className="animateText text-[36px] text-white font-medium">03</p>
                                <p className="animateText text-[16px] text-white px-2 text-center">Software Products</p>
                            </div>

                            <div
                                className="cards w-full  h-[284px] bg-zinc-50/5 md:border-b-2 border-zinc-100/60 flex justify-center items-center flex-col">
                                <Image
                                    src="https://finpath.keydesign.xyz/business-consulting/wp-content/uploads/sites/10/2023/11/58.svg"
                                    alt="Certified IT Experts" />
                                <p className="animateText text-[36px] text-white font-medium">15+</p>
                                <p className="animateText text-[16px] text-white px-2 text-center">Certified IT Experts</p>
                            </div>


                        </div>
                    </section>

                    <Section
                        tag={'Strategic IT Planning'}
                        image="https://finpath.keydesign.xyz/business-consulting/wp-content/uploads/sites/10/2023/11/business-1.jpg"
                        heading={'Expand Your Business with Proactive IT Strategies'}
                        description={`Stay ahead with IT plans that optimize resources and embrace technological change.`}
                        points={['Optimize IT Resource Allocation', 'Leverage Advanced Technology', 'Achieve Long-Term Digital Transformation']}
                        // actionBtn="Learn More"
                    />

                    <Section
                        tag={'IT Performance Optimization'}
                        image="https://finpath.keydesign.xyz/business-consulting/wp-content/uploads/sites/10/2023/11/business-img-2.jpg"
                        heading={'Boost Efficiency with Comprehensive IT Performance Analysis'}
                        description={`Enhance your IT systems for better performance and sustainable growth.`}
                        points={['Streamline IT Resource Usage', 'Adopt Cutting-Edge Technologies', 'Ensure Lasting Business Transformation']}
                        // actionBtn="Learn More"

                        position='right-to-left' />

                    <Section
                        tag={'End-to-End Development'}
                        image="https://finpath.keydesign.xyz/business-consulting/wp-content/uploads/sites/10/2023/11/business-1.jpg"
                        heading={'Transform Ideas into Reality with Full-Stack Development'}
                        description={`Develop robust, scalable applications that align with your business goals.`}
                        points={['Maximize IT Resource Efficiency', 'Integrate the Latest Technology', 'Drive Long-Term Digital Success']}
                        // actionBtn="Learn More"

                    />

                    <section className="bg-zinc-100  min-h-96  py-[92px] ">
                        <div
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-10  items-center w-full xl:w-[79%] px-7 xl:px-0 mx-auto mb-10">

                            <div className="col-span-3 text-[47px] font-semibold" style={{ lineHeight: '0px' }}>
                                Customer Testimonials
                            </div>
                            <p className="col-span-3 text-[18px] font-normal">Nezdeck Systems guided us through complex IT
                                regulations with ease, significantly boosting our operational efficiency.</p>
                            {/* <div className="lg:text-end">
                                <Button>Read All Testimonials</Button>
                            </div> */}
                        </div>
                        <div className="w-full xl:max-w-[79%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8 mx-auto px-7 xl:px-0">
                            <div
                                className=" w-full lg:max-w-[400px] min-h-[357px] bg-white flex  flex-col justify-between p-7 gap-7">
                                <p className="text-[18px] font-normal">"Nezdeck delivered a website that has become our lead generation powerhouse. Since its launch, we've seen a 40% boost in qualified leads. Their expertise in design and functionality made them the perfect partner for our growth."</p>
                                <div className="flex items-center gap-2">
                                    <Image className="w-14 h-14 rounded-full bg-zinc-100 "
                                        src="/dist/img/reviews/constellact.svg"
                                        alt="constellact" />
                                    <div>
                                        <p className="text-[19px] font-medium">Syed Saad</p>
                                        <p className="text-[16px] font-light">Marketing Director at Constellact</p>
                                    </div>
                                </div>
                            </div>
                            <div
                                className=" w-full lg:max-w-[400px] min-h-[357px] bg-white flex  flex-col justify-between p-7 gap-7">
                                <p className="text-[18px] font-normal">"Starlight Marketing transformed our website into a visually stunning, user-friendly platform. We've received great feedback from clients and seen a noticeable boost in web traffic. Their creativity and professionalism were outstanding."</p>
                                <div className="flex items-center gap-2">
                                    <Image className="w-14 h-14 rounded-full bg-zinc-950 p-2"
                                        src="/dist/img/reviews/starlight.png"
                                        alt="stralight-marketing" />
                                    <div>
                                        <p className="text-[19px] font-medium">Abdullah Khan
                                        </p>
                                        <p className="text-[16px] font-light">Creative Designer at Starlight marketing

                                        </p>
                                    </div>
                                </div>
                                {/* <hr />
                                <div>
                                    <p className="text-[36px] font-medium" style={{ lineHeight: '40px' }}>$ 250 k</p>
                                    <p className="text-[16px] font-normal text-zinc-600">Saved in operational costs</p>
                                </div> */}
                            </div>
                            <div
                                className=" w-full lg:max-w-[400px] min-h-[357px] bg-white flex  flex-col justify-between p-7 gap-7">
                                <p className="text-[18px] font-normal">"The POS software from Nezdeck has transformed our operations. Its user-friendly interface has streamlined our checkout process, leading to faster transactions and happier customers. We’re extremely satisfied!"</p>
                                <div className="flex items-center gap-2">
                                    <Image className="w-14 h-14 rounded-full bg-zinc-100"
                                        src="/dist/img/reviews/fresh-market-grocery.png"
                                        alt="fresh-market-grocery" />
                                    <div>
                                        <p className="text-[19px] font-medium">Kashan Khalid</p>
                                        <p className="text-[16px] font-light">Owner of Fresh Market Grocery</p>
                                    </div>
                                </div>
                                {/* <hr />
                                <div>
                                    <p className="text-[36px] font-medium" style={{ lineHeight: '40px' }}>+ 25 %</p>
                                    <p className="text-[16px] font-normal text-zinc-600">Increase in company revenue
                                    </p>
                                </div> */}
                            </div>
                        </div>
                    </section>
                    <section className="bg-white  min-h-96  py-[92px] px-7 xl:px-0 ">
                        <div id="ContactBox"
                            className="bg-zinc-100 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-[1181px] mx-auto mb-10">
                            <div className="p-10 pb-0 lg:p-20 pr-10 ">
                                <div id="sectionTag" className="font-medium bg-white px-[8px] py-0.5 mb-3 inline-block rounded-sm">
                                    Let's connect
                                </div>
                                <h1 id="sectionHeading" className="  text-[47px] font-medium">Let's Build Something Great
                                    Together</h1>

                                <p id="sectionPara" className=" mb-8 ">Have an IT Challenge? We're Ready to Help!</p>
                                <div>
                                    <input type="text" placeholder="Full name"
                                        className="placeholder:text-zinc-900 bg-transparent border text-[16px] px-5 outline-0 focus:border-zinc-900 border-zinc-300 h-12 w-full mb-4" />
                                    <input type="text" placeholder="Email address"
                                        className="placeholder:text-zinc-900 bg-transparent border text-[16px] px-5 outline-0 focus:border-zinc-900 border-zinc-300 h-12 w-full mb-4" />
                                    <textarea placeholder="Message" rows={5}
                                        className="placeholder:text-zinc-900 bg-transparent border text-[16px] p-5 outline-0 focus:border-zinc-900 border-zinc-300 w-full mb-4"></textarea>
                                    <Button className='w-full'>Submit</Button>
                                </div>
                            </div>
                            <div className="relative h-full">
                                <Image className="w-full h-[400px] lg:h-full object-cover"
                                    src="https://finpath.keydesign.xyz/business-consulting/wp-content/uploads/sites/10/2023/11/business-cta.jpg"
                                    alt="" />
                                {/* <div
                            className="absolute bottom-0 left-0 right-0 bg-zinc-100/50 backdrop-blur-md flex items-center justify-between text-[24px] text-black p-5">
                          
                            <div className="px-4 py-2 text-[16px] rounded-sm ">
                                <div className="font-bold">Rayyan Ali K.</div>
                                <p className="font-semibold  text-sm">Founder & CEO</p>
                            </div>
                            <div className="px-4 py-2 font-bold text-primary">
                                NEZDECK
                            </div>

                        </div>  */}
                            </div>
                        </div>
                    </section>
                </main>
                <Footer />

            </div>
            <ChatBox />
        </>)
}

export default Home
