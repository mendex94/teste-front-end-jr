"use client";

import Link from "next/link";
import Image from "next/image";
import { PiX } from "react-icons/pi";
import { Product } from "@/@types/products";
import { numberToCurrency } from "@/lib/numberToCurrency";
import { Modal } from "../Modal";
import { useState } from "react";
import { redirect } from "next/navigation";

interface ICarrouselCardProps {
	product: Product;
}

const CarrouselCard = ({ product }: ICarrouselCardProps) => {
	const [showModal, setShowModal] = useState(false);
	const priceMinus10Percent = product.price - product.price * 0.1;
	const priceDividedBy8 = product.price / 8;

	const handleModal = () => {
		setShowModal((prev) => !prev);
	};

	return (
		<div className="flex flex-col w-[270px] h-[31.25rem] rounded-lg shadow-2xl border border-text-secondary px-3 py-4 justify-between">
			<Image
				width={247}
				height={228}
				draggable={false}
				src={product.photo}
				alt={product.productName}
				className="pt-4"
			/>
			<div className="flex justify-between pt-2">
				<div className="flex flex-col justify-between">
					<p className="text-text-primary font-light text-base">
						{product.productName}
					</p>
					<p className="text-text-secondary font-normal line-through pt-3">
						{numberToCurrency(product.price)}
					</p>
					<p className="text-text-primary font-bold text-xl">
						{numberToCurrency(priceMinus10Percent)}
					</p>
					<p className="text-text-primary font-normal text-xs">
						ou 8x de {numberToCurrency(priceDividedBy8)} sem juros
					</p>
					<p className="text-brand font-normal text-xs pt-4">Frete grátis</p>
				</div>
			</div>
			<button
				className="w-full h-11 uppercase bg-brand rounded-lg font-bold text-text-foreground text-sm
			"
				onClick={handleModal}
			>
				Comprar
			</button>
			{showModal && (
				<Modal.Root className="backdrop-blur-2xl">
					<div className="bg-white p-8 flex flex-col shadow-lg">
						<button className="self-end" onClick={handleModal}>
							<PiX />
						</button>
						<div className="flex">
							<Image
								width={247}
								height={192}
								draggable={false}
								src={product.photo}
								alt={product.productName}
							/>
							<div className="space-y-8">
								<h2 className="font-normal text-xl text-product">
									{product.productName}
								</h2>
								<span className="font-black text-xl text-product">
									{numberToCurrency(product.price)}
								</span>
								<p className="max-w-prose text-xs text-text-secondary">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Numquam, omnis quam laborum sed fugiat iste natus excepturi
								</p>
								<Link
									href={"#"}
									className="hover:underline text-sm text-product"
								>
									Veja mais detalhes do produto {">"}
								</Link>
								<Link
									className="w-full px-8 h-11 uppercase bg-brand rounded-lg font-bold text-text-foreground text-sm flex items-center justify-center text-center"
									href={"https://github.com/mendex94"}
								>
									COMPRAR
								</Link>
							</div>
						</div>
					</div>
				</Modal.Root>
			)}
		</div>
	);
};

CarrouselCard.displayName = "Carrousel.Card";

export default CarrouselCard;
