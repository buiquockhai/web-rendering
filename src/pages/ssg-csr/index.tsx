import DetailLayout from '@layout/detail'
import type { MetaProps } from '@layout/meta'
import { useEffect, useState } from 'react'

export default function SSG_CSRPage() {
  const [thumbnail, setThumbnail] = useState<any>({})
  const [user, setUser] = useState({})

  const fetchData = async () => {
    const resThumbnail = await fetch('https://dog.ceo/api/breeds/image/random')
    const resUser = await fetch('https://randomuser.me/api/')
    const thumbnailData = await resThumbnail.json()
    const userData = await resUser.json()

    setThumbnail(thumbnailData)
    setUser(userData)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <DetailLayout
      head='SSG + CSR'
      description='Pre-rendered HTML markup files + fetching data on client using useEffect'
    >
      <img
        decoding='async'
        className='h-[50vw] w-full object-contain border mt-5'
        src={thumbnail?.message}
        alt={thumbnail?.status}
      />
      <pre className='p-3 mt-10 bg-slate-50 text-sm'>
        {JSON.stringify(user, null, 2)}
      </pre>
    </DetailLayout>
  )
}

SSG_CSRPage.meta = {
  title: 'SSG + CSR',
  description: `Pre-rendered HTML markup files + fetching data on client using useEffect`,
} as MetaProps
