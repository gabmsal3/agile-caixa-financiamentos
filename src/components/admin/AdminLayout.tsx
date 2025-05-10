
import { useState } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { logout } from '@/data/auth';
import { toast } from '@/hooks/use-toast';
import { MenuIcon, X, Home, FileText, Settings, LogOut } from 'lucide-react';

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    toast({
      title: "Sessão encerrada",
      description: "Você saiu do painel administrativo",
    });
    navigate('/adm/login');
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'block' : 'hidden'} md:block bg-white shadow-lg w-64 transition-all duration-300 ease-in-out`}>
        <div className="p-4 bg-caixa-blue text-white flex justify-between items-center">
          <h2 className="font-bold text-lg">Agile Admin</h2>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setSidebarOpen(false)}
            className="md:hidden text-white hover:text-white hover:bg-caixa-blue/50"
          >
            <X size={20} />
          </Button>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <Link 
                to="/adm/dashboard"
                className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 transition-colors"
              >
                <Home size={18} />
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link 
                to="/adm/texts"
                className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 transition-colors"
              >
                <FileText size={18} />
                <span>Textos do Site</span>
              </Link>
            </li>
            <li>
              <Link 
                to="/adm/settings"
                className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 transition-colors"
              >
                <Settings size={18} />
                <span>Configurações</span>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="absolute bottom-0 w-64 p-4 border-t">
          <Button 
            variant="ghost" 
            className="w-full flex items-center gap-2 justify-start text-red-500 hover:text-red-700 hover:bg-red-50"
            onClick={handleLogout}
          >
            <LogOut size={18} />
            <span>Sair</span>
          </Button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top header */}
        <header className="bg-white shadow-sm z-10">
          <div className="px-4 py-3 flex justify-between items-center">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setSidebarOpen(true)}
              className={`${sidebarOpen ? 'hidden' : 'block'} md:hidden`}
            >
              <MenuIcon size={20} />
            </Button>
            <h1 className="text-lg font-medium">Painel Administrativo</h1>
            <div className="flex items-center gap-2">
              <Link to="/" target="_blank">
                <Button variant="outline" size="sm">Ver Site</Button>
              </Link>
            </div>
          </div>
        </header>
        
        {/* Content */}
        <main className="flex-1 overflow-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
