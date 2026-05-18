import { useState } from "react";
import Sidebar from "../../component/layout/sidebar/School.sidebar";
import AccountSettings from "../settings/AccountSettings";
import {
    Search,
    Filter,
    ArrowUpDown,
    Sparkles,
    Users,
    BarChart2,
    ChevronLeft
} from "lucide-react";
import AnalyticsPage from "../../component/Analytics/AnalyticsPage";
import Postlisting from '../../component/posts/Postlisting';
import CreatePostPage from "../../component/CreatPost/CreatePostPage";
import Applicants from "../Applicants/Applicants";
import JobPosts from "./jobposts";
import { NavLink } from "react-router";
import { WizardFormProvider } from '../../context/WizardFormContext';

const teachersData = [
    { id: 1, name: "Dr. Sarah Ahmed", subject: "Mathematics Teacher", matchRate: 98, rating: "4.9/5.0", location: "Boston, MA", experience: "8y exp", education: "PhD in Mathematics Education", tags: ["High Empathy", "Analytical Mind", "Creative"], image: "https://i.pravatar.cc/150?img=1" },
    { id: 2, name: "Michael Chen", subject: "Mathematics Teacher", matchRate: 96, rating: "4.8/5.0", location: "Cambridge, MA", experience: "12y exp", education: "MSc in Applied Mathematics", tags: ["Leadership", "Patient", "Problem Solver"], image: "https://i.pravatar.cc/150?img=11" },
    { id: 3, name: "Emily Rodriguez", subject: "Mathematics Teacher", matchRate: 94, rating: "4.9/5.0", location: "Newton, MA", experience: "6y exp", education: "MA in Mathematics", tags: ["Energetic", "Innovative", "Team Player"], image: "https://i.pravatar.cc/150?img=5" },
];

export default function SchoolPortal() {
    const [activePage, setActivePage] = useState("dashboard");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredTeachers = teachersData.filter(t =>
        t.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="flex min-h-screen font-sans" style={{ background: 'var(--surface-page)' }}>
            <Sidebar
                onNavigate={(id) => setActivePage(id)}
                activePage={activePage}
                matchesCount={filteredTeachers.length}
            />

            <div className="flex-1 min-w-0 min-h-screen overflow-x-hidden">

                {activePage === "dashboard" && (
                    <main className="p-6 md:p-8 lg:px-12">
                        <div className="max-w-5xl mx-auto">

                            <div className="flex items-center mb-6">
                                <NavLink
                                    to="/"
                                    className="flex items-center gap-1 text-sm font-medium transition-all mb-4 w-fit hover:text-indigo-500"
                                    style={{ color: 'var(--text-muted)' }}
                                >
                                    <ChevronLeft size={16} /> Back to Home
                                </NavLink>
                            </div>

                            <header className="mb-6">
                                <h1 className="text-2xl md:text-3xl font-bold tracking-tight" style={{ color: 'var(--text-primary)' }}>
                                    Top Matches for your Math Teacher position
                                </h1>
                                <p className="text-sm mt-2 flex items-center gap-1.5 font-medium" style={{ color: 'var(--text-muted)' }}>
                                    <Sparkles size={16} className="text-purple-500" />
                                    Based on personality assessment and professional compatibility
                                </p>
                            </header>

                            {/* Stats Cards */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                {/* Purple card — stays hardcoded, it's branded */}
                                <div className="bg-[#6B4EFF] rounded-2xl p-6 text-white shadow-sm flex justify-between items-center h-[120px]">
                                    <div className="flex flex-col justify-between h-full py-1">
                                        <p className="text-sm text-white/90 font-medium">New Matches</p>
                                        <h2 className="text-[40px] leading-none font-bold">12</h2>
                                    </div>
                                    <div className="bg-white/20 p-4 rounded-xl">
                                        <Users size={24} />
                                    </div>
                                </div>

                                <div className="rounded-2xl p-6 flex justify-between items-center h-[120px]"
                                    style={{ background: 'var(--surface-card)', border: '1px solid var(--border-default)' }}>
                                    <div className="flex flex-col justify-between h-full py-1">
                                        <p className="text-sm font-medium" style={{ color: 'var(--text-muted)' }}>Avg. Match Rate</p>
                                        <h2 className="text-[40px] leading-none font-bold" style={{ color: 'var(--text-primary)' }}>98%</h2>
                                    </div>
                                    <div className="bg-[#dcfce7] p-4 rounded-xl">
                                        <BarChart2 size={24} className="text-[#22c55e]" />
                                    </div>
                                </div>
                            </div>

                            {/* Top Candidates Header */}
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>Top Candidates</h2>
                                <button
                                    onClick={() => setActivePage("applicants")}
                                    className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-[#6B4EFF] rounded-xl hover:bg-[#5a3de0] transition-all"
                                >
                                    <Users size={16} /> View All Applicants
                                </button>
                            </div>

                            {/* Search & Filters */}
                            <div className="flex items-center gap-3 mb-6">
                                <div className="relative flex-1 w-full rounded-xl"
                                    style={{ background: 'var(--surface-card)', border: '1px solid var(--border-default)' }}>
                                    <Search className="absolute left-4 top-1/2 -translate-y-1/2" size={18} style={{ color: 'var(--text-muted)' }} />
                                    <input
                                        type="text"
                                        placeholder="Search by name, skills, or experience..."
                                        className="w-full bg-transparent py-3 pl-11 pr-4 text-sm focus:outline-none"
                                        style={{ color: 'var(--text-secondary)' }}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                    />
                                </div>
                                <button className="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-xl transition-all whitespace-nowrap"
                                    style={{ background: 'var(--surface-card)', border: '1px solid var(--border-default)', color: 'var(--text-secondary)' }}>
                                    <Filter size={16} /> Filter
                                </button>
                                <button className="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-xl transition-all whitespace-nowrap"
                                    style={{ background: 'var(--surface-card)', border: '1px solid var(--border-default)', color: 'var(--text-secondary)' }}>
                                    <ArrowUpDown size={16} /> Sort
                                </button>
                            </div>

                            <Postlisting posts={filteredTeachers} />
                        </div>
                    </main>
                )}

                {activePage === "jobPosts" && (
                    <JobPosts
                        onBack={() => setActivePage("dashboard")}
                        onNavigateToCreate={() => setActivePage("postings")}
                    />
                )}

                {activePage === "postings" && (
                    <WizardFormProvider>
                        <CreatePostPage onBack={() => setActivePage("jobPosts")} />
                    </WizardFormProvider>
                )}

                {activePage === "analytics" && <AnalyticsPage onBack={() => setActivePage("dashboard")} />}
                {activePage === "settings" && <AccountSettings />}
                {activePage === "applicants" && <Applicants />}
            </div>
        </div>
    );
}