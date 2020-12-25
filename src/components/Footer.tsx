import { Hexagon } from 'react-feather'

export function Footer() {
  return (
    <div className="flex flex-col items-center">
      <footer className="w-full">
        <div className="container flex justify-center h-full px-8 py-16 lg:block">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 row-gap-8 col-gap-16">
            <div className="flex items-start sm:col-span-3 lg:col-span-1 sm:justify-center lg:justify-start">
              <Hexagon />
            </div>
            <div>
              <h3 className="text-lg font-semibold">About Us</h3>
              <nav className="pt-2 leading-loose">
                <ul>
                  <li>
                    <a
                      className="relative text-sm text-gray-600 hover:text-gray-800 group"
                      href="#"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      className="relative text-sm text-gray-600 hover:text-gray-800 group"
                      href="#"
                    >
                      Newsroom
                    </a>
                  </li>
                  <li>
                    <a
                      className="relative text-sm text-gray-600 hover:text-gray-800 group"
                      href="#"
                    >
                      Careers
                    </a>
                  </li>
                  <li>
                    <a
                      className="relative text-sm text-gray-600 hover:text-gray-800 group"
                      href="#"
                    >
                      Sitemap
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Help &amp; FAQ</h3>
              <nav className="pt-2 leading-loose">
                <ul>
                  <li>
                    <a
                      className="relative text-sm text-gray-600 hover:text-gray-800 group"
                      href="#"
                    >
                      Online Ordering
                    </a>
                  </li>
                  <li>
                    <a
                      className="relative text-sm text-gray-600 hover:text-gray-800 group"
                      href="#"
                    >
                      Shipping
                    </a>
                  </li>
                  <li>
                    <a
                      className="relative text-sm text-gray-600 hover:text-gray-800 group"
                      href="#"
                    >
                      Billing
                    </a>
                  </li>
                  <li>
                    <a
                      className="relative text-sm text-gray-600 hover:text-gray-800 group"
                      href="#"
                    >
                      Returns &amp; Exchanges
                    </a>
                  </li>
                  <li>
                    <a
                      className="relative text-sm text-gray-600 hover:text-gray-800 group"
                      href="#"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div>
              <h3 className="text-lg font-semibold">My Account</h3>
              <nav className="pt-2 leading-loose">
                <ul>
                  <li>
                    <a
                      className="relative text-sm text-gray-600 hover:text-gray-800 group"
                      href="#"
                    >
                      Order Status
                    </a>
                  </li>
                  <li>
                    <a
                      className="relative text-sm text-gray-600 hover:text-gray-800 group"
                      href="#"
                    >
                      Favourites
                    </a>
                  </li>
                  <li>
                    <a
                      className="relative text-sm text-gray-600 hover:text-gray-800 group"
                      href="#"
                    >
                      My Account
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </footer>
      <div className="w-full py-4">
        <div className="px-6">
          <div className="container flex items-center justify-center mx-auto text-sm text-gray-600">
            <div className="grid grid-flow-col gap-3">
              <a aria-label="GitHub" href="#" className="hover:text-indigo-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </a>
              <a
                aria-label="Twitter"
                href="#"
                className="hover:text-indigo-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                </svg>
              </a>
              <a
                aria-label="Dribbble"
                href="#"
                className="hover:text-indigo-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx={12} cy={12} r={10} />
                  <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32" />
                </svg>
              </a>
            </div>
            <span className="ml-8">
              Copyright © <a href="https://rustama.myshopify.com">Rustama Shopify</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
