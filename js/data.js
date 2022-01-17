
const data = {

    products: [
        {
            _id: '1',
            name: '純白飛鳥草',
            category: ['桌花','小型桌花'],
            image: 'imgs/product-1-square.jpeg',
            price: 200,
            color: ['rgb(255, 255, 255)'],
            numReviews: 10,
            countInStock: 5,
            inCart: 0
        },
        {
            _id: '2',
            name: '白白綿綿',
            category: ['桌花','中型桌花'],
            image: 'imgs/product-2-square.jpeg',
            price: 550,
            color: ['rgb(255, 255, 255)','rgb(191, 166, 134)'],
            numReviews: 21,
            countInStock: 6,
            inCart: 0
        },
        {
            _id: '3',
            name: '秋穫',
            category: ['桌花','大型桌花'],
            image: 'imgs/product-3-square.jpeg',
            price: 1200,
            color: ['rgb(255, 255, 255)','rgb(198, 175, 123)'],
            numReviews: 8,
            countInStock: 4,
            inCart: 0
        },
        {
            _id: '4',
            name: '浪漫粉裸花束',
            category: ['花束','裸花束'],
            image: 'imgs/product-4-square.jpg',
            price: 420,
            color: ['rgb(255, 255, 255)','rgb(191, 166, 134)'],
            numReviews: 30,
            countInStock: 11,
            inCart: 0
        },
        {
            _id: '5',
            name: '白色系小桌花組',
            category: ['桌花','小型桌花'],
            image: 'imgs/product-5-square.jpeg',
            price: 1000,
            color: ['rgb(255, 255, 255)','rgb(198, 175, 123)'],
            numReviews: 25,
            countInStock: 7,
            inCart: 0
        },
        {
            _id: '6',
            name: '藍金璀璨',
            category: ['桌花','小型桌花'],
            image: 'imgs/product-6-square.jpg',
            price: 700,
            color: ['rgb(25, 80, 98)','rgb(205, 162, 79)'],
            numReviews: 22,
            countInStock: 10,
            inCart: 0
        },
        {
            _id: '7',
            name: '疫情下的美好思索',
            category: ['桌花','中型桌花'],
            image: 'imgs/product-7-square.jpeg',
            price: 2000,
            color: ['rgb(255, 255, 255)','rgb(191, 166, 134)'],
            numReviews: 40,
            countInStock: 3,
            inCart: 0
        },
        {
            _id: '8',
            name: '小穗花封蠟信封',
            category: ['卡片','萬用卡'],
            image: 'imgs/product-8-square.jpg',
            price: 40,
            color: ['rgb(85, 76, 77)'],
            numReviews: 104,
            countInStock: 132,
            inCart: 0
        },
        {
            _id: '9',
            name: '散花滿天星',
            category: ['桌花','小型桌花'],
            image: 'imgs/product-9-square.jpeg',
            price: 430,
            color: ['rgb(255, 255, 255)'],
            numReviews: 30,
            countInStock: 13,
            inCart: 0
        },
        {
            _id: '10',
            name: '綠意盎然布花束',
            category: ['桌花','小型桌花'],
            image: 'imgs/product-10-square.jpg',
            price: 620,
            color: ['rgb(72, 95, 71)'],
            numReviews: 45,
            countInStock: 6,
            inCart: 0
        },
        {
            _id: '11',
            name: '幸福滿滿喜帖',
            category: ['卡片','邀請函'],
            image: 'imgs/product-11-square.jpg',
            price: 150,
            color: ['rgb(255, 255, 255)','rgb(123, 96, 69)'],
            numReviews: 155,
            countInStock: 68,
            inCart: 0
        },
        {
            _id: '12',
            name: 'Door deco',
            category: ['造型裝飾'],
            image: 'imgs/product-12-square.jpg',
            price: 450,
            color: ['rgb(72, 95, 71)','rgb(191, 166, 134)'],
            numReviews: 155,
            countInStock: 68,
            inCart: 0
        },



    ]

}

const {products} = data;


const productColor = function(colorsArr) {
   
   return `
        ${colorsArr.map(
            color => `
            <a class="card-color" style="background-color: ${color}"></a>
            `
            ).join('')}
    `

}

const displayAssort = function() {
    const colorArr = products.flatMap(product => product.color);

    const colorSet = new Set(colorArr);
    console.log(colorArr,colorSet);

    return `
    <li class="side-list">
        <button class="side-btn">顏色篩選 / Color</button>
        <ul class="side-assort--second">
            <li class="side-colorbox">
                ${productColor([...colorSet])}
            </li> 
        </ul>
    </li>
    `
}


const displayProducts = function() {
    
    return `
        ${products.map(
            (product) => `
            <li class="card product-card" id="product-${product._id}" data-id="${product._id}">
                <a href="product-single.html" class="product-img">
                    <img src="${product.image}" alt="${product.name}">
                    <button class="btn add-cart add-cart--product">
                        <img src="imgs/SVG/cart.svg" alt="shop cart icon">
                    </button>
                </a>
                <div class="card-txt">
                ${product.category.map((tag,i) =>` 
                    <a href="##" class="card-tag">${tag}</a>
                    `).join('')}  
                    <a class="card-title">${product.name}</a>
                    <div class="card-detail">
                        <div class="card-colorbox">
                            ${productColor(product.color)}
                        </div>
                        <div class="card-price">NT $${product.price}</div>
                    </div>
                </div>
            </li>
            `
        ).join('\n')}
    `
}


