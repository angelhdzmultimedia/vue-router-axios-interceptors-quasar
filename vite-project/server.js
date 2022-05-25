import express from 'express';
import cors from 'cors';
const app = express();
app.use(cors());
app.use(express.json());
app.post('/api/user/login', (req, res) => {
  const { email, password } = req.body;
  console.log([email, password]);
  res.send([1, 2, 3, 4, 5, 6]);
});
app.listen(5000, () => {
  console.log('Server is listening on port 5000...');
});
