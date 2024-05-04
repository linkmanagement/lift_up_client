import { useEffect, useState } from "react";
import { getLeads } from "@/backend/functions";
import { CoinsIcon, SmartphoneIcon, ClockIcon, UserIcon, InstagramIcon, Star } from "lucide-react";

export default function Leads() {
    // const [leads, setLeads] = useState(Array(100).fill({
    //     name: "John Doe",
    //     number: "1234567890",
    //     onlyfans: "john_doe",
    //     instagram: "john_doe",
    //     earnings: "1000",
    //     createdAt: Date.now()

    // }));

    const [leads, setLeads] = useState([]);

    useEffect(() => {
        // Fetch leads data from backend when component mounts
        getLeads().then((leads) => {
            setLeads(leads);
        });
    }, []);

    return (
        <div className="h-screen bg-gray-900 flex justify-center">
            <div className="w-full p-8 overflow-y-auto">
                <h1 className="text-3xl font-bold mb-8 text-white">Leads</h1>
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                    {leads.map((lead, index) => (
                        <div key={index} className="bg-gray-800 rounded-lg p-6 flex flex-col justify-between">
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center mb-2">
                                    <UserIcon className="text-blue-500 w-5 h-5 mr-2" />
                                    <p className="text-white font-bold text-lg">Name : <span className="text-gray-400 font-normal">{lead.name}</span></p>
                                </div>

                                <div className="flex items-center mb-2">
                                    <SmartphoneIcon className="text-green-500 w-5 h-5 mr-2" />
                                    <p className="text-white font-bold text-lg">Phone Number : <span className="text-gray-400 font-normal">{lead.number}</span></p>
                                </div>

                                <div className="flex items-center mb-2">
                                    <Star className="text-purple-500 w-5 h-5 mr-2" />
                                    <p className="text-white font-bold text-lg">OnlyFans : <span className="text-gray-400 font-normal">{lead.onlyfans}</span></p>
                                </div>

                                <div className="flex items-center">
                                    <InstagramIcon className="text-purple-500 w-5 h-5 mr-2" />
                                    <p className="text-white font-bold text-lg">Instagram : <span className="text-gray-400 font-normal">{lead.instagram}</span></p>
                                </div>

                                <div className="flex items-center mb-2">
                                    <CoinsIcon className="text-yellow-500 w-6 h-6 mr-2" />
                                    <p className="text-white font-bold text-lg">Earnings : <span className="text-gray-400 font-normal">{lead.earnings}</span></p>
                                </div>

                                <div className="flex items-center mb-2">
                                    <ClockIcon className="text-red-500 w-5 h-5 mr-2" />
                                    <p className="text-white font-bold text-lg">Submitted At : <span className="text-gray-400 font-normal text-sm">{new Date(lead.createdAt).toLocaleDateString()}</span></p>
                                </div>

                            </div>



                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
