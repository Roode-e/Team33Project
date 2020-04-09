

let itemsList = [];



/**
 * Grabs and displays items in a person's order.
 */
function showIt() {
    firebase.auth().onAuthStateChanged(function (user) {
      db.collection("users").doc(user.uid)
        .onSnapshot(function (doc) {
            let ord = doc.data().order;  //returns array
            ord.forEach(function(x){
                displayItem(x);
            })
        });
    })
}

showIt();


/**
 * Item constructor. Displays and styles each image, name, price, 
 * and status of each menu item.
 * 
 * @param {string} src 
 * @param {string} name 
 * @param {number} price 
 * @param {string} status 
 * @param {string} itemID 
 */
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
    this.name.style.fontSize = "2.8vh";

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
    this.status.innerHTML = status;
    document.getElementById(rightID).appendChild(this.status);

}

/**
 * Grabs information about a menu item and puts it in Item constructor arguments.
 * Pushes each item into itemsList array.
 * 
 * @param {string} itemID 
 */
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


function removeItems() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("users").doc(user.uid).update({
            order: firebase.firestore.FieldValue.delete(),
            order: []
        }).then(function () {
            location.reload();
        })
    })
    
    itemsList = [];
}

