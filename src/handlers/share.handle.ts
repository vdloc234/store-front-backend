import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export const verifyAuthToken = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const authorizationHeader = req.headers.authorization;
		const token = authorizationHeader?.split(" ")[1] || "";
		const decoded = jwt.verify(token, process.env.TOKEN_SECRET as string);

		if (!decoded) {
			return;
		}

		next();
	} catch (error) {
		res.status(401);
	}
};
