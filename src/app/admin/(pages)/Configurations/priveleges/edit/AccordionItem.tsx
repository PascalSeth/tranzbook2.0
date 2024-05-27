import { Checkbox } from '@/components/ui/checkbox';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';



export interface AccordionItemData {
    value: string;
    triggerText: string;
    content: JSX.Element;
}


export const accordionItems: AccordionItemData[] = [
    {
        value: "item-1",
        triggerText: "Dashboard",
        content: (
            <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                    Access Dashboard
                </label>
            </div>
        ),
    },
    {
        value: "item-2",
        triggerText: "Configurations",
        content: (<div className='flex flex-col space-y-2'>
        <div className="flex items-center space-x-2">
            <Checkbox id="Get-All-Roles" />
            <label
                htmlFor="Get-All-Roles"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                Get All Roles
            </label>
        </div>
        
        <div className="flex items-center space-x-2">
            <Checkbox id="edit-roles" />
            <label
                htmlFor="edit-roles"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                Edit Roles
            </label>
        </div>
        
        <div className="flex items-center space-x-2">
            <Checkbox id="create-roles" />
            <label
                htmlFor="create-roles"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                Create Roles
            </label>
        </div>
        
        <div className="flex items-center space-x-2">
            <Checkbox id="Get-All-Permissions" />
            <label
                htmlFor="Get-All-Permissions"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                Get All Permissions
            </label>
        </div>
        
        <div className="flex items-center space-x-2">
            <Checkbox id="view-all-settings" />
            <label
                htmlFor="view-all-settings"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                View All Settings
            </label>
        </div>
        
        <div className="flex items-center space-x-2">
            <Checkbox id="view-system-settings" />
            <label
                htmlFor="view-system-settings"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                View System Settings
            </label>
        </div>
        
        <div className="flex items-center space-x-2">
            <Checkbox id="view-translations" />
            <label
                htmlFor="view-translations"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                View Translations
            </label>
        </div>
    </div>
    ),
    },
    {
        value: "item-3",
        triggerText: "Master Data",
        content: (<div className='flex flex-col space-y-2'>
        <div className="flex items-center space-x-2">
            <Checkbox id="master-data" />
            <label
                htmlFor="master-data"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                Master Data
            </label>
        </div>
        
        <div className="flex items-center space-x-2">
            <Checkbox id="manage-carmake" />
            <label
                htmlFor="manage-carmake"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                Manage Car Make
            </label>
        </div>
        
        <div className="flex items-center space-x-2">
            <Checkbox id="add-carmake" />
            <label
                htmlFor="add-carmake"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                Add Car Make
            </label>
        </div>
        
        <div className="flex items-center space-x-2">
            <Checkbox id="edit-carmake" />
            <label
                htmlFor="edit-carmake"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                Edit Car Make
            </label>
        </div>
        
        <div className="flex items-center space-x-2">
            <Checkbox id="delete-carmake" />
            <label
                htmlFor="delete-carmake"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                Delete Car Make
            </label>
        </div>
        
        <div className="flex items-center space-x-2">
            <Checkbox id="toggle-carmake" />
            <label
                htmlFor="toggle-carmake"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                Toggle Car Make
            </label>
        </div>
     {/* Manage Driver-Needed Documents */}
    <div className="flex items-center space-x-2">
        <Checkbox id="manage-driver-needed-document" />
        <label
            htmlFor="manage-driver-needed-document"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
            Manage Driver-Needed Document
        </label>
    </div>
    
    <div className="flex items-center space-x-2">
        <Checkbox id="add-driver-needed-document" />
        <label
            htmlFor="add-driver-needed-document"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
            Add Driver-Needed Document
        </label>
    </div>
    
    <div className="flex items-center space-x-2">
        <Checkbox id="edit-driver-needed-document" />
        <label
            htmlFor="edit-driver-needed-document"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
            Edit Driver-Needed Document
        </label>
    </div>
    
    <div className="flex items-center space-x-2">
        <Checkbox id="delete-driver-needed-document" />
        <label
            htmlFor="delete-driver-needed-document"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
            Delete Driver-Needed Document
        </label>
    </div>
    
    <div className="flex items-center space-x-2">
        <Checkbox id="toggle-driver-needed-document" />
        <label
            htmlFor="toggle-driver-needed-document"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
            Toggle Driver-Needed Document
        </label>
    </div>

    {/* Manage Country */}
    <div className="flex items-center space-x-2">
        <Checkbox id="manage-country" />
        <label
            htmlFor="manage-country"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
            Manage Country
        </label>
    </div>
    
    </div>
    )
    },
    {
        value: "item-4",
        triggerText: "Service Locations",
        content:( <div className='flex flex-col space-y-2'>
        <div className="flex items-center space-x-2">
            <Checkbox id="add_service_location" />
            <label
                htmlFor="add_service_location"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                Add Service Location
            </label>
        </div>
    
        <div className="flex items-center space-x-2">
            <Checkbox id="edit_service_location" />
            <label
                htmlFor="edit_service_location"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                Edit Service Location
            </label>
        </div>
    
        <div className="flex items-center space-x-2">
            <Checkbox id="delete_service_location" />
            <label
                htmlFor="delete_service_location"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                Delete Service Location
            </label>
        </div>
    
        <div className="flex items-center space-x-2">
            <Checkbox id="toggle_service_location" />
            <label
                htmlFor="toggle_service_location"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                Toggle Service Location
            </label>
        </div>
    </div>
    
        ),
    },
    {
        value: "item-5",
        triggerText: "Admins",
        content: (<div className='flex flex-col space-y-2'>
        <div className="flex items-center space-x-2">
            <Checkbox id="add-admin" />
            <label
                htmlFor="add-admin"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                Add Admin
            </label>
        </div>
        <div className="flex items-center space-x-2">
            <Checkbox id="edit-admin" />
            <label
                htmlFor="edit-admin"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                Edit Admin
            </label>
        </div>
        <div className="flex items-center space-x-2">
            <Checkbox id="delete-admin" />
            <label
                htmlFor="delete-admin"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                Delete Admin
            </label>
        </div>
        <div className="flex items-center space-x-2">
            <Checkbox id="toggle-admin-status" />
            <label
                htmlFor="toggle-admin-status"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                Toggle Admin Status
            </label>
        </div>
    </div>
    ),
    },
    {
        value: "item-6",
        triggerText: "Trip Requests",
        content: (<div className='flex flex-col space-y-2'>
        <div className="flex items-center space-x-2">
            <Checkbox id="view-requests" />
            <label
                htmlFor="view-requests"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                View Requests
            </label>
        </div>
        
        <div className="flex items-center space-x-2">
            <Checkbox id="view-rides" />
            <label
                htmlFor="view-rides"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                View Rides
            </label>
        </div>
        
        <div className="flex items-center space-x-2">
            <Checkbox id="scheduled-rides" />
            <label
                htmlFor="scheduled-rides"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                Scheduled Rides
            </label>
        </div>
        
        <div className="flex items-center space-x-2">
            <Checkbox id="cancellation-rides" />
            <label
                htmlFor="cancellation-rides"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                Cancellation Rides
            </label>
        </div>
    </div>
    ),
    },
    {
        value: "item-7",
        triggerText: "Vehicle Types",
        content: (<div className='flex flex-col space-y-2'>
        {/* View Vehicle Types */}
        <div className="flex items-center space-x-2">
            <Checkbox id="view-vehicle-types" />
            <label
                htmlFor="view-vehicle-types"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                View Vehicle Types
            </label>
        </div>
    
        {/* Add Vehicle Types */}
        <div className="flex items-center space-x-2">
            <Checkbox id="add-vehicle-types" />
            <label
                htmlFor="add-vehicle-types"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                Add Vehicle Types
            </label>
        </div>
    
        {/* Edit Vehicle Types */}
        <div className="flex items-center space-x-2">
            <Checkbox id="edit-vehicle-types" />
            <label
                htmlFor="edit-vehicle-types"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                Edit Vehicle Types
            </label>
        </div>
    
        {/* Delete Vehicle Types */}
        <div className="flex items-center space-x-2">
            <Checkbox id="delete-vehicle-types" />
            <label
                htmlFor="delete-vehicle-types"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                Delete Vehicle Types
            </label>
        </div>
    
        {/* Toggle Vehicle Types */}
        <div className="flex items-center space-x-2">
            <Checkbox id="toggle-vehicle-types" />
            <label
                htmlFor="toggle-vehicle-types"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                Toggle Vehicle Types
            </label>
        </div>
    </div>
    ),
    },
    {
        value: "item-8",
        triggerText: "Manage Drivers",
        content: (<div className='flex flex-col space-y-2'>
        {/* drivers-menu */}
        <div className="flex items-center space-x-2">
            <Checkbox id="drivers-menu" />
            <label
                htmlFor="drivers-menu"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                drivers-menu
            </label>
        </div>
    
        {/* view-drivers */}
        <div className="flex items-center space-x-2">
            <Checkbox id="view-drivers" />
            <label
                htmlFor="view-drivers"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                view-drivers
            </label>
        </div>
    
        {/* view-approval-pending-drivers */}
        <div className="flex items-center space-x-2">
            <Checkbox id="view-approval-pending-drivers" />
            <label
                htmlFor="view-approval-pending-drivers"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                view-approval-pending-drivers
            </label>
        </div>
    
        {/* view-driver-ratings */}
        <div className="flex items-center space-x-2">
            <Checkbox id="view-driver-ratings" />
            <label
                htmlFor="view-driver-ratings"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                view-driver-ratings
            </label>
        </div>
    
        {/* view-driver-withdrawal-requests */}
        <div className="flex items-center space-x-2">
            <Checkbox id="view-driver-withdrawal-requests" />
            <label
                htmlFor="view-driver-withdrawal-requests"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                view-driver-withdrawal-requests
            </label>
        </div>
    
        {/* view-negative-balance-drivers */}
        <div className="flex items-center space-x-2">
            <Checkbox id="view-negative-balance-drivers" />
            <label
                htmlFor="view-negative-balance-drivers"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                view-negative-balance-drivers
            </label>
        </div>
    
        {/* edit-drivers */}
        <div className="flex items-center space-x-2">
            <Checkbox id="edit-drivers" />
            <label
                htmlFor="edit-drivers"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                edit-drivers
            </label>
        </div>
    
        {/* toggle-drivers */}
        <div className="flex items-center space-x-2">
            <Checkbox id="toggle-drivers" />
            <label
                htmlFor="toggle-drivers"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                toggle-drivers
            </label>
        </div>
    
        {/* view-request-list */}
        <div className="flex items-center space-x-2">
            <Checkbox id="view-request-list" />
            <label
                htmlFor="view-request-list"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                view-request-list
            </label>
        </div>
    
        {/* driver-payment-history */}
        <div className="flex items-center space-x-2">
            <Checkbox id="driver-payment-history" />
            <label
                htmlFor="driver-payment-history"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                driver-payment-history
            </label>
        </div>
    
        {/* view-driver-profile */}
        <div className="flex items-center space-x-2">
            <Checkbox id="view-driver-profile" />
            <label
                htmlFor="view-driver-profile"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                view-driver-profile
            </label>
        </div>
    
        {/* add-drivers */}
        <div className="flex items-center space-x-2">
            <Checkbox id="add-drivers" />
            <label
                htmlFor="add-drivers"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                add-drivers
            </label>
        </div>
    
        {/* update-drivers */}
        <div className="flex items-center space-x-2">
            <Checkbox id="update-drivers" />
            <label
                htmlFor="update-drivers"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                update-drivers
            </label>
        </div>
    
        {/* delete-drivers */}
        <div className="flex items-center space-x-2">
            <Checkbox id="delete-drivers" />
            <label
                htmlFor="delete-drivers"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                delete-drivers
            </label>
        </div>
    
        {/* driver-document */}
        <div className="flex items-center space-x-2">
            <Checkbox id="driver-document" />
            <label
                htmlFor="driver-document"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                driver-document
            </label>
        </div>
    
        {/* driver-document-view */}
        <div className="flex items-center space-x-2">
            <Checkbox id="driver-document-view" />
            <label
                htmlFor="driver-document-view"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                driver-document-view
            </label>
        </div>
    
        {/* driver-document-view-image */}
        <div className="flex items-center space-x-2">
            <Checkbox id="driver-document-view-image" />
            <label
                htmlFor="driver-document-view-image"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                driver-document-view-image
            </label>
        </div>
    
        {/* driver-document-edit */}
        <div className="flex items-center space-x-2">
            <Checkbox id="driver-document-edit" />
            <label
                htmlFor="driver-document-edit"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                driver-document-edit
            </label>
        </div>
    
        {/* driver-document-upload */}
        <div className="flex items-center space-x-2">
            <Checkbox id="driver-document-upload" />
            <label
                htmlFor="driver-document-upload"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                driver-document-upload
            </label>
        </div>
    
        {/* driver-document-toggle */}
        <div className="flex items-center space-x-2">
            <Checkbox id="driver-document-toggle" />
            <label
                htmlFor="driver-document-toggle"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                driver-document-toggle
            </label>
        </div>
    
        {/* view-driver-rating */}
        <div className="flex items-center space-x-2">
            <Checkbox id="view-driver-rating" />
            <label
                htmlFor="view-driver-rating"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                view-driver-rating
            </label>
        </div>
    
        {/* driver-withdrwal-request-view */}
        <div className="flex items-center space-x-2">
            <Checkbox id="driver-withdrwal-request-view" />
            <label
                htmlFor="driver-withdrwal-request-view"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                driver-withdrwal-request-view
            </label>
        </div>
    
        {/* neagtive-driver-view */}
        <div className="flex items-center space-x-2">
            <Checkbox id="neagtive-driver-view" />
            <label
                htmlFor="neagtive-driver-view"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                neagtive-driver-view
            </label>
        </div>
    </div>),
    },
    {
        value: "item-9",
        triggerText: "Manage Users",
        content: (<div className='flex flex-col space-y-2'>
        <div className="flex items-center space-x-2">
            <Checkbox id="Get-All-users" />
            <label
                htmlFor="Get-All-users"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                Get All Users
            </label>
        </div>
        
        <div className="flex items-center space-x-2">
            <Checkbox id="add-users" />
            <label
                htmlFor="add-users"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                Add Users
            </label>
        </div>
        
        <div className="flex items-center space-x-2">
            <Checkbox id="edit-user" />
            <label
                htmlFor="edit-user"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                Edit User
            </label>
        </div>
        
        <div className="flex items-center space-x-2">
            <Checkbox id="delete-user" />
            <label
                htmlFor="delete-user"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                Delete User
            </label>
        </div>
        
        <div className="flex items-center space-x-2">
            <Checkbox id="toggle-user" />
            <label
                htmlFor="toggle-user"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                Toggle User
            </label>
        </div>
    
        <div className="flex items-center space-x-2">
            <Checkbox id="view-user-request-list" />
            <label
                htmlFor="view-user-request-list"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                View User Request List
            </label>
        </div>
    
        <div className="flex items-center space-x-2">
            <Checkbox id="user-payment-history" />
            <label
                htmlFor="user-payment-history"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                User Payment History
            </label>
        </div>
    </div>
    ),
    },
    {
        value: "item-10",
        triggerText: "Chat",
        content: <div />,
    },
    {
        value: "item-11",
        triggerText: "Notification",
        content: (<div className='flex flex-col space-y-2'>
        <div className="flex items-center space-x-2">
            <Checkbox id="notifications" />
            <label
                htmlFor="notifications"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                Notifications
            </label>
        </div>
        
        <div className="flex items-center space-x-2">
            <Checkbox id="view-notifications" />
            <label
                htmlFor="view-notifications"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                View Notifications
            </label>
        </div>
        
        <div className="flex items-center space-x-2">
            <Checkbox id="send-push" />
            <label
                htmlFor="send-push"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                Send Push Notifications
            </label>
        </div>
        
        <div className="flex items-center space-x-2">
            <Checkbox id="delete-notification" />
            <label
                htmlFor="delete-notification"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                Delete Notification
            </label>
        </div>
    </div>
    ),
    },
    // {
    //     value: "item-12",
    //     triggerText: "Promo Code",
    //     content: <div />,
    // },
    {
        value: "item-13",
        triggerText: "Complaints",
        content: (<div className='flex flex-col space-y-2'>
        <div className="flex items-center space-x-2">
            <Checkbox id="add-complaint-title" />
            <label
                htmlFor="add-complaint-title"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                Add Complaint Title
            </label>
        </div>
        
        <div className="flex items-center space-x-2">
            <Checkbox id="edit-complaint-title" />
            <label
                htmlFor="edit-complaint-title"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                Edit Complaint Title
            </label>
        </div>
        
        <div className="flex items-center space-x-2">
            <Checkbox id="delete-complaint-title" />
            <label
                htmlFor="delete-complaint-title"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                Delete Complaint Title
            </label>
        </div>
        
        <div className="flex items-center space-x-2">
            <Checkbox id="toggle-complaint-title" />
            <label
                htmlFor="toggle-complaint-title"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                Toggle Complaint Title
            </label>
        </div>
    </div>
    ),
    },
    {
        value: "item-14",
        triggerText: "Reports",
        content: (<div className='flex flex-col space-y-2'>
        <div className="flex items-center space-x-2">
            <Checkbox id="user-report" />
            <label
                htmlFor="user-report"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                User Report
            </label>
        </div>
        <div className="flex items-center space-x-2">
            <Checkbox id="driver-report" />
            <label
                htmlFor="driver-report"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                Driver Report
            </label>
        </div>
        <div className="flex items-center space-x-2">
            <Checkbox id="finance-report" />
            <label
                htmlFor="finance-report"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                Finance Report
            </label>
        </div>
        <div className="flex items-center space-x-2">
            <Checkbox id="driver-duties-report" />
            <label
                htmlFor="driver-duties-report"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                Driver Duties Report
            </label>
        </div>
    </div>
    )
    },

];
