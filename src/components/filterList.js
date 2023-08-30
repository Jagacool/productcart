import products from '../products.json';

export default function filterList(arr, method) {
    if (method == null) {
        return products;
    } else {
        return products.filter(product => {
            const sizeArray = product.size.split(" ");
            if (arr.length > 0) {
                return sizeArray.some(r => arr.indexOf(r) >= 0);
            } else {
                return true; // Always return true if no conditions are met
            }
        });
    }
}
