import React from "react";

interface SectionHeaderProps {
	heading: string;
	size?: string; // Tailwind class for text size
	underlineColor?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
	heading: text,
	size = "text-4xl",
	underlineColor = "bg-yellow-500"
}) => {
	return (
		<div className={"flex-1 pr-6 pt-8"}>
			<h2 className={`${size} font-extrabold mb-3 capitalize`}>{text}</h2>
			<div className={`w-8 h-1 mb-8 ${underlineColor}`}></div>
		</div>
	);
};

export default SectionHeader;
