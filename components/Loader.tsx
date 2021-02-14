function Loader() {
	return (
		<div className="loader" title="4">
			<svg
				version="1.1"
				id="Layer_1"
				xmlns="http://www.w3.org/2000/svg"
				xmlnsXlink="http://www.w3.org/1999/xlink"
				x="0px"
				y="0px"
				width="24px"
				height="30px"
				viewBox="0 0 24 30"
				xmlSpace="preserve"
			>
				<rect x="0" y="0" width="4" height="20" fill="crimson">
					<animateTransform
						attributeType="xml"
						attributeName="transform"
						type="translate"
						values="0 0; 0 20; 0 0"
						begin="0"
						dur="0.6s"
						repeatCount="indefinite"
					/>
				</rect>
				<rect x="10" y="0" width="4" height="20" fill="crimson">
					<animateTransform
						attributeType="xml"
						attributeName="transform"
						type="translate"
						values="0 0; 0 20; 0 0"
						begin="0.2s"
						dur="0.6s"
						repeatCount="indefinite"
					/>
				</rect>
				<rect x="20" y="0" width="4" height="20" fill="crimson">
					<animateTransform
						attributeType="xml"
						attributeName="transform"
						type="translate"
						values="0 0; 0 20; 0 0"
						begin="0.4s"
						dur="0.6s"
						repeatCount="indefinite"
					/>
				</rect>
			</svg>
		</div>
	);
}

export default Loader;
