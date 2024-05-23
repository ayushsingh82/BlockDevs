"use client"
import React from 'react';
import Link from 'next/link'; // Make sure you have this import for Link to work.

function Page() {
  return (
    <div className="flex flex-col items-center bg-slate-900">
      <h1 className="text-4xl font-semibold mt-[100px] text-pink-500">
        Starter learning about chainlink
      </h1>
      <h3 className="mt-[20px] text-white text-xl text-center">
        Chainlink is the decentralized computing platform powering the verifiable web
        <br />
        Chainlink is driven by a large open-source community of data providers,
        <br />
        node operators, smart contract developers, researchers, security auditors, and more
        <br />
        Connecting the world to blockchains
      </h3>
      <button className="mt-[20px] border-2 border-white text-white px-[10px] py-[10px] font-medium text-xl bg-pink-500 rounded-lg">
        Join the community
      </button>

      <div className="mt-[80px] flex flex-col gap-y-[80px] text-white mb-[30px]">
        <div className="flex flex-col md:flex-row justify-between mx-auto md:gap-x-12 gap-y-12">
          <div>
            <h1 className="text-center font-medium text-3xl text-pink-500">
              Chainlink CCIP
            </h1>
            <p className="mt-[20px] text-xl text-center md:text-left">
              A secure interoperability protocol for powering token transfers and
              <br /> sending arbitrary messages cross-chain. You can use CCIP to transfer data, tokens
              <br /> or both data and tokens across chains.
            </p>
            <div className="text-center">
              <button className="mt-[20px] border-2 border-white text-white px-[10px] py-[10px] font-medium text-xl bg-pink-500 rounded-lg">
                Learn CCIP
              </button>
            </div>
          </div>
          <div>
            <img
              className="h-[400px] w-[500px] bg-transparent"
              src="https://docs.chain.link/images/ccip/ccip-diagram-04_v04.webp"
              alt="Chainlink CCIP diagram"
            />
          </div>
        </div>

        {/* <div className="w-full bg-gray-100 py-20">
          <div className="max-w-5xl mx-auto px-6 md:flex md:items-center md:justify-between">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-semibold text-blue-900">
                Chainlink CCIP
              </h2>
              <p className="mt-4 text-lg text-gray-700">
                A secure interoperability protocol for powering token transfers and sending arbitrary messages cross-chain. You can use CCIP to transfer data, tokens, or both data and tokens across chains.
              </p>
              <Link href="https://chain.link/education/cross-chain">
                <button className="mt-6 px-6 py-3 text-lg font-medium text-white bg-pink-500 rounded-lg">
                  Learn CCIP
                </button>
              </Link>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0 md:ml-12">
              <img
                src="https://docs.chain.link/images/ccip/ccip-diagram-04_v04.webp"
                alt="Chainlink CCIP diagram"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div> */}

        <div className="w-full py-20 bg-slate-900">
          <div className="max-w-5xl mx-auto px-6 md:flex md:items-center md:justify-between">
            <div className="md:w-1/2 order-2 md:order-1">
              <img
                src="https://assets-global.website-files.com/64cc2c23d8dbd707cdb556ff/6503740ef4034fca83dc7d95_product-vrf-p-1080.png"
                alt="Chainlink VRF"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 order-1 md:order-2 md:ml-12">
              <h2 className="text-3xl font-semibold text-pink-500">VRF</h2>
              <p className="mt-4 text-lg text-gray-700 text-white">
                Chainlink VRF provides cryptographically secure randomness for your blockchain-based applications. Randomness is very difficult to generate on blockchains. The solution to this issue is Chainlink VRF.
              </p>
              <button className="mt-6 px-6 py-3 text-lg font-medium text-white bg-pink-500 rounded-lg">
                Learn VRF
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
