import { Car, GitBranch, LocateFixed, LucideSidebarClose, Speaker, Ticket } from "lucide-react";
import { BsCash, BsChat, BsDoorClosed, BsEnvelope, BsFile, BsGear, BsHouseDoor, BsKanban, BsListUl, BsPeople, BsPersonFillCheck, BsPersonFillGear, BsPersonGear, BsQuestionCircle, BsX } from "react-icons/bs";
import { SideNavItemGroup } from "./components/type/sidebar-nav-item";



export const   SIDENAV_ITEMS: SideNavItemGroup[] = [

    {
        title: "Dashboards",
        menuList: [{
            title: 'Dashboard',
            path: '/busCompanyAdmin',
            icon: <BsHouseDoor size={20} />,
            
        },
       
        {
            title: 'Configurations',
            path: 'busCompanyAdmin/Configurations',
            icon: <BsGear size={20} />,
            submenu: true,
            subMenuItems: [
                { title: 'System Settings', path: '/busCompanyAdmin/Configurations/system-settings' },
                // { title: 'Translations', path: 'busCompanyAdmin/Configurations/translations' },
            ],
        },
    
    ],
        
    },
    {
        title: "Manage",
        menuList: [
            {
                title: 'Master Data',
                path: 'busCompanyAdmin/MasterData',
                icon: <GitBranch size={20} />,
                submenu: true,
                subMenuItems: [
                    { title: 'Vehicle Make', path: '/busCompanyAdmin/MasterData/VehicleMake' },
                    // { title: 'Vehicle Model', path: 'busCompanyAdmin/MasterData/VehicleModel' },
                    { title: 'Country', path: '/busCompanyAdmin/MasterData/Country' },
                
                ],
            },
            {
                title: 'Service Locations',
                path: '/busCompanyAdmin/serviceLocations',
                icon: <LocateFixed size={20} />,
            },
            {
                title: 'Bus Company Admins',
                path: '/busCompanyAdmin/Admin',
                icon: <BsPersonFillCheck size={20} />,
            },
            {
                title: 'Trip Requests',
                path: '/busCompanyAdmin/TripRequests',
                icon: <Ticket size={20} />,
                submenu: true,
                subMenuItems: [
                    { title: 'Completed Trips', path: '/busCompanyAdmin/TripRequests/CompletedTrips' },
                    { title: 'Scheduled Trips', path: '/busCompanyAdmin/TripRequests/ScheduledTrips' },
                    { title: 'Cancelled Trips', path: '/busCompanyAdmin/TripRequests/CancelledTrips'},
                ],
            },
            // {
            //     title: 'Vehicle Types',
            //     path: '/VehicleTypes',
            //     icon: <Car size={20} />,
            // },
            {
                title: 'Manage Drivers',
                path: '/busCompanyAdmin/manageDrivers',
                icon: <BsPeople size={20} />,
                submenu: true,
                subMenuItems: [
                    {title: 'Approved Drivers', path: '/busCompanyAdmin/manageDrivers/ApprovedDrivers' },
                    {title: 'Approve Pending Drivers', path: '/busCompanyAdmin/manageDrivers/ApprovePendingDrivers' },
                    {title: 'Driver Ratings', path: '/busCompanyAdmin/manageDrivers/DriverRatings' },
                    {title: 'Negative Balance Drivers', path: '/busCompanyAdmin/manageDrivers/NegativeBalanceDrivers' },
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
                path: '/busCompanyAdmin/Chat',
                icon: <BsChat size={20} />,
            },
            {
                title: 'Notification',
                path: '/busCompanyAdmin/Notification',
                icon: <Speaker size={20} />,
            },

            {
                title: 'Complaints',
                path: 'busCompanyAdmin/Complaints',
                icon: <BsQuestionCircle size={20} />,
                submenu: true,
                subMenuItems: [
                    {title: 'User Complaint', path: 'busCompanyAdmin/Complaints/UserComplaint' },
                    {title: 'Driver Complaint', path: 'busCompanyAdmin/Complaints/DriverComplaint' },
                    ],
            },
            {
                title: 'Reports',
                path: 'busCompanyAdmin/Reports',
                icon: <BsQuestionCircle size={20} />,
                submenu: true,
                subMenuItems: [
                    {title: 'User Report', path: 'busCompanyAdmin/Reports/UserReport' },
                    {title: 'Driver Report', path: 'busCompanyAdmin/Reports/DriverReport' },
                    {title: 'Finance Report', path: 'busCompanyAdmin/Reports/FinanceReport' },
],
            },
        ]
    }

];