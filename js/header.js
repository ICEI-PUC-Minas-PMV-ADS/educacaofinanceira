function openclose() {
    var menu = document.getElementById('dropitems');
    console.log('valoropenclose ', menu.style.display);
    if (
        menu.style.display === 'block'
    ) {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }

}