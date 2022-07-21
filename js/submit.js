class Submit {
  fname = null;
  lname = "";
  dogname = "";
  age = "";
  message = "";
  constructor(fname, lname, dogname, age, message) {
    this.fname = fname;
    this.lname = lname;
    this.dogname = dogname;
    this.age = age;
    this.message = message;
  }

  static SubmitForm (){
      document.querySelectorAll(".submit").forEach((submit) => {
        submit.addEventListener("click", (event) => {
  
          event.preventDefault();
          console.log("submitted");
          let submitForm = document.createElement("div");
          submitForm.classList.add("contact-modal");
          submitForm.innerHTML = `
                      <div id="myModal" class="contact-modal">
                        <div class="modal-info">
                          <span class="close">&times;</span>
                          <p class="info">
                          Thank you for submitting your message. Please give us 24 hours to respond. If this is about a medical emergency, please find the nearest vet. Puparazzi's messaging system is not meant for emergencies.
                          </p>
                        </div>
                      </div>
                    `;
          main.append(submitForm);
          document.getElementById("myModal").style.display = "block";
      
          document.querySelectorAll(".close").forEach((close) => {
            close.addEventListener("click", (event) => {
              event.preventDefault();
              console.log("close clicked");
              submitForm.classList.remove("contact-modal");
              submitForm.remove("div");
        });
      });
        });
      });
  }
  static navFunction() {

    let iconElement = document.querySelectorAll(".icon");
    iconElement.forEach((click) => {
      click.addEventListener("click", (event) => {
        event.preventDefault();
        let menu = document.createElement("article");
        menu.classList.add("ham-menu");
        menu.innerHTML = `
          <div class="ham-menu-content" id="hamMenu">
            <div class="nav-info">
              <span class="exit">&times;</span>
              <table class="table">
                <tr><th><a href="index.html">Home</a></th></tr>
                <tr><th><a href="blog.html">Blog</a></th></tr>
                <tr><th><a href="vet.html">Vet</a></th></tr>
                <tr><th><a href="groom.html">Grooming</a></th></tr>
                <tr><th><a href="contact.html" class="active">Contact</a></th></tr>
                <tr><th><a href="cart.html">My Cart</a></th></tr>
                <tr><th><a href="account.html">Account</a></th></tr>
              </table>
            </div>
          </div>
        `;
        main.append(menu);
        document.getElementById("hamMenu").style.display.block;
        document.querySelectorAll(".exit").forEach((close) => {
          close.addEventListener("click", (event) => {
            event.preventDefault();
            console.log("close clicked");
            menu.classList.remove("contact-modal");
            menu.remove("article");
      })
    });
  });
});
    var x = document.querySelectorAll("topNav");
    if (x.className === "topnav") {
      x.className += "responsive";
    } else {
      x.className = "topnav";
    }
    
  }
}



export default Submit;