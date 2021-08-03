let pizzaOptions = {
  breadTypes: [
    {
      name: "Yupqa",
      price: 10000
    },
    {
      name: "Qalin",
      price: 10000
    },
    {
      name: "Buxanka",
      price: 7000
    }
  ],
  sizes: [
    {
      name: "Katta",
      size: 35,
      price: 45000
    },
    {
      name: "Kichik",
      size: 25,
      price: 25000
    },
    {
      name: "Oilaviy",
      size: 40,
      price: 50000
    },
    {
      name: "O'rtacha",
      size: 30,
      price: 30000
    }
  ],
  toppings: [
    {
      name: "Pomidor",
      price: 4000
    },
    {
      name: "Birnima",
      price: 1000
    },
    {
      name: "Tuzlangan bodring",
      price: 5000
    },
    {
      name: "Qazi",
      price: 15000
    },
    {
      name: "Kurka go'shti",
      price: 12000
    },
    {
      name: "Zaytun",
      price: 5000
    },
    {
      name: "Qo'ziqorin",
      price: 7000
    }
  ],
  addl: [
    {
      name: "Sosiska",
      price: 7000
    }
  ]
};
let order = {};
let toppingarr = [];

let elPizzaSizeRadioTemplate = document.querySelector('.pizza-size-radio-template').content;
let elPizzaToppingCheckboxTemplate = document.querySelector('.pizza-topping-checkbox-template').content;
let elPizzaToppingListTemplate = document.querySelector('.pizza-topping-list-template').content;

let elPizzaForm = document.querySelector('.pizza-form');
let elPizzaSizes = elPizzaForm.querySelector('.pizza-form__sizes');
let elPizzaToppings = elPizzaForm.querySelector('.pizza-form__toppings');
let elPizzaSizeResult = elPizzaForm.querySelector('.pizza-form__size-result');
let elPizzaToppingResult = elPizzaForm.querySelector('.pizza-form__topping-result');
let elPizzaToppingList = elPizzaForm.querySelector('.pizza-form__topping-result');


// input size object {size, name, price}, output - HTML element
function createSizeRadio (size) {
  let elSizeRadio = elPizzaSizeRadioTemplate.cloneNode(true);
  elSizeRadio.querySelector('.radio__input').value = size.size;
  elSizeRadio.querySelector('.radio__control').textContent = size.name + ' ' + size.size + ' ' + ' cm';
  return elSizeRadio;
}

function showPizzaSizeRadios () {
  let elSizeRadiosFragment = document.createDocumentFragment();
  pizzaOptions.sizes
    .slice()
    .sort(function (a, b) {
      return a.size - b.size;
    })
    .forEach(function (size) {
      elSizeRadiosFragment.appendChild(createSizeRadio(size))
    });
  elPizzaSizes.appendChild(elSizeRadiosFragment);
}

function createToppingCheckbox (topping) {
  let elToppingCheckbox = elPizzaToppingCheckboxTemplate.cloneNode(true);
  elToppingCheckbox.querySelector('.checkbox__input').value = topping.name;
  elToppingCheckbox.querySelector('.checkbox__input').name = topping.name;
  elToppingCheckbox.querySelector('.checkbox__control').textContent = topping.name;
  return elToppingCheckbox;
}


// Options ichidagi topping qiymatlari checkboxlarini sahifaga joylash
// method chaining
function showPizzaToppings () {
  let elToppingsFragment = document.createDocumentFragment();
  pizzaOptions.toppings
    .slice()
    .sort(function (a, b) {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    })
    .forEach(function (item) {
      elToppingsFragment.appendChild(createToppingCheckbox(item));
    });
  elPizzaToppings.appendChild(elToppingsFragment);
}


showPizzaSizeRadios();
showPizzaToppings();

let elsSizeRadio = document.querySelectorAll('.radio__input');
if (elsSizeRadio.length > 0) {
  elsSizeRadio.forEach(function (radio) {
    radio.addEventListener('change', function () {
      order.size = pizzaOptions.sizes.find(size => size.size === Number(radio.value));
      elPizzaSizeResult.textContent = order.size.size + ' sm';
    });
  });
}

let elsPizzaToppings = document.querySelectorAll('.checkbox__input');
elsPizzaToppings.forEach(item => {
  item.addEventListener('click', () => {
    if (item.checked) {
      order.topChecked = pizzaOptions.toppings.find(toppings => toppings.name === item.value)
      //price += order.topChecked.price;
    }
    else if (!item.checked) {
      order.topChecked = pizzaOptions.toppings.find(toppings => toppings.name === item.value)
      //price -= order.topChecked.price;
    }
    //document.querySelector('.pizza-form__all-costs').textContent = breadPrice + price + sizePrice + addlPrice
  })
})

elsPizzaToppings.forEach(item => {
  item.addEventListener('click', () => {
    if (item.checked) {
      order.topChecked = pizzaOptions.toppings.find(toppings => toppings.name === item.value)
      //price += order.topChecked.price;
    }
    else if (!item.checked) {
      order.topChecked = pizzaOptions.toppings.find(toppings => toppings.name === item.value)
      //price -= order.topChecked.price;
    }
    //document.querySelector('.pizza-form__all-costs').textContent = breadPrice + price + sizePrice + addlPrice
  })
})

elsPizzaToppings.forEach(item => {
  item.addEventListener('click', () => {

    if (toppingarr.includes(item.name)) {
      const index = toppingarr.findIndex(e => e === item.name)
      toppingarr.splice(index, 1)
    }
    else {
      toppingarr.push(item.name)
    }
    displayD(toppingarr)
  })
})
function displayD(arry) {
  elPizzaToppingList.innerHTML = ""
  const frg = document.createDocumentFragment();

  arry.forEach(item => {
    let elT = elPizzaToppingListTemplate.cloneNode(true)
    elT.querySelector('.pizza-topping-list-item').textContent = item;

    frg.appendChild(elT);
  })
  elPizzaToppingList.appendChild(frg);
}





// createToppingCheckbox({})


// #document-fragment = binnarsa
  // li.birnima
    // span

// binnarsa.classList - X
// binnarsa.querySelector('li').classList - V


// var names = ['Iqboliddin', 'Shoxruh', 'Abduqodir', 'Farruh', 'Asrorbek', 'Otabek', 'Iqboljon', 'Izzatillo'];


// findIndex
// splice
// reduce
