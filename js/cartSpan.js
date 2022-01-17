function getCartNum() {
    let productNum = localStorage.getItem('cartNum');
    return productNum;
   }

   function displaySpan() {
       document.querySelector('.product-num').textContent = getCartNum() ? getCartNum() : '0';
   }
   displaySpan();