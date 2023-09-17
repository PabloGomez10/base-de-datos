const { Router, json } = require ('express');
const router = Router ();
const _ = require('underscore');

const posts = require ('./data/post.json');
console.log(posts);

router.get('/', (req, res) => {
    res.json(posts);
});

router.post('/', (req, res) => {  // despues cambiar algunas cosas de esto
//    console.log(req.body);
   const {id, comentario, imagen, autor, fecha, like} = req.body;
   if(id && comentario && imagen, autor, fecha  && like ){
      const id = posts.length + 1;
      const newPost = {...req.body, id};
      posts.push(newPost);     
      res.json('posts');
   }
     else{
        res.status(500).json({error: 'There was error.'});
     }
//    res.send('received');
});

module.exports = router;