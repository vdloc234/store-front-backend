import request from "supertest";
import { app } from "../../server";

const token =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InBhc3N3b3JkIjoiJDJ5JDEwJHZVWFRUVlAxNnBoQzNHRjZRSk5JV3VGWHRrWWljeTB4VnNjaUk5UzcycnVneDVZYTExYUJHIn0sImlhdCI6MTY3MjQ2MTA2MH0.avsOp5vngT233GEJhEpO55ZP0sic-XQ-Viz8zUC29nU";

describe("Get order by orderId handler: [GET] /orders-by-user/:userId", () => {
	it("should return status 200", async () => {
		const apiURL = "/orders-by-user/1";

		request(app).get(apiURL).auth(token, { type: "bearer" }).expect(200);
	});
});

describe("Get completed orders handler: [GET] /completed-orders-by-user/:userId", () => {
	it("should return status 200", async () => {
		const apiURL = "/completed-orders-by-user/:1";

		request(app).get(apiURL).auth(token, { type: "bearer" }).expect(200);
	});
});
