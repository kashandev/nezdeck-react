import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Calendar, ChevronRight, MessageSquareDot } from 'lucide-react';
import Image from '../components/Image';
import Button from '../components/Button';
const Products = () => {

    return (
        <>
            <div>
                <Navbar />
                <main className='pt-[72px]'>
                    <section className="w-full pb-28 xl:w-[79%] mx-auto min-h-96 py-[100px] px-7 xl:px-0 ">
                        <h1 className="text-[57px] font-semibold">Software Products</h1>
                        <div className="text-[16px] font-medium flex gap-2 items-center"><span>Home</span> <ChevronRight className='w-5 h-5' /> <span>Products</span></div>

                        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 pt-10 gap-7 xl:gap-10'>
                            <div className='border rounded-xl overflow-hidden'>
                                <div className='w-full h-[250px] relative border-b bg-zinc-200'>
                                    <Image className='w-full h-full object-contain' src="https://library.keydesign.xyz/wp-content/uploads/2023/08/blog-post-1-768x497.jpg" alt="" />
                                    <div className=' absolute top-1 right-1 flex gap-3 items-center text-sm'>
                                        <div className='px-3 py-1 bg-green-300 rounded-lg  font-medium'>Not Available</div>
                                    </div>
                                </div>
                                <div>
                                    <div className='flex gap-3 items-center flex-wrap text-sm p-3 py-4'>
                                        <div className='flex px-3 py-1 rounded-md border items-center gap-1'>Rating --</div>
                                        <div className='flex px-3 py-1 rounded-md border items-center gap-1'><Calendar className='w-4 h-4' /> August 21, 2024</div>
                                        <div className='flex px-3 py-1 rounded-md border items-center gap-1'><MessageSquareDot className='w-4 h-4' /><span>--</span></div>
                                    </div>
                                    <div className='p-4 flex flex-col gap-2 pb-7'>
                                        <h1 className='text-lg font-semibold'>Bulk Emails Generation System</h1>
                                        <p>
                                        The Bulk Emails Generation System automates mass email creation and distribution, Ideal for marketing campaigns, it saves time while maximizing outreach.</p>
                                    </div>
                                    <div className='flex flex-col'>
                                        <Button className='hover:bg-green-300 rounded-b-xl hover:bg-zinc-950 hover:text-white' disabled >Comming Soon</Button>                                    </div>
                                </div>
                            </div>
                            <div className='border rounded-xl overflow-hidden'>
                                <div className='w-full h-[250px] relative border-b bg-zinc-200'>
                                    <Image className='w-full h-full object-contain ' src="https://www.generalblue.com/purchase-invoice/p/tm54fwf6c/f/colorful-purchase-invoice-in-excel-md.png" alt="" />
                                    <div className=' absolute top-1 right-1 flex gap-3 items-center text-sm'>
                                        <div className='px-3 py-1 bg-green-300 rounded-lg  font-medium'>Not Available</div>

                                    </div>
                                </div>
                                <div>
                                    <div className='flex gap-3 items-center flex-wrap text-sm p-3 py-4'>
                                        <div className='flex px-3 py-1 rounded-md border items-center gap-1'>Rating --</div>
                                        <div className='flex px-3 py-1 rounded-md border items-center gap-1'><Calendar className='w-4 h-4' /> August 21, 2024</div>
                                        <div className='flex px-3 py-1 rounded-md border items-center gap-1'><MessageSquareDot className='w-4 h-4' /><span>--</span></div>
                                    </div>
                                    <div className='p-4 flex flex-col gap-2 pb-7'>
                                        <h1 className='text-lg font-semibold'>Generate Complex PDF Reports For php. </h1>
                                        <p>Generate Complex PDF Reports. Ideal for data-driven applications, It generate comprehensive reports programmatically, with full control over content and formatting.</p>
                                    </div>
                                    <div className='flex flex-col'>
                                        <Button className='hover:bg-green-300 rounded-b-xl hover:bg-zinc-950 hover:text-white' disabled >Comming Soon</Button>                                    </div>
                                </div>
                            </div>
                            <div className='border rounded-xl overflow-hidden'>
                                <div className='w-full h-[250px] relative border-b bg-zinc-200'>
                                    <Image className='w-full h-full object-contain' src="https://images.template.net/163356/report-template-tm0bb.png" alt="" />
                                    <div className=' absolute top-1 right-1 flex gap-3 items-center text-sm'>
                                        <div className='px-3 py-1 bg-green-300 rounded-lg  font-medium'>Not Available</div>

                                    </div>
                                </div>
                                <div>
                                    <div className='flex gap-3 items-center flex-wrap text-sm p-3 py-4'>
                                        <div className='flex px-3 py-1 rounded-md border items-center gap-1'>Rating --</div>
                                        <div className='flex px-3 py-1 rounded-md border items-center gap-1'><Calendar className='w-4 h-4' /> August 21, 2024</div>
                                        <div className='flex px-3 py-1 rounded-md border items-center gap-1'><MessageSquareDot className='w-4 h-4' /><span>--</span></div>
                                    </div>
                                    <div className='p-4 flex flex-col gap-2 pb-7'>
                                        <h1 className='text-lg font-semibold'>Generate Excel Reports For php.</h1>
                                        <p>Generate Complex Excel Reports. Ideal for data-driven applications, It generate comprehensive reports programmatically, with full control over content and formatting.</p>
                                    </div>
                                    <div className='flex flex-col'>
                                        <Button className='hover:bg-green-300 rounded-b-xl hover:bg-zinc-950 hover:text-white' disabled >Comming Soon</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                <Footer />

            </div>
        </>)
}

export default Products
