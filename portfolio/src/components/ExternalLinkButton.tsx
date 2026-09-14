import type { ReactNode } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ExternalLinkButtonProps {
  href: string;
  children: ReactNode;
  icon?: ReactNode;
  variant?: 'solid' | 'outline' | 'ghost';
  ariaLabel?: string;
  showArrow?: boolean;
  className?: string;
}

export function ExternalLinkButton({
  href,
  children,
  icon,
  variant = 'outline',
  ariaLabel,
  showArrow = true,
  className = '',
}: ExternalLinkButtonProps) {
  const isExternal = href.startsWith('http');

  const base =
    'inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-300 focus-visible:outline-2';
  const variants: Record<string, string> = {
    solid: 'bg-accent text-bg hover:bg-accent/85',
    outline: 'border border-white/15 text-ink hover:border-accent/50 hover:text-accent',
    ghost: 'text-ink-secondary hover:text-accent',
  };

  return (
    <a
      href={href}
      {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      aria-label={ariaLabel}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {icon}
      <span>{children}</span>
      {showArrow && isExternal && <ArrowUpRight size={15} aria-hidden="true" />}
    </a>
  );
}
