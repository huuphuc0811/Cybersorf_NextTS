export const fetchProducts = async () => {
    try {
        const response = await fetch("https://apistore.cybersoft.edu.vn/api/Product");
        const result = await response.json();
        return result.content;
    } catch (error) {
        console.error("Error Data", error);
    }
}
export const fetchProductById = async (id: number) => {
    try {
        const response = await fetch(`https://apistore.cybersoft.edu.vn/api/Product/getid?id=${id}`);
        const result = await response.json();
        return result.content;
    } catch (error) {
        console.error("Error Data", error);
    }
}
export const fetchProductByKeyword = async (keyword: string) => {
    try {
        const response = await fetch(`https://apistore.cybersoft.edu.vn/api/Product?keyword=${keyword}`);
        const result = await response.json();
        return result.content;
    } catch (error) {
        console.error("Error Data", error);
    }
}