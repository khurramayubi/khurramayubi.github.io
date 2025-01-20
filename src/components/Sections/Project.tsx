import SectionHeader from "../Section/SectionHeader";
import Carousel from "../Section/Carousel";
import { ReactNode } from "react";
import { iconsMap } from "../Section/iconsMap";
import { motion } from "motion/react";

interface Props {
	heading: string;
	imageList?: string[];
	descs: ReactNode[];
	links?: { link: string; icon: string }[];
}

export default function Project({ heading, descs, imageList, links }: Props) {
	return (
		<>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 2, type: "spring" }}
			>
				<div className="pb-8">
					<SectionHeader heading={heading} />
					<div className="flex gap-4 mb-4 items-center justify-center">
						{links &&
							links.length &&
							links.map(({ icon, link }, index: number) => {
								const { icon: Icon, alt } = iconsMap[icon];
								return (
									<a
										className="flex gap-4 hover:text-yellow-500 w-fit"
										key={index}
										href={link}
										target="_blank"
										rel="noopener noreferrer"
									>
										<Icon className="" size={25} title={alt} />
										<p>{alt}</p>
									</a>
								);
							})}
					</div>
					<div className="prose">{descs}</div>
				</div>
				{imageList && imageList.length && <Carousel images={imageList} />}
			</motion.div>
		</>
	);
}
