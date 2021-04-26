const {
  addData,
  getAllData,
  getSingleData,
  deleteData,
  updateData,
} = require("../models/crud.model");
module.exports = (app) => {
  let routes = require("express").Router();
  routes.post("/add-data", async (req, res) => {
    try {
      let result = await addData(req.body);
      return res.send({
        status: "success",
        message: "Success: added data",
        result,
      });
    } catch (err) {
      return res.send({
        status: "fail",
        code: "add/error",
        result: error,
      });
    }
  });

  routes.get("/get-data", async (req, res) => {
    try {
      let result = await getAllData();
      return res.send({
        status: "success",
        message: "Success: retrieved all data",
        result,
      });
    } catch (error) {
      return res.send({
        status: "fail",
        ccode: "get-all/error",
        result: error,
      });
    }
  });
  routes.get("/get-single-data/:id", async (req, res) => {
    try {
      let result = await getSingleData(req.params.id);
      return res.send({
        status: "success",
        message: "Success: retrieved data",
        result,
      });
    } catch (error) {
      return res.send({
        status: "fail",
        ccode: "get-single/error",
        result: error,
      });
    }
  });

  routes.post("/update-data/:id", async (req, res) => {
    try {
      let result = await updateData(req.params.id, req.body);
      return res.send({
        status: "success",
        message: "Success: updated data",
        result,
      });
    } catch (error) {
      return res.send({
        status: "fail",
        ccode: "update/error",
        result: error,
      });
    }
  });
  routes.post("/delete-data/:id", async (req, res) => {
    try {
      let result = await deleteData(req.params.id);
      return res.send({
        status: "success",
        message: "Success: deleted data",
        result,
      });
    } catch (error) {
      return res.send({
        status: "fail",
        ccode: "delete-data/error",
        result: error,
      });
    }
  });
  return routes;
};
