import express, {
  Request,
  Response
} from "express";

import {
  body,
  validationResult
} from "express-validator";

const app = express();

app.use(express.json());

/* ---------------- VALIDATION ---------------- */

const applicationValidation = [

  body("name")
    .isString()
    .notEmpty()
    .withMessage("Name is required"),

  body("email")
    .isEmail()
    .withMessage("Valid email is required"),

  body("birthdate")
    .isISO8601()
    .withMessage(
      "Birthdate must be valid (YYYY-MM-DD)"
    ),

  body("grades")
    .isArray({ min: 1 })
    .withMessage(
      "At least one grade is required"
    ),

  body("grades.*")
    .isNumeric()
    .withMessage(
      "All grades must be numbers"
    ),

  body("essay")
    .isLength({ min: 100 })
    .withMessage(
      "Essay must be at least 100 characters"
    ),

  body("recommendationLetter")
    .isURL()
    .withMessage(
      "Recommendation letter link must be valid"
    ),

  body("portfolioLink")
    .optional()
    .isURL()
    .withMessage(
      "A valid portfolio link is required for art applicants"
    ),
];

/* ---------------- HOME ROUTE ---------------- */

app.get("/", (req, res) => {
  res.send("University Admission API Running");
});

/* ---------------- APPLY ROUTE ---------------- */

app.post(
  "/apply",

  applicationValidation,

  (
    req: Request,
    res: Response
  ) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {

      return res.status(400).json({
        errors: errors.array()
      });

    }

    res.json({
      status:
        "Application received successfully",
      data: req.body
    });

  }
);

/* ---------------- SERVER ---------------- */

app.listen(3000, () => {

  console.log(
    "Server running on http://localhost:3000"
  );

});