// import { useState, useEffect } from "react";
// import axios from "axios";
// import Cookies from "js-cookie";
// import { FaPhone } from "react-icons/fa"; // Font Awesome
// import { MdEmail } from "react-icons/md"; // Material Design
// import { FiMapPin } from "react-icons/fi"; // Feather Icons
// import { Facebook, Linkedin, X } from "lucide-react";

// import { GoogleGenerativeAI } from "@google/generative-ai";
// import { Helmet } from "react-helmet";

// const genAI = new GoogleGenerativeAI("AIzaSyAOqUTs0LtSzF7vfO7M3u7qDUFPKq39Bng");

// const Contact = () => {
//   const token = Cookies.get("authToken");
//   const [userId, setUserId] = useState(null);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//     subject: "",
//   });
//   const [isChatOpen, setIsChatOpen] = useState(false);
//   const [messages, setMessages] = useState([
//     { role: "system", content: "مرحبًا! كيف يمكنني مساعدتك اليوم؟" },
//   ]);
//   const [input, setInput] = useState("");
//   const [submitStatus, setSubmitStatus] = useState(null);
//   const [activeTab, setActiveTab] = useState("form");

//   // معلومات الاتصال
//   const contactInfo = [
//     { icon: <FaPhone size={24} />, title: "رقم الهاتف", value: "0798837302" },
//     {
//       icon: <MdEmail size={24} />,
//       title: "البريد الإلكتروني",
//       value: "yaqeen@gmail.com",
//     },
//     { icon: <FiMapPin size={24} />, title: "العنوان", value: "عمان , الأردن" },
//   ];

//   // Fetch user info
//   useEffect(() => {
//     if (token) {
//       axios
//         .get("http://localhost:5000/api/users/me", {
//           headers: { Authorization: `Bearer ${token}` },
//         })
//         .then((response) => {
//           setUserId(response.data.id);
//         })
//         .catch((error) => {
//           console.error("Error fetching user info:", error);
//         });
//     }
//   }, [token]);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleRedirect = (url) => {
//     window.location.href = url;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setSubmitStatus("loading");
//     try {
//       const response = await axios.post(
//         "http://localhost:5000/api/users/contact",
//         {
//           user_id: userId,
//           ...formData,
//         }
//       );
//       setSubmitStatus("success");
//       setTimeout(() => setSubmitStatus(null), 3000);
//       setFormData({ ...formData, message: "", subject: "" });
//     } catch (error) {
//       console.error("Error sending message:", error);
//       setSubmitStatus("error");
//       setTimeout(() => setSubmitStatus(null), 3000);
//     }
//   };

//   const handleChatSubmit = async (e) => {
//     e.preventDefault();
//     if (!input.trim()) return;
//     const newMessages = [...messages, { role: "user", content: input }];
//     setMessages(newMessages);
//     setInput("");
//     try {
//       const model = genAI.getGenerativeModel({
//         model: "gemini-2.0-flash",
//       });
//       const result = await model.generateContent(input);
//       if (result.response && result.response.candidates) {
//         const aiReply = result.response.candidates[0].content.parts[0].text;
//         setMessages([...newMessages, { role: "assistant", content: aiReply }]);
//       } else {
//         throw new Error("Invalid AI response");
//       }
//     } catch (error) {
//       console.error("Error fetching AI response:", error);
//       setMessages([
//         ...newMessages,
//         {
//           role: "assistant",
//           content: "عذرًا، لم أتمكن من معالجة هذا الطلب.",
//         },
//       ]);
//     }
//   };

