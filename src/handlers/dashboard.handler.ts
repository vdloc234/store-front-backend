import { Request, Response } from "express";
import { DashboardStore } from "../models";

const store = new DashboardStore();

export const mostPopularProducts = async (_req: Request, res: Response) => {
	try {
		const top5PopularProducts = await store.mostPopularProducts();

		res.json(top5PopularProducts);
	} catch (error) {
		res.status(400);
		res.json(error as string);
	}
};

export const currentOrderByUser = async (req: Request, res: Response) => {
	try {
		const userId = req.params.userId;
		const orders = await store.ordersByUser(userId);
		res.json(orders);
	} catch (error) {
		res.status(401);
		res.json({ error });
	}
};

export const completedOrderByUser = async (req: Request, res: Response) => {
	try {
		const userId = req.params.userId;
		const allOrders = await store.ordersByUser(userId);

		const completedOrders = allOrders.filter(
			(order) => order.status === "complete"
		);
		res.json(completedOrders);
	} catch (error) {
		res.status(401);
		res.json({ error });
	}
};

export default {};
