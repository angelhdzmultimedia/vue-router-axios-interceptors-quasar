import express from 'express';
import cors from 'cors';
const users = [];
for (let i = 0; i < 25; i++) {
  users.push({
    name: `User_${i + 1}`,
    id: i + 1,
    imageUrl: `http://localhost:5000/images/user${i + 1}`,
    email: `user_${i + 1}@gmail.com`,
  });
}
const app = express();
let currentPage = 1;
let perPage = 0;
let total = 0;

app.use(cors());
app.use(express.json());

app.get('/api/user', (req, res) => {
  const { limit, page } = req.query;
  const _users = [];

  for (let i = page - 1; i < limit; i++) {
    _users.push(users[i]);
  }
  const payload = {
    users: _users,
    meta: {
      currentPage: page,
      total: users.length,
      perPage: _users.length,
    },
  };

  res.send(payload);
});
app.listen(5000, () => {
  console.log('Server is listening on port 5000...');
});
