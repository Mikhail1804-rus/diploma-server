const express = require('express')
const cors = require("cors");
const {urlencoded} = require("express");

const PORT = 3000
const app = express()

app.use(express.json())
app.use(cors());
app.use(urlencoded())

app.listen(PORT, async () => {
    const reviewRouter = require("./routes/Review.routes")
    const timesheetRouter = require("./routes/Timesheet.routes")
    const coursesRouter = require("./routes/Course.routes")
    const requestsRouter = require("./routes/Request.routes")

    app.use('/api/reviews', reviewRouter)
    app.use('/api/timesheet', timesheetRouter)
    app.use('/api/courses', coursesRouter)
    app.use('/api/requests', requestsRouter)


    console.log(`server is running port ${PORT}`)
})
