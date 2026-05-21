import express from "express";

import { InMemoryCourseRepository }
from "./repositories/InMemoryCourseRepository";

import { CourseService }
from "./services/CourseService";

const app = express();

app.use(express.json());

const courseRepo =
  new InMemoryCourseRepository();

const courseService =
  new CourseService(courseRepo);

/* ---------- HOME ---------- */

app.get("/", (req, res) => {
  res.send(
    "Repository Pattern API Running"
  );
});

/* ---------- ENROLL ---------- */

app.post(
  "/courses/:id/enroll",

  async (req, res) => {

    try {

      const result =
        await courseService.enroll(
          String(req.params.id),
          req.body.studentId
        );

      res.json(result);

    } catch (e: any) {

      res.status(400).json({
        error: e.message,
      });

    }
  }
);

/* ---------- STUDENT COURSES ---------- */

app.get(
  "/students/:id/courses",

  async (req, res) => {

    const courses =
      await courseService.getStudentCourses(
        String(req.params.id)
      );

    res.json(courses);
  }
);

/* ---------- SERVER ---------- */

app.listen(3000, () => {

  console.log(
    "Server running on http://localhost:3000"
  );

});