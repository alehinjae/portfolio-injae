import { ReactNode } from "react";

interface ContentContainerProps {
  children: ReactNode;
  className?: string;
}

/**
 * Constrains content to the portfolio's max-width with consistent padding.
 * Use this for text, descriptions, and layout sections inside project pages.
 * Images and banners should live OUTSIDE this wrapper to achieve full-bleed width.
 *
 * Example:
 *   <img className="w-full" src="..." alt="..." />   ← full-bleed
 *   <ContentContainer className="py-20">
 *     <h1>Project title</h1>
 *   </ContentContainer>
 *   <img className="w-full" src="..." alt="..." />   ← full-bleed
 */
export function ContentContainer({ children, className = "" }: ContentContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-[1188px] px-5 md:px-8 ${className}`}>
      {children}
    </div>
  );
}
