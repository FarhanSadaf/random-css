const unavailableDivs = document.querySelectorAll('.unavailable');

for (let i = 0; i < unavailableDivs.length; i++) {
    unavailableDivs[i].querySelector('.btn-filled').innerHTML = 'Out of stock';
}
