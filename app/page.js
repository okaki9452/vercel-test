"use client"

import BackgroundAnimation from "./components/BackgroundAnimation";
import BackgroundStatic from "./components/BackgroundStatic";
import { useEffect, useState } from "react";
import "./globals.css";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [isWideScreen, setIsWideScreen] = useState(false);
  console.log(isWideScreen)

  useEffect(() => {
    // 100ms後に要素を表示
    setTimeout(() => {
      setIsVisible(true);
    }, 100);

    const handleResize = () => {
      setIsWideScreen(window.innerWidth >= 768);
      console.log("でかい")
    };

    handleResize(); // サイズのチェック
    window.addEventListener("resize", handleResize); // ウィンドウのリサイズ時に handleResize を呼び出すイベントリスナーを追加　ユーザーがウィンドウのサイズを変更するたびに handleResize が実行され、isWideScreen の状態がリアルタイムで更新されます。

    return () => {
      window.removeEventListener("resize", handleResize); // コンポーネントがアンマウントされるときに、resize イベントリスナーを解除するクリーンアップ関数
    };

  }, []);

  return (
    <div className={`relative w-full h-screen overflow-hidden transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}> {/* opacityは透明度0が完全に透明 この場合、300ms後に1000msで、透明から半透明に移行*/}
      <video
        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${isVisible ? 'opacity-90' : 'opacity-0'}`}
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/images/background2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10">
        <h3 className="relative text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl text-yellow-200 p-4 flex items-center text-center justify-center pacifico-regular">Thank you for watching my HomePage</h3>
        <div className="mt-1 md:mt-20 xl:mt-0 2xl:mt-16 pacifico-regular">
        {isWideScreen ? (
          <>
            <BackgroundAnimation url="/" content="　Top　" time={200} />
            <BackgroundAnimation url="/about" content="　About　" time={300} />
            <BackgroundAnimation url="/services" content="　Service　　" time={600} />
            <BackgroundAnimation url="/contact" content="　Contact　　　" time={900} />
            {console.log('pc')}
          </>
        ) : (
          <>
            <BackgroundStatic url="/" content="　Top　" time={200} />
            <BackgroundStatic url="/about" content="　About　" time={300} />
            <BackgroundStatic url="/services" content="　Service　　" time={600} />
            <BackgroundStatic url="/contact" content="　Contact　　　" time={900} />
            {console.log('sp')}
          </>
        )}
        </div>
        <h1 className="fixed text-5xl bottom-52 md:text-7xl md:bottom-80 xl:text-7xl xl:bottom-40 2xl:text-8xl 2xl:bottom-64 font-bold left-3 text-lime-800">FANTASY LIFE</h1> {/* MyPCはxl-2xlサイズ */}
        <h1 className="fixed text-2xl bottom-44 md:text-4xl md:bottom-64 xl:text-4xl xl:bottom-28 2xl:text-6xl 2xl:bottom-48 font-semibold left-4 text-lime-800">EXPOLORE SOMETHING NEW</h1>
        <h1 className="fixed text-xs bottom-40 md:text-base md:bottom-56 xl:text-sm xl:bottom-20 xl:mb-1 2xl:text-base 2xl:bottom-40 left-4 text-lime-900">You have to trip somewhere and go finding something interesting</h1>
        <h1 className="fixed text-xs bottom-36 md:text-base md:bottom-52 xl:text-sm xl:bottom-16 2xl:text-base 2xl:bottom-32 2xl:mb-2 left-4 text-lime-900">&quot;You must venture out and discover something exciting.&quot;</h1>
        <h2 className="fixed bottom-4 right-4 text-base text-white p-2 pacifico-regular"> {/* relativeだとダメ (理由)親要素の適切な大きさが設定されていないため */}
          © 2024 My Website. All rights reserved.
        </h2>
      </div>
    </div>
  );
}