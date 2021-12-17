import React from "react";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-4">
              <h5>About Us</h5>
            <ul>
              <li>Technology</li>
              <li>Culture & recreation</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Cookie Settings</li>
            </ul>
          </div>
          <div className="col-4">
              <h5>Contact</h5>
            <ul>
              <li>Ressie Bednar, Adelineburgh, United Bank for USA</li>
              <li>Esther A. Cho</li>
              <li>+(994) 219 384 44 73</li>
              <li>+(994) 585 922 77 17</li>
            </ul>
          </div>
          <div className="col-4">
              <h5>Send Us</h5>
            <form>
            <div class="mb-3">
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div class="mb-3">
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                placeholder = "Write Something to us"
                rows="3"
              ></textarea>
            </div>
            <button type = 'submit' className = 'btn'>Send</button>
            </form>
          </div>
        </div>
      </div>
      <p>
        Create With <i class="fas fa-heart"></i> by <a href="https://github.com/Nazaralieff/" target = "_blank">Nazaraliyev</a>
      </p>
    </footer>
  );
}

export default Footer;
