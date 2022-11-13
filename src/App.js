import formimg from "./images/form-img.jpg";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <div className="flex-container">
        <div className="img-container">
          <div className="overlay">
            {" "}
            <span className="img-text">
              <p>
                The on-demand, all inclusive. <br /> healthcare management
                ecosystem{" "}
              </p>
            </span>
          </div>
          <img className="form-img" src={formimg} alt="" />
        </div>

        <div className="form-container">
          <div className="form-content">
            <div className="form-header">
            <span >Create an Account</span>
            </div>
            <form className="forms" action="">
              <label className="label" for="fname">
                First name:
              </label>
              <br />
              <input
                className="form-input"
                type="text"
                id="fname"
                name="fname"
              />
              <br />
              <label className="label" for="fname">
                Work Email:
              </label>
              <br />
              <input
                className="form-input"
                type="text"
                id="fname"
                name="fname"
              />
              <br />
              <label className="label" for="fname">
                Telephone :
              </label>
              <br />
              <input
                className="form-input"
                type="text"
                id="fname"
                name="fname"
              />
              <br />
              <label className="label" for="fname">
                Password :
              </label>
              <br />
              <input
                className="form-input"
                type="text"
                id="fname"
                name="fname"
              />
              <br />
              <label className="label" for="fname">
                Confirm Password :
              </label>
              <br />
              <input
                className="form-input"
                type="text"
                id="fname"
                name="fname"
              />
              <br />
              <button className="button" type="button">
                Click Me!
              </button>
              <br />
              <span className="form-signin"> Already have an account ? <a href="#">Sign-in</a></span>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
