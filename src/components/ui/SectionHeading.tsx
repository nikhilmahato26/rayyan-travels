import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  dark?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  align = 'center',
  dark = false,
}) => {
  const isCenter = align === 'center';

  return (
    <div className={`mb-10 md:mb-14 ${isCenter ? 'text-center mx-auto max-w-3xl' : 'max-w-2xl'}`}>
      {eyebrow && (
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase mb-3 ${
          dark 
            ? 'bg-[#E7B44A]/15 text-[#E7B44A] border border-[#E7B44A]/30'
            : 'bg-brand-blue-light text-brand-blue border border-brand-blue/20'
        }`}>
          <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
          {eyebrow}
        </div>
      )}
      <h2 className={`text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight font-heading leading-tight ${
        dark ? 'text-white' : 'text-brand-navy'
      }`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base md:text-lg leading-relaxed ${
          dark ? 'text-gray-300' : 'text-brand-muted'
        }`}>
          {description}
        </p>
      )}
    </div>
  );
};
