import React from 'react'

const Roadmap = () => {
    return (
        <div
            id='roadmap'
            className=' w-[100vw] min-h-[100vh] pt-[100px] px-[10px] text-yellow-400 mb-6 bg-green-700'
        >
            <h1 className=' text-3xl uppercase font-extrabold mb-4'>Roadmap</h1>
            <div id="how-to-buy" className=" w-full px-2 mb-6">
                <div className=" border-l border-l-yellow-400 h-fit">
                    <div className=" flex items-center justify-start mb-4">
                        <div className=" mr-4 w-[60px] border-t border-yellow-400"></div>
                        <h1 className="uppercase font-extrabold text-2xl">Phase 1: Token Launch & Community Building</h1>
                    </div>

                    <div className=" mx-4 w-[90%] px-3 py-5 text-green-700 bg-yellow-400 rounded-md mb-6">
                        <b>✅ Launch & Initial Steps</b> <br />
                        • Token launch & smart contract audit <br />
                        • Set up social media channels (Twitter, Telegram, Discord) <br />
                        • Initial marketing campaigns & community growth <br />

                        <b>✅ Early Listings & Reach</b> <br />
                        • Listing on CoinGecko & CoinMarketCap <br />
                        • First CEX & DEX listings <br />
                        • Meme & viral marketing campaigns <br />
                    </div>



                    <div className=" flex items-center justify-start mb-4">
                        <div className=" mr-4 w-[60px] border-t border-yellow-400"></div>
                        <h1 className="uppercase font-extrabold text-2xl">Phase 2: Growth & Scaling</h1>
                    </div>

                    <div className=" mx-4 w-[90%] px-3 py-5 text-green-700 bg-yellow-400 rounded-md mb-6">
                        <b>🔥 Community & Engagement</b> <br />
                        • International community expansion <br />
                        • Competitions, giveaways & reward programs <br />
                        • Partnerships with influencers & KOLs <br />

                        <b>🔥 More Listings & Liquidity</b> <br />
                        • Listing on more top-tier CEXs <br />
                        • Increase liquidity & trading volume <br />
                        • Collaborations with crypto projects for greater reach <br />
                    </div>

                    <div className=" flex items-center justify-start mb-4">
                        <div className=" mr-4 w-[60px] border-t border-yellow-400"></div>
                        <h1 className="uppercase font-extrabold text-2xl">Phase 3: Impact & Adoption</h1>
                    </div>

                    <div className=" mx-4 w-[90%] px-3 py-5 text-green-700 bg-yellow-400 rounded-md mb-6">
                        <b>🚀 Branding & Mass Adoption</b> <br />
                        • Large marketing campaigns & media presence <br />
                        • Merch & exclusive community benefits <br />
                        • Development of long-term partnerships <br />
                    </div>

                    <div className=" flex items-center justify-start mb-4">
                        <div className=" mr-4 w-[60px] border-t border-yellow-400"></div>
                        <h1 className="uppercase font-extrabold text-2xl">Phase 4: Long-Term Vision</h1>
                    </div>

                    <div className=" mx-4 w-[90%] px-3 py-5 text-green-700 bg-yellow-400 rounded-md mb-6">
                        <b>🌍 Mainstream Adoption & Major Listings</b> <br />
                        • Apply for listings on Binance, Coinbase & Kraken <br />
                        • Expansion into global markets <br />
                        • Strengthening the ecosystem with new features <br />

                        <b>🌍 Sustainability & Community Development</b> <br />
                        • Build a strong, loyal community <br />
                        • Long-term user retention & growth programs <br />
                        • Promote shared goals <br />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Roadmap