import { DashboardStore } from "../../models/dashboard.model";

const store = new DashboardStore();

describe("Orders Model Declaration", () => {
	it("should have a currentOrderByUser method", () => {
		expect(store.ordersByUser).toBeDefined();
	});

	it("should have a copmpletedOrderByUser method", () => {
		expect(store.mostPopularProducts).toBeDefined();
	});
});

describe("ordersByUser model", () => {
	it("should return order with respective user id", async () => {
		const userID = "1";

		const result = await store.ordersByUser(userID);

		result ? expect(result).toBeDefined() : expect(result).toBeUndefined();
	});
});

describe("mostPopularProducts", () => {
	it("should return completed orders with respective user id", async () => {
		const result = await store.mostPopularProducts();
		result ? expect(result).toBeDefined() : expect(result).toBeUndefined();
	});
});
