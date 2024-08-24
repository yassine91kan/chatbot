import Documentation from '@/components/Documentation'
import Layout from '@/layouts/layout'
import React from 'react'

export const metadata = {
  title:'Documentation',
  content:'text/html',
  openGraph: {
    title:'Documentation',
    content:'text/html',
  },
}

export default function page() {
  return (
    <Layout leftMenu>
      <Documentation />
    </Layout>
  )
}
