import { LocateFixed, Menu, Projector, Settings, User, X } from 'lucide-react';
import { useState } from 'react';

interface SideMenuProps {
  isSideMenuOpen: boolean;
  toggleSideMenu: () => void;
}

const SideMenu: React.FC<SideMenuProps> = ({ isSideMenuOpen, toggleSideMenu }) => {

  const [isReportsOpen, setReportsOpen] = useState(false);
  const toggleReports = () => {
    setReportsOpen(!isReportsOpen);
  };

  return (
    <div className={'bg-slate-600 p-2 text-white '}>
      <button onClick={toggleSideMenu} className="text-green-600">
        {isSideMenuOpen ? <X size="40" /> : <Menu size="40" />}
      </button>
      <div className={`${isSideMenuOpen ? 'w-52' : 'w-10'} transition-all duration-1000 overflow-hidden`}>
        
        <div className='w-72 my-3 flex items-center gap-2 text-xl font-semibold cursor-pointer hover:opacity-50'><User size="40" /><span>Usuário</span></div>
        <div className='w-72 my-3 flex items-center gap-2 text-xl font-semibold cursor-pointer hover:opacity-50'><Settings size="40" /><span>Configurações</span></div>
        <div onClick={toggleReports} className='w-72 my-3 flex items-center gap-2 text-xl font-semibold cursor-pointer hover:opacity-50'><LocateFixed size="40" /><span>Relatórios</span></div>
        <div className={`${isReportsOpen ? 'h-auto visible' : 'h-0 invisible'} transition-all duration-500`}>
          <ul className= 'w-52 ml-2 text-slate-300 text-xl tracking-wider overflow-hidden'>
            <li className='my-2 cursor-pointer text-sky-400 hover:text-slate-500'><span className='mr-4 text-2xl'>#1</span>HTT 351556-7</li>
            <li className='my-2 cursor-pointer text-sky-400 hover:text-slate-500'><span className='mr-4 text-2xl'>#2</span>HTT 353083-3</li>
            <li className='my-2 cursor-pointer text-sky-400 hover:text-slate-500'><span className='mr-4 text-2xl'>#3</span>TCT 564985-8</li>
            <li className='my-2 cursor-pointer text-sky-400 hover:text-slate-500'><span className='mr-4 text-2xl'>#4</span>HPT 235698-7</li>
            <li className='my-2 cursor-pointer text-sky-400 hover:text-slate-500'><span className='mr-4 text-2xl'>#5</span>FTT 123987-8</li>
          </ul>
        </div>
        <div className='w-72 my-3 flex items-center gap-2 text-xl font-semibold cursor-pointer hover:opacity-50'><Projector size="40" /><span>Outros</span></div>
      </div>
    </div>
  );
}

export default SideMenu