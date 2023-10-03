import { kennesaw, koc, duke, colorLogo, kuLogo, amityUni } from "../assets"
const Collaborators = () => {
    return (
        <section id="collaborators" className="mt-24 bg-blue py-12 xl:pt-12 xl:pb-0 overflow-hidden">
            <div className="container mx-auto h-full flex flex-col xl:flex-row items-center justify-center text-center">
                <p className="text-xl relative mb-4">
                    We collaborate with<br />
                        <strong className="text-xl">500+ Leading Universities & Institutes</strong>
                </p>
            </div>
            <div className="mt-12 mb-12 flex flex-col gap-y-16 lg:flex-row lg:gap-x-20 lg:gap-y-0">
                <div className="ml-12 flex items-center">
                    <img src={amityUni} alt="amity" />
                </div>
                <div className="ml-12 flex items-center">
                    <img src={kennesaw} alt="kennesaw" />
                </div>
                <div className="ml-12 flex items-center">
                    <img src={koc} alt="koc" />
                </div>
                <div className="ml-12 flex items-center">
                    <img src={duke} alt="duke" />
                </div>
                <div className="ml-12 flex items-center">
                    <img src={colorLogo} alt="vit" />
                </div>
                <div className="flex items-center">
                    <img src={kuLogo} alt="ku" />
                </div>
            </div>
        </section>

    )
}

export default Collaborators
