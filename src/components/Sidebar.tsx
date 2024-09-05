"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

const navItems = [
  { name: "Orders", href: "/dashboard/orders", icon: "🛒" },
  { name: "Hire Tech", href: "/dashboard/technician", icon: "💼" },
  { name: "OrderHistory", href: "/dashboard/OrderHistory", icon: "❤️" },
  { name: "Payments", href: "/dashboard/payments", icon: "💳" },
  { name: "Addresses", href: "/dashboard/addresses", icon: "📍" },
];

interface SidebarProps {
  isOpen: boolean;
}

export default function Sidebar({ isOpen }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside
      className={`bg-gray-200 dark:bg-gray-900 p-4 fixed top-10 left-0 h-[calc(100vh-4rem)] z-10 transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0 md:w-50 md:h-[calc(100vh-4rem)]`}
    >
      <nav>
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link href={item.href}>
                <div
                  className={`flex items-center p-2 text-gray-800 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-700 rounded ${
                    pathname === item.href ? "bg-gray-300 dark:bg-gray-700" : ""
                  }`}
                >
                  <span className="mr-3">{item.icon}</span>
                  <span className="hidden md:inline">{item.name}</span>
                </div>
              </Link>
            </li>
          ))}

          <li>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="flex items-center p-2 text-gray-800 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-700 rounded cursor-pointer">
                  <span className="mr-3">👤</span>
                  <span className="hidden md:inline">Profile</span>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link href="/dashboard/profile/edit">Edit Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/dashboard/logout">Logout</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/dashboard/settings">Settings</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
