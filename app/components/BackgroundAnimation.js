"use client";

import { useEffect, useState } from 'react';
import './BackgroundAnimation.css'; // 新しいCSSをインポート
import Link from 'next/link';

export default function BackgroundAnimation(props) { // propsはurlとcontentとtime
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimated(true);
    }, props.time); // props.timeで時間を制御

    return () => clearTimeout(timer); // クリーンアップ(DOMがアンマウントされたタイミング)でタイマーをクリア
  }, [props.time]); // props.timeが変更されたら再度動作

  return (
    <div className={`bg ${isAnimated ? 'is-animated' : ''}`}>
      <div className="bg-wrap">
        <Link href={props.url}>
          <p className="inn hover-text text-white hover:text-gray-400 duration-500">{props.content}</p>
        </Link>
      </div>
    </div>
  );
}
