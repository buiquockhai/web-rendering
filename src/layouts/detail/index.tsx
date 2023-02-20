import Button from '@component/button'
import Link from 'next/link'
import type { ComponentPropsWithoutRef, ReactNode } from 'react'

interface Props extends ComponentPropsWithoutRef<'div'> {
  head: ReactNode
  description: ReactNode
}

export default function DetailLayout({
  children,
  head,
  description,
  ...more
}: Props) {
  return (
    <div className='flex flex-col' {...more}>
      <h1 className='text-lg font-bold'>{head}</h1>
      <h2 className='mt-3'>{description}</h2>
      <p className='mt-2 text-sm text-slate-500 hover:underline cursor-pointer w-fit'>
        <a
          href='https://dog.ceo/api/breeds/image/random'
          target='_blank'
          rel='noreferrer'
        >
          https://dog.ceo/api/breeds/image/random
        </a>{' '}
        (image fetching from)
      </p>
      <p className='mt-1 text-sm text-slate-500 hover:underline cursor-pointer w-fit'>
        <a href='https://randomuser.me/api/' target='_blank' rel='noreferrer'>
          https://randomuser.me/api/
        </a>{' '}
        (data user fetching from)
      </p>
      <div className='flex gap-2 mt-5'>
        <Link href='/'>
          <Button>{'<-'} Back</Button>
        </Link>
        <a
          href='https://pagespeed.web.dev/?hl=vi'
          target='_blank'
          rel='noreferrer'
        >
          <Button>Analysis {'->'}</Button>
        </a>
      </div>
      <div className='mt-5'>{children}</div>
    </div>
  )
}
