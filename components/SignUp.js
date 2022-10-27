import React, {useState, useEffect} from "react";
import { DataStore } from "@aws-amplify/datastore";
// import { Users } from "./models";

export default function SignUp() {
    const[name, setName] = useState("");
    const[password, setPassword] = useState("");
    const[email, setEmail] = useState("");
  //   await DataStore.save(
  //     new Users({
  //       name: "Lorem ipsum dolor sit amet",
  //       password: "Lorem ipsum dolor sit amet",
  //       email: "Lorem ipsum dolor sit amet",
  //     })
  //   );
  return <div className="formContainer">
    {/* inputs */}
        <div>
            <input type="text" onChange={(val) => setName(val.target.value)} placeholder="name"/>
            <input type="text" onChange={(val) => setEmail(val.target.value)} placeholder="email"/>
            <input type="text" onChange={(val) => setPassword(val.target.value)} placeholder="password"/>
        </div>

  </div>;
}
