const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const { mongoose } = require("mongoose");
const app = express();
const cookieParser = require("cookie-parser");
const passport = require("passport");
const coookieSession = require("cookie-session");
const authRoute = require("./routes/authRoutes");
require("./passport");
//database connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log("Database not connected", err));

const allowedDomains = [
  "http://127.0.0.1:5173",
  "http://localhost:5173",
  "http://localhost:8000",
];
app.use(
  cors({
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
    origin: (origin, callback) => {
      // bypass the requests with no origin (like curl requests, mobile apps, etc )
      if (!origin) return callback(null, true);

      if (allowedDomains.indexOf(origin) === -1) {
        var msg = `This site ${origin} does not have an access. Only specific domains are allowed to access it.`;
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
  })
);
//middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(
  coookieSession({
    name: "session",
    keys: ["xerocode"],
    maxAge: 24 * 60 * 60 * 100 * 7,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", authRoute);

const port = 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
