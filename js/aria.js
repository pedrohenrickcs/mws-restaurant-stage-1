const navigation = document.querySelector('header nav');
const mapRestaurant = document.querySelector('#map');
const filter = document.querySelector('.filter-options');
const neighborhoodsFilter = document.querySelector('#neighborhoods-select');
const cuisinesSelect = document.querySelector('#cuisines-select');
const restaurantsList = document.querySelector('#restaurants-list');


// Navigation
if (navigation) {
    navigation.setAttribute('role', 'navigation');
    navigation.setAttribute('aria-label', 'navigation');
}

// Attribute of map
if (mapRestaurant) {
    mapRestaurant.setAttribute('role', 'map');
    mapRestaurant.setAttribute('aria-label', 'map');
}

// Attribute of filter
if (filter) {
    filter.setAttribute('role', 'filter');
}

// Attribute of neighborhoods
if (neighborhoodsFilter) {
    neighborhoodsFilter.setAttribute('role', 'neighborhoods');
    neighborhoodsFilter.setAttribute('aria-label', 'choose neighborhoods');
    neighborhoodsFilter.setAttribute('aria-label-led', 'filter');
    neighborhoodsFilter.setAttribute('aria-active-option', 'filter-neighborhoods-select');
}

// Attribute of cuisines
if (cuisinesSelect) {
    cuisinesSelect.setAttribute('role', 'cuisines');
    cuisinesSelect.setAttribute('aria-label', 'choose cuisines');
    cuisinesSelect.setAttribute('aria-label-led', 'filter');
    cuisinesSelect.setAttribute('aria-active-option', 'cuisines-select');
}

// Attribute of restaurant list
if (restaurantsList) {
    restaurantsList.setAttribute('role', 'review list');
    restaurantsList.setAttribute('aria-label', 'review list');
}