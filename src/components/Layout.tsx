import React, { useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { LayoutDashboard, CheckSquare, BookOpen, Calendar, Activity, Settings, Target, LogOut, Menu, X, Timer, Mail, Microscope } from 'lucide-react';
import { cn } from '../lib/utils';
import { useAccess } from '../access/AccessContext';
import { motion, AnimatePresence } from 'motion/react';
import { pageTransition, SYSTEM_EASE } from '../lib/motion';

export function Layout() {
  const location = useLocation();
  const { lockAppNow } = useAccess();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Dashboard', path: '/', icon: LayoutDashboard },
    { name: 'Focus Mode', path: '/focus', icon: Timer },
    { name: 'Check-In', path: '/check-in', icon: CheckSquare },
    { name: 'Subjects', path: '/subjects', icon: BookOpen },
    { name: 'Habits', path: '/habits', icon: Target },
    { name: 'Error Lab', path: '/error-lab', icon: Microscope },
    { name: 'Letters', path: '/letters', icon: Mail },
    { name: 'Calendar', path: '/calendar', icon: Calendar },
    { name: 'Analytics', path: '/analytics', icon: Activity },
    { name: 'Settings', path: '/settings', icon: Settings },
  ];

  return (
    <div className="flex h-screen bg-transparent text-gray-100 overflow-hidden font-sans selection:bg-violet-500/30">
        <style>
        {`
          .sidebar-glass {
            background-color: rgba(10, 10, 15, var(--dear-sidebar-opacity, 0.12));
            backdrop-filter: blur(var(--dear-sidebar-blur, 10px));
            -webkit-backdrop-filter: blur(var(--dear-sidebar-blur, 10px));
            border-color: rgba(255, 255, 255, var(--dear-ui-border-opacity, 0.12));
            box-shadow: 0 4px 20px rgba(0, 0, 0, var(--dear-ui-shadow-opacity, 0.35));
          }
          
          .mobile-menu-backdrop {
            background-color: rgba(0, 0, 0, var(--dear-mobile-menu-overlay-opacity, 0.55));
          }
          
          .sidebar-item-active {
            background-color: rgba(139, 92, 246, calc(var(--dear-ui-opacity, 0.08) * 1.5));
            border-color: rgba(139, 92, 246, var(--dear-ui-border-opacity, 0.12));
          }
        `}
      </style>
      
      {/* Mobile Top Bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 sidebar-glass border-b z-40 flex items-center justify-between px-4">
        <h1 className="text-xl font-bold tracking-widest text-white">DEAR S.</h1>
        <button 
          onClick={() => setMobileMenuOpen(true)}
          className="p-2 text-gray-400 hover:text-white transition-colors"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: SYSTEM_EASE }}
            className="md:hidden fixed inset-0 z-50 mobile-menu-backdrop transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar (Desktop & Mobile Drawer) */}
      <aside className={cn(
        "fixed md:static inset-y-0 right-0 md:left-0 z-50 flex flex-col w-72 md:w-64 border-l md:border-l-0 md:border-r sidebar-glass p-4 lg:p-6 transition-transform duration-200 ease-out",
        mobileMenuOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"
      )}>
        <div className="mb-10 px-2 mt-2 md:mt-4 flex items-center justify-between">
          <h1 className="text-2xl lg:text-3xl font-bold tracking-widest text-white hidden md:block" style={{ textShadow: '0 0 20px rgba(255,255,255,0.5)' }}>DEAR S.</h1>
          <h1 className="text-xl font-bold tracking-widest text-white md:hidden" style={{ textShadow: '0 0 20px rgba(255,255,255,0.5)' }}>MENU</h1>
          <button 
            className="md:hidden p-2 text-gray-400 hover:text-white transition-transform active:scale-95"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex-1 space-y-1.5 overflow-y-auto custom-scrollbar">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            
            return (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className="relative block rounded-xl outline-none group"
              >
                <div className={cn(
                  'relative z-10 flex items-center gap-4 px-4 py-3.5 md:py-3 transition-colors duration-150 ease-out font-medium',
                  isActive ? 'text-white' : 'text-gray-400 hover:text-gray-200 group-focus-visible:ring-2 ring-white/20'
                )}>
                  <item.icon className={cn(
                    "w-5 h-5 transition-transform duration-150 ease-out will-change-transform",
                    isActive ? 'text-violet-400' : 'group-hover:scale-110'
                  )} />
                  <span className="text-sm md:text-sm tracking-wide">{item.name}</span>
                </div>
                
                {isActive ? (
                  <div
                    className="absolute inset-0 sidebar-item-active shadow-lg border rounded-xl z-0"
                  />
                ) : (
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-150 rounded-xl z-0" />
                )}
              </NavLink>
            );
          })}
        </nav>

        <div className="mt-8 pt-6 border-t border-white/5">
          <motion.button
            whileHover={{ scale: 1.02, backgroundColor: "rgba(239,68,68,0.1)", color: "rgb(248,113,113)" }}
            whileTap={{ scale: 0.96 }}
            onClick={() => {
              setMobileMenuOpen(false);
              lockAppNow();
            }}
            className="w-full flex items-center gap-4 px-4 py-3 rounded-xl text-gray-400 border border-transparent font-medium group transition-colors"
          >
            <LogOut className="w-5 h-5 transition-transform duration-150 group-hover:scale-110" />
            <span className="text-sm tracking-wide">Exit App</span>
          </motion.button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto overflow-x-hidden pt-16 md:pt-0 scroll-smooth bg-transparent relative">
        <div className="max-w-5xl mx-auto p-4 sm:p-6 md:p-10 min-h-full">
            <div className="h-full">
              <Outlet />
            </div>
        </div>
      </main>
    </div>
  );
}
