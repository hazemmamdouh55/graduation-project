import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Eye, Edit3, Settings, Star, BookOpen, MessageSquare,
  MapPin, User, Briefcase, Bell, LogOut, Search,
  Calendar, Award,
  Clock, TrendingUp,
  CheckCircle2,
  XCircle
} from 'lucide-react';

const TeacherDashboard = () => {
  const navigate = useNavigate();

  const [savedJobs, setSavedJobs] = useState(() => {
    const s = localStorage.getItem('savedJobs');
    return s ? JSON.parse(s) : [];
  });

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#0d0f1a] font-sans text-slate-800 dark:text-[#e8e4ff]">
      <main className="max-w-[1400px] mx-auto p-8">

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-black text-slate-900 dark:text-[#f1f0ff]">Welcome back, Teacher! 👋</h1>
          <p className="text-slate-500 dark:text-[#9d94c4] mt-1 font-medium">Here's what's happening with your applications today.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {[
            { label: 'Profile Views', value: '234', icon: <Eye size={20} />, color: 'text-purple-600', bg: 'bg-purple-50 dark:bg-[#1e1b4b]' },
            { label: 'Applications', value: '4', icon: <Briefcase size={20} />, color: 'text-blue-600', bg: 'bg-blue-50 dark:bg-[#0c1a3a]' },
            { label: 'Interviews', value: '1', icon: <Calendar size={20} />, color: 'text-emerald-600', bg: 'bg-emerald-50 dark:bg-[#052e16]' },
            { label: 'Offers', value: '1', icon: <Award size={20} />, color: 'text-emerald-600', bg: 'bg-emerald-50 dark:bg-[#052e16]' }
          ].map((stat, i) => (
            <div key={i} className="bg-white dark:bg-[#111827] p-6 rounded-[24px] shadow-sm border border-slate-50 dark:border-[#1f2937]">
              <div className={`w-12 h-12 ${stat.bg} ${stat.color} rounded-2xl flex items-center justify-center mb-4`}>
                {stat.icon}
              </div>
              <div className="text-3xl font-black text-slate-900 dark:text-[#f1f0ff]">{stat.value}</div>
              <div className="text-sm font-bold text-slate-400 dark:text-[#7c6fa0] uppercase tracking-wider mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            <div className="bg-white dark:bg-[#111827] rounded-[32px] p-8 shadow-sm border border-slate-50 dark:border-[#1f2937] min-h-[1050px]">
              <div className="flex justify-between items-center mb-10">
                <h2 className="text-2xl font-black text-slate-900 dark:text-[#f1f0ff]">My Applications</h2>
                <button
                  onClick={() => navigate('/browse-jobs')}
                  className="bg-gradient-to-r from-[#9810FA] to-[#155DFC] text-white px-6 py-2.5 rounded-full text-sm font-black shadow-lg shadow-indigo-100 hover:scale-105 transition-all flex items-center gap-2 border-none"
                >
                  <Search size={18} strokeWidth={3} />
                  <span>Browse Jobs</span>
                </button>
              </div>

              <div className="space-y-6">
                {[
                  { title: 'Senior Mathematics Teacher', school: 'Boston Latin Academy', loc: 'Boston, MA', status: 'Interview Scheduled', date: 'Mar 10, 2026', match: '98%', bg: 'bg-blue-50 dark:bg-[#0c1a3a] text-blue-600', icon: <Calendar size={14} />, info: 'Interview: Mar 20, 2026' },
                  { title: 'Mathematics Teacher', school: 'Cambridge International School', loc: 'Cambridge, MA', status: 'Under Review', date: 'Mar 8, 2026', match: '95%', bg: 'bg-amber-50 dark:bg-[#2d1a00] text-amber-600', icon: <Clock size={14} /> },
                  { title: 'Math Tutor & Instructor', school: 'MIT Math Learning Center', loc: 'Cambridge, MA', status: 'Accepted', date: 'Mar 5, 2026', match: '92%', bg: 'bg-emerald-50 dark:bg-[#052e16] text-emerald-600', icon: <CheckCircle2 size={14} /> },
                  { title: 'Algebra Teacher', school: 'Newton South High School', loc: 'Newton, MA', status: 'Not Selected', date: 'Mar 1, 2026', match: '88%', bg: 'bg-slate-100 dark:bg-[#1a2236] text-slate-500 dark:text-[#9d94c4]', icon: <XCircle size={14} /> }
                ].map((app, i) => (
                  <div key={i} className="border border-slate-100 dark:border-[#1f2937] rounded-[24px] p-7 hover:border-[#6366F1]/30 transition-all bg-white dark:bg-[#161f30] relative text-left">
                    <div className="flex justify-between items-start">
                      <div className="space-y-2">
                        <h3 className="text-[19px] font-black text-slate-900 dark:text-[#f1f0ff]">{app.title}</h3>
                        <div className="flex items-center gap-4 text-[14px] font-bold text-slate-400 dark:text-[#7c6fa0]">
                          <span className="flex items-center gap-1.5"><Briefcase size={16} className="text-[#8B5CF6]" /> {app.school}</span>
                          <span className="flex items-center gap-1.5"><MapPin size={16} className="text-[#8B5CF6]" /> {app.loc}</span>
                        </div>
                        {app.info && (
                          <p className="text-xs font-bold text-indigo-500 bg-indigo-50 dark:bg-[#1e1b4b] px-3 py-1 rounded-lg inline-block mt-2">
                            {app.info}
                          </p>
                        )}
                      </div>
                      <div className="text-right">
                        <div className="flex items-center justify-end gap-1 text-[#10B981]">
                          <TrendingUp size={20} strokeWidth={3} />
                          <span className="text-xl font-black">{app.match}</span>
                        </div>
                        <div className="text-[10px] text-slate-300 dark:text-[#6b7280] font-black uppercase tracking-tighter">Match</div>
                      </div>
                    </div>
                    <div className="mt-6 flex items-center justify-between border-t border-slate-50 dark:border-[#1f2937] pt-5">
                      <div className={`flex items-center gap-2 px-4 py-1.5 rounded-xl text-[12px] font-black ${app.bg}`}>
                        {app.icon}
                        <span>{app.status}</span>
                      </div>
                      <span className="text-[12px] font-bold text-slate-300 dark:text-[#6b7280]">Applied {app.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 flex flex-col gap-[32px] w-full max-w-[350.68px] ml-auto">

            {/* Profile Card */}
            <div className="bg-white dark:bg-[#111827] rounded-[32px] p-8 shadow-sm border border-slate-50 dark:border-[#1f2937] relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-[#8B5CF6] via-[#6366F1] to-[#3B82F6] opacity-10 z-0"></div>
              <div className="relative pt-4 z-10 flex items-start gap-3 text-left">
                <div className="w-[88px] h-[88px] bg-gradient-to-tr from-[#A855F7] via-[#6366F1] to-[#3B82F6] rounded-[24px] flex items-center justify-center p-1 shadow-lg shadow-indigo-100/30 flex-shrink-0 mt-1">
                  <div className="w-full h-full bg-white dark:bg-[#1a2236] rounded-[20px] flex items-center justify-center border-2 border-white dark:border-[#2d3748] overflow-hidden">
                    <User size={40} className="text-slate-200" />
                  </div>
                </div>
                <div className="flex-1 flex flex-col gap-1.5 pt-1">
                  <h3 className="text-[20px] font-black text-slate-900 dark:text-[#f1f0ff] leading-tight">Teacher</h3>
                  <p className="text-[#8B5CF6] font-bold text-[20px]">Subject</p>
                  <div className="flex items-center justify-start gap-1 text-[#FBBF24] mt-1.5">
                    <Star size={14} fill="currentColor" />
                    <span className="text-slate-400 dark:text-[#7c6fa0] text-[12px] font-bold uppercase tracking-wider">N/A Rating</span>
                  </div>
                </div>
              </div>
              <div className="space-y-3 mt-8">
                <button onClick={() => navigate('/profile')} className="w-full py-4 bg-gradient-to-r from-[#9810FA] to-[#155DFC] text-white rounded-full text-xs font-black flex items-center justify-center gap-2.5 hover:shadow-lg transition-all active:scale-95">
                  <Eye size={18} /> View My Profile
                </button>
                <button className="w-full py-4 bg-white dark:bg-[#1a2236] border-2 border-[#DCD7FE] dark:border-[#3730a3] text-[#8B5CF6] rounded-full text-xs font-black flex items-center justify-center gap-2.5 hover:bg-[#F3E8FF] dark:hover:bg-[#2e2770] transition-all">
                  <Edit3 size={18} /> Edit Profile
                </button>
                <button onClick={() => navigate('/settings')} className="w-full py-4 bg-white dark:bg-[#1a2236] border-2 border-slate-100 dark:border-[#1f2937] text-slate-600 dark:text-[#b8aef0] rounded-full text-xs font-black flex items-center justify-center gap-2.5 hover:bg-slate-50 dark:hover:bg-[#1f2937] transition-all">
                  <Settings size={18} /> Settings
                </button>
              </div>
            </div>

            {/* Saved Jobs */}
            <div className="bg-white dark:bg-[#111827] rounded-[24px] p-6 shadow-sm border border-slate-50 dark:border-[#1f2937]">
              <div className="flex items-center gap-3 mb-6">
                <div className="text-[#8B5CF6]"><BookOpen size={20} /></div>
                <h2 className="text-[18px] font-black text-slate-900 dark:text-[#f1f0ff] tracking-tight">Saved Jobs ({savedJobs.length})</h2>
              </div>
              <div className="space-y-4">
                {savedJobs.length === 0 ? (
                  <p className="text-slate-400 dark:text-[#7c6fa0] text-sm font-bold text-center py-4">No saved jobs yet</p>
                ) : (
                  savedJobs.map((job, i) => (
                    <div key={i} className="bg-white dark:bg-[#161f30] border border-slate-100 dark:border-[#1f2937] rounded-[20px] p-5 relative group hover:border-[#8B5CF6]/30 transition-all">
                      <h4 className="text-[15px] font-black text-slate-800 dark:text-[#e8e4ff] pr-8">{job.title}</h4>
                      <p className="text-[13px] font-bold text-[#8B5CF6] mt-1">{job.school}</p>
                      <div className="flex items-center gap-3 mt-3 text-[11px] font-bold text-slate-400 dark:text-[#7c6fa0]">
                        <span className="flex items-center gap-1"><MapPin size={12} /> {job.location}</span>
                        <span className="flex items-center gap-1"><span className="text-slate-300 dark:text-[#6b7280]">$</span> {job.salary}</span>
                      </div>
                      <button onClick={() => navigate('/JobDetails')} className="w-full mt-4 py-2 bg-[#F3E8FF]/50 dark:bg-[#1e1b4b] text-[#8B5CF6] rounded-xl text-[12px] font-black hover:bg-[#8B5CF6] hover:text-white transition-all">
                        View Details
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Recent Messages */}
            <div className="bg-white dark:bg-[#111827] rounded-[24px] p-6 shadow-sm border border-slate-50 dark:border-[#1f2937] mt-[32px]">
              <div className="flex items-center gap-3 mb-6">
                <div className="text-[#8B5CF6]"><MessageSquare size={20} /></div>
                <h2 className="text-[18px] font-black text-slate-900 dark:text-[#f1f0ff] tracking-tight">Recent Messages</h2>
              </div>
              <div className="space-y-3">
                {[
                  { school: 'Boston Latin Academy', msg: "We'd love to schedule an interview with you...", time: '2 hours ago', active: true },
                  { school: 'Cambridge International', msg: 'Thank you for your application. We are reviewing...', time: '1 day ago', active: true },
                  { school: 'MIT Learning Center', msg: 'Congratulations! We are pleased to offer you...', time: '3 days ago', active: false }
                ].map((msg, i) => (
                  <div key={i} className={`p-5 rounded-[20px] border relative ${msg.active ? 'bg-[#FDFBFF] dark:bg-[#161f30] border-[#F3E8FF] dark:border-[#2e2770]' : 'bg-white dark:bg-[#111827] border-slate-50 dark:border-[#1f2937]'}`}>
                    {msg.active && <div className="absolute top-5 right-5 w-2 h-2 bg-[#8B5CF6] rounded-full"></div>}
                    <h4 className="text-[14px] font-black text-slate-800 dark:text-[#e8e4ff]">{msg.school}</h4>
                    <p className="text-[12px] text-slate-500 dark:text-[#9d94c4] mt-2 leading-relaxed pr-4 line-clamp-2">{msg.msg}</p>
                    <span className="text-[11px] font-bold text-slate-300 dark:text-[#6b7280] mt-3 block uppercase tracking-wider">{msg.time}</span>
                  </div>
                ))}
                <button className="w-full py-4 mt-2 text-[#8B5CF6] text-[13px] font-black bg-[#FDFBFF] dark:bg-[#1e1b4b] border border-[#F3E8FF] dark:border-[#2e2770] rounded-2xl hover:bg-[#8B5CF6] hover:text-white transition-all">
                  View All Messages
                </button>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
};

export default TeacherDashboard;