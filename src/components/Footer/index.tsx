import Link from "next/link";
import Image from "next/image";
import { PiFacebookLogo, PiInstagramLogo, PiYoutubeLogo } from "react-icons/pi";

const Footer = () => {
	return (
		<footer className="bg-background-secondary text-text-foreground mt-14">
			<div className="max-w-screen-xl mx-auto py-12 flex flex-col gap-4 px-4 md:flex-row md:gap-0 md:px-0 justify-between border-b border-white">
				<div className="flex gap-24">
					<div className="flex flex-col justify-between">
						<div className="uppercase text-xs flex flex-col gap-6">
							<p className="font-bold ">sobre nós</p>
							<Link href="#" className="font-light hover:underline">
								conheça
							</Link>
							<Link href="#" className="font-light hover:underline">
								como comprar
							</Link>
							<Link href="#" className="font-light hover:underline">
								indicação e desconto
							</Link>
						</div>
						<div className="flex gap-8">
							<Link href="#">
								<PiFacebookLogo className="w-6 h-6" />
							</Link>
							<Link href="#">
								<PiInstagramLogo className="w-6 h-6" />
							</Link>
							<Link href="#">
								<PiYoutubeLogo className="w-6 h-6" />
							</Link>
						</div>
					</div>
					<div className="uppercase text-xs flex flex-col gap-6">
						<p className="font-bold ">informações úteis</p>
						<Link href="#" className="font-light hover:underline">
							fale conosco
						</Link>
						<Link href="#" className="font-light hover:underline">
							dúvidas
						</Link>
						<Link href="#" className="font-light hover:underline">
							prazos de entrega
						</Link>
						<Link href="#" className="font-light hover:underline">
							formas de pagamento
						</Link>
						<Link href="#" className="font-light hover:underline">
							política de privacidade
						</Link>
						<Link href="#" className="font-light hover:underline">
							trocas e devoluções
						</Link>
					</div>
					<div className="uppercase text-xs flex flex-col gap-6">
						<p className="font-bold ">formas de pagamento</p>
						<Image
							src={"/formas_pagamento.png"}
							width={195}
							height={148}
							alt="formas de pagamento"
						/>
					</div>
				</div>
				<div className="bg-white rounded-lg px-8 py-10 text-text-primary uppercase">
					<h2 className="font-light text-lg">Cadastre-se e Receba nossas</h2>
					<h2 className="font-bold text-lg">Novidades e promoções</h2>
					<p className="text-xs font-light text-center max-w-prose pt-4">
						Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia
						lorem ipsum
					</p>
					<div className="flex gap-4 pt-4">
						<input
							className="py-3 px-6 w-full rounded-lg border border-text-primary"
							placeholder="SEU E-MAIL"
							type="email"
						/>
						<button
							className="py-3 px-6 uppercase bg-brand rounded-lg font-bold text-text-foreground text-sm
			"
						>
							OK
						</button>
					</div>
				</div>
			</div>
			<div className="max-w-screen-xl mx-auto py-6 flex flex-col px-4 gap-4 md:flex-row md:px-0 md:gap-0 justify-between">
				<div className="uppercase text-xs font-normal">
					<p>
						Copyright © 2024. Todos os direitos reservados. Todas as marcas e
						suas imagens são de propriedade de seus respectivos donos.
					</p>
					<p>
						É vedada a reprodução, total ou parcial, de qualquer conteúdo sem
						expressa autorização.
					</p>
				</div>
				<div className="flex gap-4">
					<Image
						src={"/econverse.png"}
						alt="Econverse logo"
						width={106}
						height={31}
					/>
					<Image src={"/vtex.png"} alt="Vtex logo" width={87} height={31} />
				</div>
			</div>
		</footer>
	);
};

export default Footer;
