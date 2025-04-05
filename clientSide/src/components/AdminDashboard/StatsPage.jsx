// src/components/AdminDashboard/StatsPage.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Users,
  PackageCheck,
  FolderKanban,
  BadgeCheck,
  UserPlus,
  CreditCard,
  MailOpen
} from "lucide-react";

const StatsPage = () => {
  const [stats, setStats] = useState({
    users: 0,
    partnersPending: 0,
    equipment: 0,
    rentals: 0,
    payments: 0,
    messages: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/admin/stats", {
          withCredentials: true,
        });
        setStats(res.data);
      } catch (err) {
        console.error("Error fetching stats", err);
      }
    };

    fetchStats();
  }, []);

  const cards = [
    { label: "إجمالي المستخدمين", value: stats.users, icon: Users, color: "bg-yellow-100 text-yellow-800" },
    { label: "طلبات الشراكة المعلقة", value: stats.partnersPending, icon: UserPlus, color: "bg-orange-100 text-orange-800" },
    { label: "عدد المعدات", value: stats.equipment, icon: PackageCheck, color: "bg-blue-100 text-blue-800" },
    { label: "عدد الطلبات", value: stats.rentals, icon: FolderKanban, color: "bg-green-100 text-green-800" },
    { label: "عدد المدفوعات", value: stats.payments, icon: CreditCard, color: "bg-purple-100 text-purple-800" },
    { label: "رسائل التواصل", value: stats.messages, icon: MailOpen, color: "bg-red-100 text-red-800" },
  ];

  return (
    <div className="text-right space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">الإحصائيات العامة</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map(({ label, value, icon: Icon, color }) => (
          <div
            key={label}
            className={`p-6 rounded-xl shadow flex items-center justify-between ${color}`}
          >
            <div>
              <h3 className="text-lg font-semibold">{label}</h3>
              <p className="text-3xl font-bold mt-2">{value}</p>
            </div>
            <Icon size={36} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsPage;