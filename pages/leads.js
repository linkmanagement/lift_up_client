import { getLeads } from "@/backend/functions"
import { useEffect, useState } from "react"


export default function Leads() {

    const [leads, setLeads] = useState([]);

    useEffect(() => {
        getLeads().then((leads) => {
            setLeads(leads);
        });
    }
        , []);
    return (
        <div>
            <h1>Leads</h1>
            {leads.map((lead, index) => (
                <p key={index}>
                    {JSON.stringify(lead)}
                </p>
            ))}
        </div>
    )
}