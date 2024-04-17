import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import toast from "react-hot-toast";
import { NavBar } from "../components/NavBar";

const Reg = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    const promise = createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        toast.success("Account created successfully");
        console.log(user);
        navigate("/login");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorMessage);
        console.log(errorCode, errorMessage);

        // ..
      });
  };

  return (
    <>
      <NavBar />
      <main>
        <section>
          <div>
            <div>
              <form>
                <div>
                  <label htmlFor="email-address">Email address</label>
                  <input
                    type="email"
                    label="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Email address"
                  />
                </div>

                <div>
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    label="Create password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="Password"
                  />
                </div>

                <button type="submit" onClick={onSubmit}>
                  Sign up
                </button>
              </form>

              <p>
                Already have an account? <NavLink to="/login">Sign in</NavLink>
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Reg;
