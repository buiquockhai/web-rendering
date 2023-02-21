import DetailLayout from '@layout/detail'
import user from '@component/static/user.json'
import thumbnail from '@component/static/thumbnail.json'
import type { MetaProps } from '@layout/meta'

export default function StaticPage() {
  return (
    <DetailLayout
      head='Static'
      description='Automatically rendered as static HTML files (uses not initial props - without fetching data)'
    >
      <p className='text-sm text-red-500'>*using JSON static data</p>
      <img
        decoding='async'
        className='h-[50vw] w-full object-contain border mt-5'
        src={thumbnail.message}
        alt={thumbnail.status}
      />
      <pre className='p-3 mt-10 bg-slate-50 text-sm'>
        {JSON.stringify(user, null, 2)}
      </pre>
    </DetailLayout>
  )
}

StaticPage.meta = {
  title: 'Static',
  description: `Automatically rendered as static HTML files (uses not initial props - without fetching data)`,
} as MetaProps
