import { Slot } from "@radix-ui/react-slot";
import { PropsWithChildren } from "react";

const InputIcon = ({ children }: PropsWithChildren) => {
	return <Slot className="w-7 h-7 text-text-secondary">{children}</Slot>;
};

InputIcon.displayName = "TextInput.Icon";

export default InputIcon;
