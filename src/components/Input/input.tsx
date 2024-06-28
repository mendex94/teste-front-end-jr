import { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const TextInput = (props: InputProps) => {
	return (
		<input
			className="bg-transparent flex-1 text-text-secondary text-sm placeholder:text-text-secondary outline-none"
			{...props}
		/>
	);
};

TextInput.displayName = "TextInput.Input";

export default TextInput;
