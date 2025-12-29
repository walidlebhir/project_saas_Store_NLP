import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBarAdmin from './NavBarAdmin'
import SideBarAdmin from './SideBarAdmin'

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
        {/* Navbar fixe en haut */}
        <NavBarAdmin />
        
        {/* Contenu principal avec sidebar et contenu dynamique */}
        <div className="flex flex-1 pt-14 overflow-hidden"> 

            {/* Sidebar fixe à gauche */}
            <SideBarAdmin />
            
            {/* Zone de contenu principale avec défilement */}
            <main className="flex-1 overflow-y-auto p-6 md:p-8 bg-gray-50 ml-64 transition-all duration-300">
                <Outlet />
            </main>

        </div>
    </div>
  )
}