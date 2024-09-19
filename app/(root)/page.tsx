import React from 'react'
import HeaderBox from '@/components/HeaderBox';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import { RightsideBar } from '@/components/RightsideBar';

const Home = () => {
  const loggedIn = {firstName: "Asif", lastName: "Ibrahim", email: "asifibrahim652@gmail.com"};
  return (
    <>
      <section className='home'>
        <div className="home-content">
          <header className='home-header'>
            <HeaderBox type="greeting" title="Welcome" user={loggedIn?.firstName || 'Guest'}
            subtext = 'Access and manage your account and transactions efficiently'
            />

            <TotalBalanceBox accounts= {[]} totalBanks={1} totalCurrentBalance={1205000.45}/>
          </header>
          Recent Transcetions
        </div>

        <RightsideBar
        user={loggedIn} transcetions={[]} banks={[{currentBalance: 1250.34}, {currentBalance: 1250.34}]}/>
      </section>
    </>
  )
}

export default Home;