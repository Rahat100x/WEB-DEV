
const item = document.getElementById('items');
const productImg = document.getElementById('productImg');

fetch('https://api.freeapi.app/api/v1/public/randomproducts?page=1&limit=10&inc=category%252Cprice%252Cthumbnail%252Cimages%252Ctitle%252Cid&query=mens-watches')
    .then((response) => {
        response.json().then((obj) => {
            const products = obj.data.data;
            console.log(products)
            products.forEach(product => {
                const li = document.createElement('li');
                li.innerText = product.title;
            });
        })
    })
    .catch(() => {
        console.log('erorr');
    })
    .finally(() => {
        
    })