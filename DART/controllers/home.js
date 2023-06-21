const Chatbot = require('../models/Chatbot.js');

/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  res.render('base_intro.pug', {
    title: 'Welcome'
  });
};

exports.getChatbot = (req, res, next) => {
  console.log("@@@@@query    ",req.query.c);
  res.render('base_intro.pug', {
   title: 'Welcome',
   condis: req.query.c,
  })

};

exports.postChatbot = (req, res, next) => {

  const chatbot = new Chatbot({
  cond: req.body.cond,

  });

  chatbot.save((err) => {
            if (err) {
              return next(err);
            }
            //req.flash('success', { msg: 'Profile information has been updated.' });
            res.send("Good!!!");
          });


  };
