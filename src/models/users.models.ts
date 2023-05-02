import bcrypt from "bcrypt";
import Client from "../database";
import { User } from "./types";

export class UserStore {
	async authenticate(username: string, password: string): Promise<User | null> {
		const conn = await Client.connect();
		const sql = "SELECT password FROM users WHERE user_name=($1)";

		const result = await conn.query(sql, [username]);

		const user = result.rows[0];

		conn.release();

		if (user) {
			const pepper = process.env.BCRYPT_PASSWORD;
			if (bcrypt.compareSync(password + pepper, user.password)) {
				return user;
			}
		}

		return null;
	}

	async index(): Promise<User[]> {
		try {
			const conn = await Client.connect();
			const sql = "SELECT * FROM users";

			const result = await conn.query(sql);

			conn.release();

			return result.rows;
		} catch (err) {
			throw new Error(`Could not get users. Error: ${err}`);
		}
	}

	async show(id: string): Promise<User> {
		try {
			const sql = "SELECT * FROM users WHERE id=($1)";
			const conn = await Client.connect();

			const result = await conn.query(sql, [id]);

			conn.release();

			return result.rows[0];
		} catch (err) {
			throw new Error(`Could not get user ${id}. Error: ${err}`);
		}
	}

	async createUser(user: User): Promise<User | null> {
		try {
			const conn = await Client.connect();
			const sql =
				"INSERT INTO users (user_name, first_name, last_name, password) VALUES ($1, $2, $3, $4)";

			const pepper = process.env.BCRYPT_PASSWORD;
			const saltRounds = process.env.SALT_ROUNDS || "";
			const hash = bcrypt.hashSync(user.password + pepper, parseInt(saltRounds));

			const result = await conn.query(sql, [
				user.userName,
				user.firstName,
				user.lastName,
				hash,
			]);

			if (result.rows.length) {
				return result.rows[0];
			}
			return null;
		} catch (_error) {
			throw new Error("There is an error occured");
		}
	}
}

export default {};
