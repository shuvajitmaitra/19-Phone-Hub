const getStoredPhones = () => {
    const storedPhones = localStorage.getItem('phone-id')
    if (storedPhones) {
        return JSON.parse(storedPhones)
    }
    else {
        return []
    }
}

const savaLocalStorage = id => {
    const storedPhones = getStoredPhones()
    const isExist = storedPhones.find(item => item === id)
    if (!isExist) {
        storedPhones.push(id)
        localStorage.setItem('phone-id', JSON.stringify(storedPhones))
    }


}

export { savaLocalStorage, getStoredPhones };