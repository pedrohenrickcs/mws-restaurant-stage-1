const mapRestaurant = document.querySelector('#map');
const filter = document.querySelector('.filter-options');
const neighborhoodsFilter = document.querySelector('#neighborhoods-select');
const cuisinesSelect = document.querySelector('#cuisines-select');
const restaurantsList = document.querySelector('#restaurants-list');

// Attribute of map
if (mapRestaurant) {
    mapRestaurant.setAttribute('role', 'application');
    mapRestaurant.setAttribute('aria-label', 'map');
}

// Attribute of filter
if (filter) {
    filter.setAttribute('role', 'listbox');
}

// Attribute of neighborhoods
if (neighborhoodsFilter) {
    neighborhoodsFilter.setAttribute('role', 'listbox');
    neighborhoodsFilter.setAttribute('aria-label', 'choose neighborhoods');
}

// Attribute of cuisines
if (cuisinesSelect) {
    cuisinesSelect.setAttribute('role', 'listbox');
    cuisinesSelect.setAttribute('aria-label', 'choose cuisines');
}

// Attribute of restaurant list
if (restaurantsList) {
    restaurantsList.setAttribute('role', 'listbox');
    restaurantsList.setAttribute('aria-label', 'review list');
}