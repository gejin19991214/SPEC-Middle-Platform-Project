const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const dbService = require("./dbService");

// read
app.get("/getAll", (request, response) => {
  const db = dbService.getDbServiceInstance();
  const result = db.getAllData();
  result
    .then((data) => {
      response.json(data);
    })
    .catch((err) => {
      console.error(err);
    });
  //   console.log(result);
  //   response.json({
  //     success: true,
  //   });
});

// search
app.get("/search/:name", (request, response) => {
  const { name } = request.params;
  const db = dbService.getDbServiceInstance();
  const result = db.searchByName(name);

  result
    .then((data) => {
      response.json(data);
    })
    .catch((err) => {
      console.error(err);
    });
});

app.get("/filter/:cpu/:memory/:processor/:rating", (request, response) => {
  const { cpu, memory, processor, rating } = request.params;
  const db = dbService.getDbServiceInstance();
  const result = db.searchByFilter(cpu, memory, processor, rating);

  result
    .then((data) => {
      response.json(data);
    })
    .catch((err) => {
      console.error(err);
    });
})

app.listen(process.env.LOCALPORT, () => console.log("app is running"));
