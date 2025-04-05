// src/components/AdminDashboard/EquipmentPage.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Trash2 } from "lucide-react";
import { toast } from "react-hot-toast";

const EquipmentPage = () => {
  const [equipment, setEquipment] = useState([]);

  const fetchEquipment = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/admin/equipment", {
        withCredentials: true,
      });
      setEquipment(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const deleteEquipment = async (id) => {
    if (!window.confirm("هل أنت متأكد من حذف هذه المعدة؟")) return;
    try {
      await axios.delete(`http://localhost:5000/api/admin/equipment/${id}`, {
        withCredentials: true,
      });
      toast.success("تم حذف المعدة");
      fetchEquipment();
    } catch (err) {
      toast.error("خطأ أثناء الحذف");
    }
  };

  useEffect(() => {
    fetchEquipment();
  }, []);

  return (
    <div className="space-y-6 text-right">
      <h2 className="text-2xl font-bold text-gray-800">إدارة المعدات</h2>
      <table className="w-full text-sm bg-white shadow rounded-lg overflow-hidden">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th className="p-3">الاسم</th>
            <th className="p-3">التصنيف</th>
            <th className="p-3">السعر اليومي</th>
            <th className="p-3">المالك</th>
            <th className="p-3">الحالة</th>
            <th className="p-3">إجراءات</th>
          </tr>
        </thead>
        <tbody>
          {equipment.map((item) => (
            <tr key={item._id} className="border-b text-right">
              <td className="p-3">{item.title}</td>
              <td className="p-3">{item.category}</td>
              <td className="p-3">{item.dailyRate} د.أ</td>
              <td className="p-3">{item.ownerId?.name || "غير معروف"}</td>
              <td className="p-3">{item.availability ? "متوفرة" : "غير متوفرة"}</td>
              <td className="p-3 flex gap-2 justify-end">
                <button
                  onClick={() => deleteEquipment(item._id)}
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

export default EquipmentPage;