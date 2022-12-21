const express = require("express");
const app = express();
const port = 3000;
const elevatorsRouter = require ("./routes/elevators")
const interventionsRouter = require ("./routes/interventions")
const usersRouter = require ("./routes/users")
const columnsRouter = require ("./routes/columns")
const buildingsRouter = require ("./routes/buildings")
const batteriesRouter = require ("./routes/batteries")
const customersRouter = require ("./routes/customers")
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use("/elevators", elevatorsRouter)
/* Error handler middleware */
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({ message: err.message });
    return;
});
app.use("/interventions", interventionsRouter)
/* Error handler middleware */
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({ message: err.message });
    return;
});
app.use("/users", usersRouter)
/* Error handler middleware */
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({ message: err.message });
    return;
});
app.use("/columns", columnsRouter)
/* Error handler middleware */
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({ message: err.message });
    return;
});
app.use("/buildings", buildingsRouter)
/* Error handler middleware */
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({ message: err.message });
    return;
});
app.use("/batteries", batteriesRouter)
/* Error handler middleware */
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({ message: err.message });
    return;
});
app.use("/customers", customersRouter)
/* Error handler middleware */
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({ message: err.message });
    return;
});
app.get("/", (req, res) => {
  res.json({ yay: "we're up and running" });
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});