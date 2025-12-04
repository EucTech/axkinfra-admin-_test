import DashboardIcon from '@mui/icons-material/Dashboard';
import LocalShippingRoundedIcon from '@mui/icons-material/LocalShippingRounded';
import { FaUsers } from 'react-icons/fa';

interface SidebarLinkType {
  name: string;
  icon: string | React.ReactNode;
  link: string;
}


export const sidebarLinks: SidebarLinkType[] = [
  {
    name: "Dashboard",
    icon: <DashboardIcon />,
    link: "/dashboard",
  },
  {
    name: "Users",
    icon: <FaUsers  />,
    link: "/dashboard/users",
  },
  {
    name: "Shipments",
    icon: <LocalShippingRoundedIcon />,
    link: "/dashboard/shipments",
  },
]
