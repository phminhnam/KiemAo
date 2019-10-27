async function fetchData() {
  const response = await fetch("https://reqres.in/api/users?page=2");
  const str = await response.text();
  const obj = JSON.parse(str);
  render(obj.data);
  console.log(obj.data);
}

fetchData();
function render(data) {
  data.forEach(element => {
    let tr = document.createElement("tr");

    let id = document.createElement("td");
    let eid = document.createTextNode(element.id);

    let firstName = document.createElement("td");
    let efirstName = document.createTextNode(element.first_name);

    let lastName = document.createElement("td");
    let elastName = document.createTextNode(element.last_name);

    let email = document.createElement("td");
    let eEmail = document.createTextNode(element.email);

    let Avatar = document.createElement("td");
    let eAvatar = document.createElement("img");
    eAvatar.setAttribute("src", element.avatar);

    id.appendChild(eid);
    firstName.appendChild(efirstName);
    lastName.appendChild(elastName);
    email.appendChild(eEmail);
    Avatar.appendChild(eAvatar);

    tr.appendChild(id);
    tr.appendChild(firstName);
    tr.appendChild(lastName);
    tr.appendChild(email);
    tr.appendChild(eAvatar);

    document.getElementById("table").appendChild(tr);
  });
}
