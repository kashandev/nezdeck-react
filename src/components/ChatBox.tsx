import { Headset, MessageCircle, MessageSquareText, SendHorizonal, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const ChatBox = () => {
    const [open, setOpen] = useState(false);
    const boxRef = useRef<HTMLDivElement | null>(null);
    const buttonRef = useRef<HTMLButtonElement | null>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (
            boxRef.current &&
            !boxRef.current.contains(event.target as Node) &&
            buttonRef.current &&
            !buttonRef.current.contains(event.target as Node)
        ) {
            setOpen(false);
        }
    };

    useEffect(() => {
        if (open) {
            document.addEventListener('click', handleClickOutside);
        } else {
            document.removeEventListener('click', handleClickOutside);
        }
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [open]);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <div className="fixed bottom-5 flex flex-col items-end right-5 z-20">
            <div ref={boxRef} className={`${!open ? 'hidden' : ''} bg-white shadow-md border w-[500px] p-4 mb-3 rounded-lg`}>
                <div className="flex items-center justify-between">
                    <h1 className="font-medium text-xl">Help Desk</h1>
                    <div className="flex">
                        <Link to={'https://wa.me/923700120814?text=Hello%20there!'} target="_blank" rel="noopener noreferrer" className="transition-all w-9 rounded-md ml-1 bg-zinc-100 h-9 flex justify-center items-center p-2.5 text-primary">
                            <MessageCircle />
                        </Link>
                        <Link to={'tel:+923700120814'} className="transition-all w-9 rounded-md ml-1 bg-zinc-100 h-9 flex justify-center items-center p-2.5 text-primary">
                            <Headset />
                        </Link>
                        <button onClick={handleClick} className="transition-all w-9 rounded-md ml-1 bg-zinc-100 h-9 flex justify-center items-center p-2.5 text-primary">
                            <X />
                        </button>
                    </div>
                </div>
                <div className="max-h-[400px] overflow-auto custom-scroller my-3 px-2">
                    {/* Chat messages */}
                    <div className="relative my-6 py-2 px-3 text-sm rounded-lg shadow-sm border max-w-[70%]">
                        <p>I can assist with inquiries related to Nezdeck Systems, such as software, web, and app development or design. If you have questions about those services, feel free to ask!</p>
                        <small className="absolute -bottom-5 left-0 text-black">12:05</small>
                    </div>
                    <div className="relative my-6 py-2 px-3 text-sm rounded-lg shadow-sm border bg-primary text-white max-w-[70%] ml-auto">
                        <p>I want to create a website with two sections, including a header and footer. How much is it?</p>
                        <small className="absolute -bottom-5 right-0 text-black">12:05</small>
                    </div>
                    <div className="relative my-6 py-2 px-3 text-sm rounded-lg shadow-sm border max-w-[70%]">
                        <p>I can't provide pricing details, but Nezdeck Systems can help you design and develop a website with a header and footer. Let me know if you'd like more information about our services!</p>
                        <small className="absolute -bottom-5 left-0 text-black">12:05</small>
                    </div>
                </div>
                <div className="relative">
                    <input className="w-full border border-zinc-300 py-2 rounded-lg outline-0 pl-3 pr-12 shadow-sm" type="text" />
                    <button className="absolute right-0 bottom-0 text-primary w-14 h-10 flex justify-center items-center text-primary">
                        <SendHorizonal />
                    </button>
                </div>
            </div>
            <button
                ref={buttonRef}
                onClick={handleClick}
                className="transition-all w-14 h-14 rounded-full bg-green-300 border border-zinc-500 flex justify-center items-center"
            >
                {open ? <X className="w-5 h-5 pointer-events-none" /> : <MessageSquareText className="w-5 h-5 pointer-events-none" />}
            </button>
        </div>
    );
};

export default ChatBox;
