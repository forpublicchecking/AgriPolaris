let totalAmount = 0;
const cost_carrot = 100;
const cost_radish = 150;
const cost_cabbage = 200;
const cost_broccoli = 200;
const cost_tomato = 150;
const cost_chinese_cab = 250;
const cost_eggplant = 70;
const cost_green_papper = 50;
const cost_onion = 30;

function navigate_register() {
    window.location.href = "./cart.html"; // 遷移先のURLを指定
    //window.location.href = "https://www.google.co.jp/"; // 遷移先のURLを指定
}

function navigate_list() {
    window.location.href = "./index.html"; // 遷移先のURLを指定
}

function navigate_complete() {
    window.location.href = "./complete.html"; // 遷移先のURLを指定
    //window.open("./complete.html"); // 遷移先のURLを指定
}

function index_buy() {
    window.location.href = "./buy.html"; // 遷移先のURLを指定
}

function index_check() {
    window.location.href = "./check.html"; // 遷移先のURLを指定
}

function index_set() {
    window.location.href = "./setting.html"; // 遷移先のURLを指定
}



// document.addEventListener('DOMContentLoaded', function(totalAmount){
//     sessionStorage.setItem('totalAmounts', totalAmount);
//     document.getElementById('totalAmounts').innerText = "¥" + totalAmount;    
// });

function displaySelectedOption() {
    var dropdown = document.getElementById("subcategory");
    var selectedOption = dropdown.options[dropdown.selectedIndex].text;
    document.getElementById("selectedOption").innerText = selectedOption;
}

function addProduct(productId, price) {
    //const card = document.getElementById(`card${productId}`);
    const card = `product-card${productId}`;

    const overlay = document.getElementById(`overlay${productId}`);
    const quantityControls = document.getElementById(`quantityControls${productId}`);
    
    
    // 商品個数を1つ増やす
    if (overlay.style.display === "none" || overlay.style.display === "") {
        overlay.style.display = "flex";
        overlay.innerText = "1"; // 初期個数を1に設定
        quantityControls.style.display = "flex";
        totalAmount += price; // 合計金額を更新
        document.getElementById('totalAmount').innerText = totalAmount;
    }

    sessionStorage.setItem('totalAmount', totalAmount);
    sessionStorage.setItem(card, overlay.innerText);
    //console.log("card-", card);
}

function changeQuantity(change, price, productId) {
    //const card = document.getElementById(`card${productId}`);
    const card = `product-card${productId}`;
    const overlay = document.getElementById(`overlay${productId}`);
    let quantity = parseInt(overlay.innerText);
    quantity += change;
   
    // 最小数量は0
    if (quantity <= 0) {
        quantity = 0;
    }

    overlay.innerText = quantity;

    sessionStorage.setItem(card, overlay.innerText);
   // console.log("card--", card);


    // 合計金額の計算
    totalAmount = 0; // 合計金額をリセット
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        const overlay = card.querySelector('.overlay');
        const price = parseInt(card.querySelector('p').innerText.replace('¥', ''));
        const quantity = parseInt(overlay.innerText);
        totalAmount += price * quantity; // 各商品の合計を計算
    });

    // 合計金額を更新
    sessionStorage.setItem('totalAmount', totalAmount);
    document.getElementById('totalAmount').innerText = totalAmount;
    //console.log("total",document.getElementById('totalAmount').innerText);

    // 個数が0になった場合、透過グレーを解除
    if (quantity === 0) {
        overlay.style.display = "none !important";
        //document.getElementById(`quantityControls${productId}`).style.display = "none"; // コントロールを非表示
    }
}

function sessionInit(){
    if (sessionStorage.length == 0){
        const productCards = document.querySelectorAll('.product-card');
        productCards.forEach(card => {
            const overlay = card.querySelector('.overlay');
            sessionStorage.setItem(card.id, overlay.innerText);
        });
        //console.log("sessionS",sessionStorage);
    }
}


// function sessionInit(){
//     if (sessionStorage.length == 0){
//         const productCards = document.querySelectorAll('.product-card');
//         productCards.forEach(card => {
//             const overlay = card.querySelector('.overlay');
//             sessionStorage.setItem(card.id, overlay.innerText);
//         });
//         console.log("sessionS",sessionStorage);
//     }
// }


// function hiddenCard(){
//     for(let key in sessionStorage){
//         let value = parseInt(sessionStorage.getItem(key));

//         if(value == 0){
//             document.getElementById(key).style.display = "none"; // カードを非表示
//             console.log("done", sessionStorage);
//         }
//     }
// }

// function overlays() {
//     for(let key in sessionStorage){
//         let value = parseInt(sessionStorage.getItem(key));
//         let overlay = key.replace('product-card', 'overlay');
//         let quantityControls = key.replace('product-card', 'quantityControls');

//         if(value > 0){
//             document.getElementById(overlay).style.display = "flex";
//             document.getElementById(overlay).innerText = value;
//             document.getElementById(quantityControls).style.display = "flex";    
//         }
//     }
// }
function overlays() {
    for(let key in sessionStorage){
        let value = parseInt(sessionStorage.getItem(key));
        let overlay = key.replace('product-card', 'overlay');
        let quantityControls = key.replace('product-card', 'quantityControls');

        if(value > 0){
            document.getElementById(overlay).style.display = "flex";
            document.getElementById(overlay).innerText = value;
            document.getElementById(quantityControls).style.display = "flex";    
        }

        // if(key == "totalAmount"){
        //     document.getElementById('totalAmount').innerText = value;
        // }
    }
}
window.onload = overlays;