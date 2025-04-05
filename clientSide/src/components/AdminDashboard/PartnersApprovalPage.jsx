// src/components/AdminDashboard/PartnersApprovalPage.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { CheckCircle, XCircle } from "lucide-react";
import { toast } from "react-hot-toast";

const PartnersApprovalPage = () => {
  const [partners, setPartners] = useState([]);

  const fetchPendingPartners = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/admin/partners/pending", {
        withCredentials: true,
      });
      setPartners(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const approvePartner = async (id) => {
    try {
      await axios.put(`http://localhost:5000/api/admin/partners/${id}/approve`, {}, {
        withCredentials: true,
      });
      toast.success("تمت الموافقة على الشريك");
      fetchPendingPartners();
    } catch (err) {
      toast.error("فشل في الموافقة");
    }
  };

  const rejectPartner = async (id) => {
    if (!window.confirm("هل تريد رفض هذا الطلب؟")) return;
    try {
      await axios.put(`http://localhost:5000/api/admin/partners/${id}/reject`, {}, {
        withCredentials: true,
      });
      toast.success("تم رفض الطلب");
      fetchPendingPartners();
    } catch (err) {
      toast.error("فشل في الرفض");
    }
  };

  useEffect(() => {
    fetchPendingPartners();
  }, []);

  return (
    <div className="space-y-6 text-right">
      <h2 className="text-2xl font-bold text-gray-800">طلبات الشراكة</h2>
      <table className="w-full text-sm bg-white shadow rounded-lg overflow-hidden">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th className="p-3">الاسم</th>
            <th className="p-3">البريد</th>
            <th className="p-3">نوع النشاط</th>
            <th className="p-3">سنوات الخبرة</th>
            <th className="p-3">إجراءات</th>
          </tr>
        </thead>
        <tbody>
          {partners.map((user) => (
            <tr key={user._id} className="border-b text-right">
              <td className="p-3">{user.name}</td>
              <td className="p-3">{user.email}</td>
              <td className="p-3">{user.businessType}</td>
              <td className="p-3">{user.yearsOfExperience || "-"}</td>
              <td className="p-3 flex gap-2 justify-end">
                <button
                  onClick={() => approvePartner(user._id)}
                  className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                >
                  <CheckCircle size={16} />
                </button>
                <button
                  onClick={() => rejectPartner(user._id)}
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

export default PartnersApprovalPage;