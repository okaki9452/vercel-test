export default function Footer() {
  return (
    <footer className="w-full bg-gray-800 text-white py-4">
      <div className="text-center">
        <nav className="flex justify-center space-x-16">
          
            <a href="/" className="hover:text-gray-400">Top</a>
          
            <a href="/about" className="hover:text-gray-400">About</a>
        
            <a href="/services" className="hover:text-gray-400">Service</a>
          
            <a href="/contact" className="hover:text-gray-400">Contact</a>

        </nav>
        <p className="mt-4">&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
      </div>
    </footer>
  );
}