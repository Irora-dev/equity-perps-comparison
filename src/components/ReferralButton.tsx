interface ReferralButtonProps {
  href: string;
  platformName: string;
  color: string;
  className?: string;
}

export default function ReferralButton({
  href,
  platformName,
  color,
  className = '',
}: ReferralButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener sponsored"
      className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium text-white transition-all hover:scale-105 hover:shadow-lg ${className}`}
      style={{
        backgroundColor: color,
        boxShadow: `0 4px 14px 0 ${color}40`,
      }}
    >
      Start Trading on {platformName}
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
        />
      </svg>
    </a>
  );
}