//   return (
//     <div className="bg-[#f9f9fb] min-h-screen font-sans" dir="rtl">
//       <Helmet>
//         <title>تواصل معنا</title>
//         <meta
//           name="description"
//           content="تواصل معنا عبر البريد الإلكتروني، الهاتف أو عبر نموذج الاتصال المباشر. نحن هنا للإجابة على استفساراتك."
//         />
//         <meta
//           name="keywords"
//           content="تواصل معنا, نموذج الاتصال, دعم العملاء, البريد الإلكتروني, الهاتف, الأردن"
//         />
//         <meta property="og:title" content="تواصل معنا" />
//         <meta
//           property="og:description"
//           content="تواصل معنا عبر البريد الإلكتروني، الهاتف أو عبر نموذج الاتصال المباشر. نحن هنا للإجابة على استفساراتك."
//         />
//         <meta property="og:image" content="url_to_image.jpg" />{" "}
//         {/* يمكنك إضافة رابط الصورة هنا */}
//       </Helmet>

//       {/* Hero Section with Black Background */}
//       <div className="w-full bg-black py-10 text-white">
//         <div className="container mx-auto px-4">
//           <h1 className="text-4xl font-bold text-center">تواصل معنا</h1>
//           <p className="text-center mt-2 opacity-90">
//             نحن هنا للإجابة على جميع استفساراتك
//           </p>
//         </div>
//       </div>

