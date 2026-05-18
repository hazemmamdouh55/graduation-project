import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ─── ضع الـ URL بتاعك هنا ──────────────────────────────────────────────────────
const API_URL = "YOUR_API_URL_HERE";
// ─────────────────────────────────────────────────────────────────────────────

// async function submitSurveyToBackend(answers) {
//   const payload = {
//     answers: Object.entries(answers).map(([questionId, answer]) => ({
//       questionId: Number(questionId),
//       answer,
//     })),
//     submittedAt: new Date().toISOString(),
//   };
//   console.log("Survey Payload:", payload);
//   const response = await fetch(API_URL, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(payload),
//   });

//   if (!response.ok) {
//     throw new Error(`Server error: ${response.status}`);
//   }

//   return response.json();
// }
import {
  GraduationCap,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  ClipboardList,
} from "lucide-react";

const questions = [
  {
    id: 1,
    text: "كيف تتصرف مع طالب مشاغب ؟",
    options: [
      "أهدئه ثم اشرح له قواعد الصف",
      "أتجاهل الموضوع",
      "اتحدث معه بشكل فردي و افهمه",
      "أعاقبه مباشرة",
    ],
  },
  {
    id: 2,
    text: "كيف تجعل الطالب الاقل استيعابا يفهم الموضوع المطلوب شرحه ؟",
    options: [
      "أعدل طريقه الشرح حسب مستوي الطالب",
      "استخدم امثله مبسطه احيانا",
      "أشرح بنفس الطريقه",
    ],
  },
  {
    id: 3,
    text: "كيف تجعل الطلاب غير المهتمين يشاركون بفعاليه",
    options: [
      "أستخدم طرق تشجيعيه و حوافز",
      "أصمم أنشطه جذابه لتحفيز الجميع",
      "أطلب منهم المشاركه بقوة",
    ],
  },
  {
    id: 4,
    text: "كيف تتعامل مع ولي الامر الذي يعترض علي درجات ابنه ؟",
    options: [
      "اشرح له النظام بهدوء",
      "أطلب التحدث لاحقاً خارج الصف",
      "أطبق السياسه مباشرةَ",
    ],
  },
  {
    id: 5,
    text: "هل تستخدم التكنولوجيا",
    options: [
      "لا استخدمها",
      "استخدمها قليلا",
      "احيانا",
      "بفعاليه",
      "دائما و بمهارة",
    ],
  },
  {
    id: 6,
    text: "لاحظت ان احد الطلاب بدأ مستواه يتراجع و اصبح منطوي",
    options: [
      "أتحدث معه و لفهم السبب دعمه",
      "اتواصل مع اولياء الامور مباشره",
      "أقوم بتعديل اسلوبي لتلبيه احتياجات",
    ],
  },
  {
    id: 7,
    text: "اختلفت مع مدرس زميل او الاداره مثل (حول طريقه التدريس)",
    options: [
      "أطرح وجهه نظري بهدوء",
      "أبحث عن حل وسط",
      "التزم بالسياسه لتجنب النزاع",
    ],
  },
  {
    id: 8,
    text: "كيف تقيم مستوى تفاعل الطلاب معك داخل الفصل؟ وهل ترى أن كثافة الفصول تؤثر على جودة شرحك؟",
    options: [
      "التفاعل ضعيف والكثافة تؤثر بشدة",
      "التفاعل متوسط والكثافة تؤثر أحياناً",
      "التفاعل جيد والكثافة تؤثر نسبياً",
      "التفاعل جيد جداً والكثافة لا تؤثر",
      "التفاعل ممتاز والكثافة لا تؤثر على جودة شرحي",
    ],
  },
  {
    id: 9,
    text: "أكتب مهاره جديده تعلمتها مؤخرا و كيف طبقتها",
    options: [
      "لم أتعلم مهارة جديدة مؤخراً",
      "تعلمت مهارة بسيطة ولم أطبقها بعد",
      "تعلمت مهارة وبدأت في تطبيقها أحياناً",
      "تعلمت مهارة وأطبقها باستمرار داخل الفصل",
    ],
  },
  {
    id: 10,
    text: "هل تشعر أن التقدير المادي والبدلات التي توفرها المدرسة تتناسب مع حجم المجهود والمهام المطلوبة منك؟",
    options: [
      "أتفق بشدة",
      "أتفق",
      "محايد",
      "لا أتفق",
      "لا أتفق بشدة",
    ],
  },
  {
    id: 11,
    text: "كيف تتعامل مع الطالب المتفوق الذي ينهي التكليفات داخل الفصل أسرع من باقي زملائه لتجنب شعوره بالملل؟",
    options: [
      "أطلب منه الهدوء حتى ينتهي زملاؤه",
      "أجعله يساعد زملاءه الأضعف",
      "أعطيه أسئلة وتحديات إضافية",
      "لا شيء محدد",
    ],
  },
  {
    id: 12,
    text: "إذا اكتشفت أن طالباً استخدم الذكاء الاصطناعي لحل واجب كامل، ما هو تصرفك؟",
    options: [
      "أرفض الواجب فوراً وأعطيه درجة صفر",
      "أطلب منه إعادته تحت إشرافي داخل الفصل",
      "أناقشه في المحتوى المكتوب لأتأكد من استيعابه للفكرة",
      "أشجعه على استخدامه كأداة مساعدة مع توضيح المصادر",
    ],
  },
  {
    id: 13,
    text: "كيف تدمج أدوات الذكاء الاصطناعي (مثل Gemini أو ChatGPT) في عملك؟",
    options: [
      "لا أستخدمها وأفضل الطرق التقليدية تماماً.",
      "أستخدمها فقط لتوفير الوقت في التحضير وكتابة الاختبارات",
      "أستخدمها داخل الفصل لإنشاء أنشطة تفاعلية مع الطلاب",
      "أدرب الطلاب على كيفية صياغة الأوامر (Prompts) بشكل صحيح للبحث",
    ],
  },
  {
    id: 14,
    text: "عند استخدام تطبيق تعليمي جديد يعتمد على الـ AI، ما هو أول اهتماماتك؟",
    options: [
      "سهولة الاستخدام وشكل التطبيق.",
      "هل التطبيق مجاني أم مدفوع",
      "مدى أمان بيانات الطلاب وخصوصيتهم على هذا التطبيق",
      "هل سيوفر مجهودي في التصحيح أم لا.",
    ],
  },
];

