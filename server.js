const express = require('express');
const Twitter = require('twit');
const app = express();

const api_client = new Twitter({
  consumer_key: 'onCErDqMO4daHjJuUjD1tvrMu',
  consumer_secret: 'EdghUzd9LaI6djdGBoMe4lZqzY47k3X24mzsXJyI0IHUC2xM2K',
  access_token: '1198637104496095233-ggAZH2s9EpMxyJ0xwiVmlpaq03wdLv',
  access_token_secret: 'KwA21zHwFJ8qSl2RucnWToNxdiHOTueZEfWUkDONXj6P3'
});

app.use(require('cors')());
app.use(require('body-parser').json());

//creating the endpoints for posting and retrieving tweets on our Node server
/* twitter provides the following endpoints that will enable us to interact with our twitter timeline whein retrieving and posting tweets
*      GET statuses/home_timeline - returns the most recent tweets posted by the user and the users they follow
*      GET statuses/mentions_timeline - returns the most recent mentions for the authenticating user
*      POST statuses/update - used for posting tweets*/

//this first endpoint will be used to retrieve the 10 latest tweets on your timeline
app.get('/api/home', (req, res) => {
  const params = { tweet_mode: 'extended', count: 11}

  api_client
    .get('statuses/home_timeline', params)
    .then(timeline => {
      res.send(timeline);
    })
    .catch(error => {
      res.send(error);
    });
});

app.get('/api/user', (req, res) => {
  api_client
    .get('account/verify_credentials')
    .then(user => {
      res.send(user);
    })
    .catch(error => {
      res.send(error);
    });
});

app.get('/api/test/:id', (req, res) => {
  api_client
    .get(`statuses/show/${req.params.id}`)
    .then(user => {
      res.send(user);
    })
    .catch(error => {
      res.send(error);
    });
});


app.listen(3000, () => console.log('Server running'));
