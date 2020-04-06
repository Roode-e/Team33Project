let categories = document.createElement("div");
categories.id = "categories";
document.body.appendChild(categories);


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

let appetizers = new Category("Appetizers", "Images/apps_dark.jpg", "category1");
let drinks = new Category("Drinks", "Images/drinks_dark.jpg", "category2");
let soups = new Category("Soups and Salads", "Images/soup_dark.jpg", "category3");
let entrees = new Category("Entrees", "Images/entree_dark.jpg", "category4");
let dessert = new Category("Desserts", "Images/dessert_dark.jpeg", "category5");