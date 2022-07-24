class Account {
    fname = "";
    lname = "";
    dogname = "";
    age = "";
    email = "";
    constructor(fname, lname, dogname, age, email) {
      this.fname = fname;
      this.lname = lname;
      this.dogname = dogname;
      this.age = age;
      this.email = email;
    }
  
    static CreateAccount (){
        document.getElementById("create").innerHTML = "";
          
            fname = document.getElementById("fname").value;
            lname = document.getElementById("lname").value;
            dogname = document.getElementById("dogname").value;
            age = document.getElementById("age").value;
            email = document.getElementById("email").value;

            let createAcc = document.createElement("div");
            createAcc.classList.add("container");
            createAcc.innerHTML = `
                      
                      `;
    };
}
  
   
  export default Account;