'use client';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DepartureBoard } from "@mui/icons-material";
import { BusFront, Moon, Stars, Sun, Sunrise, Sunset } from "lucide-react";
import { useEffect, useState } from "react";

// Define the type for the filters state
interface Filters {
  company: string[];
  departureTime: string;
}
type CompanyData = {
  id: string;
  name: string;
  email: string;
  logoUrl?: string;
};
export function BookingFilterAccordion() {
  const [filters, setFilters] = useState<Filters>({
    company: [],
    departureTime: '',
  });
  const [companyData, setCompanyData] = useState<CompanyData[]>([]);


  const handleCompanyChange = (company: string) => {
    setFilters((prevFilters) => {
      const newCompanies = prevFilters.company.includes(company)
        ? prevFilters.company.filter((comp) => comp !== company)
        : [...prevFilters.company, company];
      return { ...prevFilters, company: newCompanies };
    });
  };

  
  const fetchData = async () => {
    try {
      const [ companyResponse] = await Promise.all([
        fetch('/api/GET/getbusCompany'),
      ]);

      if (!companyResponse.ok) {
        throw new Error('Failed to fetch data');
      }

      const companyData = await companyResponse.json();

      setCompanyData(Array.isArray(companyData) ? companyData : []);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  const handleDepartureTimeChange = (time: string) => {
    setFilters((prevFilters) => ({ ...prevFilters, departureTime: time }));
  };

  return (
    <Accordion type="multiple"  className=" w-full items-center">
        <h1 className="font-semibold text-gray-300 text-[18px]">Filter Trip</h1>
      <AccordionItem value="company">
        <AccordionTrigger className="flex justify-between p-2"><div className="flex items-center"><BusFront/>Bus Operator  </div></AccordionTrigger>
        <AccordionContent className="w-full">
          <div className="grid grid-cols-1 p-2 gap-3">
            {companyData.map((company) => {
              return (
                <label className="items-center flex" key={company.id}>
                  <input
                    type="checkbox"
                    value={company.id}
                    checked={filters.company.includes(company.id)}
                    onChange={() => handleCompanyChange(company.id)}
                  />
                 <h2 className="font-semibold ml-2 text-[#48A0FF]">{company.name}</h2> 
                </label>
 );
            })}
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="departure-time">
        <AccordionTrigger className="flex justify-between p-2"><div className="flex items-center"><DepartureBoard/> Departure Time</div></AccordionTrigger>
        <AccordionContent>
          <div className="grid grid-cols-1 p-2 gap-3  items-center">
            <label className='font-semibold flex items-center text-yellow-600'>
              <input
                type="radio"
                name="departureTime"
                value="morning"
                checked={filters.departureTime === "morning"}
                onChange={() => handleDepartureTimeChange("morning")}
              />
              <Sunrise size={16} className="ml-2"/>Morning
            </label>
            <label className='font-semibold text-orange-600 flex items-center'>
              <input
                type="radio"
                name="departureTime"
                value="afternoon"
                checked={filters.departureTime === "afternoon"}
                onChange={() => handleDepartureTimeChange("afternoon")}
              />
              <Sun size={16} className="ml-2"/>Afternoon
            </label>
            <label className='font-semibold  flex items-center'>
              <input
                type="radio"
                name="departureTime"
                value="evening"
                checked={filters.departureTime === "evening"}
                onChange={() => handleDepartureTimeChange("evening")}
              />
              <Moon size={16} className="ml-2"/>Evening
            </label>
            <label className='font-semibold text-purple-600 flex items-center'>
              <input
                type="radio"
                name="departureTime"
                value="night"
                checked={filters.departureTime === "night"}
                onChange={() => handleDepartureTimeChange("night")}
              />
              <Stars size={16} className="ml-2"/>Night
            </label>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
