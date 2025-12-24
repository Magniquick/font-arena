export interface Font {
    family: string;
    category: string;
}

export const MONO_FONTS: Font[] = [
    { family: 'Google Sans Code', category: 'monospace' },
    { family: 'JetBrains Mono', category: 'monospace' },
    { family: 'Roboto Mono', category: 'monospace' },
    { family: 'Fira Code', category: 'monospace' },
    { family: 'Source Code Pro', category: 'monospace' },
    { family: 'IBM Plex Mono', category: 'monospace' },
    { family: 'Inconsolata', category: 'monospace' },
    { family: 'Ubuntu Mono', category: 'monospace' },
    { family: 'Space Mono', category: 'monospace' },
    { family: 'PT Mono', category: 'monospace' },
    { family: 'Cascadia Code', category: 'monospace' },
    { family: 'Anonymous Pro', category: 'monospace' }
];

export const SANS_FONTS: Font[] = [
    { family: 'Google Sans', category: 'sans-serif' },
    { family: 'Roboto', category: 'sans-serif' },
    { family: 'Open Sans', category: 'sans-serif' },
    { family: 'Inter', category: 'sans-serif' },
    { family: 'Lato', category: 'sans-serif' },
    { family: 'Montserrat', category: 'sans-serif' },
    { family: 'Poppins', category: 'sans-serif' },
    { family: 'Raleway', category: 'sans-serif' },
    { family: 'Lora', category: 'serif' },
    { family: 'Merriweather', category: 'serif' },
    { family: 'Work Sans', category: 'sans-serif' },
    { family: 'Playfair Display', category: 'serif' },
    { family: 'Nunito', category: 'sans-serif' },
    { family: 'Saira', category: 'sans-serif' },
    { family: 'Oswald', category: 'sans-serif' },
    { family: 'Noto Sans', category: 'sans-serif' }
];

export const POPULAR_FONTS = [...MONO_FONTS, ...SANS_FONTS];
