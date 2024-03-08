
import { useState } from 'react';
import MainContent from './components/MainContent';
import SideMenu from './components/SideMenu';

// Navbar Component

const Navbar: React.FC = () => {
  return (
    <div className="bg-slate-700 h-16 text-white py-3 px-4 flex justify-between">
      <img className='h-full' src='./gbmx.png' />
      <h1 className=' text-3xl text-slate-400'>RELATÓRIO DE VIAGEM</h1>
      <div className='flex items-center gap-4'>
        <div className='block text-right'>
          <span className='block text-md'>Marcos Corazza</span>
          <span className='block cursor-pointer text-sm text-slate-400'>logout</span>
        </div>

        <img src='miniatura.jpg' className=' rounded-full h-12' />
      </div>

    </div>
  );
};

// SideMenu Component



// Footer Component
const Footer: React.FC = () => {
  return (
    <div className="bg-slate-700 text-white p-1 flex justify-center text-sm">
      Greenbrier Digital @2024 - Todos os direitos reservados.
    </div>
  );
};

// App Component
const App: React.FC = () => {
  // State for managing side menu visibility
const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  // Function to toggle side menu visibility
  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-grow">
        <SideMenu isSideMenuOpen={isSideMenuOpen} toggleSideMenu={toggleSideMenu} />
        <MainContent />
      </div>
      <Footer />
    </div>
  );
};

export default App;
