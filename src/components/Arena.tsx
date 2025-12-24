import { useState } from 'react';
import { useTournament } from '../hooks/useTournament';
import { FontCard } from './FontCard';
import '../styles/arena.css';
import { MONO_FONTS, SANS_FONTS } from '../data/fonts';

export const Arena = () => {
    const [mode, setMode] = useState<'design' | 'code' | 'ui'>('design');
    const { currentMatch, champion, handleVote, restart, progress } = useTournament(
        mode === 'code' ? MONO_FONTS : SANS_FONTS // Use Sans for both 'design' and 'ui'
    );
    const [language, setLanguage] = useState<'javascript' | 'python' | 'rust'>('javascript');

    const handleModeChange = (newMode: 'design' | 'code' | 'ui') => {
        if (newMode !== mode) {
            setMode(newMode);
        }
    };

    if (champion) {
        return (
            <div className="arena-container champion-view">
                <div className="champion-celebration">
                    <h1>🏆 We have a Winner!</h1>
                    <p>The champion of the {mode === 'code' ? 'Code' : mode === 'ui' ? 'UI Shell' : 'Design'} Arena is</p>
                    <div className="champion-card-wrapper">
                        <FontCard font={champion} mode={mode} language={language} onSelect={() => { }} />
                    </div>
                    <button className="restart-btn" onClick={() => restart()}>Start New Tournament</button>
                </div>
            </div>
        );
    }

    if (!currentMatch) {
        return <div className="loading">Loading Arena...</div>;
    }

    return (
        <div className="arena-container">
            <header className="arena-header">
                <div className="header-left">
                    <div className="logo">Font Arena</div>
                    <div className="progress-badge">
                        Round {Math.floor(Math.log2(progress.roundLength * 2)) || 1} • Match {progress.matchIndex + 1}/{progress.roundLength}
                    </div>
                </div>

                <div className="controls">
                    <div className="mode-toggle">
                        <button
                            className={`toggle-btn ${mode === 'design' ? 'active' : ''}`}
                            onClick={() => handleModeChange('design')}
                        >
                            Design
                        </button>
                        <button
                            className={`toggle-btn ${mode === 'code' ? 'active' : ''}`}
                            onClick={() => handleModeChange('code')}
                        >
                            Code
                        </button>
                        <button
                            className={`toggle-btn ${mode === 'ui' ? 'active' : ''}`}
                            onClick={() => handleModeChange('ui')}
                        >
                            UI Shell
                        </button>
                    </div>

                    {mode === 'code' && (
                        <div className="language-selector">
                            <select
                                value={language}
                                onChange={(e) => setLanguage(e.target.value as any)}
                                className="lang-select"
                            >
                                <option value="javascript">JavaScript</option>
                                <option value="python">Python</option>
                                <option value="rust">Rust</option>
                            </select>
                        </div>
                    )}
                </div>
            </header>

            <main className="battleground">
                <div className="fighter left">
                    <FontCard
                        font={currentMatch.left}
                        mode={mode}
                        language={language}
                        onSelect={() => handleVote(currentMatch.left)}
                    />
                </div>

                <div className="vs-badge">VS</div>

                <div className="fighter right">
                    <FontCard
                        font={currentMatch.right}
                        mode={mode}
                        language={language}
                        onSelect={() => handleVote(currentMatch.right)}
                    />
                </div>
            </main>
        </div>
    );
};
