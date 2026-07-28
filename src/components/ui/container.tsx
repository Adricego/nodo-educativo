import type { ReactNode } from "react";

type ContainerProps = Readonly<{
  children: ReactNode;
  className?: string;
}>;

export function Container({ children, className }: ContainerProps) {
  const baseClassName = "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8";

  return (
    <div className={className ? `${baseClassName} ${className}` : baseClassName}>
      {children}
    </div>
  );
}
