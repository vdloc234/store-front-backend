import { ProductStore } from "../products.model";

const store = new ProductStore();

describe("Products Model Declaration", () => {
	it("should have an index method", () => {
		expect(store.index).toBeDefined();
	});

	it("should have a show method", () => {
		expect(store.show).toBeDefined();
	});

	it("should have a create method", () => {
		expect(store.addProduct).toBeDefined();
	});
});

describe("index api works", () => {
  it("should list all products", async () => {
    const products = await store.index();

    expect(products).toBeDefined();
  });
})


describe("show api works", () => {
  it("should return product id = 1", async () => {
    const product = await store.show('1');

    expect(product).toBeDefined();
  });
});

describe("getProductsByCategory", () => {
  it("should return products with category = Food", async () => {
    const products = await store.productsByCategory("Food");

    expect(products).toBeDefined();
  });
});

describe("addProduct", () => {
  it("should add Product to database", async () => {
    // Arrange
    const product = {
      "id": 11,
      "name": "Orange",
      "description": "",
      "image": "",
      "price": "35000.00",
      "unit": "kg",
      "currency": "VND",
      "category": "Fruit",
      "inventory": 34582
    };
    // Act
    const addedProduct = await productModel.addProduct(product);
    const allProducts = await productModel.getAllProducts();
    const found = allProducts?.find((item) => item.id === addedProduct?.id);

    // Assert
    if (addedProduct && allProducts) {
      expect(found).toEqual(addedProduct);
    }
  });
});
