'use client';

export default function BurpText({ text, className = '' }) {
  return (
    <span className={`burp-text ${className}`}>
      {text}
    </span>
  );
}
