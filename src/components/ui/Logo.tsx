
import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2 group">
      <div className="relative w-8 h-8 overflow-hidden">
        <div className="absolute inset-0 bg-tasty rounded-full transform group-hover:scale-110 transition-transform"></div>
        <div className="absolute inset-0 flex items-center justify-center text-white font-bold">
          T
        </div>
      </div>
      <span className="font-playfair font-bold text-xl text-tasty-dark group-hover:text-tasty transition-colors">
        TastyAI
      </span>
    </Link>
  );
}
