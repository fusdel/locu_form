import formimg from "./images/form-img.jpg";
import "./App.scss";
import {React,  useState} from "react";

function App() {
  const [error, setError] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  
// Function to save data to local storage 
  const saveform = (event) => {
    event.preventDefault();
    if (validateind()) {
     localStorage.setItem('form', JSON.stringify(user));
    }
    else{
      console.log(user);
    }
  }


// Function to get changes made on form
  const handleindChange = (event) => {
    setUser({ ...user, [event.target.id]: event.target.value });
  };

// Function to validate form
  const validateind = () => {
    let temp = []
    temp.name = user.name ? "" : "This field is required"
    if (!user.email) {
      temp.email = "This field is required"
    } else if (!/\S+@\S+\.\S+/.test(user.email)) {
      temp.email = 'Email address is invalid';
    }
    if (!user.phone) {
      temp.phone = "This field is required"
    } else if (user.phone.length < 7) {
      temp.phone = 'Phone number should be at least 7 digits';
    }
    temp.password = user.password ? "" : "This field is required"
    if (!user.confirmPassword) {
      temp.confirmPassword = "This field is required"
    } else if (user.confirmPassword !== user.password) {
      temp.confirmPassword = 'Passwords dont match';
    }
    setError({ ...temp })
    return Object.values(temp).every(x => x == "")
  }

  return (
    <div className="App">
      <div className="flex-container">
        <div className="img-container">
          <div className="overlay">
            {" "}
            <span className="text">
              <p>
                The on-demand, all inclusive. <br /> healthcare management
                ecosystem{" "}
              </p>
            </span>
          </div>
          <img className="form-img" src={formimg} alt="" />
        </div>
        <div className="form-container">
            <form className="forms" action="POST" onSubmit={saveform}>
            <div className="title">
            <span >Create an Account</span>
            </div>
              <div className="input-field">
                {/* Name Input */}
              <label for="fname">
                Name <span className="error">{error.name}*</span>
              </label>
            
              <span className="space"></span>
              <input
                type="text"
                id="name"
                name="name"
                value={user.name}
                onChange={handleindChange}
                placeholder="Your Name"
              /></div>
              <div className="input-field">
              {/* Email Input */}
              <label for="fname">
                Work Email <span className="error">{error.email}*</span>
              </label>
           
              <input
                
                type="text"
                id="email"
                name="email"
                value={user.email}
                onChange={handleindChange}
                placeholder="Your Email"
              /></div>
             {/* Phone Input */}
             <div className="input-field">
              <label for="fname">
                Telephone <span className="error">{error.phone}*</span>
              </label>
          
              <input
                
                type="Number"
                id="phone"
                name="phone"
                value={user.phone}
                onChange={handleindChange}
                placeholder="+220 2366073"
              /></div>
              {/* Password Input */}
              <div className="input-field">
              <label for="fname">
                Password <span className="error">{error.password}*</span>
              </label>
            
              <input
                type="text"
                id="password"
                name="password"
                value={user.password}
                onChange={handleindChange}
                placeholder="Your Password"
              /> </div>
              <div className="input-field">
              <label for="fname">
                Confirm Password <span className="error">{error.confirmPassword}*</span>
              </label>
             
              <input
                type="text"
                id="confirmPassword"
                name="confirmPassword"
                value={user.confirmPassword}
                onChange={handleindChange}
                placeholder="Confirm your Password"
              />
              </div>
              <div className="input-field">
              <button onClick={saveform} className="button" type="button">
                Agree & Signup
              </button>
              </div>
              <div className="input-field">
              <span className="signin"> Already have an account ? <a href="#">Sign-in</a></span>
              </div>
            </form>
          
        </div>
      </div>
    </div>
  );
}

export default App;
