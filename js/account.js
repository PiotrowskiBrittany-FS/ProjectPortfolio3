class Account {
    constructor(fname, lname, dogname, age, email) {
      this.fname = fname;
      this.lname = lname;
      this.dogname = dogname;
      this.age = age;
      this.email = email;
    }
  
    static CreateAccount (){          

            let create = document.querySelectorAll(".create");

            create.forEach((click) => {
                click.addEventListener("click", (event) => {
                    event.preventDefault();
                    let fname = document.getElementById("fname").value;
                    let lname = document.getElementById("lastname").value;
                    let dogname = document.getElementById("dogname").value;
                    let age = document.getElementById("age").value;
                    let email = document.getElementById("email").value;

                    let overwrite = document.getElementById("account-container");
                    overwrite.innerHTML = "";

                    console.log(fname, lname, dogname, age, email);
                    let createAcc = document.createElement("div");
                    createAcc.classList.add("container");
                    createAcc.innerHTML = `
                    <table class="table">
                        <tr>
                            <th class="bold">Name: </th>
                            <th class="account-info">${fname}</th>
                            <th class="account-info">${lname}</th>
                        </tr>
                        <tr>
                            <th class="bold">Dog Info: </th>
                            <th class="account-info">${dogname}</th>
                            <th class="account-info">${age}</th>
                        </tr>
                        <tr>
                            <th class="bold">Email: </th>
                            <th class="account-info">${email}</th>
                        </tr>
                    </table>
                `;
                main.append(createAcc); 
                })
            })

            
    };
}
  
   
  export default Account;