//       <div className="container mx-auto px-4 py-12">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Contact Info Section */}
//           <div className="lg:col-span-1">
//             <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//               <div className="bg-[#51a31d] py-6 px-4 text-white">
//                 <h2 className="text-xl font-bold">معلومات الاتصال</h2>
//                 <p className="mt-2 opacity-75 text-sm">
//                   يمكنك التواصل معنا عبر التالي:
//                 </p>
//               </div>
//               <div className="p-6 space-y-6">
//                 {contactInfo.map((info, index) => (
//                   <div key={index} className="flex items-start">
//                     <div className="h-10 w-10 flex items-center justify-center bg-[#51a31d] rounded-full text-white">
//                       {info.icon}
//                     </div>
//                     <div className="mr-4">
//                       <h3 className="font-semibold text-gray-800">
//                         {info.title}
//                       </h3>
//                       <p className="text-gray-600">{info.value}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//               <div className="p-6 pt-0">
//                 <h3 className="font-semibold text-gray-800 mb-3">
//                   تابعنا على:
//                 </h3>
//                 <div className="flex gap-x-6 justify-center">
//                   <button
//                     onClick={() => handleRedirect("https://twitter.com")}
//                     className="h-10 w-10 rounded-full bg-[#1DA1F2] text-white flex items-center justify-center hover:bg-[#51a31d] transition duration-300"
//                   >
//                     <X size={20} />
//                   </button>
//                   <button
//                     onClick={() => handleRedirect("https://facebook.com")}
//                     className="h-10 w-10 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:bg-[#51a31d] transition duration-300"
//                   >
//                     <Facebook size={20} />
//                   </button>
//                   <button
//                     onClick={() => handleRedirect("https://linkedin.com")}
//                     className="h-10 w-10 rounded-full bg-[#0A66C2] text-white flex items-center justify-center hover:bg-[#51a31d] transition duration-300"
//                   >
//                     <Linkedin size={20} />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Form/Map Tabs Section */}
//           <div className="lg:col-span-2">
//             <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//               <div className="flex border-b">
//                 <button
//                   onClick={() => setActiveTab("form")}
//                   className={`flex-1 py-4 text-center font-semibold transition duration-300 ${
//                     activeTab === "form"
//                       ? "bg-[#51a31d] text-white"
//                       : "text-gray-600 hover:bg-gray-100"
//                   }`}
//                 >
//                   نموذج الاتصال
//                 </button>
//                 <button
//                   onClick={() => setActiveTab("map")}
//                   className={`flex-1 py-4 text-center font-semibold transition duration-300 ${
//                     activeTab === "map"
//                       ? "bg-[#51a31d] text-white"
//                       : "text-gray-600 hover:bg-gray-100"
//                   }`}
//                 >
//                   موقعنا على الخريطة
//                 </button>
//               </div>
//               {activeTab === "form" ? (
//                 <div className="p-6">
//                   <form className="space-y-6" onSubmit={handleSubmit}>
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                       <div>
//                         <label className="block text-gray-700 font-semibold mb-2">
//                           الاسم
//                         </label>
//                         <input
//                           type="text"
//                           name="name"
//                           value={formData.name}
//                           onChange={handleChange}
//                           className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none bg-gray-100 text-gray-600"
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-gray-700 font-semibold mb-2">
//                           البريد الإلكتروني
//                         </label>
//                         <input
//                           type="email"
//                           name="email"
//                           value={formData.email}
//                           onChange={handleChange}
//                           className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none bg-gray-100 text-gray-600"
//                         />
//                       </div>
//                     </div>
//                     <div>
//                       <label className="block text-gray-700 font-semibold mb-2">
//                         الموضوع
//                       </label>
//                       <input
//                         type="text"
//                         name="subject"
//                         placeholder="أدخل موضوع الرسالة"
//                         value={formData.subject}
//                         onChange={handleChange}
//                         className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#51a31d] text-gray-700"
//                         required
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-gray-700 font-semibold mb-2">
//                         الرسالة
//                       </label>
//                       <textarea
//                         name="message"
//                         rows="5"
//                         placeholder="اكتب رسالتك هنا..."
//                         value={formData.message}
//                         onChange={handleChange}
//                         className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#51a31d] text-gray-700"
//                         required
//                       ></textarea>
//                     </div>
//                     <button
//                       type="submit"
//                       className="w-full py-3 px-6 bg-black text-white rounded-lg font-bold hover:opacity-90 transition duration-300 flex items-center justify-center"
//                       disabled={submitStatus === "loading"}
//                     >
//                       {submitStatus === "loading" ? (
//                         <>
//                           <span className="animate-spin h-5 w-5 mr-3 border-t-2 border-b-2 border-white rounded-full"></span>
//                           جاري الإرسال...
//                         </>
//                       ) : (
//                         "إرسال الرسالة"
//                       )}
//                     </button>
//                     {submitStatus === "success" && (
//                       <div className="p-4 bg-green-100 text-green-700 rounded-lg">
//                         تم إرسال رسالتك بنجاح! سنقوم بالرد عليك في أقرب وقت.
//                       </div>
//                     )}
//                     {submitStatus === "error" && (
//                       <div className="p-4 bg-red-100 text-red-700 rounded-lg">
//                         حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى.
//                       </div>
//                     )}
//                   </form>
//                 </div>
//               ) : (
//                 <div className="p-6">
//                   <div className="bg-gray-200 rounded-lg overflow-hidden h-80 relative">
//                     <iframe
//                       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3381.212528440844!2d36.089!3d32.063500000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151b653bd040bccf%3A0x1338acc055de9946!2z2LTYsdmD2Kkg2KfZiNix2YbYrCBPcm9uZw!5e0!3m2!1sar!2sjo!4v1740836308144!5m2!1sar!2sjo"
//                       width="100%"
//                       height="100%"
//                       style={{ border: 0 }}
//                       allowFullScreen=""
//                       loading="lazy"
//                       referrerPolicy="no-referrer-when-downgrade"
//                     ></iframe>
//                   </div>
//                   <div className="mt-4">
//                     <h3 className="font-bold text-gray-800 mb-2">
//                       زيارة مكتبنا
//                     </h3>
//                     <p className="text-gray-600">
//                       يمكنك زيارتنا في مقر الشركة خلال ساعات العمل الرسمية من
//                       الساعة 9 صباحًا حتى 5 مساءً.
//                     </p>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Chatbot Button */}
//       <div
//         onClick={() => setIsChatOpen(!isChatOpen)}
//         className="fixed bottom-6 left-6 bg-[#51a31d] p-4 rounded-full shadow-lg cursor-pointer transition duration-300 hover:opacity-90 z-40 animate-bounce"
//       >
//         <span className="text-white text-2xl">💬</span>
//       </div>

