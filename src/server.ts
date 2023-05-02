import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import { orders_routes, products_routes, users_routes } from "./handlers";

export const app: express.Application = express();
const port: string = "0.0.0.0:3000";

app.use(bodyParser.json());

app.get("/", function (req: Request, res: Response) {
	res.send("Hello World!");
});

users_routes(app);
products_routes(app);
orders_routes(app);

app.listen(3000, function () {
	console.log(`starting app on: ${port}`);
});
