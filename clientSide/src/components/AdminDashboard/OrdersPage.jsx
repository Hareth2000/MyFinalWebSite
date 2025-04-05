// src/components/AdminDashboard/OrdersPage.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Check, XCircle } from "lucide-react";
import { toast } from "react-hot-toast";

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/admin/rentals", {
        withCredentials: true,
      });
      setOrders(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      await axios.put(
        `http://localhost:5000/api/admin/rentals/${id}/status`,
        { status },
        { withCredentials: true }
      );
      toast.success("تم تحديث حالة الطلب");
      fetchOrders();
    } catch (err) {
      toast.error("فشل في تحديث الحالة");
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="space-y-6 text-right">
      <h2 className="text-2xl font-bold text-gray-800">إدارة الطلبات</h2>
      <table className="w-full text-sm bg-white shadow rounded-lg overflow-hidden">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th className="p-3">المستخدم</th>
            <th className="p-3">المعدة</th>
            <th className="p-3">تاريخ البدء</th>
            <th className="p-3">تاريخ الانتهاء</th>
            <th className="p-3">الحالة</th>
            <th className="p-3">إجراءات</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order._id} className="border-b text-right">
              <td className="p-3">{order.user?.name}</td>
              <td className="p-3">{order.equipment?.title}</td>
              <td className="p-3">{new Date(order.startDate).toLocaleDateString()}</td>
              <td className="p-3">{new Date(order.endDate).toLocaleDateString()}</td>
              <td className="p-3">{order.status}</td>
              <td className="p-3 flex gap-2 justify-end">
                <button
                  onClick={() => updateStatus(order._id, "accepted")}
                  className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                >
                  <Check size={16} />
                </button>
                <button
                  onClick={() => updateStatus(order._id, "rejected")}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  <XCircle size={16} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersPage;