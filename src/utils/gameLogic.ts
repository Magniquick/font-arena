import type { Font } from '../data/fonts';

export type Match = {
    left: Font;
    right: Font;
};

export type Round = Match[];

export const shuffleFonts = (fonts: Font[]): Font[] => {
    const shuffled = [...fonts];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};

export const createRound = (fonts: Font[]): Round => {
    const matches: Round = [];
    for (let i = 0; i < fonts.length; i += 2) {
        if (i + 1 < fonts.length) {
            matches.push({ left: fonts[i], right: fonts[i + 1] });
        } else {
            // Bye round handling could go here, for now just drop or auto-win
            // Simplest is keying off power of 2
        }
    }
    return matches;
};
