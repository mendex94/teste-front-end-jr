import Link from "next/link";
import Image from "next/image";
import {
	PiBoxArrowUp,
	PiCreditCard,
	PiCrownSimple,
	PiHeart,
	PiMagnifyingGlass,
	PiShieldCheck,
	PiShoppingCart,
	PiTruck,
	PiUserCircle,
} from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";
import { Input } from "@/components/Input";

const Header = () => {
	return (
		<header className="max-w-screen-xl mx-auto pt-4">
			<div className="flex justify-evenly border-b border-border-primary pb-1">
				<div className="flex items-center gap-2 text-text-secondary cursor-default">
					<PiShieldCheck className="w-5 h-5" />
					<p className="text-xs  font-medium">
						Compra <span className="font-semibold text-brand">100% segura</span>
					</p>
				</div>
				<div className="flex items-center gap-2 text-text-secondary cursor-default">
					<PiTruck className="w-5 h-5" />
					<p className="text-xs  font-medium">
						<span className="font-semibold text-brand">Frete grátis</span> acima
						de R$ 200
					</p>
				</div>
				<div className="flex items-center gap-2 text-text-secondary cursor-default">
					<PiCreditCard className="w-5 h-5" />
					<p className="text-xs  font-medium">
						<span className="font-semibold text-brand">Parcele</span> suas
						compras
					</p>
				</div>
			</div>
			<div className="py-2 px-14 flex items-center justify-between gap-24 border-b border-border-primary">
				<Link href="/" className="hidden md:flex">
					<Image
						src="/vtex.png"
						alt="Vtex Logo"
						width={139}
						height={50}
						className="w-full h-full"
					/>
				</Link>
				<Input.Root>
					<Input.Input placeholder="O que você está buscando?" />
					<Input.Icon>
						<PiMagnifyingGlass />
					</Input.Icon>
				</Input.Root>
				<button className="md:hidden">
					<RxHamburgerMenu className="w-8 h-8 text-text-secondary" />
				</button>
				<div className="hidden md:flex h-12 gap-8">
					<button>
						<PiBoxArrowUp className="w-8 h-8 text-text-secondary" />
					</button>
					<button>
						<PiHeart className="w-8 h-8 text-text-secondary" />
					</button>
					<button>
						<PiUserCircle className="w-8 h-8 text-text-secondary" />
					</button>
					<button>
						<PiShoppingCart className="w-8 h-8 text-text-secondary" />
					</button>
				</div>
			</div>
			<nav className="px-14 py-2 flex justify-between uppercase text-xs font-semibold text-text-secondary drop-shadow-sm">
				<Link href="#">Todas as categorias</Link>
				<Link href="#">Supermercado</Link>
				<Link href="#">Livros</Link>
				<Link href="#">Moda</Link>
				<Link href="#">Lançamentos</Link>
				<Link href="#" className="text-brand">
					Ofertas do dia
				</Link>
				<Link href="#" className="flex items-center gap-3">
					<PiCrownSimple className="w-5 h-5" />
					Assinatura
				</Link>
			</nav>
		</header>
	);
};

export default Header;
