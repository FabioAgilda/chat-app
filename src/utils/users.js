const users = []

const addUser = ({ id, username, room }) => {
    // Formateo
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    // Validación
    if (!username || !room) {
        return {
            error: 'Introduce Usuario y Sala'
        }
    }

    // Validacion Usuario
    const existingUser = users.find((user) => {
        return user.room === room && user.username === username
    })

    // Comprobacion Usuario
    if (existingUser) {
        return {
            error: 'Usuario Ocupado'
        }
    }

    // Guartdado del Usuario
    const user = { id, username, room }
    users.push(user)
    return { user }
}

const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id)

    if (index !== -1) {
        return users.splice(index, 1)[0]
    }
}

const getUser = (id) => {
    return users.find((user) => user.id === id)
}

const getUsersInRoom = (room) => {
    room = room.trim().toLowerCase()
    return users.filter((user) => user.room === room)
}

module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}