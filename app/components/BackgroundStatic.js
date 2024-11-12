"use client";

import { useEffect, useState } from 'react';
import './BackgroundStatic.css'; // 新しいCSSをインポート
import Link from 'next/link';

export default function BackgroundStatic(props) { // propsはurlとcontentとtime
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimated(true);
    }, props.time); // props.time後に表示

    return () => clearTimeout(timer); // クリーンアップ(DOMがアンマウントされたタイミング)でタイマーをクリア
  }, [props.time]); // props.timeが変更されたら再度動作

  return (
    <div className={`bg ${isAnimated ? 'is-animated' : ''}`}>
      <div className="bg-wrap">
        <Link href={props.url}>
          <p className="inn-sp hover:text-gray-400 duration-500">{props.content}</p>
        </Link>
      </div>
    </div>
  );
}
