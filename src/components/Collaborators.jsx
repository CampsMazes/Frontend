import { kennesaw, koc, duke, colorLogo, kuLogo, amityUni } from "../assets"
const Collaborators = () => {
    return (
        <section id="collaborators" className="px-10 md:px-16 lg:px-20 xl:px-24 mt-8 bg-blue py-12">
            <div className="container mx-auto h-full flex flex-col xl:flex-row items-center justify-center text-center">
                <div className="mb-4">
                    <p className="text-xl ">We collaborate with</p>
                    <p className="text-2xl font-semibold">500+ Leading Universities & Institutes</p>
                </div>
            </div>
            <div className="my-12 grid grid-cols-2 gap-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                <div className="flex justify-center">
                    <img src={amityUni} alt="amity" />
                </div>
                <div className="flex justify-center">
                    <img src={kennesaw} alt="kennesaw" />
                </div>
                <div className="flex justify-center ">
                    <img src={koc} alt="koc" />
                </div>
                <div className="flex justify-center ">
                    <img src={duke} alt="duke" />
                </div>
                <div className="flex justify-center ">
                    <img src={colorLogo} alt="vit" />
                </div>
                <div className="flex justify-center">
                    <img src={kuLogo} alt="ku" />
                </div>
            </div>
        </section>

    )
}

export default Collaborators
