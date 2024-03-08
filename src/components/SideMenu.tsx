import { LocateFixed, Menu, Projector, Settings, User, X } from 'lucide-react';

interface SideMenuProps {
  isSideMenuOpen: boolean;
  toggleSideMenu: () => void;
}

const SideMenu: React.FC<SideMenuProps> = ({ isSideMenuOpen, toggleSideMenu }) => {
  return (
    <div className={'bg-slate-600 p-2 text-white '}>
      <button onClick={toggleSideMenu} className="text-green-600">
        {isSideMenuOpen ? <X size="40" /> : <Menu size="40" />}
      </button>
      <div className={`${isSideMenuOpen ? 'w-52' : 'w-10'} space-y-4 transition-all duration-1000 overflow-hidden`}>
        
        <div className='w-72 flex items-center gap-2 text-xl font-semibold cursor-pointer hover:opacity-50'><User size="40" /><span>Usuário</span></div>
        <div className='w-72 flex items-center gap-2 text-xl font-semibold cursor-pointer hover:opacity-50'><Settings size="40" /><span>Configurações</span></div>
        <div className='w-72 flex items-center gap-2 text-xl font-semibold cursor-pointer hover:opacity-50'><LocateFixed size="40" /><span>Relatórios</span></div>
        <div>
          <ul className='ml-12 text-slate-300 text-sm mb-8'>
            <li className=' cursor-pointer hover:text-slate-500'>000001</li>
            <li className=' cursor-pointer hover:text-slate-500'>000002</li>
            <li className=' cursor-pointer hover:text-slate-500'>000003</li>
            <li className=' cursor-pointer hover:text-slate-500'>000004</li>
            <li className=' cursor-pointer hover:text-slate-500'>000005</li>
          </ul>
        </div>
        <div className='w-72 flex items-center gap-2 text-xl font-semibold cursor-pointer hover:opacity-50'><Projector size="40" /><span>Outros</span></div>
      </div>
    </div>
  );
}

export default SideMenu