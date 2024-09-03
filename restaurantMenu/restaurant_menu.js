const breakfastMenu = ['Pancakes- $15', 'Eggs Benedict', 'Oatmeal', 'Frittata'];
breakfastMenu.push ("Huevos Rancheros");

const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
mainCourseMenu.push ("Enchiladas");

const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];
dessertMenu.push ("Gulab Jamun");

// Convert each array to HTML and insert into the webpage
const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {
mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;}

document.getElementById('dessertMenuItems').innerHTML = dessertItem;