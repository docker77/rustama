import { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { getTagPages } from '@next-storefront/core/adapter'
import { ArrowRight } from 'react-feather'

export const getStaticProps: GetStaticProps = async () => {
  let pages = await getTagPages()

  return {
    props: {
      tags: Object.entries(pages).map(([tag, page]) => ({
        tag,
        pageCount: page[0].count,
      })),
    },
  }
}

interface HomePageProps {
  tags: {
    tag: string
    pageCount: number
  }[]
}

export default function HomePage({ tags }: HomePageProps) {
  return (
    <>
      <Head>
        <title>RustamA Next Shopify</title>
        <meta
          property="description"
          content="E-Commerce solution built with Typescript and NextJS."
        />
      </Head>
      <header
        className="relative flex items-center max-h-screen overflow-hidden bg-center bg-cover rounded"
        style={{
          height: 450,
          backgroundImage:
            // 'url(https://images.unsplash.com/photo-1588922800585-6ad18d662333?ixlib=rb-1.2.1&auto=format&fit=crop&crop=right&w=1920&h=600&q=80',
            'url(https://images.unsplash.com/photo-1458708606976-4af51a03c931?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1487&q=80)',

            //'url(https://images.unsplash.com/photo-1503664974666-c4b8f669f3ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&h=700&q=80&crop=faces&fp-y=0.20)',
        }}
      >
        <div className="absolute inset-0 w-full h-full opacity-25 bg-gradient-to-r from-black via-black to-transparent" />
        <div className="relative px-8 leading-none text-white xl:container">
          <h1 className="text-6xl font-bold">Hello there</h1>
          <p className="pt-4 text-xl opacity-75">
            Would like you to buy a shoes for modern citylife?
          </p>
          <Link href="/tag/men">
            <a className="inline-flex items-center px-8 py-5 mt-8 text-xl font-bold tracking-wide text-black uppercase bg-white rounded shadow-lg hover:bg-black hover:text-white">
              Shop Shoes <ArrowRight className="w-5 h-5 ml-3" />
            </a>
          </Link>
        </div>
      </header>
      <div className="pt-16">
        {/* NAV */}
        {/* HEADER */}

        <section className="grid grid-flow-row md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link href="/tag/backpack">
            <a className="relative h-0 overflow-hidden rounded group pb-2/3">
              <img
                src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                alt="T-shirts on a rack"
                className="absolute inset-0 object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-150"
              />
              <div className="absolute flex items-center justify-center w-full h-full">
                <div className="px-5 py-2 text-xl font-bold tracking-wider text-white uppercase bg-black rounded">
                  Backpacks
                </div>
              </div>
            </a>
          </Link>
          <Link href="/tag/kid">
            <a className="relative h-0 overflow-hidden rounded group pb-2/3">
              <img
                src="https://images.unsplash.com/photo-1578932750355-5eb30ece487a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80"
                alt="T-shirts on a rack"
                className="absolute inset-0 object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-150"
              />
              <div className="absolute flex items-center justify-center w-full h-full">
                <div className="px-5 py-2 text-xl font-bold tracking-wider text-white uppercase bg-black rounded">
                  Kids
                </div>
              </div>
            </a>
          </Link>
          <Link href="/tag/women">
            <a className="relative h-0 overflow-hidden rounded group pb-2/3">
              <img
                src="https://images.unsplash.com/photo-1587281148103-543bf73f6748?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80"
                alt="T-shirts on a rack"
                className="absolute inset-0 object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-150"
              />
              <div className="absolute flex items-center justify-center w-full h-full">
                <div className="px-5 py-2 text-xl font-bold tracking-wider text-white uppercase bg-black rounded">Women</div>
              </div>
            </a>
          </Link>
          <Link href="/tag/men">
            <a className="relative h-0 overflow-hidden rounded group pb-2/3">
              <img
                src="https://images.unsplash.com/photo-1578470507807-3fc541d5f544?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80"
                alt="T-shirts on a rack"
                className="absolute inset-0 object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-150"
              />
              <div className="absolute flex items-center justify-center w-full h-full">
                <div className="px-5 py-2 text-xl font-bold tracking-wider text-white uppercase bg-black rounded">
                  Men
                </div>
              </div>
            </a>
          </Link>
        </section>
        {/* WOMEN'S PRODUCTS + EXPLORE LINK */}
        {/* MEN'S CAROUSEL + EXPLORE LINK */}
        {/* FOOTER */}
        <ul className="pt-24 grid grid-cols-4 gap-4">
          {tags.map(({ tag, pageCount }) => (
            <li key={tag} className="block">
              <Link href={`/tag/${tag}`}>
                <a className="flex items-center justify-center h-24 px-4 font-bold tracking-wider text-center text-white uppercase bg-indigo-500 rounded-lg hover:bg-indigo-600">
                  <span>
                    {tag}{' '}
                    <span className="text-xs font-normal">
                      ({pageCount} products)
                    </span>
                  </span>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
