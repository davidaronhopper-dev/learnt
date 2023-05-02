const menu = document.querySelector('ul.menu');
const cartSummary = document.querySelector('.cart-summary');
const textSubTotal = document.querySelector('.amount.price.subtotal');
const textTax = document.querySelector('.amount.price.tax');
const textTotal = document.querySelector('.amount.price.total');

const menuItems = [
    {
        name: 'French Fries with Ketchup',
        price: 223,
        image: 'plate__french-fries.png',
        alt: 'French Fries',
        count: 1
    },
    {
        name: 'Salmon and Vegetables',
        price: 512,
        image: 'plate__salmon-vegetables.png',
        alt: 'Salmon and Vegetables',
        count: 2
    },
    {
        name: 'Spaghetti Meat Sauce',
        price: 782,
        image: 'plate__spaghetti-meat-sauce.png',
        alt: 'Spaghetti with Meat Sauce',
        count: 0
    },
    {
        name: 'Bacon, Eggs, and Toast',
        price: 599,
        image: 'plate__bacon-eggs.png',
        alt: 'Bacon, Eggs, and Toast',
        count: 0
    },
    {
        name: 'Chicken Salad with Parmesan',
        price: 698,
        image: 'plate__chicken-salad.png',
        alt: 'Chicken Salad with Parmesan',
        count: 0
    },
    {
        name: 'Fish Sticks and Fries',
        price: 634,
        image: 'plate__fish-sticks-fries.png',
        alt: 'Fish Sticks and Fries',
        count: 0
    }
]

const updateMenu = () => {
    const updatedCartHtml = menuItems.map((item, index) => {
        const [dollars, cents] = getDollarsAndCenters(item.price);
        const formattedPrice = formatPrice(dollars, cents);
        const inCart = item.count;
        return `
             <li>
              <div class="plate">
                <img src="images/${item.image}" alt="${item.alt}" class="plate" />
              </div>
              <div class="content">
                <p class="menu-item">${item.name}</p>
                <p class="price">${formattedPrice}</p>
                ${!inCart ? `<button class="add" onclick="increaseCart(${index})">Add to Cart</button>` : `<button class="in-cart">
                          <img src="images/check.svg" alt="Check" />
                          In Cart
                        </button>`
                }
              </div>
            </li>
        `
    }).join('');
    menu.innerHTML = updatedCartHtml;
}

const updateCart = () => {
    const updatedCartHtml = menuItems.map((item, index) => {
        const [dollars, cents] = getDollarsAndCenters(item.price);
        const formattedPrice = formatPrice(dollars, cents);
        const subtotal = item.price * item.count;
        const [subDollars, subCents] = getDollarsAndCenters(subtotal);
        const formattedSubTotal = formatPrice(subDollars, subCents);
        const inCart = item.count;
        if (inCart > 0) {
            return `
                <li>
                  <div class="plate">
                    <img src="images/${item.image}" alt="${item.alt}" class="plate" />
                    <div class="quantity">${item.count}</div>
                  </div>
                  <div class="content">
                    <p class="menu-item">${item.name}</p>
                    <p class="price">${formattedPrice}</p>
                  </div>
                  <div class="quantity__wrapper">
                    <button class="decrease">
                      <img src="images/chevron.svg" onclick="decreaseCart(${index})"/>
                    </button>
                    <div class="quantity">${item.count}</div>
                    <button class="increase">
                      <img src="images/chevron.svg" onclick="increaseCart(${index})" />
                    </button>
                  </div>
                  <div class="subtotal">
                    ${formattedSubTotal}
                  </div>
                </li>
            `
        }
    }).join('');
    cartSummary.innerHTML = updatedCartHtml;
    updateCosts();
}

const increaseCart = (itemIndex) => {
    menuItems[itemIndex].count++;
    updateMenu();
    updateCart();
}

const decreaseCart = (itemIndex) => {
    menuItems[itemIndex].count--;
    updateMenu();
    updateCart();
}


const getDollarsAndCenters = (price) => {
    const dollars = Math.floor(price/100);
    const cents = price % 100;
    return [dollars, cents];
}

const formatPrice = (dollars, cents) => {
    return `$${dollars}.${cents}`;
}

const updateCosts = () => {
    let updatedSubTotal = 0;
    let tax = 10;
    const gatherSubtotal = menuItems.reduce((acc, currItem) => {
      return acc + currItem.price * currItem.count;
    }, 0);
    const [dollars, cents] = getDollarsAndCenters(gatherSubtotal);
    const updatedTax = Math.floor(gatherSubtotal / tax);
    const [taxdollars, taxcents] = getDollarsAndCenters(updatedTax);
    const updatedTotal = gatherSubtotal + updatedTax;
    const [totalDollars, totalCents] = getDollarsAndCenters(updatedTotal);

    textSubTotal.innerHTML = formatPrice(dollars, cents);
    textTax.innerHTML = formatPrice(taxdollars, taxcents);;
    textTotal.innerHTML = formatPrice(totalDollars, totalCents);
}

updateMenu();
updateCart();
updateCosts();
