import express from 'express'
import cors from 'cors'

const app = express()

const PORT = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

// app.use() routes

app.listen(PORT, () => console.log('listening on port ' + PORT))
