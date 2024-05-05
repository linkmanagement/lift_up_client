import { useEffect, useState } from "react";
import { getLeads } from "@/backend/functions";
import { CoinsIcon, SmartphoneIcon, ClockIcon, UserIcon, InstagramIcon, Star, DownloadIcon } from "lucide-react";
import Datepicker from 'react-tailwindcss-datepicker';
import CsvDownloadButton from 'react-json-to-csv'

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
    const [value, setValue] = useState({
        startDate: null,
        endDate: null,
    });

    const handleValueChange = (newValue) => {
        // console.log('newValue:', newValue);
        setValue(newValue);
    };

    useEffect(() => {
        // Fetch leads data from backend when component mounts
        getLeads().then((leads) => {

            let sortedLeadsData = leads.sort((a, b) => {
                return new Date(b.createdAt) - new Date(a.createdAt);
            }
            );

            setLeads(sortedLeadsData);

        });
    }, []);

    function filterLeadsByDateRange(leads) {

        if (!value.startDate || !value.endDate) {
            return leads;
        }

        let startDate = new Date(value.startDate);
        // make sure the start date is at the beginning of the day
        startDate.setHours(0, 0, 0, 0);

        const endDate = new Date(value.endDate);
        // make sure the end date is at the end of the day
        endDate.setHours(23, 59, 59, 999);

        return leads.filter((lead) => {
            const createdAtDate = new Date(lead.createdAt);
            console.log('startDate:', startDate);
            console.log('endDate:', endDate);
            console.log('createdAtDate:', createdAtDate);

            console.log('createdAtDate >= startDate:', createdAtDate >= startDate);
            console.log('createdAtDate <= endDate:', createdAtDate <= endDate);

            return createdAtDate >= startDate && createdAtDate <= endDate;
        });

    }

    function csvData() {
        let filteredLeads = filterLeadsByDateRange(leads);
        const csv = filteredLeads.map((lead) => {
            return {
                full_name: lead.name,
                phone_number: lead.number,
                onlyfans_url: lead.onlyfans,
                instagram_handle: lead.instagram,
                last_month_earnings: lead.earnings,
                submitted_at: new Date(lead.createdAt).toLocaleDateString(),
            };
        });
        return csv;

    }

    return (
        <div className="min-h-[200vh] h-screen  bg-gray-900 flex flex-col">
            <Datepicker
                containerClassName="relative m-4"
                placeholder={'range of data'}
                showShortcuts={false}
                showFooter={false}
                value={value}
                displayFormat={"DD/MM/YYYY"}
                startFrom={new Date('2024-05-01')}
                onChange={handleValueChange}
            />
            {
                filterLeadsByDateRange(leads).length > 0 &&
                <CsvDownloadButton data={csvData()} className="bg-blue-500 p-2 rounded-lg flex items-center justify-center w-[max-content] h-12 text-white font-bold hover:bg-blue-600 ml-4">
                    <p>
                        export data as CSV
                    </p>
                    <DownloadIcon className="text-white w-6 h-6 mr-2" />
                </CsvDownloadButton>
            }
            <div className="w-full p-8 overflow-y-auto">
                <h1 className="text-3xl font-bold mb-8 text-white">
                    {
                        filterLeadsByDateRange(leads).length > 0 ?
                            `Leads (${filterLeadsByDateRange(leads).length})` :
                            "No leads found for the selected date range"
                    }
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                    {filterLeadsByDateRange(leads)?.map((lead, index) => (
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
