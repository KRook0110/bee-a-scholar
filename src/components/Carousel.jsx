import { useState, useEffect } from "react";

function Carousel({
    image_urls = [
        "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
        "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
        "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
    ],
}) {
    const n = image_urls.length;
    const [currentImageIdx, setCurrentImageIdx] = useState(0);
    const goLeft = () => setCurrentImageIdx((prev) => {
        prev--;
        return prev + (prev < 0) * n;
    });
    const goRight = () => setCurrentImageIdx((prev) => (prev + 1) % n);

    useEffect(() => {
        const interval = setInterval(() => {
            goRight();
        }, 5000);
        return () => clearInterval(interval);
    }, [currentImageIdx])

    return (<>
        <div className='h-80 relative w-full rounded-lg overflow-hidden'>
            {
                image_urls.map((url, idx) => {
                    let style;
                    if (idx < currentImageIdx) style = "left-[-100%] opacity-0";
                    if (idx === currentImageIdx) style = "left-0 opacity-100";
                    if (idx > currentImageIdx) style = "left-[100%] opacity-0";
                    return (<>
                        <img
                            key={idx}
                            src={url}
                            alt=""
                            className={`absolute bg-gray-600 w-full h-full rounded-lg object-contain transition-all ease-in-out ${style}`} />
                    </>)
                })
            }
            <div className="absolute h-full left-0 flex flex-col items-center justify-center" onClick={goLeft}>
                <svg className="rotate-90 ml-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 9L12 17L20 9" stroke="#FFF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>
            <div className="absolute h-full right-0 flex flex-col items-center justify-center" onClick={goRight}>
                <svg className="-rotate-90 mr-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 9L12 17L20 9" stroke="#FFF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>
        </div>

    </>)



}

export default Carousel;
