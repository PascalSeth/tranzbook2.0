"use client"
import React, { ReactNode } from 'react';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import AddDriverDoc from '@/app/admin/components/Sheetpop/MasterDataPop/AddDriverDocSheet';



const Priveleges = () => {
interface Data{
    srNodata:string
    DriverDocumentNamedata:string
    DocumentTypeData:string
    Status:string
    AccountType:string
    HasExpiryDate:string
    // action: ReactNode

}
const tabledata:Data[]=[
    {
        srNodata:'001',
        DriverDocumentNamedata:'Driving Licence',
        DocumentTypeData:'Image',
        AccountType:'Individual',
        HasExpiryDate:'yes',
        Status:'Active',
        // action:             <Actionbutton/>


    }
]
    return (
        <>
        <AddDriverDoc/>
        <Table>
            <TableCaption>A list of your priveleges.</TableCaption>
            <TableHeader>
                <TableRow>
                    {[
                        { label: 'Sr No', className: 'w-[100px]' },
                        { label: ' Name	' },
                        { label: 'Document Type' },
                        { label: 'Account Type' },
                        { label: 'Has Expiry Date' },
                        { label: 'Status', className: 'text-left' },
                        {label:'Action'}
                    ].map((header, index) => (
                        <TableHead key={index} className={header.className}>{header.label}</TableHead>
                    ))}
                </TableRow>
            </TableHeader>
            <TableBody>
                {tabledata.map((data, index) => (
                    <TableRow key={index}>
                        <TableCell>{data.srNodata}</TableCell>
                        <TableCell>{data.DriverDocumentNamedata}</TableCell>
                    <TableCell>{data.DocumentTypeData}</TableCell>
                    <TableCell>{data.AccountType}</TableCell>                    
                    <TableCell className=''>{data.HasExpiryDate}</TableCell>
                        <TableCell className="text-left">{data.Status}</TableCell>
                        {/* <TableCell className='text-center  text-[#48A0FF]'>{data.action}</TableCell> */}
                    </TableRow>
                ))}
            </TableBody>
        </Table></>
    );
};

export default Priveleges;