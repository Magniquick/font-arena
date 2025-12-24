import type { Font } from '../data/fonts';

export const loadFont = (font: Font) => {
    const linkId = `font-${font.family.replace(/\s+/g, '-')}`;
    if (document.getElementById(linkId)) return;

    const link = document.createElement('link');
    link.id = linkId;
    link.href = `https://fonts.googleapis.com/css2?family=${font.family.replace(/\s+/g, '+')}:wght@400;700&display=swap`;
    link.rel = 'stylesheet';
    document.head.appendChild(link);
};

export const preloadFonts = (fonts: Font[]) => {
    fonts.forEach(loadFont);
};
