import React from 'react'
import Post from './post'
import Navbar from './navbar'

const Dashboard = props => {
  return (
    <section>
      <Navbar />
      <div className='container'>
        <div className='row'>
          <div className='col-12 text-center'>Dashboard</div>
        </div>
      </div>
    </section>
  )
}

export default Dashboard
