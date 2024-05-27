import { File } from "lucide-react";
import { ReactNode } from "react";

export const data: ApprovePendingConst[] = [
    {
      id: "kjsdgj",
      Name: "Daniel J",
      Mobile:'',
      Rating:'',
      Type:'SUV'
    },
   
  ];
  

export type ApprovePendingConst = {
  id: string,
  Mobile: string,
  Type: string,
  Rating: string,
  Status?: string;
  Name: string
}
