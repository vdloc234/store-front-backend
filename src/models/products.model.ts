// @ts-ignore
import Client from "../database";
import { Product, User } from "./types";

export class ProductStore {
	async index(): Promise<Product[]> {
		try {
			const conn = await Client.connect();
			const sql = "SELECT * FROM products";

			const result = await conn.query(sql);

			conn.release();

			return result.rows;
		} catch (err) {
			throw new Error(`Could not get products. Error: ${err}`);
		}
	}

	async show(id: string): Promise<Product> {
		try {
			const sql = "SELECT * FROM products WHERE id=($1)";
			const conn = await Client.connect();

			const result = await conn.query(sql, [id]);

			conn.release();

			return result.rows[0];
		} catch (err) {
			throw new Error(`Could not get product ${id}. Error: ${err}`);
		}
	}

	async addProduct(product: Product): Promise<Product> {
		try {
			const sql =
				"INSERT INTO products (name, price, category) VALUES($1, $2, $3) RETURNING *";
			const conn = await Client.connect();

			const result = await conn.query(sql, [
				product.name,
				product.price,
				product?.category ?? null,
			]);

			const insertedProduct = result.rows[0];
			conn.release();

			return insertedProduct;
		} catch (err) {
			throw new Error(`Could not add product ${product.name}. Error: ${err}`);
		}
	}

	async productsByCategory(category: string | null): Promise<Product> {
		try {
			const sql =
				"SELECT * FROM products WHERE category=($1)";

			const conn = await Client.connect();
			const result = await conn.query(sql, [category]);

			const insertedProduct = result.rows[0];
			conn.release();

			return insertedProduct;
		} catch (err) {
			throw new Error(`Could not add product with category ${category}. Error: ${err}`);
		}
	}
}
