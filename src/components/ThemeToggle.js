import { useContext } from 'react';
import ThemeContext from '../theme/ThemeContext';

import { FaSun, FaMoon } from 'react-icons/fa';

export default function ThemeToggle({ ...props }) {
  const { dark, toggleDark } = useContext(ThemeContext);
  return (
    <button
      className="bg-transparent text-gray-800 hover:text-indigo-500 dark:text-gray-200 dark:hover:text-indigo-300 cursor-pointer focus:outline-none"
      onClick={() => toggleDark()}
      type="button"
      {...props}
    >
      {dark ? <FaSun size="1.2em" /> : <FaMoon size="1em" />}
    </button>
  );
}
