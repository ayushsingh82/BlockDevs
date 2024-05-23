"use client"
import React from 'react'

function page() {
  return (
    <div className='flex flex-col  items-center bg-slate-900  '>
    <h1 className='text-4xl font-semibold mt-[40px] text-pink-500 mt-[150px]'>Starter learning about chainlink </h1>
    <h3 className='mt-[20px] text-white text-xl'>Chainlink is the decentralized computing platform powering the verifiable web
    <br/>Chainlink is driven by a large open-source community of data providers,
    <br/>node operators, smart contract developers, researchers, security auditors, and more
    <br/> Connecting the world to blockchains</h3>
    <button className='mt-[20px] border-2 border-white text-white px-[10px] 
    py-[10px] font-medium text-xl bg-pink-500 rounded-lg mx-auto'>Join the community</button>
 
    <div className='mt-[80px] flex flex-col gap-y-[80px] text-white mb-[30px]'>

    <div className='flex flex-col md:flex-row justify-between mx-auto md:gap-x-12 gap-y-12'>
    <div>
    <h1 className='text-center font-medium text-3xl text-pink-500'>Chainlink CCIP </h1>
    <p className='mt-[20px] text-xl'>A secure interoperability protocol for powering token transfers and
    <br/> sending arbitrary messages cross-chain. You can use CCIP to transfer data, tokens
    <br/>or both data and tokens across chains.</p>
    <div className='text-center'>
    <button className='mt-[20px] border-2 border-white text-white px-[10px] 
    py-[10px] font-medium text-xl bg-pink-500 rounded-lg mx-auto'>Learn CCIP</button>     
    </div>
    </div>
    <div>
    <img  className='h-[400px] w-[500px] bg-transparent' src='https://docs.chain.link/images/ccip/ccip-diagram-04_v04.webp' alt='image'/>
    </div>
    </div>

    <div className='flex flex-col md:flex-row justify-between mx-auto md:gap-x-12 gap-y-12'>
    <div className='order-2 md:order-1'>
    <img  className='h-[400px] ' src='https://assets-global.website-files.com/64cc2c23d8dbd707cdb556ff/6503740ef4034fca83dc7d95_product-vrf-p-1080.png' alt='image'/>
    </div>
    <div className='order-1 md:order-2'>
    <h1 className='text-center text-3xl font-semibold text-pink-500'>VRF</h1>
    <p className='mt-[20px] text-lg '>Chainlink VRF provides cryptographically secure randomness for your
    <br/>blockchain-based applications. Randomness is very difficult to generate on blockchains.
    <br/>The solution to this issue is Chainlink VRF.</p>
    <div className='text-center'>
    <button className='mt-[20px] border-2 border-white text-white px-[10px] 
    py-[10px] font-medium text-xl bg-pink-500 rounded-lg mx-auto'>Learn VRF</button>     
    </div>
    </div>
    </div>

    </div>

    </div>
  )
}

export default page
