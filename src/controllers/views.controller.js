import { data } from "../data/data.js"

export const home = (req, res) => {
    const datos = {
        title: 'la Página Principal',
        user: 'Luis'
    }
    res.render('home', datos)
}

export const about = (req, res) => {
    const datos = {
        title: 'About',
        style: 'about'
    }
    res.render('about', datos)
}

export const users = (req, res) => {

    const usuarios = data.map(user => {
        return {
            username: user.username,
            email: user.email,
            role: user.role
        }
    })

    const datos = {
        title: 'Users',
        usuarios: usuarios,
        style: 'about'
    }
    res.render('users', datos)
}