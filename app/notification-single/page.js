import NotificationSingle from '@/components/NotificationSingle'
import Layout from '@/layouts/layout'
import React from 'react'

export const metadata = {
  title:'Notification Single',
  content:'text/html',
  openGraph: {
    title:'Notification Single',
    content:'text/html',
  },
}

export default function page() {
  return (
    <Layout>
      <NotificationSingle />
    </Layout>
  )
}
