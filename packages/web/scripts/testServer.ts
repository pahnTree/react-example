import path from 'path'
import express from 'express'

const app = express()

app.use(express.static(path.join(__dirname, "../build")));
app.listen(3000);
