import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Image from '../components/Image';

const Contact = () => {

    return (
        <>
            <div>
                <Navbar />
                <main className='pt-[72px]'>
                    <section id="section-07" className="bg-primary  min-h-96  py-[100px] px-7 xl:px-0 ">
                        <div className="w-full pb-28 flex justify-center items-center flex-col">
                            <h1 className="text-[57px] font-medium text-white">Let's keep in touch</h1>
                            <p className="text-[18px] font-light text-white text-center">Feel free to reach out to us using the options below, <br /> and our dedicated team will respond to your
                                <br /> inquiries promptly.</p>
                        </div>
                        <div id="ContactBox"
                            className="bg-zinc-100 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-[1181px] mx-auto mb-10">
                            <div className="p-10 pb-0 lg:p-20 pr-10 ">
                                <div id="sectionTag" className="font-medium bg-white px-[8px] py-0.5 mb-3 inline-block rounded-sm">
                                    Let's connect
                                </div>
                                <h1 id="sectionHeading" className=" text-[47px] font-medium">Join Us in Building Something Great Together</h1>

                                <p id="sectionPara" className=" mb-8">Facing an IT Challenge? We’re Here to Help!</p>
                                <div>
                                    <input type="text" placeholder="Full name"
                                        className="placeholder:text-zinc-900 bg-transparent border text-[16px] px-5 outline-0 focus:border-zinc-900 border-zinc-300 h-12 w-full mb-4" />
                                    <input type="text" placeholder="Email address"
                                        className="placeholder:text-zinc-900 bg-transparent border text-[16px] px-5 outline-0 focus:border-zinc-900 border-zinc-300 h-12 w-full mb-4" />
                                    <textarea placeholder="Message" rows={5}
                                        className="placeholder:text-zinc-900 bg-transparent border text-[16px] p-5 outline-0 focus:border-zinc-900 border-zinc-300 w-full mb-4 message-box"></textarea>
                                    <button
                                        className="w-full px-7 bg-black text-white py-3.5 text-sm font-medium transition-all hover:bg-transparent  border border-transparent hover:text-black hover:border-zinc-900">Submit</button>

                                </div>
                            </div>
                            <div className="relative h-full">
                                <Image className="w-full h-[400px] lg:h-full object-cover"
                                    src="https://finpath.keydesign.xyz/business-consulting/wp-content/uploads/sites/10/2023/11/business-cta.jpg"
                                    alt="Contact Image" />
                            </div>
                        </div>
                    </section>
                </main>
                <Footer />

            </div>
        </>)
}

export default Contact
