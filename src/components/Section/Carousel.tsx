import { useState } from "react";

export default function SectionCard({ images }: { images: string[] }) {
	console.log(images);
	const [currentIndex, setCurrentIndex] = useState(0);

	const handlePrev = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? images.length - 1 : prevIndex - 1
		);
	};

	const handleNext = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === images.length - 1 ? 0 : prevIndex + 1
		);
	};

	return (
		<div
			className="carousel-container relative h-[500px] w-auto p-8 rounded-xl"
			style={{
				backgroundColor: "#2a2a2a",
				boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)"
			}}
		>
			<div className="h-full w-auto">
				<img
					style={{ objectFit: "contain" }}
					className="h-full w-auto justify-self-center"
					src={images[currentIndex]}
					alt={`Slide ${currentIndex + 1}`}
				/>
			</div>
			<div className="carousel-controls absolute bottom-8 right-12 flex gap-4 items-center">
				<button
					className="h-[50px] w-[50px] bg-yellow-500 text-[#1e1e1e] font-extrabold rounded-full hover:bg-yellow-400 active:bg-yellow-600 transition duration-300  disabled:bg-gray-400"
					onClick={handlePrev}
					aria-label="Previous Image"
					disabled={images.length < 2}
				>
					&lt;
				</button>
				<p className="text-white">{`${currentIndex + 1} / ${images.length}`}</p>
				<button
					className="h-[50px] w-[50px] bg-yellow-500 text-[#1e1e1e] font-extrabold rounded-full hover:bg-yellow-400 active:bg-yellow-600 disabled:bg-gray-400 transition duration-300"
					onClick={handleNext}
					aria-label="Previous Image"
					disabled={images.length < 2}
				>
					&gt;
				</button>
			</div>
		</div>
	);
}
