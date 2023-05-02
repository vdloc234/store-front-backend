import request = require("supertest");
import { app } from "../../server";
import { User } from "../../models";

const token =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InBhc3N3b3JkIjoiJDJ5JDEwJHZVWFRUVlAxNnBoQzNHRjZRSk5JV3VGWHRrWWljeTB4VnNjaUk5UzcycnVneDVZYTExYUJHIn0sImlhdCI6MTY3MjQ2MTA2MH0.avsOp5vngT233GEJhEpO55ZP0sic-XQ-Viz8zUC29nU";

describe("Users index handler: [GET] /users", () => {
	it("should return status 200", async () => {
		const apiURL = "/users";

		request(app).get(apiURL).auth(token, { type: "bearer" }).expect(200);
	});
});

describe("Users show handler: [GET] /users/:id", () => {
	it("should return status 200", async () => {
		const apiURL = "/users/1";

		request(app).get(apiURL).auth(token, { type: "bearer" }).expect(200);
	});
});

describe("add user handler: [POST] /users", () => {
	it("should return status 200", async () => {
		const apiURL = "/users";

		const newUser: User = {
			firstName: "Wang",
			lastName: "Taozi",
			userName: "good_man_01",
			password: "heyheyhey34*",
		};

		request(app).post(apiURL).send(newUser).expect(200);
	});
});
