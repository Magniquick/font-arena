interface DesignPreviewProps {
    fontFamily: string;
}

export const DesignPreview = ({ fontFamily }: DesignPreviewProps) => {
    return (
        <div className="design-preview" style={{ fontFamily }}>
            <div className="preview-section">
                <h1 style={{ fontWeight: 700, lineHeight: 1.2 }}>The quick brown fox.</h1>
                <p style={{ marginTop: '0.5rem', opacity: 0.8 }}>
                    Jumps over the lazy dog. Typography determines how text is arranged to make it clear, legible, and appealing when displayed.
                </p>
            </div>

            <div className="preview-section ui-elements">
                <button className="preview-btn primary">Primary Action</button>
                <button className="preview-btn secondary">Secondary</button>
            </div>

            <div className="preview-section">
                <input
                    type="text"
                    className="preview-input"
                    placeholder="Type something..."
                    defaultValue="Font Arena"
                    readOnly
                />
            </div>

            <div className="preview-section tags">
                <span className="tag">#Design</span>
                <span className="tag">#Typography</span>
                <span className="tag">#Creative</span>
            </div>
        </div>
    );
};
