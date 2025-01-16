function Resume() {
	const bigCircleSize = 46;
	const smallCircleSize = 20;
	const lineWidth = 2;
	const lineLeft = (circleSize: number) => (circleSize - lineWidth) / 2;
	const smallCircleExtraMargin = (bigCircleSize - smallCircleSize) / 2;
	return (
		<>
			<div className="relative pb-12">
				<div className="flex items-center">
					<div
						style={{ width: bigCircleSize, height: bigCircleSize }}
						className="bg-[#1e1e1e] rounded-lg shadow-tile"
					></div>
					<div
						style={{
							left: lineLeft(bigCircleSize),
							top: bigCircleSize,
							width: lineWidth
						}}
						className={`absolute bottom-0 bg-yellow-500 h-full`}
					></div>{" "}
					<div className="ms-6 lg:ms-12">
						<h3>Education</h3>
					</div>
				</div>
			</div>
			<div className={`pb-4`}>
				{" "}
				{/* padding start is (big circle width - small circle width) / 2 */}
				<div className="flex items-start relative">
					{/* Left Circle */}
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
								// marginRight: smallCircleExtraMargin
							}}
							className={`bg-yellow-500 rounded-full shadow-[0_0_4px_2px_rgba(255,193,0,0.8)] border-2 border-yellow-400 flex-shrink-0`}
						></div>
						{/* Line */}
						<div
							style={{
								left: lineLeft(smallCircleSize) + smallCircleExtraMargin,
								top: smallCircleSize,
								width: lineWidth
							}}
							className={`absolute bottom-0 bg-yellow-500 shadow-[0_0_3px_1px_rgba(255,193,0,0.8)] h-full`}
						></div>
					</div>{" "}
					{/* left is (small circle width - line width)/2*/}
					{/* Line */}
					<div className="ms-6 lg:ms-12">
						<h3>Brock University</h3>
						<h6>2014 - 2018</h6>
						<p>Bachelor of Computer Science</p>
						<p>Concentration in Software Engineering</p>
					</div>
				</div>
			</div>
			<div style={{ paddingLeft: smallCircleExtraMargin }} className={`pb-4`}>
				{" "}
				{/* padding start is (big circle width - small circle width) / 2 */}
				<div className="flex items-start relative">
					{/* Left Circle */}
					<div
						style={{
							width: smallCircleSize,
							height: smallCircleSize,
							marginRight: smallCircleExtraMargin
						}}
						className={`bg-yellow-500 rounded-full shadow-[0_0_4px_2px_rgba(255,193,0,0.8)] border-2 border-yellow-400`}
					></div>
					{/* Line */}
					<div
						style={{ left: lineLeft(smallCircleSize), top: smallCircleSize }}
						className={`absolute bottom-0 w-[${lineWidth}px] bg-yellow-500 shadow-[0_0_3px_1px_rgba(255,193,0,0.8)] h-full`}
					></div>{" "}
					{/* left is (small circle width - line width)/2*/}
					{/* Line */}
					<div className="ms-12">
						<h3>Brock University</h3>
						<h6>2014 - 2018</h6>
						<p>Bachelor of Computer Science</p>
						<p>Concentration in Software Engineering</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default Resume;
