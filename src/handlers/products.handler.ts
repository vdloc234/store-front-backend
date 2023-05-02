import { Application, Request, Response } from "express";
import { ProductStore } from "../models";
import { verifyAuthToken } from "./share.handle";
import { mostPopularProducts } from "./dashboard.handler";

const store = new ProductStore();

const index = async (_req: Request, res: Response) => {
	try {
		const products = await store.index();
		res.json(products);
	} catch (error) {
		res.status(401);
		res.json({ error });
	}
};

const show = async (req: Request, res: Response) => {
	try {
		const productId = req.params.id;
		const product = await store.show(productId);
		res.json(product);
	} catch (error) {
		res.status(401);
		res.json({ error });
	}
};

const addProduct = async (req: Request, res: Response) => {
	try {
		const { name, price, category } = req.body;
		const product = { name, price, category };
		const newProduct = await store.addProduct(product);

		res.json(newProduct);
	} catch (error) {
		res.status(400);
		res.json(error);
	}
};

const productsByCategory = async (req: Request, res: Response) => {
	try {
		const { category } = req.params;
		const foundProducts = await store.productsByCategory(
			(category || "").toString()
		);
		res.json(foundProducts);
	} catch (error) {
		res.status(400);
		res.json(error);
	}
};

export const products_routes = (app: Application) => {
	app.get("/products", index);
	app.get("/products/:id", show);
	app.post("/products", verifyAuthToken, addProduct);
	app.get("/products/category/:category", productsByCategory);
	app.get("/5-most-popular-products", mostPopularProducts);
};
