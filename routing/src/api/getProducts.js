let getProducts = async () => {
    try {
        let response = await fetch("https://fakestoreapi.com/products")
        let data = await response.json()
        return data
    } catch (error) {
        return error
    }
}

export default getProducts
