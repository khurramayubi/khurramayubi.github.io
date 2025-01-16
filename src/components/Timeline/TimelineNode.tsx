import { ReactNode } from "react";

interface Props {
	title: string;
	date: string;
	caption: string;
	secondaryCaption?: string;
	tertiaryCaption?: string;
	link?: string;
	smallCircleSize?: number;
	bigCircleSize?: number;
	extras?: ReactNode[];
}

function TimelineNode({
	title,
	date,
	caption,
	secondaryCaption,
	tertiaryCaption,
	link,
	smallCircleSize = 20,
	bigCircleSize = 50,
	extras
}: Props) {
	const lineWidth = 2;
	const lineLeft = (smallCircleSize - lineWidth) / 2;
	const smallCircleExtraMargin = (bigCircleSize - smallCircleSize) / 2;
	return (
		<>
			<div className={`pb-6`}>
				{" "}
				<div className="flex items-start relative">
					<div
						style={{
							marginLeft: smallCircleExtraMargin,
							marginRight: smallCircleExtraMargin
						}}
					>
						<div
							style={{
								width: smallCircleSize,
								height: smallCircleSize
							}}
							className={`bg-yellow-500 rounded-full shadow-circle border-2 border-yellow-400 flex-shrink-0`}
						></div>
						<div
							style={{
								left: lineLeft + smallCircleExtraMargin,
								top: smallCircleSize,
								width: lineWidth
							}}
							className={`absolute bottom-0 bg-yellow-500 shadow-[0_0_3px_1px_rgba(255,193,0,0.8)] h-full`}
						></div>
					</div>{" "}
					<div className="prose prose-headings:my-0 prose-p:my-0 prose-blockquote:not-italic prose-blockquote:font-normal ms-6">
						<h2 className="font-semibold text-gray-800">{title}</h2>
						<p className="text-yellow-500 font-bold text-sm">{date}</p>
						<p className="text-gray-600">{caption}</p>
						{secondaryCaption && link ? (
							<a className="text-gray-600 italic" href={link}>
								{secondaryCaption}
							</a>
						) : (
							<p className="text-gray-600 italic">{secondaryCaption}</p>
						)}
						{extras && extras}
						{tertiaryCaption && (
							<p className="text-gray-600 italic">{tertiaryCaption}</p>
						)}
					</div>
					{/** Node can have many other children passed to it e.g., a block quote for courses or blockquote for description of jobs/tasks */}
				</div>
			</div>
		</>
	);
}

export default TimelineNode;
