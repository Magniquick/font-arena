import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import python from 'react-syntax-highlighter/dist/esm/languages/hljs/python';
import rust from 'react-syntax-highlighter/dist/esm/languages/hljs/rust';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import '../styles/components.css'; // Will create this next

// Register languages
SyntaxHighlighter.registerLanguage('javascript', js);
SyntaxHighlighter.registerLanguage('python', python);
SyntaxHighlighter.registerLanguage('rust', rust);

const SNIPPETS = {
    javascript: `function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

const result = fibonacci(10);
console.log(\`Result: \${result}\`);`,
    python: `def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

result = fibonacci(10)
print(f"Result: {result}")`,
    rust: `fn fibonacci(n: u32) -> u32 {
    match n {
        0 => 0,
        1 => 1,
        _ => fibonacci(n - 1) + fibonacci(n - 2),
    }
}

fn main() {
    println!("Result: {}", fibonacci(10));
}`
};

interface CodePreviewProps {
    fontFamily: string;
    language: string;
}

export const CodePreview = ({ fontFamily, language }: CodePreviewProps) => {
    return (
        <div className="code-preview" style={{ fontFamily }}>
            <div className="code-content">
                <SyntaxHighlighter
                    language={language}
                    style={atomOneDark}
                    customStyle={{ background: 'transparent', padding: '1rem', fontSize: '0.9rem' }}
                    codeTagProps={{
                        style: {
                            fontFamily,
                            fontVariantLigatures: 'common-ligatures discretionary-ligatures',
                            fontFeatureSettings: '"liga" on, "calt" on, "dlig" on'
                        }
                    }} // Ensure code uses the target font and ligatures
                >
                    {SNIPPETS[language as keyof typeof SNIPPETS] || SNIPPETS['javascript']}
                </SyntaxHighlighter>
            </div>
        </div>
    );
};
