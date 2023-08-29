import map from "../img/map.png";
import allApps from "../img/allApps.png";

const Mapa = () => {
    return (
        <div className="container mx-auto max-w-8">
        <div className="m-10 md:m-20 flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl font-medium">Huge Global Network </h2>
            <h2 className="text-3xl md:text-4xl font-medium mt-5">of Fast VPN</h2>
            <h4 className="text-lg md:text-xl mt-10 md:mt-10 text-[#4F5665]">See <span className="font-bold">LaslesVPN</span> everywhere to make it easier for you when you</h4>
            <h4 className="text-lg md:text-xl text-[#4F5665]">move locations.</h4>

            <img className="w-full md:max-w-full mt-6 md:mt-10 mb-6 md:mb-10" src={map} alt="map" />

            <img className="w-full md:max-w-full" src={allApps} alt="" />
        </div>
        </div>
    );
}

export default Mapa;