//       {/* Chatbot Box */}
//       {isChatOpen && (
//         <div className="fixed bottom-24 left-6 w-80 md:w-96 bg-white rounded-lg shadow-2xl z-50 overflow-hidden transform transition-transform duration-300 ease-in-out">
//           <div className="bg-[#51a31d] py-3 px-4 flex justify-between items-center">
//             <button
//               onClick={() => setIsChatOpen(false)}
//               className="text-white hover:text-gray-200 transition"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             </button>
//             <h3 className="text-lg font-bold text-white">المُساعد الذكي</h3>
//             <div className="h-6 w-6"></div>
//           </div>
//           <div className="h-80 overflow-y-auto bg-[#f9f9fb] p-3">
//             {messages.map((msg, index) => (
//               <div
//                 key={index}
//                 className={`p-3 my-2 rounded-lg max-w-4/5 ${
//                   msg.role === "user"
//                     ? "bg-[#51a31d] text-white mr-auto ml-0"
//                     : "bg-gray-200 ml-auto mr-0"
//                 }`}
//                 style={{ maxWidth: "75%" }}
//               >
//                 {msg.content}
//               </div>
//             ))}
//           </div>
//           <form onSubmit={handleChatSubmit} className="p-3 border-t">
//             <div className="flex">
//               <input
//                 type="text"
//                 className="flex-grow p-2 border rounded-r-lg border-gray-300 focus:outline-none focus:border-[#51a31d]"
//                 value={input}
//                 onChange={(e) => setInput(e.target.value)}
//                 placeholder="اكتب رسالتك هنا..."
//               />
//               <button
//                 type="submit"
//                 className="bg-[#51a31d] text-white p-2 rounded-l-lg"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-6 w-6 transform rotate-180"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
//                   />
//                 </svg>
//               </button>
//             </div>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Contact;



