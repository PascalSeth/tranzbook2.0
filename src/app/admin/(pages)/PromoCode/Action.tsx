import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { PenBox, Trash } from "lucide-react"; 
import { useRouter } from 'next/navigation';
import React from "react";

interface ActionButtonProps {
    id: string; 
    status: number; 
    onDelete: number;
    refreshData: () => void; 
}

export function Actionbutton({ id, status, onDelete, refreshData }: ActionButtonProps) {
    const router = useRouter();

    const showAlert = (message: string) => {
        alert(message);
    };

    const handleEdit = () => {
        router.push(`PromoCode/edit?id=${id}`);
        showAlert("Privilege edit page loaded successfully");
    };

    const handleChangeStatus = async () => {
        try {
            const response = await fetch(`/lib/PUT/PromoCode/updateStatusByID?id=${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            console.log(`Successfully changed status for ID ${id}`);
            showAlert("Status changed successfully");
            refreshData(); // Call the refresh function
        } catch (error) {
            console.error('Failed to change status:', error);
        }
    };

    const handleDelete = async () => {
        try {
            const newDel = onDelete === 0 ? 1 : 0; // Toggle onDelete
            const response = await fetch(`/lib/DELETE/Priveledge/deleteByID?id=${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id, status: newDel }), // Pass updated onDelete status
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            console.log(`Successfully deleted item with ID ${id}`);
            showAlert("Item deleted successfully");
            refreshData(); // Call the refresh function
        } catch (error) {
            console.error('Failed to delete item:', error);
        }
    };

    const otherStatusLabel = status === 1 ? 'Inactive' : 'Active';

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <PenBox className="hover:cursor-pointer" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-fit">
                <DropdownMenuItem className="hover:cursor-pointer hover:bg-gray-50" onClick={handleEdit}>
                    Edit
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleChangeStatus} className="hover:cursor-pointer hover:bg-gray-50">
                    Set to {otherStatusLabel}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleDelete} className="text-red-600 hover:bg-gray-50 hover:cursor-pointer font-semibold">
                    Delete
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
