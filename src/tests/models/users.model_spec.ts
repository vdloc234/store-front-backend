import { User } from "../types";
import { UserStore } from "../users.models";

const store = new UserStore();

describe("Users Model", () => {
	it("should have a index method", () => {
		expect(store.index).toBeDefined();
	});

	it("should have a show method", () => {
		expect(store.show).toBeDefined();
	});

	it("should have a create method", () => {
		expect(store.createUser).toBeDefined();
	});
});

describe("show user", () => {
	it("should got user has id = 1", async () => {
		const expectedRes: User = {
			id: 1,
			userName: "locvd",
			firstName: "loc",
			lastName: "vuong danh",
		};

		const user = await store.show("1");

		expect(user.firstName + user.lastName + user.userName).toEqual(
			expectedRes.firstName + expectedRes.lastName + expectedRes.userName
		);
	});
});
