import React from 'react'
import { useAddress, useDisconnect, useMetamask } from '@thirdweb-dev/react' 
 
const NFTDropPage = () => {
 
  const connectWithMetamask = useMetamask();

  const address = useAddress();

  const disconnect = useDisconnect();

  console.log(address)



  return (
    <div className='flex h-screen flex-col lg:grid lg:grid-cols-10'>
        {/* left  */}
        <div className='bg-gradient-to-br from-cyan-800 to-rose-500 lg:col-span-4'>
            <div className='flex flex-col items-center justify-center py-2 lg:min-h-screen'>
                <div className='bg-gradient-to-br from-yellow-400 to-purple-600 rounded-xl'>
                <img className='w-44 rounded-xl object-cover lg:h-96 lg:w-72 p-2' src="https://cdn.sanity.io/images/9ep8u6nk/production/ee298e2fb78803f3226dcde22f1f2a8d69f56fad-600x600.png"  alt="nft"  />
                </div>
                <div className='text-center py-5 space-y-2'>
                    <h1 className='text-4xl font-bold text-white'>PAPAFAM Apes</h1>
                    <h2 className="text-xl text-grey-300">A collection fo PAPAFAM Apes who live and breathe React!</h2>
                </div>
            </div>

        </div>

        {/* right */}

        <div className='flex flex-1 flex-col p-12 lg:col-span-6'>
          {/* header */}
          <header  className='flex items-center justify-between'>

            <h1 className='w-52 cursor-pointer text-xl sm:w-80 font-extralight'>The <span className='font-extrabold underline decoration-pink-600/50'>PAPAFAM</span> NFT marketplace</h1>

            <button onClick={()=>address ? disconnect() : connectWithMetamask()} className='rounded-full bg-rose-400 text-white py-2 px-4 text-xs font-bold lg:px-5 lg:py-3'>{address ? "Sign Out" : "Sign In"}</button>

            </header>

            <hr className='my-2 border' />
            {address && (
              <p className="text-center text-sm text-rose-400">You are logged in with wallet {address.substring(0,5)}...{address.substring(address.length-5)}</p>
            )}

          {/* content */}
          <div className='mt-10 flex flex-1 flex-col space-y-6 text-center items-center lg:space-y-0 lg:justify-center'>
            <img className='w-80 object-cover pb-10 lg:h-40' src="https://links.papareact.com/bdy" alt="" />
            <h1 className='text-3xl font-bold lg:text-5xl lg:font-extrabold'>The PAPAFAM Ape coding club | NFT Drop</h1>
            <p className='pt-2 text-xl text-green-500'>13 / 21 NFTs claimed</p>
          </div>


          {/* mint button */}
          <button className='h-16 w-full text-white bg-red-500 rounded-full mt-10 font-bold'>Mint ETH (0.01 eth)</button>

        </div>
    </div>
  )
}

export default NFTDropPage