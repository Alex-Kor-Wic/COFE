const FoodMenuLink = document.querySelector('#button-food');
const DrinksMenuLink = document.querySelector('#button-drinks');

const FoodImage = document.querySelector('#menu-food');
const DrinksImage = document.querySelector('#menu-drinks');


FoodMenuLink.addEventListener('click', ShowFoodMenu);
DrinksMenuLink.addEventListener('click', ShowDrinksMenu)


function ShowFoodMenu(event) {
    event.preventDefault();
    if (!DrinksImage.classList.contains('none-element')) {
        DrinksImage.classList.add('none-element');

        DrinksMenuLink.style['background-color'] = '#E9E9E3';
        DrinksMenuLink.style['color'] = '#6F6F64';
    }
    FoodMenuLink.style['background-color'] = '#6F6F64';
    FoodMenuLink.style['color'] = '#fff';
    FoodImage.classList.toggle('none-element');
}
function ShowDrinksMenu(event) {
    event.preventDefault();

    if (!FoodImage.classList.contains('none-element')) {
        FoodImage.classList.add('none-element');
        FoodMenuLink.style['background-color'] = '#E9E9E3';
        FoodMenuLink.style['color'] = '#6F6F64';
    }
    DrinksMenuLink.style['background-color'] = '#6F6F64';
    DrinksMenuLink.style['color'] = '#fff';
    DrinksImage.classList.toggle('none-element');
}