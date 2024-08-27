import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Calendar, Check, ChevronRight, CircleDot, Dot, MessageSquareDot } from 'lucide-react';
import Image from '../components/Image';
import Button from '../components/Button';
const ProductDetail = () => {

    return (
        <>
            <div>
                <Navbar />
                <main className='pt-[72px]'>
                    <section className="w-full pb-28 xl:w-[79%] mx-auto min-h-96 py-[100px] px-7 xl:px-0 ">
                        <h1 className="text-[57px] font-semibold">Generate Complex PDF Reports For php.</h1>
                        <div className="text-[16px] font-medium flex gap-2 items-center"><span>Home</span> <ChevronRight className='w-5 h-5' /> <span>Product Detail</span></div>
                        <div className='grid grid-cols-6 gap-6  pt-10 border-t border-zinc-400 mt-10'>
                            <div className='flex flex-col gap-5'>
                                <div>
                                    <h1 className='font-bold'>Free Trial Duration</h1>
                                    <p>01 Month</p>
                                </div>
                                <div>
                                    <h1 className='font-bold'>Applicable Version(s)</h1>
                                    <p><span className='font-semibold'>php</span> 8.3.10</p>
                                </div>
                            </div>
                            <div className='col-span-3'>
                                <h1 className='font-bold  mb-3'>Product Description</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis illo dolorem ex, quod, architecto nihil unde recusandae, explicabo aliquam similique repudiandae molestiae voluptas praesentium dignissimos. Sed doloremque quis recusandae ex porro ratione nemo quibusdam asperiores rerum suscipit pariatur eligendi iusto ad facilis blanditiis quod quos, aliquid similique obcaecati dolore. Atque.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed natus maiores, quo laudantium omnis pariatur? Quas ullam atque mollitia at sapiente reprehenderit impedit consectetur quaerat!</p>
                            </div>
                            <div className='col-span-2'>
                                <h1 className=' font-bold mb-3'>Product Specifics</h1>
                                <div className='flex flex-col gap-2'>
                                    <div className='flex items-start justify-start gap-2 text-sm'><div><CircleDot className='w-3 h-3' /></div>Add banners & images in header & footer.</div>
                                    <div className='flex items-start justify-start gap-2 text-sm'><div><CircleDot className='w-3 h-3' /></div>Add multiple data columns with labels in header</div>
                                    <div className='flex items-start justify-start gap-2 text-sm'><div><CircleDot className='w-3 h-3' /></div>amount fields shows in standard like $5000 to $5,000.00. If you can do something different check documentation and enjoy.</div>
                                    <div className='flex items-start justify-start gap-2 text-sm'><div><CircleDot className='w-3 h-3' /></div>All dates and times shows standard like 2004-12-20 12:12:05 to 12-jan-2024 12:12</div>
                                </div>
                            </div>
                        </div>
                        {/* <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 pt-10 gap-7 xl:gap-10'>
                            <div className='border rounded-xl overflow-hidden'>
                                <div className='w-full h-[250px] relative border-b bg-zinc-200'>
                                    <Image className='w-full h-full object-contain' src="https://library.keydesign.xyz/wp-content/uploads/2023/08/blog-post-1-768x497.jpg" alt="" />
                                    <div className=' absolute top-1 right-1 flex gap-3 items-center text-sm'>
                                        <div className='px-3 py-1 bg-green-300 rounded-lg  font-medium'>Free Trial Available</div>
                                    </div>
                                </div>
                                <div>
                                    <div className='flex gap-3 items-center flex-wrap text-sm p-3 py-4'>
                                        <div className='flex px-3 py-1 rounded-md border items-center gap-1'>Rating 5.0</div>
                                        <div className='flex px-3 py-1 rounded-md border items-center gap-1'><Calendar className='w-4 h-4' /> August 21, 2023</div>
                                        <div className='flex px-3 py-1 rounded-md border items-center gap-1'><MessageSquareDot className='w-4 h-4' /><span>79</span></div>
                                    </div>
                                    <div className='p-4 flex flex-col gap-2 pb-7'>
                                        <h1 className='text-lg font-semibold'>Bulk Emails Generation System</h1>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto, dolores obcaecati? Accusantium dolorem accusamus eius.</p>
                                    </div>
                                    <div className='flex flex-col'>
                                        <Button className='hover:bg-green-300 rounded-b-xl'>Starts Now For Free</Button>
                                    </div>
                                </div>
                            </div>
                            <div className='border rounded-xl overflow-hidden'>
                                <div className='w-full h-[250px] relative border-b bg-zinc-200'>
                                    <Image className='w-full h-full object-contain ' src="https://www.generalblue.com/purchase-invoice/p/tm54fwf6c/f/colorful-purchase-invoice-in-excel-md.png" alt="" />
                                    <div className=' absolute top-1 right-1 flex gap-3 items-center text-sm'>
                                        <div className='px-3 py-1 bg-green-300 rounded-lg  font-medium'>Free Trial Available</div>

                                    </div>
                                </div>
                                <div>
                                    <div className='flex gap-3 items-center flex-wrap text-sm p-3 py-4'>
                                        <div className='flex px-3 py-1 rounded-md border items-center gap-1'>Rating 5.0</div>
                                        <div className='flex px-3 py-1 rounded-md border items-center gap-1'><Calendar className='w-4 h-4' /> August 21, 2023</div>
                                        <div className='flex px-3 py-1 rounded-md border items-center gap-1'><MessageSquareDot className='w-4 h-4' /><span>79</span></div>
                                    </div>
                                    <div className='p-4 flex flex-col gap-2 pb-7'>
                                        <h1 className='text-lg font-semibold'>Generate Complex PDF Reports For php. </h1>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptates ratione fugiat mollitia similique eligendi.</p>
                                    </div>
                                    <div className='flex flex-col'>
                                        <Button className='hover:bg-green-300 rounded-b-xl'>Starts Now For Free</Button>
                                    </div>
                                </div>
                            </div>
                            <div className='border rounded-xl overflow-hidden'>
                                <div className='w-full h-[250px] relative border-b bg-zinc-200'>
                                    <Image className='w-full h-full object-contain' src="https://images.template.net/163356/report-template-tm0bb.png" alt="" />
                                    <div className=' absolute top-1 right-1 flex gap-3 items-center text-sm'>
                                        <div className='px-3 py-1 bg-green-300 rounded-lg  font-medium'>Free Trial Available</div>

                                    </div>
                                </div>
                                <div>
                                    <div className='flex gap-3 items-center flex-wrap text-sm p-3 py-4'>
                                        <div className='flex px-3 py-1 rounded-md border items-center gap-1'>Rating 5.0</div>
                                        <div className='flex px-3 py-1 rounded-md border items-center gap-1'><Calendar className='w-4 h-4' /> August 21, 2023</div>
                                        <div className='flex px-3 py-1 rounded-md border items-center gap-1'><MessageSquareDot className='w-4 h-4' /><span>79</span></div>
                                    </div>
                                    <div className='p-4 flex flex-col gap-2 pb-7'>
                                        <h1 className='text-lg font-semibold'>Generate Excel Reports For php.</h1>
                                        <p>When evaluating potential agencies, consider their expertise in various aspects of branding and design.</p>
                                    </div>
                                    <div className='flex flex-col'>
                                        <Button className='hover:bg-green-300 rounded-b-xl'>Starts Now For Free</Button>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </section>
                </main>
                <Footer />

            </div>
        </>)
}

export default ProductDetail
