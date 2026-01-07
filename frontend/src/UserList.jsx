import { useState } from "react";

function UserList({ users, onUpdate, onDelete }) {
  const [editing, setEditing] = useState({}); // { [id]: tempName }

  const startEdit = (user) => {
    setEditing((prev) => ({ ...prev, [user.id]: user.name }));
  };

  const changeEdit = (id, value) => {
    setEditing((prev) => ({ ...prev, [id]: value }));
  };

  const saveEdit = (id) => {
    const name = editing[id] ?? "";
    onUpdate(id, name);
    setEditing((prev) => {
      const copy = { ...prev };
      delete copy[id];
      return copy;
    });
  };

  const cancelEdit = (id) => {
    setEditing((prev) => {
      const copy = { ...prev };
      delete copy[id];
      return copy;
    });
  };

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id} style={{ marginBottom: 8 }}>
          <strong>ID:</strong> {user.id}{" "}
          <strong>Name:</strong>{" "}
          {editing[user.id] !== undefined ? (
            <>
              <input
                type="text"
                value={editing[user.id]}
                onChange={(e) => changeEdit(user.id, e.target.value)}
                style={{ marginRight: 8 }}
              />
              <button onClick={() => saveEdit(user.id)} style={{ marginRight: 6 }}>
                Save
              </button>
              <button onClick={() => cancelEdit(user.id)}>Cancel</button>
            </>
          ) : (
            <>
              {user.name}{" "}
              <button onClick={() => startEdit(user)} style={{ marginRight: 6 }}>
                Edit
              </button>
              <button onClick={() => onDelete(user.id)}>Delete</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

export default UserList;