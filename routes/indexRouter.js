const {Router} = require("express");

const indexRouter = Router();

let messages = [
    {
        text: "Hi there!",
        id: 0,
        user: "Logan",
        date: new Date()
    },
    {
        text: "Good morning",
        user: "Scott",
        id: 1,
        date: new Date()
    },
    {
        text: "Salutations fellow Mutants",
        user: "Charles",
        id: 2,
        date: new Date()
    },
    {
        text: "No",
        user: "Erik 'Magneto'",
        id: 3,
        date: new Date()
    }
]


indexRouter.get("/", (req, res) => {
    res.render("index", { messageList: messages });
  });

indexRouter.get('/new', (req, resp) => {
    resp.render("form");
});

indexRouter.post('/new', (req, resp) => {
    const mess = req.body.messageText;
    const usr = req.body.usr;
    messages.push({text: mess, user:usr, id:messages.length, date: new Date()});
    resp.redirect("/");
})

indexRouter.get('/message/:messageID', (req, resp) => {
    const { messageID } = req.params;
    const message = messages[messageID];
    console.log(message);
    resp.render("message", {message:message});
})


module.exports = indexRouter;