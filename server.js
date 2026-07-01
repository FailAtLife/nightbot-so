const express = require('express');
const app = express();

app.get('/so', (req, res) => {
  const user = req.query.user;

  if (!user) {
    return res.send('No user provided');
  }

  if (Math.random() < 0.5) {
    res.send(`/timeout ${user} 60`);
  } else {
    res.send(`Shout ${user} BTW!`);
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
