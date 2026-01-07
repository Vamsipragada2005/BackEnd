// import react from 'react';
// import axios from 'axios';
// function App() {
//   const MakeCall=async()=>{
//      try{
//       const result = await axios.get("http://localhost:1122/get_api");
//       console.log(result)
//      }
// catch(err){
//   console.log(err);

// }
//   }

  

//   return (
//     <button onClick={MakeCall}>click me </button>
//   );

// }
// export default App;


// import { useState } from "react";

// const API_URL = "http://localhost:1122";

// function App() {
//   const [id, setId] = useState("");
//   const [name, setName] = useState("");
//   const [output, setOutput] = useState([]);


//   const getUsers = async () => {
//     const res = await fetch(`${API_URL}/get-data`);
//     const data = await res.json();
//     setOutput(data);
//   };

  
//   const postUser = async () => {
//     const res = await fetch(`${API_URL}/post-data`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         id: Number(id),
//         name: name,
//       }),
//     });

//     const data = await res.json();
//     setOutput(data);
//   };


//   const updateUser = async () => {
//     const res = await fetch(`${API_URL}/update-data/${id}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         name: name,
//       }),
//     });

//     const data = await res.json();
//     setOutput(data);
//   };


//   const deleteUser = async () => {
//     const res = await fetch(`${API_URL}/delete-data/${id}`, {
//       method: "DELETE",
//     });

//     const data = await res.json();
//     setOutput(data);
//   };

//   return (
//     <div style={{ padding: "30px", fontFamily: "Arial" }}>
//       <h2>CRUD Operations (React)</h2>

//       <div>
//         <input
//           type="number"
//           placeholder="User ID"
//           value={id}
//           onChange={(e) => setId(e.target.value)}
//           style={{ marginRight: "10px" }}
//         />

//         <input
//           type="text"
//           placeholder="User Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//       </div>

//       <div style={{ marginTop: "15px" }}>
//         <button onClick={getUsers}>GET</button>
//         <button onClick={postUser}>POST</button>
//         <button onClick={updateUser}>PUT</button>
//         <button onClick={deleteUser}>DELETE</button>
//       </div>

//       <h3>Response:</h3>
//       <pre>{JSON.stringify(output, null, 2)}</pre>
//     </div>
//   );
// }

// export default App;


import { useState, useEffect } from "react";
import api from "./api";
import UserForm from "./UserForm";
import UserList from "./UserList";

function App() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ id: "", name: "" });
  const [message, setMessage] = useState("");

  const fetchUsers = async () => {
    try {
      const res = await api.get("/get-data");
      setUsers(res.data);
    } catch (err) {
      setMessage(err.response?.data?.message || "Failed to fetch users");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const addUser = async () => {
    try {
      const payload = { id: Number(form.id), name: form.name };
      const res = await api.post("/post-data", payload);
      setUsers(res.data);
      setMessage("User added");
      setForm({ id: "", name: "" });
    } catch (err) {
      setMessage(err.response?.data?.message || "Add failed");
    }
  };

  const updateUser = async (id, name) => {
    try {
      const res = await api.put(`/update-data/${id}`, { name });
      setUsers(res.data);
      setMessage("User updated");
    } catch (err) {
      setMessage(err.response?.data?.message || "Update failed");
    }
  };

  const deleteUser = async (id) => {
    try {
      const res = await api.delete(`/delete-data/${id}`);
      setUsers(res.data);
      setMessage("User deleted");
    } catch (err) {
      setMessage(err.response?.data?.message || "Delete failed");
    }
  };

  return {
    /* simple layout */
  } && (
    <div style={{ padding: 20 }}>
      <h2>Simple CRUD operations</h2>

      {message && <p>{message}</p>}

      <UserForm form={form} setForm={setForm} onSubmit={addUser} />

      <UserList
        users={users}
        onUpdate={updateUser}
        onDelete={deleteUser}
      />
    </div>
  );
}

export default App;