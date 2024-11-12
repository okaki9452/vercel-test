"use client"

import BackgroundAnimation from "./components/BackgroundAnimation";
import { useState, useEffect } from "react";
import "./globals.css";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // すぐに要素を表示
    setTimeout(() => {
      setIsVisible(true);
    }, 0);
  }, []);

  return (
    <div className={`relative w-full h-screen overflow-hidden transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}> {/* opacityは透明度0が完全に透明 この場合、300ms後に1000msで、透明から半透明に移行*/}
      <video
        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${isVisible ? 'opacity-90' : 'opacity-0'}`}
        autoPlay
        loop
        muted
      >
        <source src="/images/background2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10">
        <h3 className="relative text-yellow-200 text-3xl p-4 flex items-center justify-center md:text-4xl lg:text-5xl pacifico-regular">Thank you for watching my HomePage</h3>
        <div className="pacifico-regular">
          <BackgroundAnimation url="/" content="　Top　" time={50} />
          <BackgroundAnimation url="/about" content="　About　" time={150} />
          <BackgroundAnimation url="/services" content="　Service　　" time={250} />
          <BackgroundAnimation url="/contact" content="　Contact　　　" time={600} />
        </div>
        <h1 className="text-5xl sm:text-6xl font-bold fixed bottom-52 left-3 text-lime-800">FANTASY LIFE</h1>
        <h1 className="text-3xl sm:text-4xl font-semibold fixed bottom-40 left-4 text-lime-800">EXPOLORE SOMETHING NEW</h1>
        <h1 className="text-xs sm:text-sm fixed bottom-32 left-4 mb-1 text-lime-900">You have to trip somewhere and go finding something interesting</h1>
        <h1 className="text-xs sm:text-sm text-text-sm fixed bottom-28 left-4 text-lime-900">I have to trip somewhere and go finding something interesting</h1>
        <h2 className="fixed bottom-4 right-4 text-base text-white p-2 pacifico-regular"> {/* relativeだとダメ (理由)親要素の適切な大きさが設定されていないため */}
          © 2024 My Website. All rights reserved.
        </h2>
      </div>
    </div>
  );
}