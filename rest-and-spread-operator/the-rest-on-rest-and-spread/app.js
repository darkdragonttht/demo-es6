const defaultColors = ['red', 'green'];
const userFavoriteColors = ['orange', 'yellow'];
const fallColors = ['fire red', 'fall orange'];
console.log([...defaultColors,...userFavoriteColors,...fallColors]);

function validateShoppingList(...item) {
    if (item.indexOf('milk') < 0) {
        return ['milk', ...item];
    }
    return item;
}

validateShoppingList('orange', 'bread', 'eggs');