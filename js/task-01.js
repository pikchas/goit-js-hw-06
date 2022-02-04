const categories = document.querySelector('#categories');

const categoriesItems = document.querySelectorAll('.item');
console.log('Number of categories:', categoriesItems.length);

categoriesItems.forEach(function (category) {
    console.log('Category:', category.firstElementChild.textContent);

    console.log('Element:', category.lastElementChild.children.length);
});

