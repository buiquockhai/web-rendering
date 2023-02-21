import Button from '@component/button'
import DetailLayout from '@layout/detail'
import type { MetaProps } from '@layout/meta'
import { MY_SECRET_TOKEN } from '@page/api/revalidate'

export default function SSGPage({ thumbnail, user }) {
  const onRevalidate = async () => {
    const revalidateRes = await fetch(
      `https://web-rendering.vercel.app/api/revalidate?path=/ssg&secret=${MY_SECRET_TOKEN}`,
    )
    const message = await revalidateRes.json()
    // eslint-disable-next-line no-console
    console.log({ message })
  }

  return (
    <DetailLayout
      head='SSG'
      description='Automatically generated as static HTML + JSON files (uses getStaticProps)'
    >
      <div className='flex justify-end'>
        <Button onClick={onRevalidate}>Revalidate</Button>
      </div>
      <img
        decoding='async'
        className='h-[50vw] w-[100vw] object-contain border mt-5'
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
