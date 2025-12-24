import { useState, useEffect, useCallback } from 'react';
import { type Font, POPULAR_FONTS } from '../data/fonts';
import { shuffleFonts, createRound, type Match } from '../utils/gameLogic';
import { loadFont } from '../utils/fontLoader';

export const useTournament = (initialFonts: Font[] = POPULAR_FONTS) => {
    const [currentRound, setCurrentRound] = useState<Match[]>([]);
    const [nextRoundWinners, setNextRoundWinners] = useState<Font[]>([]);
    const [currentMatchIndex, setCurrentMatchIndex] = useState(0);
    const [champion, setChampion] = useState<Font | null>(null);
    // const [history, setHistory] = useState<Font[]>([]); // Track previous winners

    // Initialize tournament
    const startTournament = useCallback((fonts: Font[] = initialFonts) => {
        const shuffled = shuffleFonts(fonts);
        // Preload initial fonts
        shuffled.forEach(loadFont);

        const round = createRound(shuffled);
        setCurrentRound(round);
        setNextRoundWinners([]);
        setCurrentMatchIndex(0);
        setChampion(null);
        // setHistory([]);
    }, [initialFonts]);

    useEffect(() => {
        startTournament();
    }, [startTournament]);

    const currentMatch = currentRound[currentMatchIndex];

    const handleVote = (winner: Font) => {
        const newWinners = [...nextRoundWinners, winner];
        setNextRoundWinners(newWinners);

        if (currentMatchIndex < currentRound.length - 1) {
            // Next match in current round
            setCurrentMatchIndex(prev => prev + 1);
            // Preload next match fonts if not loaded? (already done at start but specific lazy loading could be added here)
        } else {
            // Round Complete
            if (newWinners.length === 1) {
                setChampion(newWinners[0]);
            } else {
                // Start next round
                const nextRound = createRound(newWinners);
                setCurrentRound(nextRound);
                setNextRoundWinners([]);
                setCurrentMatchIndex(0);
            }
        }
    };

    return {
        currentMatch,
        champion,
        handleVote,
        restart: startTournament,
        progress: {
            roundLength: currentRound.length,
            matchIndex: currentMatchIndex
        }
    };
};
