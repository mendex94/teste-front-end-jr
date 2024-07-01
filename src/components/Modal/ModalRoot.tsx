"use client";

import { cn } from "@/lib/utils";

interface IModalRootProps {
	className?: string;
	children: React.ReactNode;
}

const ModalRoot = ({ className, children }: IModalRootProps) => {
	return (
		<div
			className={cn(
				"justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none",
				className
			)}
		>
			<div className="relative p-4 w-full max-w-2xl max-h-full">{children}</div>
		</div>
	);
};

ModalRoot.displayName = "Modal.Root";

export default ModalRoot;
