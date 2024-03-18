import React from 'react'
import Menu from '../components/Menu'
import Banner from '../components/banner/Banner'
import Balance from '../components/balance/Balance'
import About from '../components/about/About'
import Content from '../components/content/Content'
import Test from '../components/test/Test'
import Cta from '../components/cta/Cta'
import Acc from '../components/acc/Acc'
import Us from '../components/us/Us'
import Poss from '../components/poss/Poss'
import Footer from '../components/footer/Footer'





const Home = () => {
  return (
    <div>
      <Menu/>
      <Banner/>
      <Balance/>
      <About/>
      <Content/>
      <Test/>
      <Cta/>
      <Acc/>
      <Us/>
      <Poss/>
      <Footer/>
      
    </div>
  )
}

export default Home
