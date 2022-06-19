const db = require("../models");
const Tutorial = db.tutorials;
const Op = db.Sequelize.Op;
// Create and Save a new Tutorial
exports.create = (req, res) => {
    create(object)
};
// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    findAll()
};
// Find a single Tutorial with an id
exports.findOne = (req, res) => {
    findByPk(id)
};
// Update a Tutorial by the id in the request
exports.update = (req, res) => {
    update(data, where, { id: id })
};
// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
    destroy(where, { id: id })
};
// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
    destroy(where, {})
};
// Find all published Tutorials
exports.findAllPublished = (req, res) => {
    findAll({ where: { title: "Tut#1" } })
};