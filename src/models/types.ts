export type Product = {
	id?: number;
	name: string;
	price: number;
	category?: string;
};

export type User = {
	id?: number;
	userName: string;
	firstName: string;
	lastName: string;
	password?: string;
};

export type Order = {
	id?: number;
	products: Product[];
	userId?: number;
	status: "active" | "complete";
};

export type DbOrder = {
	id: number;
	product_id: number;
	user_id: number;
	quantity: number;
};

export default {};
