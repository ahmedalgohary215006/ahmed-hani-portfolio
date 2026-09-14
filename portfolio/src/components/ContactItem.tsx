import type { ReactNode } from 'react';

interface ContactItemProps {
  icon: ReactNode;
  label: string;
  value: string;
  href: string;
  action?: ReactNode;
}

export function ContactItem({ icon, label, value, href, action }: ContactItemProps) {
  const isExternal = href.startsWith('http');
  return (
    <div className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-card px-5 py-4 transition-colors duration-300 hover:border-accent/25">
      <a
        href={href}
        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        className="flex items-center gap-4 min-w-0"
      >
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-accent/25 text-accent">
          {icon}
        </span>
        <span className="min-w-0">
          <span className="block text-xs text-ink-muted">{label}</span>
          <span className="block truncate text-ink font-medium">{value}</span>
        </span>
      </a>
      {action}
    </div>
  );
}
