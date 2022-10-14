import { ButtonHTMLAttributes, ReactNode } from "react";
import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	asChild?: boolean;
	fullWidth?: boolean;
	className?: string;
}

export function Button({
	children,
	asChild,
	fullWidth = false,
	className,
	...props
}: ButtonProps) {
	const Comp = asChild ? Slot : "button";
	return (
		<Comp
			className={clsx(
				"py-3 px-4 bg-cyan-500 rounded font-semibold text-black text-sm w-full transition-colors hover:bg-cyan-300 focus:ring-2 ring-white",
				{ "max-w-sm": fullWidth === false },
				className
			)}
			{...props}
		>
			{children}
		</Comp>
	);
}
