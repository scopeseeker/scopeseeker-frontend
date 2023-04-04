// import { IconLibrary } from "constants/IconLibrary";
import { IconLibrary } from "@/constant/IconLibrary";
import React from "react";

export type IconNameType =
	| "job"
	| "instagram"
	| "darkMode"
	| "company"
	| "pages"
	| "arrow-down"
	| "search"
	| "linkedin"
	| "gmail"
	| "facebook"
	| "arrow"
	| 'whatsapp'
	| "twitter"
	| "quotes-left"
	| "quotes-right"
	| "user"
	| "case"
	| "form"
	;
export type IconProps = {
	name: IconNameType;
	color?: string;
	width?: string;
	height?: string;
	style?: React.CSSProperties;
};


const Icon = ({ name, style, ...rest }: IconProps) => {
	const transform = IconLibrary[name]?.transform;
	const path = IconLibrary[name]?.path;

	return (
		<svg xmlns="http://www.w3.org/2000/svg" style={style} viewBox="0 0 24 24" {...rest} className="custom-icon">
			<path d={path} fill="currentColor" transform={transform} />
		</svg>
	);
};

export default Icon;

