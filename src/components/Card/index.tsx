const Card = () => {
	return (
		<div className="bg-card-image h-[21.875rem] w-[35.875rem] rounded-2xl p-10 bg-center bg-cover relative overflow-hidden flex flex-col justify-end shadow-lg">
			<div className="w-full h-full absolute top-0 left-0 backdrop-brightness-50" />
			<div className="relative z-40 text-white">
				<h2 className=" font-bold text-4xl">Parceiros</h2>
				<p className="max-w-sm pt-4">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit, amet
					consectetur adipisicing elit.
				</p>
				<button
					className="px-8 mt-8 h-11 uppercase bg-brand rounded-lg font-bold text-text-foreground text-sm
			"
				>
					CONFIRA
				</button>
			</div>
		</div>
	);
};

export default Card;
