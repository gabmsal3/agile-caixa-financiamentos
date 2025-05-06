
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/">
                <img
                  className="h-16 w-auto"
                  src="/lovable-uploads/81ebc069-acaf-494d-83c8-a4478395089a.png"
                  alt="Agile Financiamentos"
                />
              </Link>
            </div>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link to="/" className="text-caixa-blue hover:text-caixa-orange px-3 py-2 rounded-md font-medium">
              Início
            </Link>
            <Link to="/servicos" className="text-caixa-blue hover:text-caixa-orange px-3 py-2 rounded-md font-medium">
              Serviços
            </Link>
            <Link to="/sobre" className="text-caixa-blue hover:text-caixa-orange px-3 py-2 rounded-md font-medium">
              Sobre Nós
            </Link>
            <Link to="/contato" className="text-caixa-blue hover:text-caixa-orange px-3 py-2 rounded-md font-medium">
              Contato
            </Link>
            <a 
              href="https://wa.me/5517996779156" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button className="bg-caixa-orange hover:bg-caixa-blue text-white">
                Fale pelo WhatsApp
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-caixa-blue hover:text-caixa-orange focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={toggleMenu}
            >
              <span className="sr-only">Abrir menu principal</span>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="text-caixa-blue hover:text-caixa-orange block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Início
            </Link>
            <Link 
              to="/servicos" 
              className="text-caixa-blue hover:text-caixa-orange block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Serviços
            </Link>
            <Link 
              to="/sobre" 
              className="text-caixa-blue hover:text-caixa-orange block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Sobre Nós
            </Link>
            <Link 
              to="/contato" 
              className="text-caixa-blue hover:text-caixa-orange block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contato
            </Link>
            <a 
              href="https://wa.me/5517996779156"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-caixa-orange text-white block px-3 py-2 rounded-md text-base font-medium text-center"
              onClick={() => setIsOpen(false)}
            >
              Fale pelo WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