import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, CheckCircle, Facebook, Twitter, Linkedin, Send } from 'lucide-react';
import { Helmet } from 'react-helmet';
import axios from 'axios';

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState(null);
  const [activeTab, setActiveTab] = useState('form');
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'مرحباً! أنا المساعد الافتراضي لمعدات تك. كيف يمكنني مساعدتك اليوم؟' }
  ]);
  const [input, setInput] = useState('');

  // معلومات الاتصال
  const contactInfo = [
    { icon: <Phone size={24} />, title: 'رقم الهاتف', value: '+966 12 345 6789' },
    { icon: <Mail size={24} />, title: 'البريد الإلكتروني', value: 'info@moadattech.sa' },
    { icon: <MapPin size={24} />, title: 'العنوان', value: 'الرياض، حي العليا، طريق الملك فهد' },
  ];

  // التعامل مع تغييرات النموذج
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // إرسال النموذج
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus('loading');
    
    try {
      // في بيئة الإنتاج، استبدل هذا بـ API الفعلي
      // await axios.post('https://api.moadattech.sa/api/contact', formData);
      
      // محاكاة التأخير للاستجابة
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitStatus('success');
      setTimeout(() => setSubmitStatus(null), 5000);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('خطأ في إرسال النموذج:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  // التعامل مع الدردشة
  const handleChatSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    // إضافة رسالة المستخدم
    const userMessage = { role: 'user', content: input };
    setMessages([...messages, userMessage]);
    setInput('');
    
    // محاكاة استجابة المساعد الافتراضي
    setTimeout(() => {
      const responses = [
        'يمكنني مساعدتك في العثور على المعدات المناسبة لمشروعك. ما هو نوع المشروع الذي تعمل عليه؟',
        'معدات تك توفر مجموعة واسعة من المعدات للإيجار. هل تبحث عن معدات محددة؟',
        'ساعات العمل لدينا من 8 صباحاً حتى 8 مساءً طوال أيام الأسبوع. هل ترغب في زيارة أحد فروعنا؟',
        'يمكنك استئجار المعدات عبر موقعنا الإلكتروني أو عبر الاتصال بنا على الرقم +966 12 345 6789. كيف يمكنني مساعدتك أكثر؟',
        'للتسجيل كشريك، يمكنك زيارة صفحة "انضم كشريك" من خلال موقعنا أو ملء نموذج التواصل وسيتصل بك فريقنا قريباً.',
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      setMessages(prev => [...prev, { role: 'assistant', content: randomResponse }]);
    }, 1000);
  };

  return (
    <div className="font-cairo bg-white" dir="rtl">
      <Helmet>
        <title>تواصل معنا | معدات تك</title>
        <meta name="description" content="تواصل مع معدات تك، المنصة الرائدة لتأجير المعدات الصناعية والإنشائية في المملكة العربية السعودية" />
      </Helmet>
      
      {/* قسم الهيرو البسيط */}
      <section className="bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">تواصل <span className="text-amber-500">معنا</span></h1>
            <p className="text-xl text-white text-opacity-90 max-w-3xl mx-auto">
              فريقنا جاهز للإجابة على جميع استفساراتك ومساعدتك في اختيار المعدات المناسبة لمشروعك
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* معلومات الاتصال */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
              <div className="bg-amber-500 py-6 px-4 text-white">
                <h2 className="text-xl font-bold">معلومات الاتصال</h2>
                <p className="mt-2 opacity-90 text-sm">
                  يمكنك التواصل معنا عبر:
                </p>
              </div>
              <div className="p-6 space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className="h-12 w-12 flex items-center justify-center bg-amber-100 text-amber-500 rounded-full">
                      {info.icon}
                    </div>
                    <div className="mr-4">
                      <h3 className="font-bold text-gray-800">{info.title}</h3>
                      <p className="text-gray-600">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-6 pt-0">
                <h3 className="font-bold text-gray-800 mb-4">تابعنا على:</h3>
                <div className="flex gap-4 justify-center">
                  <a 
                    href="https://twitter.com" 
                    className="h-10 w-10 rounded-full bg-gray-100 text-gray-600 hover:bg-amber-500 hover:text-white flex items-center justify-center transition duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter size={20} />
                  </a>
                  <a 
                    href="https://facebook.com" 
                    className="h-10 w-10 rounded-full bg-gray-100 text-gray-600 hover:bg-amber-500 hover:text-white flex items-center justify-center transition duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Facebook size={20} />
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    className="h-10 w-10 rounded-full bg-gray-100 text-gray-600 hover:bg-amber-500 hover:text-white flex items-center justify-center transition duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
              
              {/* ساعات العمل */}
              <div className="p-6 pt-0 border-t border-gray-100 mt-6">
                <h3 className="font-bold text-gray-800 mb-3">ساعات العمل:</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="text-gray-600">السبت - الخميس:</span>
                    <span className="font-medium">8:00 ص - 8:00 م</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">الجمعة:</span>
                    <span className="font-medium">1:00 م - 8:00 م</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* نموذج الاتصال والخريطة */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
              <div className="flex border-b">
                <button
                  onClick={() => setActiveTab('form')}
                  className={`flex-1 py-4 text-center font-bold transition duration-300 ${
                    activeTab === 'form'
                      ? 'bg-amber-500 text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  نموذج الاتصال
                </button>
                <button
                  onClick={() => setActiveTab('map')}
                  className={`flex-1 py-4 text-center font-bold transition duration-300 ${
                    activeTab === 'map'
                      ? 'bg-amber-500 text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  موقعنا على الخريطة
                </button>
              </div>
              
              {activeTab === 'form' ? (
                <div className="p-6">
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-800 font-bold mb-2">
                          الاسم الكامل <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="أدخل اسمك الكامل"
                          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-gray-700"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-800 font-bold mb-2">
                          البريد الإلكتروني <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="example@domain.com"
                          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-gray-700"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-800 font-bold mb-2">
                          رقم الهاتف
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="05xxxxxxxx"
                          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-gray-700"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-800 font-bold mb-2">
                          الموضوع <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="موضوع الرسالة"
                          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-gray-700"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-gray-800 font-bold mb-2">
                        الرسالة <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="message"
                        rows="5"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="اكتب رسالتك هنا..."
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-gray-700"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3 px-6 bg-amber-500 hover:bg-amber-600 text-white rounded-lg font-bold transition duration-300 flex items-center justify-center"
                      disabled={submitStatus === 'loading'}
                    >
                      {submitStatus === 'loading' ? (
                        <>
                          <span className="animate-spin h-5 w-5 ml-3 border-t-2 border-b-2 border-white rounded-full"></span>
                          جاري الإرسال...
                        </>
                      ) : (
                        <>
                          إرسال الرسالة
                          <Send className="mr-2" size={18} />
                        </>
                      )}
                    </button>
                    
                    {submitStatus === 'success' && (
                      <div className="p-4 bg-green-100 text-green-700 rounded-lg flex items-start">
                        <CheckCircle className="ml-2 flex-shrink-0 mt-0.5" size={18} />
                        <span>تم إرسال رسالتك بنجاح! سنقوم بالرد عليك في أقرب وقت ممكن.</span>
                      </div>
                    )}
                    
                    {submitStatus === 'error' && (
                      <div className="p-4 bg-red-100 text-red-700 rounded-lg">
                        حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى.
                      </div>
                    )}
                  </form>
                </div>
              ) : (
                <div className="p-6">
                  <div className="bg-gray-200 rounded-lg overflow-hidden h-80 relative">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.440284088309!2d46.68382431542328!3d24.713522357488003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03397bd0cf63%3A0x499ada5dc82d02d6!2sKing%20Fahd%20Rd%2C%20Riyadh%20Saudi%20Arabia!5e0!3m2!1sen!2sus!4v1649923456789!5m2!1sen!2sus"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                  <div className="mt-4">
                    <h3 className="font-bold text-gray-800 mb-2">زيارة مكتبنا</h3>
                    <p className="text-gray-600">
                      يمكنك زيارتنا في مقر الشركة خلال ساعات العمل الرسمية من الساعة 8 صباحًا حتى 8 مساءً.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* قسم النشرة البريدية */}
      <section className="py-12 bg-amber-500">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 text-center md:text-right">
              <h2 className="text-2xl font-bold text-white mb-2">اشترك في نشرتنا البريدية</h2>
              <p className="text-white text-opacity-90">احصل على آخر العروض والتحديثات مباشرة إلى بريدك الإلكتروني</p>
            </div>
            <div className="w-full md:w-1/2 max-w-md">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="أدخل بريدك الإلكتروني" 
                  className="flex-grow p-3 rounded-r-md focus:outline-none text-gray-800" 
                />
                <button 
                  type="submit" 
                  className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-l-md transition-colors duration-300"
                >
                  اشتراك
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* زر المساعد الافتراضي */}
      <div
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="fixed bottom-6 left-6 bg-amber-500 text-white p-4 rounded-full shadow-lg cursor-pointer hover:bg-amber-600 transition duration-300 z-50"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      </div>
      
      {/* صندوق المساعد الافتراضي */}
      {isChatOpen && (
        <div className="fixed bottom-24 left-6 w-80 md:w-96 bg-white rounded-lg shadow-xl z-50 overflow-hidden">
          <div className="bg-amber-500 text-white py-3 px-4 flex justify-between items-center">
            <button
              onClick={() => setIsChatOpen(false)}
              className="text-white hover:text-gray-200 transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <h3 className="text-lg font-bold">المساعد الافتراضي</h3>
            <div className="w-5"></div>
          </div>
          <div className="h-80 overflow-y-auto p-4 bg-gray-50">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-3 my-2 rounded-lg ${
                  msg.role === 'user'
                    ? 'bg-amber-500 text-white mr-auto'
                    : 'bg-gray-200 text-gray-800 ml-auto'
                }`}
                style={{ maxWidth: '75%' }}
              >
                {msg.content}
              </div>
            ))}
          </div>
          <form onSubmit={handleChatSubmit} className="p-3 border-t">
            <div className="flex">
              <input
                type="text"
                className="flex-grow p-3 border rounded-r-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-gray-800"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="اكتب رسالتك هنا..."
              />
              <button
                type="submit"
                className="bg-amber-500 text-white p-3 rounded-l-lg hover:bg-amber-600 transition duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform rotate-180">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ContactUsPage;