import React, { useEffect } from "react";
import {
  Building2, MapPin, Calendar, Star, Users, GraduationCap,
  BookOpen, Target, Heart, CheckCircle2, Award, Mail,
  Phone, Globe, Edit, CheckCircle,
} from "lucide-react";

function SchoolProfile() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen font-sans pb-12" style={{ background: 'var(--surface-page)', color: 'var(--text-primary)' }}>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">

        {/* ── Hero Banner ── */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="bg-white p-4 rounded-2xl shadow-sm shrink-0">
              <Building2 className="w-12 h-12 text-purple-600" />
            </div>
            <div className="text-white space-y-2">
              <div className="flex items-center gap-2">
                <h1 className="text-3xl font-bold">Boston Latin Academy</h1>
                <div className="bg-white/20 p-1 rounded-full">
                  <CheckCircle className="w-5 h-5 text-white fill-white/20" />
                </div>
              </div>
              <p className="text-purple-100 text-lg">Excellence in Education Since 1878</p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-purple-100 mt-2">
                <div className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /><span>Boston, MA</span></div>
                <div className="flex items-center gap-1.5"><Building2 className="w-4 h-4" /><span>Public High School</span></div>
                <div className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /><span>Founded 1878</span></div>
              </div>
              <div className="flex items-center gap-2 mt-3">
                <div className="flex text-yellow-400">
                  {[1, 2, 3, 4].map((s) => <Star key={s} className="w-4 h-4 fill-current" />)}
                  <Star className="w-4 h-4 fill-current text-yellow-400/50" />
                </div>
                <span className="text-sm font-medium">4.8 (124 reviews)</span>
              </div>
            </div>
          </div>
          <button className="flex items-center gap-2 px-5 py-2.5 bg-white text-purple-700 text-sm font-medium rounded-lg hover:opacity-90 transition-colors shrink-0">
            <Edit className="w-4 h-4" /> Edit Profile
          </button>
        </div>

        {/* ── Stats Row ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
          {[
            { icon: Users, iconBg: 'bg-purple-100', iconColor: 'text-purple-600', value: '1200', label: 'Students' },
            { icon: GraduationCap, iconBg: 'bg-blue-100', iconColor: 'text-blue-600', value: '85', label: 'Teachers' },
            { icon: BookOpen, iconBg: 'bg-pink-100', iconColor: 'text-pink-600', value: '22', label: 'Class Number' },
          ].map((s, i) => (
            <div key={i} className="rounded-2xl p-6 flex flex-col items-center justify-center"
              style={{ background: 'var(--surface-card)', border: '1px solid var(--border-default)' }}>
              <div className={`${s.iconBg} p-3 rounded-xl mb-3`}>
                <s.icon className={`w-6 h-6 ${s.iconColor}`} />
              </div>
              <h3 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>{s.value}</h3>
              <p style={{ color: 'var(--text-muted)' }} className="text-sm">{s.label}</p>
            </div>
          ))}
        </div>

        {/* ── Main Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">

          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">

            {/* About */}
            <section className="rounded-2xl p-6 md:p-8"
              style={{ background: 'var(--surface-card)', border: '1px solid var(--border-default)' }}>
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="w-6 h-6 text-purple-600" />
                <h2 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>About Our School</h2>
              </div>
              <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Boston Latin Academy is a prestigious institution with over 100 years of academic excellence.
                We are committed to providing a rigorous and supportive learning environment that prepares
                students for success in college and beyond.
              </p>
            </section>

            {/* Mission */}
            <section className="rounded-2xl p-6 md:p-8"
              style={{ background: 'var(--surface-card)', border: '1px solid var(--border-default)' }}>
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-6 h-6 text-purple-600" />
                <h2 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>Our Mission</h2>
              </div>
              <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                To provide a challenging and supportive educational experience that empowers all students
                to become critical thinkers, effective communicators, and responsible global citizens.
              </p>
            </section>

            {/* Core Values */}
            <section className="rounded-2xl p-6 md:p-8"
              style={{ background: 'var(--surface-card)', border: '1px solid var(--border-default)' }}>
              <div className="flex items-center gap-3 mb-6">
                <Heart className="w-6 h-6 text-purple-600" />
                <h2 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>Core Values</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {["Academic Excellence", "Character Development", "Community Engagement", "Innovation & Creativity", "Diversity & Inclusion", "Lifelong Learning"].map((value, idx) => (
                  <div key={idx} className="rounded-xl p-4 flex items-center gap-3 transition-colors"
                    style={{ background: 'var(--surface-muted)', border: '1px solid var(--border-default)' }}>
                    <CheckCircle2 className="w-5 h-5 text-purple-600 shrink-0" />
                    <span className="font-medium text-sm" style={{ color: 'var(--text-secondary)' }}>{value}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Academic Programs */}
            <section className="rounded-2xl p-6 md:p-8"
              style={{ background: 'var(--surface-card)', border: '1px solid var(--border-default)' }}>
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="w-6 h-6 text-purple-600" />
                <h2 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>Academic Programs</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: "Advanced Placement (AP)", desc: "20+ AP courses across all subjects" },
                  { title: "STEM Program", desc: "Specialized science and technology curriculum" },
                  { title: "Arts & Music", desc: "Award-winning arts and music programs" },
                  { title: "Athletics", desc: "15 varsity sports teams" },
                  { title: "Community Service", desc: "Required service learning program" },
                  { title: "College Counseling", desc: "Comprehensive college guidance" },
                ].map((prog, idx) => (
                  <div key={idx} className="rounded-xl p-5 transition-colors"
                    style={{ border: '1px solid var(--border-default)' }}>
                    <h3 className="font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>{prog.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{prog.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Achievements */}
            <section className="rounded-2xl p-6 md:p-8"
              style={{ background: 'var(--surface-card)', border: '1px solid var(--border-default)' }}>
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-6 h-6 text-purple-600" />
                <h2 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>Achievements & Recognition</h2>
              </div>
              <div className="space-y-4">
                {["Top 10 Public School in Massachusetts", "National Blue Ribbon School", "100% College Acceptance Rate", "State Championship Athletics", "Distinguished STEM Program"].map((a, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-emerald-500 shrink-0" />
                    <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>{a}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="space-y-8">

            {/* Contact */}
            <div className="rounded-2xl p-6 md:p-8"
              style={{ background: 'var(--surface-card)', border: '1px solid var(--border-default)' }}>
              <h2 className="text-xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>Contact Information</h2>
              <div className="space-y-6">
                {[
                  { icon: Mail, label: 'Email', value: 'info@bostonlatinacademy.edu', isLink: true },
                  { icon: Phone, label: 'Phone', value: '(617) 555-0123', isLink: false },
                  { icon: Globe, label: 'Page', value: 'www.bostonlatinacademy.edu', isLink: true },
                  { icon: MapPin, label: 'Address', value: '205 Townsend Street, Boston, MA 02121', isLink: false },
                ].map((c, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <c.icon className="w-5 h-5 text-purple-600 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs mb-0.5" style={{ color: 'var(--text-muted)' }}>{c.label}</p>
                      {c.isLink
                        ? <a href="/" className="text-sm font-medium text-purple-500 hover:underline">{c.value}</a>
                        : <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>{c.value}</p>
                      }
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Facilities */}
            <div className="rounded-2xl p-6 md:p-8"
              style={{ background: 'var(--surface-card)', border: '1px solid var(--border-default)' }}>
              <h2 className="text-xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>Facilities</h2>
              <div className="space-y-4">
                {["Modern Science Labs", "Digital Learning Center", "Athletic Complex", "Performing Arts Theater", "Library & Media Center", "Cafeteria & Student Center"].map((f, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default SchoolProfile;