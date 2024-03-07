
import { ReactNode, useState } from 'react';
import MainContent from './components/MainContent';
import SideMenu from './components/SideMenu';

// Navbar Component
interface NavbarProps {
  children?: ReactNode;
}

const Navbar: React.FC<NavbarProps> = ({ children }) => {
  return (
    <div className="bg-slate-700 text-white p-2 flex justify-between">
      {/* Render children inside the Navbar */}
      {children}

      <img src='./gbmx.png' width={180} />
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
