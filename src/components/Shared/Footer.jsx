import Link from "next/link";

const Footer = async () => {
  return (
    <footer className="bg-[#edf2fc] text-gray-700 mt-20 border-t">
      <div className="container mx-auto px-6 py-12">
        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900">NakshiTiles</h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-500">
              Premium tile collection designed with elegance, durability, and
              timeless beauty. Transform your spaces with modern craftsmanship.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-blue-600 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/all-tiles"
                  className="hover:text-blue-600 transition"
                >
                  All Tiles
                </Link>
              </li>
              <li>
                <Link
                  href="/categories"
                  className="hover:text-blue-600 transition"
                >
                  Categories
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-600 transition">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/all-tiles?tiles=marble"
                  className="hover:text-blue-600 transition"
                >
                  Marble Tiles
                </Link>
              </li>
              <li>
                <Link
                  href="/all-tiles?tiles=matte"
                  className="hover:text-blue-600 transition"
                >
                  Matte Finish
                </Link>
              </li>
              <li>
                <Link
                  href="/all-tiles?tiles=glossy"
                  className="hover:text-blue-600 transition"
                >
                  Glossy Tiles
                </Link>
              </li>
              <li>
                <Link
                  href="/all-tiles?tiles=mosaic"
                  className="hover:text-blue-600 transition"
                >
                  Mosaic Tiles
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Contact</h3>
            <p className="text-sm text-gray-500">Dhaka, Bangladesh</p>
            <p className="text-sm mt-2 text-gray-500">
              Email: support@nakshitiles.com
            </p>
            <p className="text-sm mt-2 text-gray-500">
              Phone: +880 1XXX-XXXXXX
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t mt-10 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <p>© {new Date().getFullYear()} NakshiTiles. All rights reserved.</p>

          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-blue-600 transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-blue-600 transition">
              Terms
            </a>
            <a href="#" className="hover:text-blue-600 transition">
              Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
