//updates logged in user profile info according to input
function updateProfile() {

let names = document.getElementById("fname").value;
let address = document.getElementById("address").value;
let number = document.getElementById("phone").value;

  firebase.auth().onAuthStateChanged(function (user) {
    db.collection("users").doc(user.uid).update ({
          "name": names,
          "address": address,
          "phonenumber": number
    });
    console.log(user.uid);
  });
  showIt();
}

//shows logged in user profile info
function showIt() {
  firebase.auth().onAuthStateChanged(function (user) {
    db.collection("users").doc(user.uid)
      .onSnapshot(function (doc) {
        document.getElementById("namefield").innerHTML = doc.data().name;
        document.getElementById("numberer").innerHTML = doc.data().phonenumber;
        document.getElementById("addresser").innerHTML = doc.data().address;
      });
  })
}

//overlay functions
function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}

//function calls
showIt();
document.getElementById("submitter").onclick = updateProfile;
document.getElementById("navx").onclick = closeNav;
document.getElementById("spaniard").onclick = openNav;