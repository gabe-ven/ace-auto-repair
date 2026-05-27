'use client';

export default function Logo({ variant = 'light', size = 'md' }: { variant?: 'light' | 'dark'; size?: 'sm' | 'md' | 'lg' }) {
  const fontSize = size === 'sm' ? 20 : size === 'lg' ? 30 : 24;
  const dotSize  = size === 'sm' ? 6  : size === 'lg' ? 9  : 7;
  const textColor = variant === 'dark' ? '#FFFFFF' : '#111111';

  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, textDecoration: 'none' }}>
      <span style={{
        fontFamily: "'Bebas Neue',sans-serif",
        fontSize,
        letterSpacing: '0.08em',
        color: textColor,
        lineHeight: 1,
      }}>
        ACE
      </span>
      <span style={{
        width: dotSize,
        height: dotSize,
        borderRadius: '50%',
        background: '#DC2626',
        flexShrink: 0,
        display: 'inline-block',
      }} />
      <span style={{
        fontFamily: "'Bebas Neue',sans-serif",
        fontSize,
        letterSpacing: '0.08em',
        color: '#EAB308',
        lineHeight: 1,
      }}>
        AUTO
      </span>
    </div>
  );
}
