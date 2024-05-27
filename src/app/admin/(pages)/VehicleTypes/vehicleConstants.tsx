export const data: VehicleConst[] = [
    {
      id: "Tata",
      Sno: 1,
      IconTypes: "Truck",
      Name: "Tata",
      Status: "Active",
      Icon: 'https://m.media-amazon.com/images/I/71XKk7O3fRL.jpg'
    },
   
  ];
  

export type VehicleConst = {
  id: string
  Sno: number
  Icon?: string; 
  IconTypes: string
  Status?: string;
  Name: string
}
