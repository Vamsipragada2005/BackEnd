var users = [{ id: 69, name: 'vamsi' }, { id: 96, name: 'naidu' }];

const get_data = (req, res) => {
    res.json(users);
};

const post_data = (req, res) => {
    const new_id = req.body.id;
    const user_existed = users.some(user => user.id === new_id);

    if (user_existed) {
        return res.status(400).json({ message: "User id already existed" });
    }

    users.push(req.body);
    res.json(users);
};

const update_data = (req, res) => {
    const id = parseInt(req.params.id);
    const updated_user = req.body;

    users = users.map(u => u.id === id ? { ...u, ...updated_user } : u);
    res.json(users);
};

const delete_data = (req, res) => {
    const id = parseInt(req.params.id);
    const initialLength = users.length;

    users = users.filter(u => u.id !== id);

    if (users.length === initialLength) {
        return res.status(404).json({ message: "User not found" });
    }

    res.json(users);
};

export { get_data, post_data, update_data, delete_data };