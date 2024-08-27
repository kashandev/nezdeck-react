import { Check } from 'lucide-react'
import Button from './Button';
import Image from './Image';
interface SectionProps {
    position?: string;
    image: string;
    tag?: string;
    heading?: string;
    description?: string;
    actionBtn?: string;
    points?: string[];
}
const Section: React.FC<SectionProps> = ({ position = 'left-to-right', image, tag, heading, description, points, actionBtn }) => {
    return (
        <section className={`bg-white w-full px-7 xl:px-0 xl:w-[79%] mx-auto flex justify-between flex-col lg:flex-row py-14 lg:py-[60px] gap-10`}>
            <div className={`${position === 'right-to-left' && 'lg:order-2'}  w-full xl:max-w-[500px]`}>
                <div className="flex flex-col gap-[1vw]">
                    <div>
                        {tag &&
                            <div className=" bg-zinc-100 px-[8px] py-0.5 mb-5 inline-block rounded-sm">
                                {tag}
                            </div>
                        }
                        {heading &&
                            <h1 className="text-3xl md:text-4xl font-medium" >
                                {heading}</h1>
                        }
                    </div>
                    {description &&
                        <p className=" mb-4 text-lg md:text-xl">{description}</p>
                    }
                    <div className="flex flex-col gap-3">
                        {points && points.map((point) => {
                            return (<div className="flex gap-3 items-center">
                                <div>
                                    <Check className="w-8 h-8 p-1.5 flex items-center justify-center bg-zinc-100" />
                                </div>
                                <p className="text-md md:text-lg">{point}</p>
                            </div>)
                        })
                        }
                        {
                            actionBtn &&
                            <div className="flex gap-3 items-center mt-4">
                                <Button variant="solid">{actionBtn}</Button>

                            </div>
                        }

                    </div>
                </div>
            </div>
            <div className="w-full  lg:max-w-[500px] flex justify-center">
                {
                    image &&
                    <Image  className='w-full h-[300px] lg:h-[90%] rounded-md object-cover'
                        src={image}
                        alt="section-blog-image" />
                }
            </div>
        </section>
    )
}

export default Section