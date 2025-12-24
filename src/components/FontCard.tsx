import type { Font } from '../data/fonts';
import { CodePreview } from './CodePreview';
import { DesignPreview } from './DesignPreview';
import UIShellPreview from './UIShellPreview';

interface FontCardProps {
    font: Font;
    onSelect: () => void;
    mode: 'design' | 'code' | 'ui';
    language: string;
}

export const FontCard: React.FC<FontCardProps> = ({ font, onSelect, mode, language }) => {
    return (
        <div className="font-card" onClick={onSelect}>
            <div className="font-header">
                <h3 className="font-name" style={{ fontFamily: font.family }}>{font.family}</h3>
                <span className="font-badge">{font.category}</span>
            </div>

            <div className="font-content">
                {mode === 'code' ? (
                    <CodePreview fontFamily={font.family} language={language} />
                ) : mode === 'ui' ? (
                    <UIShellPreview fontFamily={font.family} />
                ) : (
                    <DesignPreview fontFamily={font.family} />
                )}
            </div>

            <div className="card-action">
                <button className="select-btn">Select</button>
            </div>
        </div>
    );
};
