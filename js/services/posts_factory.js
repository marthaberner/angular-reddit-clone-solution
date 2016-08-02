app.factory('PostsFactory', function () {
  var posts = [
    {
      title: "Winter is coming.",
      author: "Ned Stark",
      img_url: "http://vignette1.wikia.nocookie.net/gameofthrones/images/6/65/Ned_Stark.jpg/revision/latest?cb=20130519175509",
      description: "Eddard Stark executes a deserter from the Night's Watch named Will. Will tries to warn Eddard about the return of the White Walkers, but Eddard dismisses him as a madman.",
      date: Date.now(),
      votes: 0,
      comments: []
    },
    {
      title: "Like I give a f*@k.",
      author: "Cersei Lannister",
      img_url: "http://i.huffpost.com/gen/1205630/images/o-CERSEI-DOUTZEN-facebook.jpg",
      description: "I do things because they feel good. I drink because it feels good. I killed my husband because it felt good to be rid of him.",
      date: Date.now(),
      votes: 0,
      comments: []
    },
    {
      title: "I don't need saving.",
      author: "Arya Stark",
      img_url: "http://i.ndtvimg.com/i/2016-05/game-of-thrones_640x480_81464688743.jpg",
      description: "My name is Arya Stark. I want you to know that. The last thing you're ever going to see is a Stark smiling down at you as you die.",
      date: Date.now(),
      votes: 0,
      comments: []
    }
  ]
  return posts;
} )
