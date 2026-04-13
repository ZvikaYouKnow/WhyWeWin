interface IconProps {
  className?: string;
}

const icons: Record<string, (props: IconProps) => React.ReactElement> = {
  hero: ({ className }) => (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
      <path d="M24 8L27.5 18.5H38L29.5 25L33 36L24 29L15 36L18.5 25L10 18.5H20.5L24 8Z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1" />
    </svg>
  ),
  "team-of-analysts": ({ className }) => (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="5" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1" />
      <circle cx="32" cy="16" r="5" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1" />
      <circle cx="24" cy="30" r="5" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1" />
      <path d="M16 21C12 23 10 27 10 32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      <path d="M32 21C36 23 38 27 38 32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      <path d="M20 26L16 21" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
      <path d="M28 26L32 21" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
    </svg>
  ),
  "utility-first": ({ className }) => (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="8" width="12" height="8" rx="2" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1" />
      <rect x="6" y="20" width="12" height="8" rx="2" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1" />
      <rect x="6" y="32" width="12" height="8" rx="2" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1" />
      <path d="M18 12H30L34 24L30 36H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      <path d="M34 24H42" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M39 21L42 24L39 27" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  "deep-knowledge": ({ className }) => (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="24" cy="14" rx="16" ry="6" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1" />
      <ellipse cx="24" cy="24" rx="16" ry="6" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.05" />
      <ellipse cx="24" cy="34" rx="16" ry="6" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.05" />
      <path d="M8 14V34" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      <path d="M40 14V34" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
    </svg>
  ),
  "real-world-data": ({ className }) => (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 38L14 26L22 30L30 18L42 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 38L14 26L22 30L30 18L42 10" stroke="currentColor" strokeWidth="1.5" opacity="0.1" fill="currentColor" />
      <circle cx="14" cy="26" r="2" fill="currentColor" opacity="0.6" />
      <circle cx="22" cy="30" r="2" fill="currentColor" opacity="0.6" />
      <circle cx="30" cy="18" r="2" fill="currentColor" opacity="0.6" />
      <circle cx="42" cy="10" r="2" fill="currentColor" opacity="0.6" />
      <path d="M30 18L34 14" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" opacity="0.3" />
    </svg>
  ),
  memory: ({ className }) => (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.05" />
      <path d="M24 12C18 12 14 16 14 20C14 24 18 26 24 26C30 26 34 28 34 32C34 36 30 38 24 38" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="24" cy="12" r="2" fill="currentColor" opacity="0.6" />
      <circle cx="24" cy="38" r="2" fill="currentColor" opacity="0.6" />
      <path d="M16 16L12 12" stroke="currentColor" strokeWidth="1" opacity="0.3" strokeLinecap="round" />
      <path d="M32 32L36 36" stroke="currentColor" strokeWidth="1" opacity="0.3" strokeLinecap="round" />
    </svg>
  ),
  proactive: ({ className }) => (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 6V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M36.7 11.3L33.9 14.1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M42 24H38" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M11.3 11.3L14.1 14.1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M6 24H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="24" cy="24" r="10" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1" />
      <path d="M20 38H28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M22 42H26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M19 34C19 34 20 30 20 28C20 26 18 24 18 22" stroke="currentColor" strokeWidth="1" opacity="0.4" strokeLinecap="round" />
      <path d="M29 34C29 34 28 30 28 28C28 26 30 24 30 22" stroke="currentColor" strokeWidth="1" opacity="0.4" strokeLinecap="round" />
    </svg>
  ),
  tailored: ({ className }) => (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="8" width="32" height="32" rx="4" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.05" />
      <circle cx="18" cy="18" r="4" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1" />
      <circle cx="30" cy="18" r="4" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1" />
      <circle cx="18" cy="30" r="4" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1" />
      <circle cx="30" cy="30" r="4" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.15" />
      <path d="M28 28L32 32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  onboarding: ({ className }) => (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 24C8 24 14 18 24 18C34 18 40 24 40 24C40 24 34 30 24 30C14 30 8 24 8 24Z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.05" />
      <circle cx="24" cy="24" r="4" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.15" />
      <path d="M24 10V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      <path d="M24 32V38" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      <path d="M12 14L16 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
      <path d="M36 14L32 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
    </svg>
  ),
  "why-we-win": ({ className }) => (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 42V26L8 20V8H40V20L34 26V42" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.05" strokeLinejoin="round" />
      <path d="M14 42H34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M20 42V34H28V42" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="currentColor" fillOpacity="0.1" />
      <path d="M24 8V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M18 10L16 6" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
      <path d="M30 10L32 6" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
    </svg>
  ),
  "bottom-line": ({ className }) => (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.05" />
      <circle cx="24" cy="24" r="10" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.05" />
      <circle cx="24" cy="24" r="4" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
};

export default function SectionIcon({
  sectionId,
  className = "w-12 h-12 text-indigo-400",
}: {
  sectionId: string;
  className?: string;
}) {
  const Icon = icons[sectionId];
  if (!Icon) return null;
  return <Icon className={className} />;
}
