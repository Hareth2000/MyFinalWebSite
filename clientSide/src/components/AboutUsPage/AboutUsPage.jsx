import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Wrench, 
  Users, 
  Award, 
  Clock, 
  ThumbsUp, 
  CheckCircle, 
  Building, 
  Truck, 
  Shield, 
  ArrowLeft, 
  Calendar, 
  Phone, 
  MapPin, 
  BadgeCheck 
} from 'lucide-react';

const AboutUsPage = () => {
  // قسم مؤسسي الشركة
  const founders = [
    {
      id: 1,
      name: "أحمد محمد",
      position: "المؤسس والرئيس التنفيذي",
      image: "src/assets/images/team/founder1.jpg",
      experience: "خبرة أكثر من 15 عامًا في مجال المعدات وتكنولوجيا المعلومات."
    },
    {
      id: 2,
      name: "سارة أحمد",
      position: "مديرة العمليات",
      image: "src/assets/images/team/founder2.jpg",
      experience: "متخصصة في إدارة المشاريع وتحسين العمليات لتوفير أفضل تجربة للمستخدمين."
    },
    {
      id: 3,
      name: "محمد علي",
      position: "مدير التكنولوجيا",
      image: "src/assets/images/team/founder3.jpg",
      experience: "مهندس برمجيات متمرس مع خبرة واسعة في تطوير المنصات الرقمية الآمنة والفعالة."
    }
  ];

  // قسم تاريخ الشركة
  const companyHistory = [
    {
      year: "2018",
      title: "تأسيس الشركة",
      description: "بدأت شركة معدات تك كفكرة مبتكرة لتسهيل الوصول إلى المعدات الصناعية بتكلفة معقولة."
    },
    {
      year: "2019",
      title: "توسع الخدمات",
      description: "توسعنا لنشمل خدمات التوصيل والصيانة والاستشارات الفنية لتقديم تجربة متكاملة للعملاء."
    },
    {
      year: "2020",
      title: "إطلاق المنصة الرقمية",
      description: "أطلقنا منصة إلكترونية متكاملة لتسهيل عملية حجز وتأجير المعدات عبر الإنترنت."
    },
    {
      year: "2022",
      title: "التوسع الجغرافي",
      description: "افتتاح فروع جديدة في مختلف مناطق المملكة لتسهيل وصول خدماتنا لجميع العملاء."
    },
    {
      year: "2023",
      title: "إطلاق برنامج الشركاء",
      description: "إطلاق برنامج الشركاء لإتاحة الفرصة للشركات والأفراد لتأجير معداتهم عبر منصتنا."
    }
  ];

  return (
    <div className="font-cairo bg-white" dir="rtl">
      {/* قسم الهيرو */}
      <section className="relative py-20 bg-gray-50">
        <div className="absolute top-0 left-0 w-64 h-64 bg-amber-100 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-70"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-100 rounded-full translate-x-1/3 translate-y-1/3 opacity-70"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">نبذة عن <span className="text-amber-500">معدات تك</span></h1>
            <p className="text-xl text-gray-600 mb-10">
              منصة رائدة في مجال تأجير المعدات الصناعية والإنشائية في المملكة العربية السعودية. نربط بين مالكي المعدات ومن يحتاجون إليها لتسهيل وتسريع إنجاز المشاريع بكفاءة عالية.
            </p>
            <div className="flex justify-center space-x-4 space-x-reverse">
              <Link to="/categories" className="bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-3 rounded-md transition-colors duration-300">
                تصفح المعدات
              </Link>
              <Link to="/contact" className="bg-white hover:bg-gray-50 text-amber-500 border border-amber-500 font-bold px-8 py-3 rounded-md transition-colors duration-300">
                تواصل معنا
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* قسم الإحصائيات */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-gray-50 rounded-lg p-6 text-center shadow-sm">
              <h3 className="text-3xl font-bold text-amber-500 mb-2">150+</h3>
              <p className="text-gray-600">معدة متوفرة</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center shadow-sm">
              <h3 className="text-3xl font-bold text-amber-500 mb-2">1,200+</h3>
              <p className="text-gray-600">عميل راضٍ</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center shadow-sm">
              <h3 className="text-3xl font-bold text-amber-500 mb-2">15+</h3>
              <p className="text-gray-600">فرع في المملكة</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center shadow-sm">
              <h3 className="text-3xl font-bold text-amber-500 mb-2">24/7</h3>
              <p className="text-gray-600">دعم فني متواصل</p>
            </div>
          </div>
        </div>
      </section>

      {/* قسم رؤيتنا ورسالتنا */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white rounded-lg shadow-md p-8 border border-gray-100">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mb-6">
                <BadgeCheck className="text-white" size={32} />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">رؤيتنا</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                أن نكون الوجهة الأولى والرائدة في تأجير المعدات والآليات الصناعية في المملكة العربية السعودية، وأن نساهم في تسهيل وتسريع إنجاز المشاريع التنموية والصناعية بأعلى معايير الكفاءة والجودة.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8 border border-gray-100">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mb-6">
                <Award className="text-white" size={32} />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">رسالتنا</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                نسعى لتوفير منصة موثوقة وسهلة الاستخدام تربط بين مالكي المعدات والمستأجرين، مع ضمان أعلى معايير الجودة والأمان. نلتزم بتقديم خدمات متكاملة تشمل التوصيل والصيانة والدعم الفني على مدار الساعة لضمان رضا عملائنا.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* قسم قيمنا */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">قيمنا <span className="text-amber-500">الأساسية</span></h2>
            <p className="text-gray-600 max-w-3xl mx-auto">نلتزم بمجموعة من القيم الأساسية التي تحدد هويتنا وتوجه أعمالنا</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-md rounded-lg p-8 text-center border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <ThumbsUp className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">الجودة</h3>
              <p className="text-gray-600">
                نضمن تقديم خدمة عالية الجودة ومعدات موثوقة تلبي احتياجات عملائنا بأعلى المعايير.
              </p>
            </div>
            
            <div className="bg-white shadow-md rounded-lg p-8 text-center border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">الثقة</h3>
              <p className="text-gray-600">
                نبني الثقة من خلال الشفافية والنزاهة في كل تعاملاتنا مع العملاء والشركاء.
              </p>
            </div>
            
            <div className="bg-white shadow-md rounded-lg p-8 text-center border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">الكفاءة</h3>
              <p className="text-gray-600">
                نعمل على تحسين كفاءة العمليات باستمرار لتوفير تجربة سلسة وسريعة لجميع المستخدمين.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* قسم تاريخ الشركة */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">قصتنا <span className="text-amber-500">ورحلتنا</span></h2>
            <p className="text-gray-600 max-w-3xl mx-auto">تعرف على رحلة تطور معدات تك منذ التأسيس وحتى اليوم</p>
          </div>
          
          <div className="relative">
            {/* خط الزمن */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-amber-200 transform -translate-x-1/2"></div>
            
            <div className="space-y-12">
              {companyHistory.map((item, index) => (
                <div key={index} className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="md:w-1/2 mb-8 md:mb-0">
                    <div className={`relative ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'} ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      <div className="hidden md:block absolute top-0 w-4 h-4 rounded-full bg-amber-500 border-4 border-white" 
                           style={{ [index % 2 === 0 ? 'right' : 'left']: '-8px' }}></div>
                      <div className="md:hidden inline-block mb-3 w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold">{item.year}</div>
                      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all duration-300">
                        <div className="hidden md:block text-amber-500 text-xl font-bold mb-2">{item.year}</div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* قسم فريقنا */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">فريق <span className="text-amber-500">القيادة</span></h2>
            <p className="text-gray-600 max-w-3xl mx-auto">نفخر بفريق قيادي متميز يجمع بين الخبرة والإبداع لتقديم أفضل الخدمات لعملائنا</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {founders.map(founder => (
              <div key={founder.id} className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="h-72 bg-gray-200">
                  {/* صورة الشخص */}
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{founder.name}</h3>
                  <p className="text-amber-500 mb-4">{founder.position}</p>
                  <p className="text-gray-600">{founder.experience}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* قسم خدماتنا */}
      <section className="py-16 bg-gray-50 relative overflow-hidden">
        {/* زخرفة خلفية */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-amber-100 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-70"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-100 rounded-full translate-x-1/3 translate-y-1/3 opacity-70"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">خدماتنا <span className="text-amber-500">المتكاملة</span></h2>
            <p className="text-gray-600 max-w-3xl mx-auto">نقدم باقة متكاملة من الخدمات لضمان تجربة استئجار مثالية تلبي احتياجاتك</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 rounded-lg bg-amber-100 flex items-center justify-center mb-6">
                <Truck className="text-amber-500" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">توصيل وتركيب</h3>
              <p className="text-gray-600 mb-4">نقوم بتوصيل المعدات لموقع العمل وتركيبها وتجهيزها للاستخدام</p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600 text-sm">
                  <CheckCircle className="text-amber-500 ml-2" size={16} />
                  <span>تحديد موعد التوصيل المناسب</span>
                </li>
                <li className="flex items-center text-gray-600 text-sm">
                  <CheckCircle className="text-amber-500 ml-2" size={16} />
                  <span>تركيب وتجهيز بواسطة فنيين مختصين</span>
                </li>
                <li className="flex items-center text-gray-600 text-sm">
                  <CheckCircle className="text-amber-500 ml-2" size={16} />
                  <span>شرح طريقة الاستخدام الآمن للمعدات</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 rounded-lg bg-amber-100 flex items-center justify-center mb-6">
                <Shield className="text-amber-500" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">ضمان وصيانة</h3>
              <p className="text-gray-600 mb-4">نوفر ضمان شامل على جميع المعدات مع خدمة صيانة طارئة</p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600 text-sm">
                  <CheckCircle className="text-amber-500 ml-2" size={16} />
                  <span>ضمان الجودة طوال فترة التأجير</span>
                </li>
                <li className="flex items-center text-gray-600 text-sm">
                  <CheckCircle className="text-amber-500 ml-2" size={16} />
                  <span>استجابة سريعة في حالات الطوارئ</span>
                </li>
                <li className="flex items-center text-gray-600 text-sm">
                  <CheckCircle className="text-amber-500 ml-2" size={16} />
                  <span>توفير بديل في حالة تعطل المعدة</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 rounded-lg bg-amber-100 flex items-center justify-center mb-6">
                <Users className="text-amber-500" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">استشارات فنية</h3>
              <p className="text-gray-600 mb-4">فريق من الخبراء لمساعدتك في اختيار المعدات المناسبة لمشروعك</p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600 text-sm">
                  <CheckCircle className="text-amber-500 ml-2" size={16} />
                  <span>مستشارون متخصصون في مختلف المجالات</span>
                </li>
                <li className="flex items-center text-gray-600 text-sm">
                  <CheckCircle className="text-amber-500 ml-2" size={16} />
                  <span>تقييم احتياجات المشروع بدقة</span>
                </li>
                <li className="flex items-center text-gray-600 text-sm">
                  <CheckCircle className="text-amber-500 ml-2" size={16} />
                  <span>اقتراح الحلول الأمثل لتوفير التكاليف</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* قسم الفروع والمواقع */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">فروعنا <span className="text-amber-500">ومواقعنا</span></h2>
            <p className="text-gray-600 max-w-3xl mx-auto">نفخر بتواجدنا في مختلف مناطق المملكة لنكون دائمًا بالقرب من عملائنا</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 bg-gray-200">
                {/* صورة المدينة */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center">
                  <MapPin className="ml-2 text-amber-500" size={18} />
                  الرياض
                </h3>
                <p className="text-gray-600 mb-4">
                  حي العليا، طريق الملك فهد، مبنى رقم 125
                </p>
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <Clock className="ml-2" size={14} />
                  <span>8 صباحاً - 8 مساءً، طوال أيام الأسبوع</span>
                </div>
                <div className="flex items-center text-gray-500 text-sm">
                  <Phone className="ml-2" size={14} />
                  <span>+966 11 234 5678</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 bg-gray-200">
                {/* صورة المدينة */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center">
                  <MapPin className="ml-2 text-amber-500" size={18} />
                  جدة
                </h3>
                <p className="text-gray-600 mb-4">
                  حي الروضة، شارع التحلية، مبنى رقم 42
                </p>
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <Clock className="ml-2" size={14} />
                  <span>8 صباحاً - 8 مساءً، طوال أيام الأسبوع</span>
                </div>
                <div className="flex items-center text-gray-500 text-sm">
                  <Phone className="ml-2" size={14} />
                  <span>+966 12 345 6789</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 bg-gray-200">
                {/* صورة المدينة */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center">
                  <MapPin className="ml-2 text-amber-500" size={18} />
                  الدمام
                </h3>
                <p className="text-gray-600 mb-4">
                  حي النزهة، طريق الملك سعود، مبنى رقم 78
                </p>
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <Clock className="ml-2" size={14} />
                  <span>8 صباحاً - 8 مساءً، طوال أيام الأسبوع</span>
                </div>
                <div className="flex items-center text-gray-500 text-sm">
                  <Phone className="ml-2" size={14} />
                  <span>+966 13 456 7890</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* قسم Call to Action */}
      <section className="py-16 bg-amber-500">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">انضم إلى قائمة عملائنا اليوم</h2>
            <p className="text-xl text-white text-opacity-90 mb-8">
              سواء كنت تبحث عن معدات للاستئجار أو ترغب في تأجير معداتك، نحن هنا لمساعدتك في تحقيق أهدافك بكفاءة وموثوقية.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/categories" className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-3 rounded-md font-bold text-lg transition-colors duration-300">
                استأجر الآن
              </Link>
              <Link to="/register-partner" className="bg-transparent hover:bg-amber-600 border-2 border-white px-8 py-3 rounded-md font-bold text-lg text-white transition-colors duration-300">
                انضم كشريك
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;