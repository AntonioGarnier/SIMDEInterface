export const loadState = () => {
    try {
        const serializedData = localStorage.getItem('state')
        if (serializedData === null) {
            console.log('Error al cargar el State - First If')
            return undefined // Si no existe el state en el local storage devolvemos
            // undefined para que cargue el state inicial que hayamos definido
        }
        return JSON.parse(serializedData)
        // Si encontramos con exito nuestro storage lo devolvemos.
    } catch (error) {
        console.log(`Error al cargar el State - Message: ${error}`)
        return undefined // Si ocurre algun error, devuelvo undefined para cargar el state inicial.
    }
}

export const removeState = () => {
    if (localStorage.getItem('state'))
        localStorage.removeItem('state')
}

export const saveState = (state) => {
    try {
        // console.log('SaveState')
        // console.log(state)
        const serializedData = JSON.stringify(state)
        // console.log(serializedData)
        localStorage.setItem('state', serializedData)
    } catch (error) {
        console.log(`Error al guardar el State - Message: ${error}`)
    }
}
