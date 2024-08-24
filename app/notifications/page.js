import Notification from '@/components/Notification'
import Layout from '@/layouts/layout'
import React from 'react'

export const metadata = {
  title:'Notification',
  content:'text/html',
  openGraph: {
    title:'Notification',
    content:'text/html',
  },
}

export default function page() {
  return (
    <Layout>
      <Notification />
    </Layout>
  )
}
