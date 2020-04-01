window.onload = function () {
    db.collection("users").doc("T7U3Ls5JOnU2NrHnCPYru7l3lDw2")
    .get()    //reads the collection of orders
    .then(function(doc){
        var ord = doc.data().order;  //returns array
        ord.forEach(function(x){
            displayItem(x);  //puts it to the DOM dynamic
        })
    })
}


let itemsList = [];


function Item(src, name, price, status, itemID) {
    this.item = document.createElement("div");
    this.item.id = itemID;
    let itemStyle = this.item.style;
    itemStyle.margin = "5vw";
    itemStyle.fontSize = "3vh";
    itemStyle.display = "block";
    itemStyle.height = "10vh";
    document.getElementById("content").appendChild(this.item);
    
    this.image = document.createElement("img");
    this.image.src = src;
    let imgStyle = this.image.style;
    imgStyle.borderRadius = "5px";
    imgStyle.width = "10vh";
    imgStyle.height = "10vh";
    imgStyle.objectFit = "cover";
    imgStyle.float = "left";
    document.getElementById(itemID).appendChild(this.image);
    
    this.left = document.createElement("div");
    let leftID = itemID + "left";
    this.left.id = leftID;
    let leftStyle = this.left.style;
    leftStyle.float = "left";
    leftStyle.marginLeft = "5vw";
    document.getElementById(itemID).appendChild(this.left);

    this.name = document.createElement("div");
    this.name.innerHTML = name;

    this.price = document.createElement("div");
    this.price.style.fontSize = "2.5vh";
    this.price.style.marginTop = "0.5vh";
    this.price.innerHTML = price;

    document.getElementById(leftID).appendChild(this.name);
    document.getElementById(leftID).appendChild(this.price);

    this.right = document.createElement("div");
    let rightID = itemID + "right";
    this.right.id = rightID;
    this.right.style.float = "right";
    document.getElementById(itemID).appendChild(this.right);

    this.br = document.createElement("br");
    document.getElementById(rightID).appendChild(this.br);

    this.status = document.createElement("div");
    this.status.style.fontSize = "2.5vh";
    this.status.style.marginTop = "0.5vh";
    this.status.innerHTML = status;
    document.getElementById(rightID).appendChild(this.status);

}

function displayItem(itemID) {
    db.collection("menu").doc(itemID)
    .get()    //reads the collection of orders
    .then(function(doc){
        
        let name = doc.data().name;
        let price = doc.data().price;
        let image = doc.data().image;
        
        itemsList.push(new Item(image, name, "$" + price, "Pending", itemID));
    })
}


//let burger = new Item("Images/meetonmain.jpg", "Burger", "$13.99", "Pending", "item1");
//let souvlaki = new Item("Images/chicken_souvlaki.jpg", "Chicken Souvlaki", "$12.49", "Pending", "item2");
//let rackOfLamb = new Item("Images/rack_of_lamb.jfif", "Rack of Lamb", "$15.99", "Pending", "item3");
//let seaFood = new Item("Images/seafood_platter.jpg", "Seafood Platter", "$25.99", "Pending", "item4"); 