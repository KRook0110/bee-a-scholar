import { useState, useEffect } from "react";
import './tempstyles.css'


function Carousel({
    image_urls = [
      'beasiswa/art.jpg',
      'beasiswa/womenstem.jpg',
      'beasiswa/global.png',
    ],
}) {


    const n = image_urls.length;
    const [currentImageIdx, setCurrentImageIdx] = useState(0);
    const goLeft = () => {
        setCurrentImageIdx((prev)=>{
            prev = prev - 1;
            if(prev < 0) prev += n;
            return prev;
        });
    };

    const goRight = () => {
        setCurrentImageIdx((prev)=>((prev + 1) % n));
    }

    useEffect(() => {
        const interval = setInterval(() => {
            goRight();
        }, 5000);
        return () => clearInterval(interval);
    }, [currentImageIdx])

    return (<>
        <div className='h-96 relative w-full rounded-lg overflow-hidden'>
            {
                image_urls.map((url, idx) => {
                    let style;
                    if (idx < currentImageIdx) style = "left-0 opacity-0";
                    if (idx === currentImageIdx) style = "left-0 opacity-100";
                    if (idx > currentImageIdx) style = "left-0 opacity-0";

                    return (<>
                        <img
                            key={idx}
                            src={url}
                            alt=""
                            className={`absolute bg-gray-600 w-full h-full rounded-lg object-cover ease-in-out transition-all ${style}`} />
                    </>)
                })
            }

            <div className="absolute h-full left-0 flex flex-col items-center justify-center" onClick={goLeft}>
                <svg className="rotate-90 ml-2 bg-gray-500 rounded-full p-1 cursor-pointer" width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 9L12 17L20 9" stroke="#FFF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>

            <div className="absolute h-full right-0 flex flex-col items-center justify-center" onClick={goRight}>
                <svg className="-rotate-90 mr-2 bg-gray-500 rounded-full p-1 cursor-pointer" width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 9L12 17L20 9" stroke="#FFF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>
            <div className="absolute flex flex-row justify-center items-center gap-3 z-20 bottom-0 w-full mb-4">
                {
                    image_urls.map((_, idx) => {
                        return (idx === currentImageIdx)?
                            <>
                                <div className="rounded-full w-[30px] h-[10px] bg-white opacity-100 transition-all"></div>
                            </>
                            :
                            <>
                                <div className="rounded-full w-[10px] h-[10px] bg-white opacity-60 transition-all"></div>
                            </>
                    })
                }
            </div>
        </div>

    </>)



}

export default Carousel;
