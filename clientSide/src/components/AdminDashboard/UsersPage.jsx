// src/components/AdminDashboard/UsersPage.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Trash2, UserCog } from "lucide-react";
import { toast } from "react-hot-toast";

const UsersPage = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/admin/users", {
        withCredentials: true,
      });
      setUsers(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const deleteUser = async (id) => {
    if (!window.confirm("هل أنت متأكد من حذف هذا المستخدم؟")) return;
    try {
      await axios.delete(`http://localhost:5000/api/admin/users/${id}`, {
        withCredentials: true,
      });
      toast.success("تم حذف المستخدم بنجاح");
      fetchUsers();
    } catch (err) {
      toast.error("حدث خطأ أثناء الحذف");
    }
  };

  const toggleRole = async (id) => {
    try {
      await axios.put(`http://localhost:5000/api/admin/users/${id}/toggle-role`, {}, {
        withCredentials: true,
      });
      toast.success("تم تغيير الدور");
      fetchUsers();
    } catch (err) {
      toast.error("فشل في تغيير الدور");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="space-y-6 text-right">
      <h2 className="text-2xl font-bold text-gray-800">إدارة المستخدمين</h2>
      <table className="w-full text-sm bg-white shadow rounded-lg overflow-hidden">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th className="p-3">الاسم</th>
            <th className="p-3">البريد الإلكتروني</th>
            <th className="p-3">الدور</th>
            <th className="p-3">حالة الشراكة</th>
            <th className="p-3">إجراءات</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id} className="border-b text-right">
              <td className="p-3">{user.name}</td>
              <td className="p-3">{user.email}</td>
              <td className="p-3">{user.role}</td>
              <td className="p-3">{user.partnerStatus}</td>
              <td className="p-3 flex gap-2 justify-end">
                <button
                  onClick={() => toggleRole(user._id)}
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                >
                  <UserCog size={16} />
                </button>
                <button
                  onClick={() => deleteUser(user._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  <Trash2 size={16} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersPage;