import DetailLayout from '@layout/detail'
import type { MetaProps } from '@layout/meta'

export default function ISRPage({ thumbnail, user }) {
  return (
    <DetailLayout
      head='ISR'
      description='Incremental static regeneration (uses revalidate in getStaticProps)'
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

ISRPage.meta = {
  title: 'ISR',
  description: `Incremental static regeneration (uses revalidate in getStaticProps)`,
} as MetaProps

export async function getStaticProps() {
  const resThumbnail = await fetch('https://dog.ceo/api/breeds/image/random')
  const resUser = await fetch('https://randomuser.me/api/')

  const thumbnail = await resThumbnail.json()
  const user = await resUser.json()

  return {
    revalidate: 3600,
    props: {
      thumbnail,
      user,
    },
  }
}
