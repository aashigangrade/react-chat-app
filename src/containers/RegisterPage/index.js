import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import Card from "../../components/UI/Card";
import {signup} from '../../actions';
import {useDispatch, useSelector} from 'react-redux';
import "./style.css";
import { Redirect } from 'react-router-dom';

export default function RegisterPage() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);


  function registerUser(e){
    e.preventDefault();
    const user = {
      firstname,lastname,email,password
    }
    dispatch(signup(user));
  }

  if(auth.authenticated){
    return <Redirect to={`/`} />
  }

  return (
    <Layout>
      <div className="registerContainer">
        <Card>
          <form onSubmit={registerUser}>
            <input
              type="text"
              placeholder="Firstname"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
            <input
              type="text"
              placeholder="Lastname"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input type="submit" value="Sign up" />
          </form>
        </Card>
      </div>
    </Layout>
  );
}
