import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../App";
import Header from "../components/header/Header";

const NotFound = () => {
  const theme = useContext(ThemeContext);
  
  return (
    <div className={`min-h-screen flex flex-col ${theme.isDarkmode ? "bg-slate-900 text-white" : "bg-gray-50 text-slate-900"}`}>
      <Header />
      <div className="flex-grow flex flex-col items-center justify-center p-4 text-center mt-20">
        <h1 className="text-9xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Page Not Found</h2>
        <p className={`mb-8 max-w-md ${theme.isDarkmode ? "text-slate-400" : "text-slate-600"}`}>
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link 
          to="/" 
          className={`px-8 py-3 rounded-full font-medium transition-all ${
            theme.isDarkmode 
              ? "bg-white text-black hover:bg-gray-200" 
              : "bg-black text-white hover:bg-gray-800"
          }`}
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
