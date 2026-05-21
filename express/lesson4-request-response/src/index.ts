import express, {
  Request,
  Response,
  NextFunction,
} from "express";

import { z } from "zod";

const app = express();

app.use(express.json());

/* ---------------- TYPES ---------------- */

interface RedeemRequest {
  customerId: string;
  points: number;
}

interface ApiResponse<T = any> {
  status: "success" | "error";
  data?: T;
  error?: string;
}

/* ---------------- ZOD VALIDATION ---------------- */

const RedeemSchema = z.object({
  customerId: z.string().min(3),
  points: z.number().int().positive(),
});

/* ---------------- VALIDATION MIDDLEWARE ---------------- */

function validate(schema: z.ZodTypeAny) {
  return (
    req: Request,
    res: Response,
    next: NextFunction
  ): any => {

    const result = schema.safeParse(req.body);

    if (!result.success) {
      return res.status(400).json({
        status: "error",
        error: result.error.issues[0]?.message || "Validation failed",
      });
    }

    req.body = result.data;

    next();
  };
}

/* ---------------- CUSTOM ERROR ---------------- */

class ApiError extends Error {

  statusCode: number;

  constructor(statusCode: number, message: string) {
    super(message);

    this.statusCode = statusCode;
  }
}

/* ---------------- SAMPLE DATABASE ---------------- */

const members = [
  {
    customerId: "alice123",
    points: 500,
  },
];

/* ---------------- ROUTE ---------------- */
app.get("/", (req: Request, res: Response) => {
  res.send("FreshMart Loyalty API Running 🚀");
});

app.post(
  "/redeem",
  validate(RedeemSchema),

  (
    req: Request<{}, {}, RedeemRequest>,
    res: Response<ApiResponse>
  ) => {

    const { customerId, points } = req.body;

    const member = members.find(
      (m) => m.customerId === customerId
    );

    if (!member) {
      throw new ApiError(
        404,
        "Customer not found"
      );
    }

    if (member.points < points) {
      throw new ApiError(
        400,
        "Insufficient points"
      );
    }

    member.points -= points;

    res.json({
      status: "success",
      data: {
        customerId,
        remainingPoints: member.points,
      },
    });
  }
);

/* ---------------- GLOBAL ERROR HANDLER ---------------- */

app.use(
  (
    err: any,
    req: Request,
    res: Response,
    next: NextFunction
  ) => {

    if (err instanceof ApiError) {
      return res.status(err.statusCode).json({
        status: "error",
        error: err.message,
      });
    }

    res.status(500).json({
      status: "error",
      error: "Internal Server Error",
    });
  }
);

/* ---------------- SERVER ---------------- */

app.listen(3000, () => {

  console.log(
    "Server running on http://localhost:3000"
  );

});