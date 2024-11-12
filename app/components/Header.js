import "./Header.css";
import Link from 'next/link';

export default function Header() {
    return (
      <header className="relative w-full h-11/12 sm:h-72 md:h-80 lg:h-96"> {/* 高さをレスポンシブに調整 */}
        <div className="absolute mx-4 my-2 inset-0 rounded-2xl bg-cover bg-center" style={{ backgroundImage: 'url(/images/header_bg.jpg)' }}></div>
        <div className="relative px-4 py-36 z-10 flex flex-col gap-3 items-center justify-center h-full text-white">
          {/* タイトルのフォントサイズをレスポンシブに調整 */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center font-bold limelight-regular">
            Welcome to My Website
          </h1>
          {/* 説明文のフォントサイズをレスポンシブに調整 */}
          <p className="text-lg sm:text-xl md:text-2xl mx-6 text-center poetsen-one-regular">
            This homepage is the portfolio of Seiya Kakui.
          </p>
          <nav>
            <ul className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8 poetsen-one-regular">
              <li>
                <Link href="/">
                  <p className="text-white hover:text-gray-400 hover:transition-colors duration-500">Top</p>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <p className="text-white hover:text-gray-400 hover:transition-colors duration-500">About</p>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <p className="text-white hover:text-gray-400 hover:transition-colors duration-500">Services</p>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <p className="text-white hover:text-gray-400 hover:transition-colors duration-500">Contact</p>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
}