// ─── Survey Page ───────────────────────────────────────────────────────────────
function SurveyPage({ onSubmit }) {
  const [answers, setAnswers] = useState({});
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const q = questions[current];
  const total = questions.length;
  const progress = ((current) / total) * 100;
  const answered = answers[q.id] !== undefined;
  const allAnswered = Object.keys(answers).length === total;

  const go = (dir) => {
    setDirection(dir);
    setCurrent((c) => c + dir);
  };

  const handleSelect = (option) => {
    setAnswers((prev) => ({ ...prev, [q.id]: option }));
  };

  const handleSubmit = () => {
    if (!allAnswered) {
      alert("لازم تجاوب على كل الأسئلة 😅");
      return;
    }
    onSubmit(answers);
  };

  const variants = {
    enter: (d) => ({ opacity: 0, x: d > 0 ? 80 : -80 }),
    center: { opacity: 1, x: 0 },
    exit: (d) => ({ opacity: 0, x: d > 0 ? -80 : 80 }),
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden" dir="rtl">
      {/* Animated BG */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0], x: [0, 80, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -left-40 w-[550px] h-[550px] bg-gradient-to-br from-purple-300 via-violet-300 to-fuchsia-300 rounded-full opacity-20 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0], x: [0, -80, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-40 -right-40 w-[550px] h-[550px] bg-gradient-to-br from-blue-300 via-indigo-300 to-purple-300 rounded-full opacity-20 blur-3xl"
        />
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ x: Math.random() * 1200, y: Math.random() * 800 }}
            animate={{ x: Math.random() * 1200, y: Math.random() * 800 }}
            transition={{ duration: 15 + Math.random() * 10, repeat: Infinity, repeatType: "reverse" }}
            className="absolute w-2 h-2 bg-purple-400 rounded-full opacity-20"
          />
        ))}
      </div>

      {/* Header */}
      <div className="border-b border-gray-100 bg-white/70 backdrop-blur-md relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          {/* Question counter */}
          <div className="flex items-center gap-2 px-4 py-2 bg-purple-50 border border-purple-100 rounded-full">
            <ClipboardList className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-bold text-purple-700">{current + 1} / {total}</span>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="relative z-10 bg-white/80 backdrop-blur-sm px-6 py-3 border-b border-gray-100">
        <div className="max-w-3xl mx-auto">
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <motion.div
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-600 rounded-full"
            />
          </div>
          <div className="flex justify-between mt-1.5">
            <span className="text-xs text-gray-400 font-medium">البداية</span>
            <span className="text-xs font-bold text-purple-600">{Math.round(progress)}% مكتمل</span>
            <span className="text-xs text-gray-400 font-medium">النهاية</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto px-6 py-12 relative z-10">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring" }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-purple-100 to-violet-100 border border-purple-200 rounded-full shadow-sm">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4 text-purple-600" />
            </motion.div>
            <span className="text-purple-700 text-sm uppercase tracking-wider font-bold">
              Teacher Personality Survey
            </span>
          </div>
        </motion.div>

        {/* Question Card */}
        <div className="relative overflow-hidden" style={{ minHeight: 400 }}>
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={q.id}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: "easeInOut" }}
            >
              {/* Question Number */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-600 to-fuchsia-600 rounded-2xl shadow-lg shadow-purple-500/30 text-white text-lg font-black flex-shrink-0">
                  {q.id}
                </div>
                <h2
                  className="text-2xl md:text-3xl text-gray-900 leading-snug font-bold"
                >
                  {q.text}
                </h2>
              </div>

              {/* Options */}
              <div className="flex flex-col gap-3">
                {q.options.map((option, idx) => {
                  const selected = answers[q.id] === option;
                  return (
                    <motion.button
                      key={option}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.07, type: "spring", stiffness: 200 }}
                      whileHover={{ scale: 1.02, x: -4 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleSelect(option)}
                      className={`
                        relative w-full text-right px-6 py-4 rounded-2xl border-2 transition-all duration-200 overflow-hidden
                        ${selected
                          ? "border-purple-500 bg-gradient-to-l from-purple-50 to-violet-50 shadow-lg shadow-purple-200"
                          : "border-gray-200 bg-white hover:border-purple-300 hover:bg-purple-50/50"
                        }
                      `}
                    >
                      {selected && (
                        <motion.div
                          layoutId="selected-bg"
                          className="absolute inset-0 bg-gradient-to-l from-purple-100/60 to-violet-100/60 rounded-2xl"
                        />
                      )}
                      <div className="relative flex items-center gap-4">
                        <div className={`
                          flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all
                          ${selected ? "border-purple-500 bg-purple-500" : "border-gray-300"}
                        `}>
                          {selected && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="w-2.5 h-2.5 bg-white rounded-full"
                            />
                          )}
                        </div>
                        <span className={`text-base leading-relaxed ${selected ? "text-purple-800 font-semibold" : "text-gray-700 font-medium"}`}>
                          {option}
                        </span>
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-10 gap-4">
          {/* Prev */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => go(-1)}
            disabled={current === 0}
            className={`
              flex items-center gap-2 px-6 py-3 rounded-xl border-2 font-bold text-base transition-all
              ${current === 0
                ? "border-gray-200 text-gray-300 cursor-not-allowed"
                : "border-purple-200 text-purple-700 hover:bg-purple-50"
              }
            `}
          >
            <ChevronRight className="w-5 h-5" />
            السابق
          </motion.button>

          {/* Step dots */}
          <div className="flex items-center gap-1.5">
            {questions.map((_, idx) => (
              <motion.div
                key={idx}
                animate={{
                  width: idx === current ? 24 : 8,
                  backgroundColor: answers[questions[idx].id]
                    ? "#7c3aed"
                    : idx === current
                      ? "#a78bfa"
                      : "#e5e7eb",
                }}
                transition={{ duration: 0.3 }}
                className="h-2 rounded-full"
              />
            ))}
          </div>

          {/* Next / Submit */}
          {current < total - 1 ? (
            <motion.button
              whileHover={{ scale: answered ? 1.05 : 1 }}
              whileTap={{ scale: answered ? 0.95 : 1 }}
              onClick={() => answered && go(1)}
              className={`
                relative flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-base overflow-hidden transition-all
                ${answered
                  ? "bg-gradient-to-l from-purple-600 via-violet-600 to-fuchsia-600 text-white shadow-lg shadow-purple-500/30"
                  : "bg-gray-100 text-gray-400 cursor-not-allowed"
                }
              `}
            >
              {answered && (
                <motion.div
                  animate={{ x: ["-200%", "200%"] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                  className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                />
              )}
              <span className="relative z-10">التالي</span>
              <ChevronLeft className="w-5 h-5 relative z-10" />
            </motion.button>
          ) : (
            <motion.button
              whileHover={{ scale: allAnswered ? 1.05 : 1, y: allAnswered ? -2 : 0 }}
              whileTap={{ scale: allAnswered ? 0.97 : 1 }}
              onClick={handleSubmit}
              className={`
                relative flex items-center gap-2 px-8 py-3 rounded-xl font-black text-base overflow-hidden transition-all
                ${allAnswered
                  ? "bg-gradient-to-l from-purple-600 via-violet-600 to-fuchsia-600 text-white shadow-xl shadow-purple-500/40"
                  : "bg-gray-100 text-gray-400 cursor-not-allowed"
                }
              `}
            >
              {allAnswered && (
                <motion.div
                  animate={{ x: ["-200%", "200%"] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 0.5 }}
                  className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-12"
                />
              )}
              <span className="relative z-10">إرسال النتائج</span>
              <ArrowRight className="w-5 h-5 relative z-10" />
            </motion.button>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Results Page ──────────────────────────────────────────────────────────────
function ResultsPage({ onCompleteProfile, onBrowseJobs }) {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden" dir="rtl">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: -100, x: Math.random() * 1200, opacity: 0 }}
            animate={{ y: 1100, opacity: [0, 0.8, 0.8, 0], rotate: [0, 360] }}
            transition={{ duration: 4 + Math.random() * 3, delay: Math.random() * 3, repeat: Infinity }}
            className="absolute w-2 h-2 bg-gradient-to-br from-purple-400 to-violet-400 rounded-full"
          />
        ))}
        <motion.div
          animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-purple-200 to-violet-200 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], x: [0, -50, 0], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-violet-200 to-fuchsia-200 rounded-full blur-3xl"
        />
      </div>

      <div className="border-b border-gray-100 bg-white/70 backdrop-blur-md relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="flex items-center gap-2.5">
            <div className="bg-gradient-to-br from-purple-600 to-violet-600 p-2 rounded-xl shadow-lg">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl text-gray-900 font-black">Ninja Teacher</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16 md:py-28 relative z-10 text-center">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100, damping: 15 }}
            className="inline-block mb-12 relative"
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                initial={{ scale: 1, opacity: 0.5 }}
                animate={{ scale: [1, 2.2, 2.2], opacity: [0.4, 0.15, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.8 }}
                className="absolute inset-0 border-4 border-green-400 rounded-full"
              />
            ))}
            <motion.div
              animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.6, 0.4] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute inset-0 bg-gradient-to-br from-green-300 via-emerald-300 to-teal-300 rounded-full blur-3xl"
            />
            <div className="relative bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500 p-16 rounded-full shadow-2xl">
              <motion.div
                animate={{ scale: [1, 1.08, 1, 1.08, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <CheckCircle2 className="w-32 h-32 text-white" />
              </motion.div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="mb-12">
            <h1 className="text-5xl md:text-6xl text-gray-900 mb-6 leading-tight font-black">شكراً لك!</h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-medium"
            >
              لقد أكملت الاستبيان بنجاح. سيتم تحليل إجاباتك لمساعدتنا على فهم أسلوبك التدريسي بشكل أفضل.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.98 }}
              onClick={onCompleteProfile}
              className="group relative px-12 py-6 bg-gradient-to-l from-purple-600 via-violet-600 to-fuchsia-600 text-white rounded-2xl text-xl shadow-2xl hover:shadow-purple-500/50 transition-all flex items-center gap-3 overflow-hidden font-black"
            >
              <motion.div
                animate={{ x: ["-200%", "200%"] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
              />
              <span className="relative z-10">أكمل ملفك الشخصي</span>
              <ArrowRight className="w-6 h-6 group-hover:-translate-x-2 transition-transform relative z-10" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.98 }}
              onClick={onBrowseJobs}
              className="px-12 py-6 bg-white border-2 border-purple-600 hover:bg-purple-50 text-purple-700 rounded-2xl text-xl transition-all flex items-center gap-3 shadow-lg font-black"
            >
              تصفح الوظائف
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

// ─── Root ──────────────────────────────────────────────────────────────────────
export default function TeacherSurveyApp() {
  const [page, setPage] = useState("survey"); // "survey" | "results" | "loading" | "error"
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (answers) => {
    setPage("loading");
    try {
      await submitSurveyToBackend(answers);
      setPage("results");
    } catch (err) {
      setErrorMsg(err.message || "حدث خطأ، حاول مرة أخرى");
      setPage("error");
    }
  };

  return (
    <AnimatePresence mode="wait">

      {/* Survey */}
      {page === "survey" && (
        <motion.div key="survey" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, x: -60 }} transition={{ duration: 0.35 }}>
          <SurveyPage onSubmit={handleSubmit} />
        </motion.div>
      )}

      {/* Loading */}
      {page === "loading" && (
        <motion.div
          key="loading"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="min-h-screen bg-white flex flex-col items-center justify-center gap-6"
          dir="rtl"
        >
          <div className="relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
              className="w-20 h-20 rounded-full border-4 border-purple-200 border-t-purple-600"
            />
            <motion.div
              animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 bg-purple-400 rounded-full blur-2xl opacity-30"
            />
          </div>
          <p className="text-xl font-bold text-gray-700">جاري إرسال إجاباتك...</p>
        </motion.div>
      )}

      {/* Error */}
      {page === "error" && (
        <motion.div
          key="error"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="min-h-screen bg-white flex flex-col items-center justify-center gap-6 px-6 text-center"
          dir="rtl"
        >
          <div className="text-5xl">⚠️</div>
          <h2 className="text-2xl font-black text-gray-900">حدث خطأ</h2>
          <p className="text-gray-500 font-medium">{errorMsg}</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setPage("survey")}
            className="px-8 py-4 bg-gradient-to-l from-purple-600 to-fuchsia-600 text-white rounded-2xl font-black text-lg shadow-lg"
          >
            حاول مرة أخرى
          </motion.button>
        </motion.div>
      )}

      {/* Results */}
      {page === "results" && (
        <motion.div key="results" initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }}>
          <ResultsPage
            onCompleteProfile={() => alert("Navigate to /complete-profile")}
            onBrowseJobs={() => alert("Navigate to /browse-jobs")}
          />
        </motion.div>
      )}

    </AnimatePresence>
  );
}