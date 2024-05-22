import React from "react";
import Link from "next/link";

function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-white-100 py-20 my-7">
        <div className="max-w-5xl mx-auto px-6 md:flex md:items-center md:justify-between">
          <div className="text-left w-full md:w-1/2">
            <h1 className="text-5xl font-bold text-blue-900">
              Explore blockchain technology
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              Decentralized technologies are reshaping global economies.
              Discover everything you need to know about Web3, including
              oracles, NFTs, DeFi, and more.
            </p>
          </div>
          <div className="hidden md:block md:w-1/2 md:ml-12">
            <img
              src="https://assets-global.website-files.com/5f75fe1dce99248be5a892db/646e04e81058b74bb0ee2240_6447c455bb16e808d82db034_education_smart-contract-77-usecases.svg"
              alt="Chainlink"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="w-full bg-gray-100 py-20">
        <div className="max-w-5xl mx-auto px-6 md:flex md:items-center md:justify-between">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-semibold text-blue-900">
              Chainlink CCIP
            </h2>
            <p className="mt-4 text-lg text-gray-700">
              A secure interoperability protocol for powering token transfers
              and sending arbitrary messages cross-chain. You can use CCIP to
              transfer data, tokens, or both data and tokens across chains.
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
      </div>

      <div className="w-full py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:flex md:items-center md:justify-between">
          <div className="md:w-1/2 order-2 md:order-1">
            <img
              src="https://assets-global.website-files.com/64cc2c23d8dbd707cdb556ff/6503740ef4034fca83dc7d95_product-vrf-p-1080.png"
              alt="Chainlink VRF"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:w-1/2 order-1 md:order-2 md:ml-12">
            <h2 className="text-3xl font-semibold text-blue-900">VRF</h2>
            <p className="mt-4 text-lg text-gray-700">
              Chainlink VRF provides cryptographically secure randomness for
              your blockchain-based applications. Randomness is very difficult
              to generate on blockchains. The solution to this issue is
              Chainlink VRF.
            </p>
            <button className="mt-6 px-6 py-3 text-lg font-medium text-white bg-pink-500 rounded-lg">
              Learn VRF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
