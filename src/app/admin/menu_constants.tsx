import { Bus, Car, GitBranch, LocateFixed, LucideSidebarClose, Speaker, Ticket } from "lucide-react";
import { BsCash, BsChat, BsDoorClosed, BsEnvelope, BsFile, BsGear, BsHouseDoor, BsKanban, BsListUl, BsPeople, BsPersonFillCheck, BsPersonFillGear, BsPersonGear, BsQuestionCircle, BsX } from "react-icons/bs";
import { SideNavItemGroup } from "./components/type/sidebar-nav-item";



export const   SIDENAV_ITEMS: SideNavItemGroup[] = [

    {
        title: "Dashboards",
        menuList: [{
            title: 'Dashboard',
            path: '/admin',
            icon: <BsHouseDoor size={20} />,
            
        },
       
        {
            title: 'Configurations',
            path: 'admin/Configurations',
            icon: <BsGear size={20} />,
            submenu: true,
            subMenuItems: [
                { title: 'Priveleges', path: '/admin/Configurations/priveleges' },
                { title: 'System Settings', path: '/admin/Configurations/system-settings' },
                // { title: 'Translations', path: 'admin/Configurations/translations' },
            ],
        },
    
    ],
        
    },
    {
        title: "Manage",
        menuList: [
            {
                title: 'Master Data',
                path: 'admin/MasterData',
                icon: <GitBranch size={20} />,
                submenu: true,
                subMenuItems: [
                    { title: 'Vehicle Make', path: '/admin/MasterData/VehicleMake' },
                    // { title: 'Vehicle Model', path: 'admin/MasterData/VehicleModel' },
                    { title: 'Country', path: '/admin/MasterData/Country' },
                    { title: 'Driver Needed Documentation', path: '/admin/MasterData/DriverNeededDocumentation' },
                
                ],
            },
            {
                title: 'Service Locations',
                path: '/admin/serviceLocations',
                icon: <LocateFixed size={20} />,
            },
            {
                title: 'Trips',
                path: '/admin/Trips',
                icon: <Bus size={20} />,
            },
            {
                title: 'Admins',
                path: '/admin/Admin',
                icon: <BsPersonFillCheck size={20} />,
            },
            {
                title: 'Trip Requests',
                path: '/admin/TripRequests',
                icon: <Ticket size={20} />,
                submenu: true,
                subMenuItems: [
                    { title: 'Completed Trips', path: '/admin/TripRequests/CompletedTrips' },
                    { title: 'Scheduled Trips', path: '/admin/TripRequests/ScheduledTrips' },
                    { title: 'Cancelled Trips', path: '/admin/TripRequests/CancelledTrips'},
                ],
            },
            // {
            //     title: 'Vehicle Types',
            //     path: '/VehicleTypes',
            //     icon: <Car size={20} />,
            // },
            {
                title: 'Manage Drivers',
                path: '/admin/manageDrivers',
                icon: <BsPeople size={20} />,
                submenu: true,
                subMenuItems: [
                    {title: 'Approved Drivers', path: '/admin/manageDrivers/ApprovedDrivers' },
                    {title: 'Approve Pending Drivers', path: '/admin/manageDrivers/ApprovePendingDrivers' },
                    {title: 'Driver Ratings', path: '/admin/manageDrivers/DriverRatings' },
                    {title: 'Negative Balance Drivers', path: '/admin/manageDrivers/NegativeBalanceDrivers' },
               ],
            },
            {
                title: 'Manage Users',
                path: '/admin/manageUsers',
                icon: <BsPersonGear size={20} />,
                submenu: true,
                subMenuItems: [
                    {title: 'Approved Users', path: '/admin/manageUsers/ApprovedUsers' },
                    {title: 'Approve Pending Users', path: '/admin/manageUsers/ApprovePendingUsers' },
                    {title: 'Suspended Users', path: '/admin/manageUsers/SuspendedUsers' },
                    {title: 'Deactivated Users', path: '/admin/manageUsers/DeactivatedUsers' },
                    {title: 'Deleted Users', path: '/admin/manageUsers/DeletedUsers' },
                    ],
            },
            //    {
            //             title: 'Set Price',
            //             path: '/setPrice',
            //             icon: <BsCash size={20} />,
            //             submenu: true,
            //             subMenuItems: [
            //                 {title: 'World', path: '/Trip Requests' },
            //            ],
            //         },
        ]
    },
    {
        title: "Others",
                menuList: [
                 
            {
                title: 'Chat',
                path: '/admin/Chat',
                icon: <BsChat size={20} />,
            },
            {
                title: 'Notification',
                path: '/admin/Notification',
                icon: <Speaker size={20} />,
            },
            {
                title: 'Promo Code',
                path: 'admin/PromoCode',
                icon: <BsQuestionCircle size={20} />,
            },
            {
                title: 'Complaints',
                path: 'admin/Complaints',
                icon: <BsQuestionCircle size={20} />,
                submenu: true,
                subMenuItems: [
                    {title: 'User Complaint', path: 'admin/Complaints/UserComplaint' },
                    {title: 'Driver Complaint', path: 'admin/Complaints/DriverComplaint' },
                    ],
            },
            {
                title: 'Reports',
                path: 'admin/Reports',
                icon: <BsQuestionCircle size={20} />,
                submenu: true,
                subMenuItems: [
                    {title: 'User Report', path: 'admin/Reports/UserReport' },
                    {title: 'Driver Report', path: 'admin/Reports/DriverReport' },
                    {title: 'Finance Report', path: 'admin/Reports/FinanceReport' },
],
            },
        ]
    }

];