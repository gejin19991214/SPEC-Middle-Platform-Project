const mysql = require("mysql");
const dotenv = require("dotenv");
let instance = null;
dotenv.config();

const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USERNAME,
  password: process.env.PASSWORD,
  port: process.env.PORT,
  database: process.env.DATABASE,
});

connection.connect(function (err) {
  if (err) {
    return console.error("error: " + err.message);
  }
  console.log("db " + connection.state);
});

class DbService {
  static getDbServiceInstance() {
    return instance ? instance : new DbService();
  }

  async getAllData() {
    try {
      const response = await new Promise((resolve, reject) => {
        const query = "select count(*) from cpu2006_results";

        connection.query(query, (err, results) => {
          if (err) {
            reject(new Error(err.message));
          }
          resolve(results);
        });
      });
      return response;
    } catch (err) {
      console.log(err);
    }
  }

  async searchByFilter(cpu, memory, processor, rating) {
    try {
      const response = await new Promise((resolve, reject) => {
        const query = `select system_name, cpu_cores, mem_details, processor_name, grade from system_total where cpu_cores <= ? and memory <= ? and processor_name like CONCAT(?, "%") and grade <= ? limit 6`;
        connection.query(query, [cpu, memory, processor, rating], (err, results) => {
          if (err) {
            reject(new Error(err.message));
          }
          resolve(results);
        });
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async searchByName(name) {
    try {
      const response = await new Promise((resolve, reject) => {
        const query = `select cpu_cores, new_memory_des, processor_name, system_name from system_total where system_name like CONCAT(?, "%") or processor_name like CONCAT(?, "%") limit 10`;
        connection.query(query, [name, name], (err, results) => {
          if (err) {
            reject(new Error(err.message));
          }
          resolve(results);
        });
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = DbService;
