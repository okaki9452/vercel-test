"use client"

import { useEffect, useState } from 'react';
import "./Img.css"

export default function Img(props) {
    const [isAnimated, setIsAnimated] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsAnimated(true);
      }, 1000); // アニメーション開始

      return () => clearTimeout(timer); // クリーンアップ
    }, []);

    return (
      <img 
        src={props.src}
        alt={props.alt}
        className={`absolute w-11/12 object-cover anim-box zoomin ${isAnimated ? 'is-animated' : 'hidden'}`}
        // object-cover: img要素にobject-coverを付けることで、画像が親要素のサイズに合わせて拡大縮小され、レイアウトが崩れません。 
      />
    );
}
