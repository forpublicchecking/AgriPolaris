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
    window.location.href = "https://www.google.co.jp/"; // 遷移先のURLを指定
}

function addProduct(productId, price) {
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
}

function changeQuantity(change, price, productId) {
    const overlay = document.getElementById(`overlay${productId}`);
    let quantity = parseInt(overlay.innerText);
    quantity += change;
   
    // 最小数量は0
    if (quantity <= 0) {
        quantity = 0;
    }

    overlay.innerText = quantity;

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
    document.getElementById('totalAmount').innerText = totalAmount;
    //console.log("total",document.getElementById('totalAmount').innerText);

    // 個数が0になった場合、透過グレーを解除
    if (quantity === 0) {
        overlay.style.display = "none !important";
        //document.getElementById(`quantityControls${productId}`).style.display = "none"; // コントロールを非表示
    }
}
