function sessionInit(){
    if (sessionStorage.length == 0){
        const productCards = document.querySelectorAll('.product-card');
        productCards.forEach(card => {
            const overlay = card.querySelector('.overlay');
            sessionStorage.setItem(card.id, overlay.innerText);
        });
    }
}

window.onload = sessionInit;