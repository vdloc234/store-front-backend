import request from "supertest";
import { app } from "../../server";

describe("Products show handler: [GET] /products", () => {
	it("should return status 200", async () => {
		const apiURL = "/products";

		request(app).get(apiURL).expect(200);
	});
});

describe("Products index handler:[GET] /products/:id", () => {
	it("should return status 200", async () => {
		const apiURL = "/product/1";

		request(app).get(apiURL).expect(200);
	});
});

describe("Products get by category handler: [GET] /products/category/:category", () => {
	it("should return status 200", async () => {
		const apiURL = "/products/category/Fruit";

		request(app).get(apiURL).expect(200);
	});
});

describe("Products add product handler: [POST] /product", () => {
	it("should return status 200", async () => {
		const apiURL = "/product";

		request(app).get(apiURL).expect(200);
	});
});
