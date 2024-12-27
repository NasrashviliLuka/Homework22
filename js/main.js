// function myfunction() {
//   const file = "https://jsonplaceholder.typicode.com/users";
//   fetch(file).then((x) => x.text());
//   then((y) => (document.getElementById("return").innerHTML = y));
//   return {
//     name: file.name,
//     email: file.email,
//     address: file.address,
//   };
// }
// myfunction();
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    const userList = document.getElementById("return");

    const filteredData = data.map((user) => {
      return {
        address: user.address,
        name: user.name,
        email: user.email,
      };
    });

    filteredData.forEach((user) => {
      userList.innerHTML += `
      
                               <div class="user-card">
                            <p>address: ${user.address}</p>
                            <p>name: ${user.name}</p>
                            <p>email: ${user.email}</p>
                            <hr>
                        </div
                    `;
    });
  })
  .catch((error) => console.error("Error:", error));
