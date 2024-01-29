import React from 'react'
import Layout from './components/Layout';
import Footer from './components/Footer';
import style from '../styles/Dashboard.module.css'
const dashboard = () => {
  return (
    <>
      <div className={style.header} >
      <Layout/>
      <h1>Redirect Dashboard page</h1>
    </div>
    <Footer/>

    </>
  
  )
}

export default dashboard;
