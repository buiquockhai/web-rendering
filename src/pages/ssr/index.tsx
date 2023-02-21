import DetailLayout from '@layout/detail'
import type { MetaProps } from '@layout/meta'

export default function SSRPage({ thumbnail, user }) {
  return (
    <DetailLayout
      head='SSR'
      description='Server side renders at runtime (use getInitialsProps or getServerSideProps)'
    >
      <img
        decoding='async'
        className='w-full h-[50vw] w-[100vw] object-contain border mt-5'
        src={thumbnail.message}
        alt={thumbnail.status}
      />
      <pre className='p-3 mt-10 bg-slate-50 text-sm'>
        {JSON.stringify(user, null, 2)}
      </pre>
    </DetailLayout>
  )
}

SSRPage.meta = {
  title: 'SSR',
  description: `Server side renders at runtime (use getInitialsProps or getServerSideProps)`,
} as MetaProps

export async function getServerSideProps() {
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
