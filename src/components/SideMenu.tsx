import { LocateFixed, Menu, Projector, Settings, User, X } from 'lucide-react';

interface SideMenuProps {
    isSideMenuOpen: boolean;
    toggleSideMenu: () => void;
  }

const SideMenu: React.FC<SideMenuProps> = ({ isSideMenuOpen, toggleSideMenu }) => {
    return (
      <div className={`bg-slate-600 p-2 text-white`}>
          <button onClick={toggleSideMenu} className="text-green-600">
              {isSideMenuOpen ? <X size="40" /> : <Menu size="40" />}
          </button>
          <div className={`${isSideMenuOpen ? 'w-64' : 'w-8'} space-y-4 transition-all duration-1000`} 
            
            >
          <User className='cursor-pointer hover:opacity-50' size="40" />
          <Settings className='cursor-pointer hover:opacity-50' size="40" />
          <LocateFixed className='cursor-pointer hover:opacity-50' size="40" />
          <Projector className='cursor-pointer hover:opacity-50' size="40" />
          </div>
      </div>
    );
}

export default SideMenu