var db = require("../models");

module.exports = function(app) {
  // Get all appointments
  app.get("/api/appointments", function(req, res) {
    db.Appointment.findAll({}).then(function(dbAppointments) {
      res.json(dbAppointments);
    });
  });

  // Create a new appointment
  app.post("/api/appointments", function(req, res) {
    db.Appointment.create(req.body).then(function(dbAppointment) {
      res.json(dbAppointment);
    });
  });

  // Delete an appointment by id
  app.delete("/api/appointments/:id", function(req, res) {
    db.Appointment.destroy({ where: { id: req.params.id } }).then(function(dbAppointment) {
      res.json(dbAppointment);
    });
  });
};