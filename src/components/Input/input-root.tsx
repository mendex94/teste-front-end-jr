import { PropsWithChildren } from "react";

const InputRoot = ({ children }: PropsWithChildren) => {
	return (
		<div className="rounded-lg flex bg-background-input w-full h-12 focus-within:ring-2 ring-brand py-3 px-6">
			{children}
		</div>
	);
};

InputRoot.displayName = "TextInput.Root";

export default InputRoot;
