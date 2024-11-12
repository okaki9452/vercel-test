"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import "./page.css";
import { useState, useEffect } from "react";


export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 0.2秒後に要素を表示
    setTimeout(() => {
      setIsVisible(true);
    }, 200);
  }, []);

  return (
    <div>
      <Header />
      <div
        className={`gap-10 flex flex-col items-center transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <h5 className="text-2xl mt-8 font-bold">
          どうもこんにちは。 角井 誠也 (かくい せいや) です。
        </h5>
        <h5 className="text-2xl mb-8 font-bold">Hello. I am Seiya Kakui.</h5>
        <h4 className="text-xl font-bold">経歴情報</h4>
        <ul>
          <li className="my-class">
            電気通信大学 情報理工学域 I類 経営・社会情報学プログラム 2年
          </li>
          <li className="my-class">東京都立狛江高等学校 普通科卒業</li>
          <li className="my-class">University of Eletro-communication</li>
        </ul>
        <div className="mb-8"></div>
      </div>
      <Footer />
    </div>
  );
}
