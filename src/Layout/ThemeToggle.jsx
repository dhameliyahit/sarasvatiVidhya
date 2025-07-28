import { useContext } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import ThemeContext from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      className={`w-14 cursor-pointer h-8 flex items-center p-1 rounded-full transition-colors duration-300
        ${isDark ? 'bg-gray-800' : 'bg-yellow-300'}`}
    >
      <div
        className={`w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center text-white
          ${isDark ? 'translate-x-6 bg-blue-600' : 'translate-x-0 bg-yellow-500'}`}
      >
        {isDark ? <FaMoon size={12} /> : <FaSun size={12} />}
      </div>
    </button>
  );
};

export default ThemeToggle;
