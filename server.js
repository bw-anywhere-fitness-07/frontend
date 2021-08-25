const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 5000;
const app = express();
const token =
  'esfeyJ1c2VySWQiOiJiMDhmODZhZi0zNWRhLTQ4ZjItOGZhYi1jZWYzOTA0NUIhkufemQifQ';

  const classes = [
    {
      id: 1,
      instructor_name: "Ken",
      type: "Yoga",
      date: "Aug 1",
      time: "11:00",
      duration: "1 hour",
      intensity: "Beginner",
      location: "Central Park",
      capacity: 25,
      registered: 0,
    },
    {
      id: 2,
      instructor_name: "Bob",
      type: "Kickboxing",
      date: "Aug 2",
      time: "12:30",
      duration: "1 hour",
      intensity: "Intermediate",
      location: "YMCA",
      capacity: 15,
      registered: 0,
    },
    {
      id: 3,
      instructor_name: "Carl",
      type: "Weightlifting",
      date: "Aug 7",
      time: "2:00",
      duration: "2 hour",
      intensity: "Advanced",
      location: "YMCA",
      capacity: 10,
      registered: 0,
    },
    {
      id: 4,
      instructor_name: "Kasey",
      type: "Biking",
      date: "Aug 6",
      time: "8:00",
      duration: "4 hour",
      intensity: "Intermediate",
      location: "Greenway Trail",
      capacity: 12,
      registered: 0,
    },
    {
      id: 2,
      instructor_name: "Michelle",
      type: "Swimming",
      date: "Aug 4",
      time: "5:00",
      duration: "1.5 hour",
      intensity: "Beginner",
      location: "Town Pool",
      capacity: 5,
      registered: 0,
    },
  ];
  

app.use(bodyParser.json());

app.use(cors());

function authenticator(req, res, next) {
  const { authorization } = req.headers;
  if (authorization === token) {
    next();
  } else {
    res.status(403).json({ error: 'User must be logged in to do that.' });
  }
}

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'lambda' && password === 'school') {
    req.loggedIn = true;
    res.status(200).json({
      payload: token,
    });
  } else {
    res
      .status(403)
      .json({ error: 'Username or Password incorrect. Please see Readme' });
  }
});

app.post('/api/logout', authenticator, (req, res) => {
  req.loggedIn = false;
  res.status(200).json({
    payload: token
  });
});

app.get('/api/classes', authenticator, (req, res) => {
  setTimeout(() => {
    res.send(classes);
  }, 1000);
});

app.get('/api/classes/:id', authenticator, (req, res) => {
  const friend = classes.find(f => f.id == req.params.id);

  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).send({ msg: 'Friend not found' });
  }
});

app.get('/api/', (req, res) => {
  res.status(200).json({status: "served"});
});

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});