const render = function() {
    const productsContainer = document.querySelector('#products-container');
    productsContainer.insertAdjacentHTML('beforeend',displayProducts());

    const assortContainer = document.querySelector('#assort-container');
    assortContainer.insertAdjacentHTML('beforeend',displayAssort());
}


const filterProducts = function() {
    let colorTags = document.querySelectorAll('.card-color');
    let productsCard = document.querySelectorAll(`.product-card`);

    const filterColor = function() {

        productsCard.forEach(card => card.classList.remove('p-active'));
        
        productsCard.forEach(
            card => card.classList.add('p-hidden'));
        
       for(let i = 0; i < products.length; i++) {
         
           if(products[i].color.includes(this.style.backgroundColor)) {
                let filtered = document.querySelectorAll(`.product-card#product-${products[i]._id}`);
                console.log(filtered);

                filtered.forEach(card => {
                    card.classList.remove('p-hidden');
                    card.classList.add('p-active');
                    
                    setTimeout(() => card.style.display = 'block',500);
                    
                });
                
                document.querySelectorAll('.p-hidden').forEach(card => setTimeout(() => card.style.display = 'none',500))
            }
       }
    }

    colorTags.forEach(tag => tag.onclick = filterColor);
}

const cartHandler = function() {

   const cartBtns = document.querySelectorAll('button.add-cart');
   cartBtns.forEach(btn => btn.onclick = cartNumbers);


   function getCartNum() {
    let productNum = localStorage.getItem('cartNum');
    return productNum;
   }

   function displaySpan() {
       document.querySelector('.product-num').textContent = getCartNum() ? getCartNum() : '0';
   }
   displaySpan();

   function cartNumbers(e) {
       e.preventDefault();

        let productId = this.parentNode.parentNode.dataset.id;
        let thatArr = products.filter(product => product._id == productId);
        

       let getNum = getCartNum();
       getNum = parseInt(getNum);

       if(getNum) {
        localStorage.setItem('cartNum',getNum + 1);
        displaySpan();

       }else {
        localStorage.setItem('cartNum', 1);
        displaySpan();
       }


       setItems(...thatArr);
       countPrice(...thatArr);
       displayCart();

   }


   function setItems(obj) {
       console.log(obj);

       let cartItems = localStorage.getItem('cartProducts');
       cartItems = JSON.parse(cartItems);

       if(cartItems) {
           if(cartItems[obj.name] == undefined) {

                cartItems = {
                    ...cartItems,
                    [obj.name]: obj
                }
           }

           cartItems[obj.name].inCart += 1;

       }else {
           obj.inCart = 1;
           cartItems = {
            [obj.name]: obj
        }
       }

       

       localStorage.setItem('cartProducts',JSON.stringify(cartItems));
   }

   function countPrice(obj) {
    let cartPrice = localStorage.getItem('totalPrice');

    if(cartPrice) {
        cartPrice = parseInt(cartPrice);
        localStorage.setItem('totalPrice',cartPrice + obj.price);

    }else {
        localStorage.setItem('totalPrice',obj.price);
    }
       
   }


   function displayCart() {
        let cartObj = localStorage.getItem('cartProducts');
        cartObj = JSON.parse(cartObj);

        let cartUl = document.querySelector('.cart-list');
        let cartPrice = localStorage.getItem('totalPrice');

        cartUl.innerHTML = '<p class="empty-info">目前購物車為空~</p>';

        if(cartObj && cartUl) {

            let cartItems = Object.values(cartObj)
                .map(item => `

                <li class="cart-item">
                    <div class="cart-num col-12 col-md-2">
                        <button class="num-btn">-</button>
                        <input type="number" name="cart-num" value="${item.inCart}">
                        <button class="num-btn">+</button>
                    </div>
                    <a href="##" class="cart-img col-4 col-md-2">
                        <img src="${item.image}" alt="${item.name}">
                    </a>
                    <div class="cart-info">
                        <h4 class="cart-name">${item.name}</h4>
                        <p class="cart-price">NT $${item.price * item.inCart}</p>
                    </div> 
                    <button class="cancel-btn">X</button>
                </li>  
                `)

            cartUl.innerHTML = cartItems;
        
            cartUl.innerHTML += `
            <div class="cart-finall">
                <button class="empty-btn">清空</button>
                <div class="cart-checkout">
                    <p class="cart-total">NT $ ${cartPrice} 元</p>
                    <button class="checkout-btn">前往結帳</button>
                </div>      
            </div>
            
            `

            let clearBtn = document.querySelector('.empty-btn');
            clearBtn.onclick = clearStorage;

            function clearStorage() {
                localStorage.clear();
                displayCart();
                displaySpan();
            }

        }
           
        
   }

   displayCart();

   
}




const init= function() {
    render();
    filterProducts();
}



window.addEventListener('load',init);
window.addEventListener('load',cartHandler);
