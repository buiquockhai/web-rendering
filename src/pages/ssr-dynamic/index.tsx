import type { MetaProps } from '@layout/meta'
import dynamic from 'next/dynamic'

const SSRDynamic = dynamic(() => import('@component/ssr-dynamic'), {
  ssr: true,
})

export default function SSRDynamicPage({ thumbnail, user }) {
  return <SSRDynamic thumbnail={thumbnail} user={user} />
}

SSRDynamicPage.meta = {
  title: 'SSR Dynamic Import',
  description: `Server side renders with dynamic import under SSR mode (fetching data using getServerSideProps)`,
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
