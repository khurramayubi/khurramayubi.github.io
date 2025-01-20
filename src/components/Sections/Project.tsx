import SectionHeader from "../Section/SectionHeader";
import Carousel from "../Section/Carousel";
import { ReactNode } from "react";

interface Props {
	heading: string;
	imageList?: string[];
	descs: ReactNode[];
}

export default function Project({ heading, descs, imageList }: Props) {
	return (
		<>
			<div className="pb-8">
				<SectionHeader heading={heading} />
				<div className="prose">{descs}</div>
			</div>
			{imageList && imageList.length && <Carousel images={imageList} />}
		</>
	);
}
