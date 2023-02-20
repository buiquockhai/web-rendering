import DetailLayout from '@layout/detail'
import type { MetaProps } from '@layout/meta'

export default function SSGPage({ thumbnail, user }) {
  return (
    <DetailLayout
      head='SSG'
      description='Automatically generated as static HTML + JSON files (uses getStaticProps)'
    >
      <img
        decoding='async'
        className='w-full object-contain border mt-5'
        src={thumbnail.message}
        alt={thumbnail.status}
      />
      <pre className='p-3 mt-10 bg-slate-50 text-sm'>
        {JSON.stringify(user, null, 2)}
      </pre>
    </DetailLayout>
  )
}

SSGPage.meta = {
  title: 'SSG',
  description: `Automatically generated as static HTML + JSON files (uses getStaticProps)`,
} as MetaProps

export async function getStaticProps() {
  const resThumbnail = await fetch('https://dog.ceo/api/breeds/image/random')
  const resUser = await fetch('https://randomuser.me/api/')

  const thumbnail = await resThumbnail.json()
  const user = await resUser.json()

  return {
    props: {
      thumbnail,
      user,
    },
  }
}
