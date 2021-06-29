const expressFunction = require("express")
const expressApp = expressFunction()
expressApp.use(expressFunction.json())

expressApp.use("/api", require("./api/books"))

expressApp.listen(3000, () => {
    console.log("Listening on port 3000")
})