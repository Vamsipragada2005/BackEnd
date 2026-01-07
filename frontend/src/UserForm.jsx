function UserForm({ form, setForm, onSubmit }) {
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ marginBottom: 20 }}>
      <input
        type="number"
        name="id"
        placeholder="ID"
        value={form.id}
        onChange={handleChange}
        style={{ marginRight: 8 }}
      />
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        style={{ marginRight: 8 }}
      />
      <button onClick={onSubmit}>Add User</button>
    </div>
  );
}

export default UserForm;