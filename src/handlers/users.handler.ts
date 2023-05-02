import { Application, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { UserStore } from "../models";
import { verifyAuthToken } from "./share.handle";

const store = new UserStore();

const index = async (_req: Request, res: Response) => {
	try {
		const users = await store.index();
		res.json(users);
	} catch (error) {
		res.status(401);
		res.json({ error });
	}
};

const show = async (req: Request, res: Response) => {
	try {
		const userId = req.params.id;
		const user = await store.show(userId);
		res.json(user);
	} catch (error) {
		res.status(401);
		res.json({ error });
	}
};

const createUser = async (req: Request, res: Response) => {
	try {
		const { userName, firstName, lastName, password } = req.body;

		const user = { userName, firstName, lastName, password };

		const newUser = await store.createUser(user);

		const token = jwt.sign({ user: newUser }, process.env.TOKEN_SECRET as string);

		res.json(token);
	} catch (error) {
		res.status(400);
		res.json(error);
	}
};

export const users_routes = (app: Application) => {
	app.get("/users", verifyAuthToken, index);
	app.get("/users/:id", verifyAuthToken, show);
	app.post("/users", createUser);
};
