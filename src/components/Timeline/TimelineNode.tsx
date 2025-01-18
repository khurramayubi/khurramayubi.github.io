import { ReactNode } from "react";
import { motion } from "motion/react";

interface Props {
	title: string;
	date?: string;
	caption?: string;
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
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 0.5 }}
			>
				<div className={`pb-6 flex items-start relative`}>
					{" "}
					<motion.div
						initial={{ x: -20 }}
						whileInView={{ x: 0 }}
						viewport={{ once: true }}
					>
						<div
							style={{
								marginLeft: smallCircleExtraMargin,
								marginRight: smallCircleExtraMargin
							}}
						>
							<motion.div
								style={{
									width: smallCircleSize,
									height: smallCircleSize
								}}
								className={`bg-yellow-500 rounded-full shadow-circle border-2 border-yellow-400 flex-shrink-0`}
								initial={{ opacity: 0, scale: 0 }}
								whileInView={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.5 }}
							></motion.div>
							<motion.div
								style={{
									left: lineLeft + smallCircleExtraMargin,
									// top: smallCircleSize,
									width: lineWidth
								}}
								className={`absolute bottom-0 bg-yellow-500 shadow-[0_0_3px_1px_rgba(255,193,0,0.8)] h-full`}
								initial={{ scaleY: 0 }}
								whileInView={{ scaleY: 1 }}
								transition={{
									duration: 0.75,
									delay: 0.2
								}}
							></motion.div>
						</div>{" "}
					</motion.div>
					<motion.div
						initial={{ x: -20 }}
						whileInView={{ x: 0 }}
						transition={{ duration: 0.5 }}
					>
						<div className="prose prose-headings:my-0 prose-p:my-0 prose-blockquote:not-italic prose-blockquote:font-normal ms-6">
							<h2 className="font-semibold text-gray-800">{title}</h2>
							{date && (
								<p className="text-yellow-500 font-bold text-sm py-1">{date}</p>
							)}
							{caption && <p className="text-gray-600">{caption}</p>}
							{secondaryCaption && link ? (
								<a
									className="text-gray-600 italic"
									href={link}
									target="_blank"
									rel="noopener noreferrer"
								>
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
					</motion.div>
				</div>
			</motion.div>
		</>
	);
}

export default TimelineNode;
