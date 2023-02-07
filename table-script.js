const backBtn= document.querySelector('#back-btn')
fetchusers()



async function fetchusers() {
    document.getElementById("users").innerHTML = "";
    let user_data = [];
    users = await fetch("http://127.0.0.1:3000/user_data")
        .then((response) => response.json())
        .then((data) => (user_data = data));
    for (let i = 0; i < user_data.length; i++) {
        let divider = document.createElement("hr");
        let name = document.createElement("h6");
        name.innerHTML = user_data[i].name;
        let img = document.createElement("img");
        img.setAttribute(
        "src",
        "http://localhost:3000/" + user_data[i].img_obj.filename
        );
        img.setAttribute("width", "100");
        img.setAttribute("height", "50");
        document.getElementById("users").appendChild(name);
        document.getElementById("users").appendChild(img);
        document.getElementById("users").appendChild(divider);
    }
}

backBtn.addEventListener('click', () => {
    window.location.href = "index.html";
})