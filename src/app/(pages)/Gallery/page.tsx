import React from "react";

interface ImageProps {
    src: string;
    alt: string;
    className: string;
    tabIndex?: number;
}

const Image: React.FC<ImageProps> = ({ src, alt, className, tabIndex }) => {
    return <img tabIndex={tabIndex} src={src} alt={alt} className={className} />;
};

function MyApp() {
    const images: ImageProps[] = [
        { src: "https://i.ibb.co/kBgtHK6/Rectangle-5.png", alt: "girl with blue background", className: "w-20 h-20 rounded-lg mr-6" },
        { src: "https://i.ibb.co/9nLBtjx/Rectangle-3.png", alt: "guy winking", className: "w-48 h-36 rounded-lg" },
        { src: "https://i.ibb.co/jRbF1KF/Rectangle-4.png", alt: "guy smiling", className: "" },
        { src: "https://i.ibb.co/Sf4Q94L/Rectangle-6.png", alt: "girl with bluw background", className: "w-48 h-48 rounded-lg" },
        { src: "https://i.ibb.co/fnNqJrx/Rectangle-7.png", alt: "guy with glasses", className: "w-20 h-20 rounded-lg ml-6 flex-shrink-0 object-cover object-fit" },
        { src: "https://i.ibb.co/LSxy7fy/Rectangle-9.png", alt: "guy with sunglasses", className: "w-72 h-80 rounded-lg" },
        { src: "https://i.ibb.co/X8PKD3q/Rectangle-8.png", alt: "girl  laughing", className: "w-48 h-48 rounded-lg" },
        { src: "https://i.ibb.co/2Yj51CY/Rectangle-13.png", alt: "guy with glasses", className: "w-20 h-20 rounded-lg ml-6 object-cover object-fit" },
        { src: "https://i.ibb.co/bWGVSkP/Rectangle-10.png", alt: "group of friends", className: "w-96 h-72 rounded-lg object-center object-fit" },
        { src: "https://i.ibb.co/80jvpSv/Rectangle-16.png", alt: "man", className: "w-20 h-20 rounded-lg mt-14" },
        { src: "https://i.ibb.co/6PR2Y74/Rectangle-15.png", alt: "woman", className: "w-20 h-24 rounded-lg ml-6" },
        { src: "https://i.ibb.co/M5rvjhk/Rectangle-14.png", alt: "boy with blonde hair", className: "ml-6 mt-6 w-48 h-32 rounded-lg" },
        { src: "https://i.ibb.co/GPpMsbr/Rectangle-12.png", alt: "young girl with red hair", className: "w-48 h-48 rounded-lg" },
        { src: "https://i.ibb.co/VBcgkVL/Rectangle-11.png", alt: "young girl with red hair", className: "w-72 h-56 rounded-lg ml-6" }
    ];

    return (
        <div className="bg-gray-50 py-5 flex flex-col items-center justify-center">
            <div className="xl:w-1/2 w-11/12">
                <h1 role="heading" tabIndex={0} className="text-6xl font-bold 2xl:leading-10 leading-0 text-center text-gray-800">
                    Touching hundreds of lives
                </h1>
                <h2 role="contentinfo" tabIndex={0} className="text-base leading-normal text-center text-gray-600 mt-5">
                Join us on a journey where every image tells a story, and every story has the power to transcend boundaries and connect hearts. Welcome to TranzBook Gallery: where the beauty of the world meets the creativity of the human spirit.
                </h2>
            </div>
            <div className="2xl:px-20 lg:px-12 px-4 flex flex-wrap items-start mt-4">
                {images.map((image, index) => (
                    <div className={index < 4 ? "mt-24" : index < 8 ? "ml-6 mt-4" : "mt-5 ml-6"} key={index}>
                        <Image src={image.src} alt={image.alt} className={image.className} tabIndex={0} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MyApp;
