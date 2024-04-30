import { data } from "../data/data.js"

export const users = (req, res) => {

    const usuarios = data.map(user => {
        return {
            username: user.username,
            email: user.email,
            role: user.role
        }
    })

    const datos = {
        status: 200,
        payload: usuarios,
    }
    res.status(200).json(datos)
}