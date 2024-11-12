"use client";

import Header from "../components/Header";
import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Img from "../components/Img";
import "./page.css";

export default function About() {
  const [isKomaeOpened, setIsKomaeOpened] = useState(false);
  const [isChofuOpened, setIsChofuOpened] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isWideScreen, setIsWideScreen] = useState(true);

  useEffect(() => {
    // 0.2秒後に要素を表示
    setTimeout(() => {
      setIsVisible(true);
    }, 200);

    const handleResize = () => {
      setIsWideScreen(window.innerWidth >= 768);
    };

    handleResize(); // サイズのチェック
    window.addEventListener("resize", handleResize); // ウィンドウのリサイズ時に handleResize を呼び出すイベントリスナーを追加　ユーザーがウィンドウのサイズを変更するたびに handleResize が実行され、isWideScreen の状態がリアルタイムで更新されます。

    return () => {
      window.removeEventListener("resize", handleResize); // コンポーネントがアンマウントされるときに、resize イベントリスナーを解除するクリーンアップ関数
    };

  }, []);

  return (
    <div className="h-screen flex flex-col" >
      <Header />
      <div
        className={`w-screen flex flex-col items-center gap-10 transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
      >
        <h3 className="text-3xl p-5 ">
          狛江駅・調布駅より送迎バスをご用意しております。
        </h3>
        <div className="relative flex items-center justify-center h-48 w-full md:h-72 lg:h-96 xl:mt-16 xl:mb-16">
          <Img src="/images/service_bus_image.jpg" alt="送迎バスの画像" />
        </div>
        <div className="box30">
            <div className="box-title">のりば１</div>
            <p className="text-2xl font-bold">{isWideScreen ? "狛江駅のりば から" :<>狛江駅<br />のりば</>}</p>
        </div> 
        {/* <h3 className="text-2xl p-4 font-semibold">狛江駅のりば はこちら</h3> */}
        <button 
          className="bg-indigo-700 font-semibold text-white text-xl py-4 px-14 rounded-3xl hover:bg-indigo-500"
          onClick={() => setIsKomaeOpened(!isKomaeOpened)}
        >
          {isKomaeOpened ? "閉じる" : "開く"}
        </button>
        {isKomaeOpened && (
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3242.8108364928!2d139.577638!3d35.63238960000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f119940d68eb%3A0xcc936e0a68fdc823!2z54ub5rGf6aeF!5e0!3m2!1sja!2sjp!4v1728749633594!5m2!1sja!2sjp"
            width="700"
            height="400"
            className="border-0 mb-4 w-11/12"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        )}

        <div className="box30">
            <div className="box-title">のりば２</div>
            <p className="text-2xl font-bold">{isWideScreen ? "調布駅のりば から" :<>調布駅<br />のりば</>}</p>
        </div>
        {/* <h3 className="text-2xl p-6 font-semibold">調布駅のりば はこちら</h3> */}
        <button
          className="bg-indigo-700 font-semibold text-xl text-white py-4 px-14 mb-5 rounded-3xl hover:bg-indigo-500"
          onClick={() => setIsChofuOpened(!isChofuOpened)}
        >
          {isChofuOpened ? "閉じる" : "開く"}
        </button>
        {isChofuOpened && (
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3242.0236884860187!2d139.54478229999998!3d35.651787999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f014b520e627%3A0xb392e336bb5731b6!2z6Kq_5biD6aeF!5e0!3m2!1sja!2sjp!4v1728750916120!5m2!1sja!2sjp"
            width="700"
            height="400"
            className="border-0 mb-4 w-11/12"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        )}
      </div>

      <Footer />

    </div>
  );
}
