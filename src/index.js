import express from 'express';
import cors from 'cors'
import { engine } from 'express-handlebars'
import viewRouter from './routes/views.route.js'
import usersRouter from './routes/users.route.js'

const app = express()
const PORT = 3000

app.use(cors())
//Config del motor de plantillas
app.engine('handlebars', engine({
    defaultLayout: 'main',
    layoutsDir: './src/views/layouts',
    partialsDir: './src/views/partials'
}))
app.set('view engine', 'handlebars')
app.set('views', './src/views')

app.use(express.static('public'))

app.use('/', viewRouter)
app.use('/api/users', usersRouter)

app.listen(PORT, () => console.log('Listen to port http://localhost:3000'))