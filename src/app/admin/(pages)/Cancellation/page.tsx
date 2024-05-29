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
import { Button } from '@/components/ui/button';

const Cancellation = () => {
    interface Data {
        srNodata: string;
        Country: string;
        Price: string;
        City: string;
        Status: string;
        // action: ReactNode;
    }

    const tabledata: Data[] = [
     
    ];

    return (
        <div>
            <Table>
                <TableCaption>A list of your Cancellation.</TableCaption>
                <TableHeader>
                    <TableRow>
                        {[
                            { label: 'Sr No', className: 'w-[100px]' },
                            { label: 'Country' },
                            { label: 'City' },
                            { label: 'Status', className: 'text-left' },
                            { label: 'Action' }
                        ].map((header, index) => (
                            <TableHead key={index} className={header.className}>{header.label}</TableHead>
                        ))}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {tabledata.length === 0 ? (
                        <TableRow>
                            <TableCell className='text-[]' align='center' colSpan={7}>
                                
                                No data found.</TableCell>
                        </TableRow>
                    ) : (
                        tabledata.map((data, index) => (
                            <TableRow key={index}>
                                <TableCell>{data.srNodata}</TableCell>
                                <TableCell>{data.Country}</TableCell>
                                <TableCell className="text-left">{data.City}</TableCell>
                                <TableCell>{data.Price}</TableCell>
                                <TableCell>{data.Status}</TableCell>
                                {/* <TableCell className='text-center text-[#48A0FF]'>{data.action}</TableCell> */}
                            </TableRow>
                        ))
                    )}
                </TableBody>
            </Table>
        </div>
    );
};

export default Cancellation;
