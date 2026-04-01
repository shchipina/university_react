import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import Header from '../Header/Header';
import Toast from '../Toast/Toast';
import { usePetStore } from '../../store/usePetStore';

export default function Layout() {
  const isDarkTheme = usePetStore((state) => state.isDarkTheme);
  const toast = usePetStore((state) => state.toast);
  const clearToast = usePetStore((state) => state.clearToast);

  useEffect(() => {
    if (isDarkTheme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkTheme]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <main className="p-6 md:p-10">
        <Outlet />
      </main>
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={clearToast}
        />
      )}
    </div>
  );
}
