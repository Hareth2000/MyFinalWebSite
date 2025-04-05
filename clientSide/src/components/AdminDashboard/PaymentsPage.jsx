// src/components/AdminDashboard/PaymentsPage.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const PaymentsPage = () => {
  const [payments, setPayments] = useState([]);

  const fetchPayments = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/admin/payments", {
        withCredentials: true,
      });
      setPayments(res.data);
    } catch (err) {
      console.error("Error loading payments", err);
    }
  };

  useEffect(() => {
    fetchPayments();
  }, []);

  return (
    <div className="space-y-6 text-right">
      <h2 className="text-2xl font-bold text-gray-800">سجل المدفوعات</h2>
      <table className="w-full text-sm bg-white shadow rounded-lg overflow-hidden">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th className="p-3">الاسم</th>
            <th className="p-3">البريد الإلكتروني</th>
            <th className="p-3">الدولة</th>
            <th className="p-3">المبلغ</th>
            <th className="p-3">الحالة</th>
            <th className="p-3">التاريخ</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((p) => (
            <tr key={p._id} className="border-b text-right">
              <td className="p-3">{p.name}</td>
              <td className="p-3">{p.email}</td>
              <td className="p-3">{p.country}</td>
              <td className="p-3">{p.amount} د.أ</td>
              <td className="p-3">{p.status}</td>
              <td className="p-3">{new Date(p.createdAt).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentsPage;