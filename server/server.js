const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const studentStore = require("./routes/studentStore");
const { NotFoundError } = require("./utils/errors");

const app = express();

//! Middleware
app.use(morgan("tiny"));
app.use(express.json());
app.use(cors());

//! Routes
app.use("/student-store", studentStore); //! this is a middleware too

//! Error handling
//* This will handle all 404 Errors that were not matched by a route
app.use((req, res, next) => {
	return next(new NotFoundError());
});

//* Generic Error handler - anything that is unhandle wull be hnadled here
app.use((error, req, res, next) => {
	const status = error.status || 500;
	message = error.message;
	return res.status(status).json({
		error: { message: message, status: status },
	});
});

//! End of Error handling

const port = 3001;

app.listen(port, () => {
	console.log(`🚀 Server listening on port ${port}`);
});
