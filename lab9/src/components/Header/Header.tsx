import { NavLink } from 'react-router-dom';
import ThemeToggle from '../ThemeToggle/ThemeToggle';

export default function Header() {
  return (
    <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-8">
            <h1 className="text-2xl font-extrabold text-gray-900 dark:text-white">
              🐾 Галерея Домашніх Улюбленців
            </h1>
            <nav className="hidden md:flex gap-1">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg font-medium transition-colors ${isActive
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`
                }
                end
              >
                Головна
              </NavLink>
              <NavLink
                to="/pets"
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg font-medium transition-colors ${isActive
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`
                }
              >
                Улюбленці
              </NavLink>
              <NavLink
                to="/ui-kit"
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg font-medium transition-colors ${isActive
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`
                }
              >
                UI Kit
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg font-medium transition-colors ${isActive
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`
                }
              >
                Про застосунок
              </NavLink>
            </nav>
          </div>
          <ThemeToggle />
        </div>
        {/* Mobile navigation */}
        <nav className="md:hidden flex gap-1 mt-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex-1 text-center px-3 py-2 rounded-lg text-sm font-medium transition-colors ${isActive
                ? 'bg-blue-600 text-white'
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`
            }
            end
          >
            Головна
          </NavLink>
          <NavLink
            to="/pets"
            className={({ isActive }) =>
              `flex-1 text-center px-3 py-2 rounded-lg text-sm font-medium transition-colors ${isActive
                ? 'bg-blue-600 text-white'
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`
            }
          >
            Улюбленці
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `flex-1 text-center px-3 py-2 rounded-lg text-sm font-medium transition-colors ${isActive
                ? 'bg-blue-600 text-white'
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`
            }
          >
            Про застосунок
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
