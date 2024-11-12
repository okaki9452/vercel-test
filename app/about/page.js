"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import "./page.css";
import { useState, useEffect } from "react";


export default function About() {
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
    <div className=" h-screen flex flex-col" > {/* h-screen は画面全体の高さが基準 h-full は 親要素の高さが基準 */}
      <Header />
      <div
        className={`gap-10 flex flex-col items-center transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <h5 className="text-center text-2xl mt-8 font-bold">
          {isWideScreen ? "どうもこんにちは。 角井 誠也 (かくい せいや) です。" : <>どうもこんにちは。<br />角井 誠也 (かくい せいや) です。</>}
        </h5>
        <h5 className="text-center text-2xl mb-8 font-bold">Hello. I am Seiya Kakui.</h5>
        <h4 className="text-center text-3xl font-bold">経歴情報</h4>
        <ul>
          <li className="ml-2 my-class">
            電気通信大学 情報理工学域 I類 経営・社会情報学プログラム 2年
          </li>
          <li className="ml-2 my-class">東京都立狛江高等学校 普通科卒業</li>
          <li className="ml-2 my-class">University of Eletro-communication</li>
        </ul>
        <div className="mb-8"></div>
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  ); 
}
