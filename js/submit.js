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
          let form = document.createElement("div");
          form.classList.add("modal");
          form.innerHTML = `
                      <div id="myModal" class="modal">
                        <div class="modal-content">
                          <span class="close">&times;</span>
                          <p>Thank you for submitting your message. Please give us 24 hours to respond. If this is about a medical emergency, please find the nearest vet. Puparazzi's messaging system is not meant for emergencies.</p>
                          </form>
                        </div>
                      </div>
                    `;
          main.append(form);
          document.getElementById("myModal").style.display = "block";
      
          document.querySelectorAll(".close").forEach((close) => {
            close.addEventListener("click", (event) => {
              event.preventDefault();
              console.log("close clicked");
              form.classList.remove("modal");
              form.remove("div");
        });
      });
        });
      });
  }

}
export default Submit;