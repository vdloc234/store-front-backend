import { Application } from "express";
import { completedOrderByUser, currentOrderByUser } from "./dashboard.handler";
import { verifyAuthToken } from "./share.handle";

export const orders_routes = (app: Application) => {
	app.get("/orders-by-user/:userId", verifyAuthToken, currentOrderByUser);
	app.get(
		"/completed-orders-by-user/:userId",
		verifyAuthToken,
		completedOrderByUser
	);
};
