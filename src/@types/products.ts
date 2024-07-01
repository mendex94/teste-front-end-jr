export interface ProductsResponse {
	success: boolean;
	products: Product[];
}

export interface Product {
	productName: string;
	descriptionShort: string;
	photo: string;
	price: number;
}
