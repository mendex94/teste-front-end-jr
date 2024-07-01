import Link from "next/link";
import Image from "next/image";
import { PiDevices, PiStorefront, PiHandHeart, PiDress } from "react-icons/pi";
import { MdLiquor } from "react-icons/md";
import { LiaToolsSolid } from "react-icons/lia";
import { TbTreadmill } from "react-icons/tb";
import Carrousel from "@/components/Carrousel";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import { ProductsResponse } from "@/@types/products";

export default async function Home() {
	const response = await fetch(
		"https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json"
	);

	const data: ProductsResponse = await response.json();

	return (
		<main>
			<div className="min-w-full h-96 bg-hero-image bg-center bg-cover bg-no-repeat relative">
				<div className="w-full h-full absolute top-0 left-0 backdrop-brightness-50" />
				<div className="max-w-screen-xl px-4 md:px-0 mx-auto h-full flex flex-col justify-evenly relative z-40">
					<h1 className="text-text-foreground text-5xl font-semibold max-w-lg">
						Venha conhecer nossas promoções
					</h1>
					<h2 className="text-text-foreground text-4xl font-semibold pt-4 pb-16">
						50% Off nos produtos
					</h2>
					<button className="bg-brand text-text-foreground font-semibold text-lg w-56 h-14 rounded-lg">
						Ver produtos
					</button>
				</div>
			</div>
			<div className="grid grid-cols-3 px-4 md:px-0 max-w-screen-xl mx-auto xl:flex justify-between pt-8 gap-8">
				<div className="text-brand max-w-32">
					<div className="shadow-lg rounded-xl p-8">
						<PiDevices className="w-16 h-16" />
					</div>
					<p className="text-base font-semibold text-center pt-6">Tecnologia</p>
				</div>
				<div className="text-text-primary max-w-32">
					<div className="shadow-lg rounded-xl p-8 bg-background-primary">
						<PiStorefront className="w-16 h-16" />
					</div>
					<p className="text-base font-semibold text-center pt-6">
						Supermercado
					</p>
				</div>
				<div className="text-text-primary max-w-32">
					<div className="shadow-lg rounded-xl p-8 bg-background-primary">
						<MdLiquor className="w-16 h-16" />
					</div>
					<p className="text-base font-semibold text-center pt-6">Bebidas</p>
				</div>
				<div className="text-text-primary max-w-32">
					<div className="shadow-lg rounded-xl p-8 bg-background-primary">
						<LiaToolsSolid className="w-16 h-16" />
					</div>
					<p className="text-base font-semibold text-center pt-6">
						Ferramentas
					</p>
				</div>
				<div className="text-text-primary max-w-32">
					<div className="shadow-lg rounded-xl p-8 bg-background-primary">
						<PiHandHeart className="w-16 h-16" />
					</div>
					<p className="text-base font-semibold text-center pt-6">Saúde</p>
				</div>
				<div className="text-text-primary max-w-32">
					<div className="shadow-lg rounded-xl p-8 bg-background-primary">
						<TbTreadmill className="w-16 h-16" />
					</div>
					<p className="text-base font-semibold text-center pt-6">
						Esporte e fitness
					</p>
				</div>
				<div className="text-text-primary max-w-32">
					<div className="shadow-lg rounded-xl p-8 bg-background-primary">
						<PiDress className="w-16 h-16" />
					</div>
					<p className="text-base font-semibold text-center pt-6">Moda</p>
				</div>
			</div>
			<div className="max-w-screen-xl mx-auto pt-10 flex items-center text-brand before:flex-1 before:border-t before:border-divider before:me-6 after:flex-1 after:border-t after:border-divider after:ms-6 px-16 font-bold text-3xl">
				Produtos relacionados
			</div>
			<div className="max-w-screen-xl mb-5 mx-auto border border-divider h-8 divide-x divide-divider flex justify-evenly mt-4 font-normal text-base">
				<button className="w-full text-brand uppercase font-bold">
					Celular
				</button>
				<button className="w-full text-text-primary uppercase">
					Acessórios
				</button>
				<button className="w-full text-text-primary uppercase">Tablets</button>
				<button className="w-full text-text-primary uppercase">
					Notebooks
				</button>
				<button className="w-full text-text-primary uppercase">TVs</button>
				<button className="w-full text-text-primary uppercase">
					Ver todos
				</button>
			</div>
			<Carrousel products={data.products} />
			<div className="max-w-screen-xl mx-auto flex flex-col md:flex-row md:justify-between pt-16 px-4 gap-4 md:px-0 md:gap-0">
				<Card />
				<Card />
			</div>
			<div className="max-w-screen-xl mx-auto pt-10 flex items-center text-brand before:flex-1 before:border-t before:border-divider before:me-6 after:flex-1 after:border-t after:border-divider after:ms-6 px-16 font-bold text-3xl">
				Produtos relacionados
			</div>
			<div className="max-w-screen-2xl mx-auto text-center">
				<Link href="#" className="font-bold text-text-primary text-base">
					Ver todos
				</Link>
			</div>
			<div className="max-w-screen-xl mx-auto flex flex-col md:flex-row md:justify-between pt-8 px-4 gap-4 md:px-0 md:gap-0">
				<Card />
				<Card />
			</div>
			<div className="max-w-screen-xl mx-auto pt-10 flex items-center text-brand before:flex-1 before:border-t before:border-divider before:me-6 after:flex-1 after:border-t after:border-divider after:ms-6 px-16 font-bold text-3xl">
				Navegue por marcas
			</div>
			<div className="max-w-screen-xl mx-auto pt-16 flex items-center justify-center">
				<div className="grid grid-cols-2  gap-4 items-center justify-between md:w-full md:grid-flow-col">
					<div className="w-52 h-52 rounded-full shadow-xl flex items-center justify-center">
						<Image src={"/vtex.png"} alt="Vtex logo" width={172} height={82} />
					</div>
					<div className="w-52 h-52 rounded-full shadow-xl flex items-center justify-center">
						<Image src={"/vtex.png"} alt="Vtex logo" width={172} height={82} />
					</div>
					<div className="w-52 h-52 rounded-full shadow-xl flex items-center justify-center">
						<Image src={"/vtex.png"} alt="Vtex logo" width={172} height={82} />
					</div>
					<div className="w-52 h-52 rounded-full shadow-xl flex items-center justify-center">
						<Image src={"/vtex.png"} alt="Vtex logo" width={172} height={82} />
					</div>
					<div className="w-52 h-52 rounded-full shadow-xl flex items-center justify-center">
						<Image src={"/vtex.png"} alt="Vtex logo" width={172} height={82} />
					</div>
				</div>
			</div>
			<Footer />
		</main>
	);
}
