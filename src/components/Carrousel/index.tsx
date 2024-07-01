"use client";

import { useEffect, useRef } from "react";
import { PiCaretLeft, PiCaretRight } from "react-icons/pi";
import CarrouselCard from "./carrousel-card";
import { cn } from "@/lib/utils";
import { Product } from "@/@types/products";

interface ICarruselProps {
	products: Product[];
}

const Carrousel = ({ products }: ICarruselProps) => {
	const carrouselRef = useRef<HTMLDivElement>(null);
	const isDragging = useRef(false);

	const handleScroll = (direction: "left" | "right") => {
		const carrousel = carrouselRef.current;
		if (!carrousel) return;
		const scrollSize = 298;

		carrousel.scroll({
			top: 0,
			left:
				direction === "left"
					? carrousel.scrollLeft - scrollSize
					: carrousel.scrollLeft + scrollSize,
			behavior: "smooth",
		});
	};

	const handleButton = (e: React.MouseEvent<HTMLButtonElement>) => {
		const button = e.currentTarget;
		const direction = button.id as "left" | "right";
		handleScroll(direction);
	};

	useEffect(() => {
		const carrousel = carrouselRef.current;
		const isMobile = window.matchMedia("(pointer: coarse)").matches;
		if (!carrousel) return;

		const handleDragging = (e: MouseEvent) => {
			if (!isDragging.current) return;
			carrousel.scrollLeft += e.movementX * -1;
		};

		if (isMobile) {
			carrousel.addEventListener("touchstart", () => {
				isDragging.current = true;
			});
			carrousel.addEventListener("touchend", () => {
				isDragging.current = false;
			});
			carrousel.addEventListener("touchmove", (e) => {
				if (!isDragging.current) return;
				carrousel.scrollLeft += e.touches[0].clientX * -1;
			});
		} else {
			carrousel.addEventListener("mousedown", () => {
				isDragging.current = true;
			});
			carrousel.addEventListener("mouseup", () => {
				isDragging.current = false;
			});
			carrousel.addEventListener("mousemove", handleDragging);
			carrousel.addEventListener("mouseleave", () => {
				isDragging.current = false;
			});
		}
		return () => {
			carrousel.removeEventListener("mousemove", handleDragging);
			carrousel.removeEventListener("mousedown", () => {
				isDragging;
			});
			carrousel.removeEventListener("mouseup", () => {
				isDragging;
			});
			carrousel.removeEventListener("touchstart", () => {
				isDragging;
			});
			carrousel.removeEventListener("touchend", () => {
				isDragging;
			});
			carrousel.removeEventListener("touchmove", () => {
				isDragging;
			});
		};
	}, []);

	return (
		<div className="w-full md:max-w-screen-2xl mx-auto flex">
			<div className="hidden md:flex items-center justify-center w-full">
				<button
					onMouseDown={handleButton}
					id="left"
					className="text-text-primary"
				>
					<PiCaretLeft className="w-8 h-8" />
				</button>
			</div>
			<div className="max-w-screen-xl mx-auto h-[32.25rem] overflow-hidden md:overflow-visible">
				<div
					className={cn(
						"md:w-full gap-[4.175rem] overflow-hidden select-none grid auto-cols-min grid-flow-col md:auto-rows-auto lg:auto-cols-[calc(100%/4)-3.875rem]"
					)}
					ref={carrouselRef}
				>
					{products.map((product) => (
						<CarrouselCard key={product.productName} product={product} />
					))}
				</div>
			</div>
			<div className="hidden md:flex items-center justify-center w-full">
				<button
					onMouseDown={handleButton}
					className="text-text-primary"
					id="right"
				>
					<PiCaretRight className="w-8 h-8" />
				</button>
			</div>
		</div>
	);
};

Carrousel.displayName = "Carrousel.Root";

export default Carrousel;
