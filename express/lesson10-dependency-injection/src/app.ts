import "reflect-metadata";

import express from "express";

import { Container }
from "typedi";

import { AppointmentService }
from "./appointments/AppointmentService";

const app = express();

app.use(express.json());

const appointmentService =
  Container.get(AppointmentService);

/* ---------- HOME ---------- */

app.get("/", (req, res) => {

  res.send(
    "Dependency Injection API Running"
  );

});

/* ---------- BOOK APPOINTMENT ---------- */

app.post(
  "/appointments",

  async (req, res) => {

    try {

      const {
        patient,
        time,
        amount
      } = req.body;

      const result =
        await appointmentService.bookAppointment(
          patient,
          time,
          amount
        );

      res.json(result);

    } catch (e: any) {

      res.status(400).json({
        error: e.message
      });

    }
  }
);

/* ---------- SERVER ---------- */

app.listen(3000, () => {

  console.log(
    "Server running on http://localhost:3000"
  );

});