import React from 'react';
import {
    Plus,
    Calendar,
    Users,
    Clock,
    Briefcase,
    Eye,
    Edit3,
    Trash2,
    ChevronLeft,
    Bell
} from 'lucide-react';
import { NavLink } from 'react-router';

const jobPostsData = [
    {
        id: 1,
        title: "Arabic Teacher",
        subject: "Arabic Language",
        description: "Seeking an experienced Arabic language teacher for grades 6-8",
        postedDate: "3 days ago",
        applicants: 24,
        experience: "3+ years",
        type: "Full Time",
        status: "Active",
        traits: [
            { name: "Patient",            color: "bg-green-50  text-green-600  border-green-100"  },
            { name: "Creative",           color: "bg-purple-50 text-purple-600 border-purple-100" },
            { name: "Cultural Awareness", color: "bg-blue-50   text-blue-600   border-blue-100"   }
        ]
    },
    {
        id: 2,
        title: "Math Coordinator",
        subject: "Mathematics",
        description: "Lead our mathematics department and coordinate curriculum development",
        postedDate: "1 week ago",
        applicants: 18,
        experience: "5+ years",
        type: "Full Time",
        status: "Active",
        traits: [
            { name: "Leadership", color: "bg-blue-50   text-blue-600   border-blue-100"   },
            { name: "Organized",  color: "bg-purple-50 text-purple-600 border-purple-100" },
            { name: "Analytical", color: "bg-indigo-50 text-indigo-600 border-indigo-100" }
        ]
    },
    {
        id: 3,
        title: "Science Teacher",
        subject: "Science",
        description: "Passionate science educator for middle school STEM program",
        postedDate: "2 weeks ago",
        applicants: 31,
        experience: "2+ years",
        type: "Full Time",
        status: "Active",
        traits: [
            { name: "Enthusiastic", color: "bg-amber-50  text-amber-600  border-amber-100"  },
            { name: "Innovative",   color: "bg-purple-50 text-purple-600 border-purple-100" },
            { name: "Hands-on",    color: "bg-orange-50 text-orange-600 border-orange-100" }
        ]
    },
    {
        id: 4,
        title: "English Literature Teacher",
        subject: "English Language",
        description: "Looking for a literature enthusiast to inspire high school students",
        postedDate: "1 month ago",
        applicants: 12,
        experience: "4+ years",
        type: "Part Time",
        status: "Expired",
        traits: [
            { name: "Engaging",   color: "bg-rose-50    text-rose-600    border-rose-100"    },
            { name: "Well-Read",  color: "bg-blue-50    text-blue-600    border-blue-100"    },
            { name: "Supportive", color: "bg-emerald-50 text-emerald-600 border-emerald-100" }
        ]
    }
];

export default function JobPosts({ onNavigateToCreate }) {
    return (
        <div className="min-h-screen p-6 md:p-10" style={{ background: 'var(--surface-page)' }}>
            <div className="max-w-5xl mx-auto">

                {/* Header */}
                <div className="flex justify-between items-start mb-8">
                    <div>
                        <NavLink
                            to="/"
                            className="flex items-center gap-1 text-sm font-medium hover:text-indigo-500 transition-all mb-4 w-fit"
                            style={{ color: 'var(--text-muted)' }}
                        >
                            <ChevronLeft size={16} /> Back to Home
                        </NavLink>
                        <h1 className="text-3xl font-bold tracking-tight" style={{ color: 'var(--text-primary)' }}>Job Postings</h1>
                        <p className="text-sm mt-1 flex items-center gap-2" style={{ color: 'var(--text-muted)' }}>
                            <span className="w-4 h-4 bg-purple-100 rounded flex items-center justify-center">
                                <Briefcase size={10} className="text-purple-600" />
                            </span>
                            Manage your active job positions and applicants
                        </p>
                    </div>
                    <button className="p-2 rounded-full transition-all hover:opacity-70" style={{ color: 'var(--text-muted)' }}>
                        <Bell size={22} />
                    </button>
                </div>

                {/* Add New Button */}
                <button
                    onClick={onNavigateToCreate}
                    className="bg-[#6B4EFF] hover:bg-[#5a3fe0] text-white px-6 py-3 rounded-xl font-bold text-sm flex items-center gap-2 shadow-lg shadow-purple-100 transition-all mb-8"
                >
                    <Plus size={18} strokeWidth={3} /> Post a New Job
                </button>

                {/* Jobs List */}
                <div className="space-y-4">
                    {jobPostsData.map((job) => (
                        <div key={job.id}
                            className="rounded-[20px] p-6 transition-all"
                            style={{
                                background: 'var(--surface-card)',
                                border: '1px solid var(--border-default)',
                                boxShadow: '0 1px 4px rgba(0,0,0,0.06)'
                            }}
                        >
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>{job.title}</h3>
                                    <p className="text-purple-500 font-bold text-sm mt-0.5">{job.subject}</p>
                                </div>
                                <span className={`px-3 py-1 rounded-full text-[11px] font-bold ${
                                    job.status === "Active"
                                        ? "bg-green-50 text-green-600"
                                        : "bg-gray-100 text-gray-500"
                                }`}>
                                    {job.status}
                                </span>
                            </div>

                            <p className="text-sm mt-3 leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                                {job.description}
                            </p>

                            {/* Meta Info */}
                            <div className="flex flex-wrap items-center gap-y-2 gap-x-5 mt-4" style={{ color: 'var(--text-muted)' }}>
                                <div className="flex items-center gap-1.5 text-xs font-medium">
                                    <Calendar size={14} className="text-purple-400" />
                                    Posted {job.postedDate}
                                </div>
                                <div className="flex items-center gap-1.5 text-xs font-medium">
                                    <Users size={14} className="text-purple-400" />
                                    {job.applicants} applicants
                                </div>
                                <div className="flex items-center gap-1.5 text-xs font-medium">
                                    <Clock size={14} className="text-purple-400" />
                                    {job.experience}
                                </div>
                                <div className="flex items-center gap-1.5 text-xs font-medium">
                                    <Briefcase size={14} className="text-purple-400" />
                                    {job.type}
                                </div>
                            </div>

                            {/* Personality Traits */}
                            <div className="mt-5">
                                <p className="text-[11px] font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--text-muted)' }}>
                                    Ideal Personality Traits We're Looking For:
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {job.traits.map((trait, idx) => (
                                        <span key={idx} className={`px-3 py-1 rounded-full text-[11px] font-bold border ${trait.color}`}>
                                            {trait.name}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="flex items-center justify-end gap-2 mt-2">
                                <button className="flex items-center gap-2 bg-[#6B4EFF] hover:bg-[#5a3fe0] text-white px-5 py-2 rounded-xl text-xs font-bold transition-all">
                                    <Eye size={14} /> View Post
                                </button>
                                <button className="p-2.5 text-purple-600 rounded-xl transition-all"
                                    style={{ background: 'var(--surface-card)', border: '1px solid var(--border-default)' }}>
                                    <Edit3 size={16} />
                                </button>
                                <button className="p-2.5 text-rose-500 rounded-xl transition-all"
                                    style={{ background: 'var(--surface-card)', border: '1px solid var(--border-default)' }}>
                                    <Trash2 size={16} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}