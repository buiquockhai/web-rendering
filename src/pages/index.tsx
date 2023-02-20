import type { MetaProps } from '@layout/meta'
import Link from 'next/link'

const data = [
  {
    key: 'static',
    name: 'Static',
    description:
      'automatically rendered as static HTML files (uses not initial props - without fetching data)',
    href: '/static',
  },
  {
    key: 'SSG',
    name: 'SSG',
    description:
      'automatically generated as static HTML + JSON files (uses getStaticProps)',
    href: '/ssg',
  },
  {
    key: 'ISR',
    name: 'ISR',
    description:
      'incremental static regeneration (uses revalidate in getStaticProps)',
    href: '/isr',
  },
  {
    key: 'SSG_CSR',
    name: 'SSG + CSR',
    description:
      'pre-rendered HTML markup files + fetching data on client using useEffect',
    href: '/ssg-csr',
  },
  {
    key: 'SSR',
    name: 'SSR',
    description:
      'server side renders at runtime (use getInitialsProps or getServerSideProps)',
    href: '/ssr',
  },
  {
    key: 'SSR_dynamic',
    name: 'SSR Dynamic Import',
    description:
      'server side renders with dynamic import under SSR mode (fetching data using getServerSideProps)',
    href: '/ssr-dynamic',
  },
  {
    key: 'CSR',
    name: 'CSR',
    description: 'client side render with dynamic import under CSR mode',
    href: '/csr',
  },
] as const

export default function HomePage() {
  return (
    <div className='flex flex-col'>
      <h1 className='text-lg font-bold'>
        Rendering methods used in modern web development and they are as
        follows:
      </h1>

      <table className='mt-10'>
        <thead className='bg-slate-800 text-slate-100'>
          <tr>
            <th className='text-left p-2 w-1/12'>Ord.</th>
            <th className='text-left p-2 w-2/12'>Name</th>
            <th className='text-left p-2 w-8/12'>Description</th>
            <th className='text-left p-2 w-1/12'>Link</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={item.key}
              className='text-sm even:bg-slate-100 hover:bg-slate-50'
            >
              <td className='p-2'>{index + 1}</td>
              <td className='p-2'>{item.name}</td>
              <td className='p-2'>{item.description}</td>
              <td className='p-2'>
                <Link
                  href={item.href}
                  className='hover:underline hover:text-blue-600'
                >
                  Visit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className='mt-10'>
        <a
          target='_blank'
          href='https://pagespeed.web.dev/?hl=vi'
          rel='noreferrer'
          className='text-sm hover:text-blue-600 text-slate-500'
        >
          Google PageSpeed Analysis {'->'}
        </a>
      </div>
    </div>
  )
}

HomePage.meta = {
  title: 'Web rendering practice',
  description: `Presentation website's render methods`,
} as MetaProps
