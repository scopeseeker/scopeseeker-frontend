// import { IconLibrary } from "constants/IconLibrary";
import { IconLibrary } from "@/constant/IconLibrary";
import React from "react";

export type IconNameType =
	| "job"
	| "instagram"
	| "darkMode"
	|  "company"
	|  "pages";

export type IconProps = {
	name: IconNameType;
	color?: string;
	width?: string;
	height?: string;
	style?: React.CSSProperties;
};


const Icon = ({ name, style, ...rest }: IconProps) => {
	const transform = IconLibrary[name]?.transform;
	const viewBox = IconLibrary[name]?.viewBox;
	const path = IconLibrary[name]?.path;

	return (
		<svg xmlns="http://www.w3.org/2000/svg" style={style} viewBox={viewBox} {...rest} className="custom-icon">
			<path d={path} fill="currentColor" transform={transform} />
		</svg>
	);
};

export default Icon;
