export type Place = {
    id: string;
    name: string;
    capital: string;
  };
  
export  type Country = {
    country: string;
    locations: Place[];
  };
  
  // Create an array of countries with their locations
  export const locations: Country[] = [
    {
      country: "Ghana",
      locations: [
        { id: "1", name: "Greater Accra", capital: "Accra" },
        { id: "2", name: "Ashanti", capital: "Kumasi" },
        { id: "3", name: "Northern", capital: "Tamale" },
        { id: "4", name: "Western", capital: "Sekondi-Takoradi" },
        { id: "5", name: "Central", capital: "Cape Coast" },
        { id: "6", name: "Eastern", capital: "Koforidua" },
        { id: "7", name: "Volta", capital: "Ho" },
        { id: "8", name: "Upper East", capital: "Bolgatanga" },
        { id: "9", name: "Upper West", capital: "Wa" },
        { id: "10", name: "Bono", capital: "Sunyani" },
        { id: "11", name: "Bono East", capital: "Techiman" },
        { id: "12", name: "Ahafo", capital: "Goaso" },
        { id: "13", name: "Western North", capital: "Sefwi Wiawso" },
        { id: "14", name: "Oti", capital: "Dambai" },
        { id: "15", name: "North East", capital: "Nalerigu" },
        { id: "16", name: "Savannah", capital: "Damongo" },
        // Add more locations as needed
      ],
    },
    // Add more countries as needed
    {
      country: "Nigeria",
      locations: [
        { id: "1", name: "Lagos", capital: "Ikeja" },
        { id: "2", name: "Abuja", capital: "Abuja" },
        { id: "3", name: "Port Harcourt", capital: "Port Harcourt" },
        { id: "4", name: "Kano", capital: "Kano" },
        { id: "5", name: "Ibadan", capital: "Ibadan" },
        // Add more locations as needed
      ],
    },
  ];
  