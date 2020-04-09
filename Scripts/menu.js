/**
 * adds item to array of items in a particular users order.
 * 
 * @param {number} num 
 */
function addToOrder(num) {
    let item = "item" + num;
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("users").doc(user.uid).update({
            order: firebase.firestore.FieldValue.arrayUnion(item)
        })
    })
}



/**
 * Currently unused.
 */
function createCategoryHolder() {
    let categories = document.createElement("div");
    categories.id = "categories";
    document.body.appendChild(categories);
}


/**
 * Currently unused, but could be added for dynamic generation of menu
 * categories which include users dietary preferences.
 * 
 * @param {string} name 
 * @param {string} image 
 * @param {string} id 
 */
function Category(name, image, id) {
    let ctg = document.createElement("div");
    ctg.id = id;
    ctg.style.backgroundImage = "url(" + image + ")";
    ctg.style.height = "16mm";
    ctg.style.backgroundSize = "cover";
    ctg.style.backgroundPosition = "center";
    ctg.style.backgroundRepeat = "no-repeat";
    document.getElementById("categories").appendChild(ctg);

    let text = document.createElement("div");
    document.getElementById(id).appendChild(text);
    text.style.position = "relative";
    text.style.textAlign = "center";
    text.style.top = "50%";
    text.style.left = "50%";
    text.style.transform = "translate(-50%, -50%)";
    text.style.textShadow = "0px 0px 5px black";
    text.style.color = "white";
    text.innerHTML = name;

}