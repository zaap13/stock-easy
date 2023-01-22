import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  user: "postgres",
  password: "root",
  host: "localhost",
  port: 5432,
  database: "stock-easy",
});

export const getAll = async () => {
  try {
    const { rows } = await pool.query("SELECT * FROM stock");
    return rows;
  } catch (error) {
    throw new Error("Algo deu errado");
  }
};

export const getOne = async (id: number) => {
    try {
      const { rows } = await pool.query(`SELECT * FROM stock WHERE id = ${id}`);
      return rows;
    } catch (error) {
      throw new Error("Algo deu errado");
    }
  };

export const add = async (name: string, amount: number) => {
  try {
    await pool.query(
      `INSERT INTO stock (name, amount) VALUES ('${name}', ${amount})`
    );
  } catch (error) {
    throw new Error("Algo deu errado");
  }
};

export const remove = async (id: number) => {
  try {
    await pool.query(`DELETE FROM stock WHERE id = ${id}`);
  } catch (error) {
    throw new Error("Algo deu errado");
  }
};

export const update = async (id: number, name: string, amount: number) => {
  try {
    await pool.query(
      `UPDATE stock SET name = '${name}', amount = ${amount} WHERE id = ${id}`
    );
  } catch (error) {
    throw new Error("Algo deu errado");
  }
};
