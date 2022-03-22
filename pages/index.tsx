import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import HeaderComponents from '../components/Header'
import HomeCard from '../components/HomeCard'
import HomeLowerCard from '../components/HomeLowerCard'

const Home: NextPage = () => {
  return (
    <div className="md:max-w-6xl md:mx-auto font-Roboto relative md:p-0 px-2">
      <Head>
        <title>
          Nike. Just Do It. Nike IN
        </title>
        {/* add favison */}
        <link rel="shortcut icon" href="/Nike_Swoosh_Logo_Black_original.jpg" />
      </Head>
      <section className='border'>
        <HeaderComponents />
      </section>
      <main className='border'>
        {/* home page images */}
        <HomeCard mdsrc={'https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/w_1156,c_limit/9064fe24-7ac5-4baa-a7ee-8d15bb3a11ba/nike-just-do-it.png'} smsrc={'https://static.nike.com/a/images/f_auto/dpr_1.9,cs_srgb/h_449,c_limit/d60ccff6-d464-4cbd-83fe-3558a4b9bf4a/nike-just-do-it.png'} description={'The future is in the Air'} title={'NIKE AIR MAX INTRLK'} />

        {/*// todo: best of nike */}
        <HomeCard mdsrc={'https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/w_1156,c_limit/8c8b2373-f031-4bec-92e0-7bf551dd4654/nike-just-do-it.png'} smsrc={'https://static.nike.com/a/images/f_auto/dpr_1.9,cs_srgb/w_336,c_limit/40df83c8-2804-46b8-a931-3345710a0f3f/nike-just-do-it.png'} description={'The future is in the Air'} title={'NIKE AIR MAX 90 SE'} />
        {/*//todo: the latest products */}
        {/* Lated produts */}
        <h1 className="text-2xl my-5">
          The Latest 
        </h1>
        <HomeLowerCard smsrc={'https://static.nike.com/a/images/f_auto/dpr_1.9,cs_srgb/h_500,c_limit/2fdaa992-ee57-42f9-b44a-a8b5d7a8c41b/nike-just-do-it.jpg'}   mdsrc={'https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/w_1156,c_limit/dda2ca46-97d5-4268-a921-289a4a7f62d7/nike-just-do-it.jpg'} description={"Classic touch. Fresh Designs."} title={'NEW STYLES'}/>
      </main>
    </div>
  )
}

export default Home
