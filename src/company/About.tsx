import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Handshake, Headset, Radio, ShieldCheck } from 'lucide-react';
import TabContainer from '../components/Tabs';
import Image from '../components/Image';
const About = () => {
    const tabs = [
        {
            label: 'Mission',
            content: 'With a passion for technology and a commitment to excellence, we empower businesses to thrive in the digital landscape.'
        },
        {
            label: 'Vision',
            content: 'Our vision is to be the leading provider of innovative solutions, driving progress and creating value in the digital age.'
        },
        {
            label: 'Values',
            content: 'Our values include integrity, innovation, and customer success, guiding everything we do in our mission to empower businesses.'
        }
    ];
    return (
        <>
            <div>
                <Navbar />
                <main className='pt-[72px]'>
                    <section className="bg-primary  min-h-96  py-[100px] px-7 xl:px-0 ">
                        <div className="w-full pb-28 flex justify-center items-center flex-col">
                            <h1 className="text-[57px] font-medium text-center text-white">Making a positive impact</h1>
                            <p className="text-[18px] font-light text-white text-center lg:w-[50%]">With a passion for technology
                                and a
                                commitment to excellence, we empower businesses to thrive in the digital landscape.</p>
                        </div>
                        <div className="bg-zinc-100 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-[1181px] mx-auto mb-10">
                            <div className="p-10 pb-0 lg:p-20 pr-10 ">
                                <div className="font-medium bg-white px-[8px] py-0.5 mb-3 inline-block rounded-sm">
                                    Value & Culture </div>
                                <h1 className=" text-[47px] font-medium">We hold ourselves to high
                                    standards</h1>
                                <TabContainer tabs={tabs} />

                            </div>
                            <div className=" h-full">
                                <Image
                                    className="w-full h-[400px] lg:h-full object-cover"
                                    src="https://images.pexels.com/photos/1388069/pexels-photo-1388069.jpeg"
                                    alt="Value & Culture"
                                />
                            </div>
                        </div>
                    </section>
                    <section className="bg-zinc-100  min-h-96  py-[92px] px-7 xl:px-0 ">
                        <div className="bg-zinc-100 grid grid-cols-1 lg:grid-cols-2 gap-10  max-w-[1181px] mx-auto mb-10">
                            <div className=" pr-10 py-5">
                                <div className="font-medium bg-white px-[8px] py-0.5 mb-3 inline-block rounded-sm">
                                    Services and solutions
                                </div>
                                <h1 className=" text-[47px] font-medium">Helping you grow</h1>
                                <p className=" mb-8 md:w-[70%]">Elevate your brand to new heights
                                    ensuring your
                                    message reaches its full potential.</p>
                                <div className="grid grid-cols-2 gap-y-6 gap-5">
                                    <div>
                                        <div
                                            className="transition-all w-20 h-20 bg-white hover:bg-primary hover:text-white flex items-center justify-center mb-[0.75rem]">
                                            <Radio />
                                        </div>
                                        <p className="text-[21px] font-medium mb-[0.75rem]">Solid Planning</p>
                                        <p className="text-[16px] font-normal mb-[0.75rem]">Receive premium assistance from our
                                            global network.</p>
                                    </div>
                                    <div>
                                        <div
                                            className="transition-all w-20 h-20 bg-white hover:bg-primary hover:text-white flex items-center justify-center mb-[0.75rem]">
                                            <Handshake />
                                        </div>
                                        <p className="text-[21px] font-medium mb-[0.75rem]">Collaboration Tools</p>
                                        <p className="text-[16px] font-normal mb-[0.75rem]">Keep your strategic goals and planning
                                            in one place.</p>
                                    </div>
                                    <div>
                                        <div
                                            className="transition-all w-20 h-20 bg-white hover:bg-primary hover:text-white flex items-center justify-center mb-[0.75rem]">
                                            <ShieldCheck />
                                        </div>
                                        <p className="text-[21px] font-medium mb-[0.75rem]">Data Protection</p>
                                        <p className="text-[16px] font-normal mb-[0.75rem]">Define each stage of work to see what’s
                                            important.</p>
                                    </div>
                                    <div>
                                        <div
                                            className="transition-all w-20 h-20 bg-white hover:bg-primary hover:text-white flex items-center justify-center mb-[0.75rem]">
                                            <Headset />
                                        </div>
                                        <p className="text-[21px] font-medium mb-[0.75rem]">Software Support</p>
                                        <p className="text-[16px] font-normal mb-[0.75rem]">From the small to the big picture, we
                                            organize work.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="relative h-full">
                                <Image className="w-full h-[400px] lg:h-full object-cover shadow-2xl"
                                    src="https://images.pexels.com/photos/1388069/pexels-photo-1388069.jpeg"
                                    alt="Services and solutions" />

                                {/* <div className="absolute flex items-center justify-center w-full h-full top-0 left-0">
                                    <button
                                        className="transition-all w-20 h-20 rounded-full bg-white border-2 border-transparent hover:bg-transparent hover:border-zinc-100 text-black hover:text-white flex items-center justify-center">
                                        <Play />
                                    </button>
                                </div> */}
                            </div>
                        </div>
                    </section>
                </main>
                <Footer />

            </div>
        </>)
}

export default About
