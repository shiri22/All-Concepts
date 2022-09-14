let users = [];
function register() {
  let tempName = document.getElementById("name").value;
  let tempEmail = document.getElementById("email").value;
  let tempCount = users.filter((x) => {
    return x.email == tempEmail;
  });
  if (tempCount == 0) {
    let user = {
      name: tempName,
      email: tempEmail,
    };
    users.push(user);
  } else {
    alert("user already existed");
  }
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  let container = document.getElementById("user-container");
  container.innerHTML=''
  users.map((user) => {
    let div = document.createElement("div");
    div.classList.add('user-card')
    let name=document.createElement("h3");
    let email=document.createElement("h3");
    container.appendChild(div);
    div.appendChild(name);
    div.appendChild(email);
    name.innerHTML=user.name;
    email.innerHTML=user.email;
  });
}
