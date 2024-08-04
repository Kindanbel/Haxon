import Button from "../components/Button";


function Hero(){
    return (
        <div>
            <main className="hero px-[10%] w-full h-[100vh] md:h-[90vh] lg:h-[90vh] bg-haxonGrey2 py-[100px] overflow-hidden relative">

                <div className="hero-textcon flex flex-col gap-10 ">
                    <div className="hero-text flex flex-col gap-5 ">
                        <h1 className="text-white text-[50px] md:text-[90px] lg:text-[120px] flex flex-col gap-1 leading-none relative overflow-hidden">
                            New <span className="tracking-[0.2rem]">Collection</span>
                        </h1>

                        <p className="text-white pl-4 text-[17px]">
                            Discover Your Signature Style at Style Haxon
                        </p>
                    </div>

                    <div className="hero-image absolute bottom-0 right-0 lg:right-[540px] flex-1">
                            <img src="images/hood 12.svg" alt="" className="w-[600px]"/>
                        </div>


                    <div className="hero-button pl-4">
                        <Button name="Start Shopping"/>
                    </div>

                </div>
            </main>
        </div>
    )
}


export default Hero;