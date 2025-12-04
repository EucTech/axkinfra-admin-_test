import React from 'react'
import Layout from '../Layout'
import UserStats from '@/components/Dashboard/Users/UserStats'
import UsersTable from '@/components/Dashboard/Users/UsersTable'

const page = () => {
  return (
    <Layout>
      <div className="w-full flex flex-col px-[5px] sm:px-[29px] gap-5 mt-10 py-3">
        <UserStats />
        <UsersTable />
      </div>
    </Layout>
  )
}

export default page
