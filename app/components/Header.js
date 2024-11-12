import "./Header.css";

export default function Header() {
    return (
      <header className="relative w-full h-52" > 
        {/* absoluteとrelative ・・子要素が親要素を基準にするためには、親要素に「position:relative;」を記述します。position:relativeとともに、top,bottom,left,rightを書くとその親要素の位置が変化し、それに伴って子要素の位置も相対的に変化します。ただし、heightやwidthは、relativeやabsoluteとは関係ありません。(親要素のheightは、子要素のheightに影響するという別の入れ子構造の話)*/}
        <div className="absolute  mx-4 my-2 inset-0 rounded-2xl bg-cover bg-center" style={{ backgroundImage: 'url(/images/header_bg.jpg)' }}></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
          <h1 className="text-4xl font-bold mb-4 limelight-regular">Welcome to My Website </h1>
          <p className="text-lg mb-4 poetsen-one-regular">This homepage is the portfolio of Seiya Kakui.</p>
          <nav> {/* <nav> タグは、意味論的なタグです。これにより、ナビゲーションメニュー(そのままの意味でとらえて)を明確にする役割を持っています。なくても機能的には問題ありませんが、使うことが推奨されます。 */}
            <ul className="flex space-x-20 poetsen-one-regular">
              <li>
                <a href="/" className="text-white hover:text-gray-400 hover:transition-colors duration-1000">Top</a>
              </li>
              <li>
                <a href="/about" className="text-white hover:text-gray-400 hover:transition-colors duration-1000">About</a>
              </li>
              <li>
                <a href="/services" className="text-white hover:text-gray-400 hover:transition-colors duration-1000">Services</a>
              </li>
              <li>
                <a href="/contact" className="text-white hover:text-gray-400 hover:transition-colors duration-1000">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
}