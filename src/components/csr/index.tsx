import DetailLayout from '@layout/detail'
import { useEffect, useState } from 'react'

export default function CSR() {
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
      head='CSR'
      description='Client side render with dynamic import under CSR mode'
    >
      <img
        decoding='async'
        className='w-full h-[50vw] w-[100vw] object-contain border mt-5'
        src={thumbnail?.message}
        alt={thumbnail?.status}
      />
      <pre className='p-3 mt-10 bg-slate-50 text-sm'>
        {JSON.stringify(user, null, 2)}
      </pre>
    </DetailLayout>
  )
}
