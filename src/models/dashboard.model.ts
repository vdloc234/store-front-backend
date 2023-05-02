import Client from "../database";
import { DbOrder, Order } from "./types";

export class DashboardStore {
	async mostPopularProducts() {
		try {
			const conn = await Client.connect();
			const sql1 = "SELECT * FROM order_products";

			const result1 = await conn.query(sql1);
			if (!result1) {
				return null;
			}
			const allOrders = result1.rows;
			const productIds = allOrders.map((order: DbOrder) => order.product_id);
			const uniqueProductIds = new Set(productIds);

			const productsWithQuantity = Array.from(uniqueProductIds).map(
				(productId: number) => ({
					productId,
					quantity: allOrders.filter(
						(order: DbOrder) => order.product_id === productId
					).length,
				})
			);

			const top5PopularProducts = productsWithQuantity.sort(
				(a, b) => b.quantity - a.quantity
			);

			const [top1, top2, top3, top4, top5] = top5PopularProducts;

			const top5PopularProductIds = [
				top1.productId,
				top2.productId,
				top3.productId,
				top4.productId,
				top5.productId,
			];

			const sql2 = "SELECT * FROM products WHERE id IN (($1, $2, $3, $4, $5))";

			const result2 = await conn.query(sql2, [...top5PopularProductIds]);
			const mostPopularProducts = result2.rows;

			conn.release();
			return mostPopularProducts;
		} catch (error) {
			throw new Error(`Can not get most popular products. Error: ${error}`);
		}
	}

	async ordersByUser(userId: string): Promise<Order[]> {
		try {
			const sql =
				"SELECT * FROM orders INNER JOIN order_products ON orders.id = order_products.order_id WHERE orders.user_id=($1)";
			const conn = await Client.connect();

			const result = await conn.query(sql, [userId]);

			conn.release();

			return result.rows;
		} catch (err) {
			throw new Error(`Could not get order ${userId}. Error: ${err}`);
		}
	}
}
