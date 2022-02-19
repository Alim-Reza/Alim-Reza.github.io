import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs';
import { FaUniversity, FaTools } from 'react-icons/fa';
import { MdAccountCircle, MdAvTimer,MdDownloadForOffline } from "react-icons/md";

const SideBar = () => {
    return (
        <div className="fixed top-0 left-0 h-screen w-16 m-0 
                        
                        grid grid-cols-1 gap-4 content-center
                        bg-black-999 text-white shadow">
            <SideBarIcon icon={<MdAccountCircle size="35" />} text={"asif"} />
            <SideBarIcon icon={<MdAvTimer size="39" />} text={"experience"} />
            <SideBarIcon icon={<FaUniversity size="28" />} text={"education"} />
            <SideBarIcon icon={<FaTools size="28" />} text={"skill set"} />
            <SideBarIcon icon={<MdDownloadForOffline size="35" />} text={"download resume"} />
        </div>
    );
};

const SideBarIcon = ({ icon, text = 'tooltip 💡' }) => (
    <div className="sidebar-icon group">
        {icon}

        <span class="sidebar-tooltip group-hover:scale-100">
            {text}
        </span>
    </div>
);

export default SideBar;