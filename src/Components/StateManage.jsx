import { useState } from "react";

const StateManage = () => {

    const [Country, setCountry] = useState("");
    const [City, setCity] = useState([]);

    const CountryCity = {
        India: ["Mumbai","Pune","Nagpur","Nashik"],
        USA: ["LA","SF","NY","NJ"],
        UAE: ["Dubai","Abu Dhabi"]
    };

    const handleChange = (event) => {
        const Country = event.target.value;
        setCountry(Country);
        setCity(CountryCity[Country] || []);
    }

    return(
        <div className="flex justify-center font-medium text-base m-6">
            <select name="Country" onChange={handleChange} >
                <option value="">Select Country</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="UAE">UAE</option>
            </select>
            <select name="City" disabled={!Country}>
                <option value="">Select City</option>
                {City.map((City,index) => (
                    <option key={index} value={City}>
                        {City}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default StateManage;