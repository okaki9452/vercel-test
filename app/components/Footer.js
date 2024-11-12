import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-800 text-white py-4">
      <div className="text-center">
        <nav className="flex justify-center space-x-10">
          
          <Link href="/">
            <p className="hover:text-gray-400">Top</p>
          </Link>

          <Link href="/about">
            <p className="hover:text-gray-400">About</p>
          </Link>

          <Link href="/services">
            <p className="hover:text-gray-400">Service</p>
          </Link>

          <Link href="/contact">
            <p className=" hover:text-gray-400">Contact</p>
          </Link>

        </nav>
        <p className="mt-4">&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
      </div>
    </footer>
  );
}
