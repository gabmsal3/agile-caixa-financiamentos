
import { NavLink, Outlet } from "react-router-dom";
import { 
  LayoutDashboard, 
  FileText, 
  Settings, 
  LogOut,
  Phone,
  Briefcase,
  Mail
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";

const AdminLayout = () => {
  const { signOut } = useAuth();
  
  const navItems = [
    { name: "Dashboard", path: "/adm/dashboard", icon: <LayoutDashboard className="h-5 w-5" /> },
    { name: "Textos", path: "/adm/texts", icon: <FileText className="h-5 w-5" /> },
    { name: "Contato", path: "/adm/contact-info", icon: <Phone className="h-5 w-5" /> },
    { name: "Serviços", path: "/adm/service-items", icon: <Briefcase className="h-5 w-5" /> },
    { name: "Email", path: "/adm/email-config", icon: <Mail className="h-5 w-5" /> },
    { name: "Configurações", path: "/adm/settings", icon: <Settings className="h-5 w-5" /> },
  ];
  
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-caixa-blue text-white p-4 flex flex-col">
        <div className="mb-8 p-2">
          <h1 className="text-xl font-bold">Agile Admin</h1>
        </div>
        
        <nav className="flex-1">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink 
                  to={item.path}
                  className={({ isActive }) => cn(
                    "flex items-center p-3 rounded-md transition-colors",
                    isActive 
                      ? "bg-white/10 text-white" 
                      : "text-gray-300 hover:bg-white/5 hover:text-white"
                  )}
                >
                  {item.icon}
                  <span className="ml-3">{item.name}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="mt-auto">
          <Button 
            variant="ghost"
            className="w-full justify-start text-gray-300 hover:text-white hover:bg-white/5"
            onClick={signOut}
          >
            <LogOut className="h-5 w-5 mr-3" />
            Sair
          </Button>
        </div>
      </aside>
      
      {/* Main content */}
      <main className="flex-1 p-8 bg-gray-50">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
