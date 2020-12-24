import { CartProvider } from '@next-storefront/core/contexts/CartContext'
import { useCart } from '@next-storefront/core/hooks/useCart'
import * as shopifyCheckout from '@next-storefront/shopify/cart'
// import * as stripeCheckout from '@next-storefront/stripe/checkout'

import { ChevronRight, ShoppingBag } from 'react-feather'
import { Link } from 'src/components/Link'
import NextLink from 'next/link'

import 'index.css'
import 'pure-react-carousel/dist/react-carousel.es.css'
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'
import { Footer } from 'src/components/Footer'

function Cart() {
  let { cart } = useCart()

  return (
    <Link href="/shop/cart" className="relative flex items-center">
      <ShoppingBag />
      <span className="absolute top-0 right-0 flex items-center justify-center w-4 h-4 -mt-2 -mr-2 text-xs font-semibold text-white bg-black rounded-full">
        {cart.reduce((total, item) => total + item.quantity, 0)}
      </span>
    </Link>
  )
}

function Menu() {
  return (
    <header className="h-16">
      <div className="fixed z-10 w-full text-gray-700 bg-white shadow">
        <div className="flex flex-col flex-wrap items-center justify-between h-16 px-8 md:flex-row">
          <NextLink href="/">
            <a className="flex items-center mb-4 text-lg font-bold tracking-wide text-gray-900 uppercase md:mb-0">
              <ShoppingBag className="mr-2" /> RUSTAMA Shopify Store
            </a>
          </NextLink>
          <Cart />
        </div>
      </div>
    </header>
  )
}

function Sidebar() {
  return (
    <div className="flex-shrink-0 w-64 px-6">
      <div className="fixed left-0 w-64 px-6 py-8 bg-white">
        <h2 className="text-sm font-semibold tracking-wider text-gray-600 uppercase">
          Categories
        </h2>
        <nav className="pt-5">
          <ul className="grid grid-flow-row gap-5">
            <li>
              <Link href="/tag/men">
                <a className="flex items-center text-gray-700 hover:text-gray-900">
                                   <span className="text-sm font-semibold text-gray-700">
                    Men
                  </span>
                  <ChevronRight className="w-5 h-5 ml-auto" />
                </a>
              </Link>
            </li>

            <li>
              <Link href="/tag/women">
                <a className="flex items-center text-gray-700 hover:text-gray-900">
                                  <span className="text-sm font-semibold text-gray-700">
                    Women
                  </span>
                  <ChevronRight className="w-5 h-5 ml-auto" />
                </a>
              </Link>
            </li>

            <li>
              <Link href="/tag/kid">
                <a className="flex items-center text-gray-700 hover:text-gray-900">

                  <span className="text-sm font-semibold text-gray-700">
                    Kids
                  </span>
                  <ChevronRight className="w-5 h-5 ml-auto" />
                </a>
              </Link>
            </li>

            <li>
              <Link href="/tag/backpack">
                <a className="flex items-center text-gray-700 hover:text-gray-900">
                  <span className="text-sm font-semibold text-gray-700">
                    Accessoires
                  </span>
                  <ChevronRight className="w-5 h-5 ml-auto" />
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default function AppRoot({ Component, pageProps }) {
  return (
    <CartProvider checkout={shopifyCheckout}>
      <div className="relative">
        <Menu />

        <div className="relative flex">
          <Sidebar />

          <main className="flex-1 p-8 bg-gray-100">
            <Component {...pageProps} />
          </main>
        </div>

        <Footer />
      </div>
    </CartProvider>
  )
}
