import React from 'react';

interface UIShellPreviewProps {
    fontFamily: string;
}

const UIShellPreview: React.FC<UIShellPreviewProps> = ({ fontFamily }) => {
    const calendarDays = [
        null, null, 1, 2, 3, 4, 5, 6,
        7, 8, 9, 10, 11, 12, 13,
        14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27,
        28, 29, 30, 31
    ];

    const workspaces = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    return (
        <div className="relative h-full w-full bg-[#11111b] rounded-xl overflow-hidden flex flex-col text-sm border border-white/10 shadow-inner" style={{
            fontFamily,
            fontVariantLigatures: 'common-ligatures tabular-nums',
            fontFeatureSettings: '"liga" on, "calt" on'
        }}>
            {/* Mesh Gradient Wallpaper */}
            <div className="absolute inset-0 opacity-40">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-purple-600/30 blur-[100px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/30 blur-[100px]" />
                <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] rounded-full bg-indigo-500/20 blur-[80px]" />
            </div>

            {/* Top Bar - Compacting to look more 'Shell-like' */}
            <div className="h-9 px-3 flex items-center justify-between bg-[#1e1e2e]/60 backdrop-blur-xl border-b border-white/5 relative z-20">
                {/* Left: Workspaces */}
                <div className="flex items-center gap-1">
                    <div className="w-5 h-5 flex items-center justify-center bg-[#b4befe] rounded-full text-[#11111b] font-black text-[9px] mr-1 shadow-sm">
                        A
                    </div>
                    <div className="flex items-center gap-0.5 bg-white/5 p-0.5 rounded-full px-1.5 border border-white/5">
                        {workspaces.map((ws) => (
                            <div
                                key={ws}
                                className={`w-5 h-5 flex items-center justify-center rounded-full text-[10px] font-bold transition-all ${ws === 1 ? 'bg-white text-[#11111b]' :
                                    ws === 12 ? 'bg-[#f5c2e7] text-[#11111b]' :
                                        'text-[#a6adc8] hover:text-white hover:bg-white/10'
                                    }`}
                            >
                                {ws}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right: Status Section */}
                <div className="flex items-center gap-1.5">
                    {/* Media */}
                    <div className="flex bg-white/5 p-0.5 rounded-full px-1 border border-white/5">
                        <SmallIcon color="text-[#f5e0dc]">
                            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" /></svg>
                        </SmallIcon>
                        <SmallIcon color="text-[#f9e2af]">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><path d="M5 12.55a11 11 0 0 1 14.08 0" /></svg>
                        </SmallIcon>
                    </div>

                    {/* System */}
                    <div className="flex items-center gap-1 bg-white/5 p-0.5 rounded-full px-2 border border-white/5">
                        <SmallIcon color="text-[#94e2d5]">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20v.01M5 14a12 12 0 0 1 14 0M8 17a7 7 0 0 1 8 0" /></svg>
                        </SmallIcon>
                        <SmallIcon color="text-[#89b4fa]">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5" /></svg>
                        </SmallIcon>
                        <div className="flex items-center gap-1 ml-1 scale-90 origin-right">
                            <div className="w-7 h-3.5 border border-[#a6e3a1]/60 rounded-[2px] relative">
                                <div className="absolute inset-[1px] bg-[#a6e3a1] rounded-[1px] w-[85%]"></div>
                            </div>
                            <span className="text-[9px] font-bold text-[#a6adc8]">100%</span>
                        </div>
                    </div>

                    {/* Clock */}
                    <div className="px-2.5 py-1 bg-white/5 rounded-full border border-white/5 text-[10px] font-bold text-[#cdd6f4]">
                        04:25 pm
                    </div>

                    {/* Bell */}
                    <div className="w-7 h-7 flex items-center justify-center bg-white/5 rounded-full border border-white/5 text-[#cdd6f4] relative hover:bg-white/10 transition-colors">
                        <div className="absolute top-1.5 right-1.5 w-1 h-1 bg-[#f38ba8] rounded-full border border-[#1e1e2e]"></div>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22a2 2 0 0 0 2-2h-4a2 2 0 0 0 2 2zm6-6V10a6 6 0 0 0-5-5.91V3a1 1 0 0 0-2 0v1.09A6 6 0 0 0 7 10v6l-2 2v1h14v-1l-2-2z" /></svg>
                    </div>
                </div>
            </div>

            {/* Desktop Workspace Area */}
            <div className="flex-1 p-4 flex items-end justify-end relative z-10">
                {/* Floating Calendar Widget */}
                <div className="w-[280px] bg-[#1e1e2e]/70 backdrop-blur-2xl rounded-2xl border border-white/10 shadow-2xl flex flex-col group transition-all duration-500 hover:bg-[#1e1e2e]/80">
                    <div className="p-3 flex items-center gap-2 border-b border-white/5 bg-white/5">
                        <div className="w-2 h-2 rounded-full bg-[#f5c2e7] shadow-[0_0_8px_rgba(245,194,231,0.5)]"></div>
                        <span className="text-xs font-bold text-[#cdd6f4]">Calendar</span>
                    </div>

                    <div className="p-4">
                        <div className="text-center font-bold text-[12px] text-[#cdd6f4] mb-4">2025 December</div>

                        <div className="grid grid-cols-7 mb-2 opacity-50">
                            {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(d => (
                                <span key={d} className="text-center text-[9px] font-black uppercase tracking-tighter">{d}</span>
                            ))}
                        </div>

                        <div className="grid grid-cols-7 gap-y-0.5 text-center font-bold text-[11px] text-[#cdd6f4]">
                            {calendarDays.map((date, i) => (
                                <div key={i} className="flex items-center justify-center h-7 relative group/day">
                                    {date === 24 ? (
                                        <div className="w-6 h-6 flex items-center justify-center rounded-full border border-[#f5c2e7] text-[#f5c2e7] bg-[#f5c2e7]/10">
                                            {date}
                                        </div>
                                    ) : date === 25 ? (
                                        <div className="w-6 h-6 flex items-center justify-center rounded-full bg-[#89b4fa] text-[#11111b] shadow-lg">
                                            {date}
                                        </div>
                                    ) : (
                                        <span className={date ? 'group-hover/day:text-white group-hover/day:scale-110 transition-all' : 'invisible'}>{date}</span>
                                    )}
                                    {date && <div className="absolute inset-0.5 rounded-full bg-white/0 group-hover/day:bg-white/5 transition-colors -z-10" />}
                                </div>
                            ))}
                        </div>

                        <div className="mt-4 pt-3 border-t border-white/5">
                            <div className="text-[10px] text-[#a6adc8] font-semibold flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#89b4fa] animate-pulse"></div>
                                <span className="tracking-tight">All day • Christmas Eve</span>
                            </div>
                        </div>
                    </div>

                    <div className="px-4 pb-5">
                        <button className="w-full bg-[#313244] hover:bg-[#45475a] text-[#cdd6f4] text-[11px] font-bold py-2.5 px-4 rounded-xl border border-white/10 transition-all shadow-md active:scale-95 hover:shadow-indigo-500/20">
                            Show date
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const SmallIcon = ({ children, color }: { children: React.ReactNode, color: string }) => (
    <div className={`p-1 hover:bg-white/10 rounded-full transition-colors cursor-pointer ${color}`}>
        <div className="w-3.5 h-3.5 flex items-center justify-center">
            {children}
        </div>
    </div>
);

export default UIShellPreview;
