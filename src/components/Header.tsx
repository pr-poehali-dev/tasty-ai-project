
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Logo from "@/components/ui/Logo";
import SearchBar from "@/components/ui/SearchBar";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Check if the current route matches
  const isActive = (path: string) => location.pathname === path;

  // Handle scroll event to change header style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header 
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-between flex-1 mx-8">
            <SearchBar />
            
            <nav className="flex items-center space-x-2">
              <Link to="/tests">
                <Button 
                  variant={isActive("/tests") ? "default" : "ghost"} 
                  className={isActive("/tests") ? "bg-tasty hover:bg-tasty-dark" : "hover:text-tasty"}
                >
                  Готовые тесты
                </Button>
              </Link>
              <Link to="/create">
                <Button 
                  variant={isActive("/create") ? "default" : "ghost"}
                  className={isActive("/create") ? "bg-tasty hover:bg-tasty-dark" : "hover:text-tasty"}
                >
                  Создать тест
                </Button>
              </Link>
              <Link to="/auth">
                <Button 
                  variant={isActive("/auth") ? "default" : "ghost"}
                  className={isActive("/auth") ? "bg-tasty hover:bg-tasty-dark" : "hover:text-tasty"}
                >
                  Войти
                </Button>
              </Link>
            </nav>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-md hover:bg-muted transition-colors"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <SearchBar />
            
            <nav className="flex flex-col space-y-2">
              <Link 
                to="/tests"
                className={`p-2 rounded-md ${isActive("/tests") 
                  ? "bg-tasty text-white" 
                  : "hover:bg-secondary"} transition-colors`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Готовые тесты
              </Link>
              <Link 
                to="/create"
                className={`p-2 rounded-md ${isActive("/create") 
                  ? "bg-tasty text-white" 
                  : "hover:bg-secondary"} transition-colors`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Создать тест
              </Link>
              <Link 
                to="/auth"
                className={`p-2 rounded-md ${isActive("/auth") 
                  ? "bg-tasty text-white" 
                  : "hover:bg-secondary"} transition-colors`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Войти
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
