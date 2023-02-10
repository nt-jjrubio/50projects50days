function expand(item) {
    console.log(item);
    document.getElementsByClassName('expanded')[0].classList.remove('expanded');
    item.classList.add('expanded');
}