import type { ComponentPropsWithoutRef } from 'react'

export default function Button({
  children,
  ...more
}: ComponentPropsWithoutRef<'button'>) {
  return (
    <button
      className='px-4 py-2 text-sm grid place-content-center text-slate-100 bg-slate-900 rounded-sm hover:opacity-90 active:opacity-75'
      type='button'
      {...more}
    >
      {children}
    </button>
  )
}
