import type { MetaProps } from '@layout/meta'
import dynamic from 'next/dynamic'

const CSR = dynamic(() => import('@component/csr'), {
  ssr: false,
})

export default function CSRPage() {
  return <CSR />
}

CSRPage.meta = {
  title: 'CSR',
  description: `Client side render with dynamic import under CSR mode`,
} as MetaProps
