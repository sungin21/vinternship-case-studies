import express, {
  Request,
  Response,
  NextFunction
} from "express";

const app = express();

app.use(express.json());

/* ---------------- TYPES ---------------- */

interface DischargeRequest extends Request {
  dischargeLog?: {
    step: string;
    time: string;
  }[];
}

/* ---------------- LOGGING MIDDLEWARE ---------------- */

function logDischargeRequest(
  req: DischargeRequest,
  res: Response,
  next: NextFunction
) {

  req.dischargeLog = [];

  req.dischargeLog.push({
    step: "requestReceived",
    time: new Date().toISOString()
  });

  next();
}

/* ---------------- DOCTOR CHECK ---------------- */

function doctorSignoffCheck(
  req: DischargeRequest,
  res: Response,
  next: NextFunction
) {

  if (!req.body.doctorSigned) {
    return res.status(400).json({
      error:
        "Doctor sign-off required before discharge."
    });
  }

  req.dischargeLog?.push({
    step: "doctorSignoff",
    time: new Date().toISOString()
  });

  next();
}

/* ---------------- PHARMACY CHECK ---------------- */

function pharmacyReview(
  req: DischargeRequest,
  res: Response,
  next: NextFunction
) {

  if (!req.body.pharmacyChecked) {
    return res.status(400).json({
      error:
        "Pharmacy review required before discharge."
    });
  }

  req.dischargeLog?.push({
    step: "pharmacyReview",
    time: new Date().toISOString()
  });

  next();
}

/* ---------------- INSURANCE CHECK ---------------- */

function insuranceCheck(
  req: DischargeRequest,
  res: Response,
  next: NextFunction
) {

  if (!req.body.insuranceApproved) {
    return res.status(403).json({
      error:
        "Insurance approval required."
    });
  }

  req.dischargeLog?.push({
    step: "insuranceCheck",
    time: new Date().toISOString()
  });

  next();
}

/* ---------------- FOLLOWUP CHECK ---------------- */

function followupCheck(
  req: DischargeRequest,
  res: Response,
  next: NextFunction
) {

  if (!req.body.followupScheduled) {
    return res.status(400).json({
      error:
        "Follow-up appointment must be scheduled."
    });
  }

  req.dischargeLog?.push({
    step: "followupCheck",
    time: new Date().toISOString()
  });

  next();
}

/* ---------------- ROUTE ---------------- */
app.get("/", (req, res) => {
  res.send("Server working");
});

app.post(
  "/discharge",

  logDischargeRequest,
  doctorSignoffCheck,
  pharmacyReview,
  insuranceCheck,
  followupCheck,

  (
    req: DischargeRequest,
    res: Response
  ) => {

    req.dischargeLog?.push({
      step: "dischargeComplete",
      time: new Date().toISOString()
    });

    res.json({
      status: "Discharge complete",
      patient: req.body.patientName,
      log: req.dischargeLog
    });
  }
);

/* ---------------- ERROR HANDLER ---------------- */

app.use(
  (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
  ) => {

    console.error(err);

    res.status(500).json({
      error: err.message
    });
  }
);

/* ---------------- SERVER ---------------- */

app.listen(3000, () => {

  console.log(
    "Hospital system running on port 3000"
  );

});