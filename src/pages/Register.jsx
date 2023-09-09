import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/config";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegistration = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("User registered:", user);
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  return (
    <div>
      <div class="screen" style={{ margin: "0 auto", width: "70%" }}>
        <div class="screen__content">
          <form class="login" onSubmit={handleRegistration}>
            <div class="login__field">
              <i class="login__icon fas fa-user"></i>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Ismingiz"
              />
            </div>
            <div class="login__field">
              <i class="login__icon fas fa-lock"></i>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="paro'l"
              />
            </div>
            <button class="button login__submit">
              <span class="button__text">Ro'yxatdan o'tish</span>
              <i class="button__icon fas fa-chevron-right"></i>
            </button>
          </form>
          <div class="social-login">
            <h3>Ro'yxatdan o'tish</h3>
            <div class="social-icons">
              <a href="#" class="social-login__icon fab fa-instagram"></a>
              <a href="#" class="social-login__icon fab fa-facebook"></a>
              <a href="#" class="social-login__icon fab fa-twitter"></a>
            </div>
          </div>
        </div>
        <div class="screen__background">
          <span class="screen__background__shape screen__background__shape4"></span>
          <span class="screen__background__shape screen__background__shape3"></span>
          <span class="screen__background__shape screen__background__shape2"></span>
          <span class="screen__background__shape screen__background__shape1"></span>
        </div>
      </div>
    </div>
  );
};

export default Register;
