// src/components/AdminDashboard/Sidebar.jsx
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Package,
  FolderKanban,
  BadgeCheck,
  DollarSign,
  MailOpen,
} from "lucide-react";

const Sidebar = () => {
  const { pathname } = useLocation();

  const links = [
    { label: "الإحصائيات", path: "/admin-dashboard", icon: LayoutDashboard },
    { label: "المستخدمين", path: "/admin-dashboard/users", icon: Users },
    { label: "المعدات", path: "/admin-dashboard/equipment", icon: Package },
    { label: "الطلبات", path: "/admin-dashboard/orders", icon: FolderKanban },
    { label: "الإعلانات", path: "/admin-dashboard/ads", icon: BadgeCheck },
    { label: "طلبات الشراكة", path: "/admin-dashboard/partners", icon: Users },
    { label: "المدفوعات", path: "/admin-dashboard/payments", icon: DollarSign },
    { label: "الرسائل", path: "/admin-dashboard/messages", icon: MailOpen },
  ];

  return (
    <aside className="w-64 bg-white shadow h-screen p-4 space-y-2 border-l border-gray-200">
      <h2 className="text-lg font-bold text-gray-800 mb-4 text-center">لوحة التحكم</h2>
      <nav className="flex flex-col gap-2">
        {links.map(({ label, path, icon: Icon }) => (
          <Link
            key={path}
            to={path}
            className={`flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-yellow-100 transition ${
              pathname === path ? "bg-yellow-200 text-black font-bold" : "text-gray-700"
            }`}
          >
            <Icon size={18} />
            <span>{label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
