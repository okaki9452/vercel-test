"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import "./page.css";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 0.2秒後に要素を表示
    setTimeout(() => {
      setIsVisible(true);
    }, 200);
  }, []);

  return (
    <div className="h-screen flex flex-col" >
      <Header />
      <div
        className={`gap-10 flex flex-col items-center transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <h3 className="text-4xl font-bold mt-6 oblique">各種SNSはこちら</h3>
        <Link href="https://x.com/XcorpJP">
          <img
            src="/images/contact_X_logo.jpg"
            alt="X"
            className="anim-box w-40 h-auto mt-4" // 幅を指定して小さくする
          />
        </Link>
        <h3 className="text-3xl font-thin">X (旧Twitter)</h3>

        <Link href="https://www.instagram.com">
          <img
            src="/images/contact_Insta_logo.jpg"
            alt="X"
            className="anim-box w-40 h-auto mt-4" // 幅を指定して小さくする
          />
        </Link>
        <h3 className="text-3xl font-thin mb-4">Instagram</h3>
      </div>

      <div className="mt-auto">
        <Footer />
      </div>
      
    </div>
  );
}
