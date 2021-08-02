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

var elPizzaSizeRadioTemplate = document.querySelector('.pizza-size-radio-template').content;
var elPizzaToppingCheckboxTemplate = document.querySelector('.pizza-topping-checkbox-template').content;
var elPizzaToppingListTemplate = document.querySelector('.pizza-topping-list-template').content;

var elPizzaForm = document.querySelector('.pizza-form');
var elPizzaSizes = elPizzaForm.querySelector('.pizza-form__sizes');
var elPizzaToppings = elPizzaForm.querySelector('.pizza-form__toppings');
var elPizzaSizeResult = elPizzaForm.querySelector('.pizza-form__size-result');
var elPizzaToppingResult = elPizzaForm.querySelector('.pizza-form__topping-result');
var elPizzaToppingList = elPizzaForm.querySelector('.pizza-form__topping-result');


// input size object {size, name, price}, output - HTML element
function createSizeRadio (size) {
  var elSizeRadio = elPizzaSizeRadioTemplate.cloneNode(true);
  elSizeRadio.querySelector('.radio__input').value = size.size;
  elSizeRadio.querySelector('.radio__control').textContent = size.name + ' ' + size.size + ' ' + ' cm';
  return elSizeRadio;
}

function showPizzaSizeRadios () {
  var elSizeRadiosFragment = document.createDocumentFragment();
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
  var elToppingCheckbox = elPizzaToppingCheckboxTemplate.cloneNode(true);
  elToppingCheckbox.querySelector('.checkbox__input').name = topping.name;
  elToppingCheckbox.querySelector('.checkbox__control').textContent = topping.name;
  return elToppingCheckbox;
}


// Options ichidagi topping qiymatlari checkboxlarini sahifaga joylash
// method chaining
function showPizzaToppings () {
  var elToppingsFragment = document.createDocumentFragment();
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
    .forEach(function (topping) {
      elToppingsFragment.appendChild(createToppingCheckbox(topping));
    });
  elPizzaToppings.appendChild(elToppingsFragment);
}

// Tanlangan toppinglarni list korinishida chiqarish
function createToppingList (list) {
  var elToppingList = elPizzaToppingListTemplate.cloneNode(true);
  elToppingList.querySelector('.pizza-topping-list-item').textContent = list;
  return elToppingList;
}

function showPizzaToppingList(selected) {
  var elToppingListFragment = document.createDocumentFragment();
    elToppingListFragment.appendChild(createToppingList(selected))
    elPizzaToppingList.appendChild(elToppingListFragment); //ulni ichiga qoshish
}

showPizzaSizeRadios();
showPizzaToppings();

var elsSizeRadio = document.querySelectorAll('.radio__input');
if (elsSizeRadio.length > 0) {
  elsSizeRadio.forEach(function (radio) {
    radio.addEventListener('change', function () {
      order.size = pizzaOptions.sizes.find(size => size.size === Number(radio.value));
      elPizzaSizeResult.textContent = order.size.size + ' sm';
    });
  });
}

var elsPizzaToppings = document.querySelectorAll('.checkbox__input');
if (elsPizzaToppings.length > 0) {
  elsPizzaToppings.forEach(function (checkbox) {
    checkbox.addEventListener('change', function () {
      if(checkbox.checked){
        var elPizzaList =  checkbox.name;
        order.topping = pizzaOptions.toppings.find(topping => topping.name === elPizzaList);
        showPizzaToppingList(elPizzaList);
      }
      else{
        
      }
    });
  });
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
