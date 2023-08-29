import personHome from "../img/personHome.png";
import users from "../img/usersLogo.png";
import location from "../img/locationLogo.png";
import servers from "../img/serverLogo.png";


const Home = () => {
    return (
        <div className="container mx-auto max-w mt-20">
            <div className="flex flex-col md:flex-row p-4">
                <div className="w-full md:w-1/2 p-4 md:p-5 ml-5">
                    <h1 className="text-3xl md:text-4xl pt-3 font-medium">Want anything to be easy with <span className="font-bold">LaslesVPN.</span></h1>
                    <p className="mt-4 md:mt-10 text-base text-[#4F5665]">Provide a network for all your needs with ease and fun using <span className="font-bold">LaslesVPN</span> discover interesting features from us.</p>
                    <button className="mt-6 md:mt-10 bg-red-400 font-semibold text-base text-white border px-4 py-3 rounded-3xl unded-md cursor-pointer pl-6 pr-6 md:pl-10 md:pr-10">Get Started</button>
                </div>

                <div className="w-full md:w-1/2 p-4">
                    <img className={personHome} src={personHome} alt="Ilustracion personHome" />
                </div>
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 m-4 sm:m-6 md:m-10 p-4 sm:p-6 md:p-10 border rounded-xl shadow-md">
                <div className="flex items-center justify-center border-b sm:border-b-0 sm:border-r border-gray-300 pb-4 sm:pb-0 sm:pr-4">
                    <img className="bg-[#FFECEC] rounded-full p-4" src={users} alt="" />
                    <div className="ml-4 sm:ml-7">
                        <h3 className="text-xl font-bold">90+</h3>
                        <p>Users</p>
                    </div>
                </div>
                <div className="flex items-center justify-center border-b sm:border-b-0 sm:border-r border-gray-300 pb-4 sm:pb-0 sm:pr-4">
                    <img className="bg-[#FFECEC] rounded-full p-4" src={location} alt="" />
                    <div className="ml-4 sm:ml-7">
                        <h3 className="text-xl font-bold">30+</h3>
                        <p>Locations</p>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <img className="bg-[#FFECEC] rounded-full p-4" src={servers} alt="" />
                    <div className="ml-4 sm:ml-7">
                        <h3 className="text-xl font-bold">50+</h3>
                        <p>Servers</p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Home;