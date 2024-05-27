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
import { Actionbutton } from './Action';
import AddAdminDoc from '../../components/Sheetpop/Configuration/AddAdminSheet';



const Admin = () => {
interface Data{
    srNodata:string
    AdminNamedata:string
    CompanyKeyData:string
    MobileData:string
    EmailData:string
    ServiceLocation:string
    Status:string
    RolesData:string
    // action: ReactNode

}
const tabledata:Data[]=[
    {
        srNodata:'001',
        AdminNamedata:'admin',
        CompanyKeyData:'',
        MobileData:'9999999999',
        EmailData:'admin@admin.com	',
        ServiceLocation:'',
        RolesData:'Super Admin',
        Status:'Active',


    }
]
    return (
        <Table>
            <TableCaption>A list of your Admins.</TableCaption>
            <TableHeader>
                <AddAdminDoc/>
                <TableRow>
                    {[
                        { label: 'Sr No', className: 'w-[100px]' },
                        { label: ' Name	' },
                        { label: 'Company Key' },
                        { label: 'Mobile' },
                        { label: 'Email' },
                        { label: 'Service Location' },
                        { label: 'Roles' },
                        { label: 'Status' },
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
                        <TableCell>{data.AdminNamedata}</TableCell>
                    <TableCell>{data.CompanyKeyData}</TableCell>
                    <TableCell>{data.MobileData}</TableCell>                    
                    <TableCell className=''>{data.EmailData}</TableCell>
                    <TableCell className=''>{data.ServiceLocation}</TableCell>
                    <TableCell className=''>{data.RolesData}</TableCell>
                        <TableCell className="text-left">{data.Status}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default Admin;
