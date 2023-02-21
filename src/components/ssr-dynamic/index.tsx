import DetailLayout from '@layout/detail'

export default function SSRDynamic({ thumbnail, user }: any) {
  return (
    <DetailLayout
      head='SSR Dynamic Import'
      description='Server side renders with dynamic import under SSR mode (fetching data using getServerSideProps)'
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
