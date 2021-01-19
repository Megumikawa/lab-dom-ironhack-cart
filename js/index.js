// ITERATION 1

function updateSubtotal(product) {
  // console.log(product);
  let price = product.querySelector('.price span')
  let quantity = product.querySelector('.quantity input')
  // console.log(price.innerText)

  let total = price.innerText * quantity.value
  // console.log(total)
  let subtotal = product.querySelector('.subtotal span')
  subtotal.innerText = total
  return subtotal
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let displayTotal = document.querySelector('#total-value span')
  // console.log(displayTotal.innerText)
  let allProducts = document.querySelector('.product')
  let finalTotal = 0

  allproducts.forEach(product) {
    const subtotal = 
  }

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
