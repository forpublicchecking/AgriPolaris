function hiddenCard(){
    for(let key in sessionStorage){
        let value = parseInt(sessionStorage.getItem(key));
        //console.log("key", key);
        //console.log("value", value);

        if(value == 0){
            document.getElementById(key).style.display = "none"; // カードを非表示
        }
    }
    //document.getElementById('totalAmount').innerText = totalAmount;
    //console.log("totalA",totalAmount);
}

window.onload = hiddenCard;