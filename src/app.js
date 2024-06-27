const getUsers = require("./modules/users");
const http = require("http");
const port = 3003;
const LocalIp = "http://127.0.0.1";

const server = http.createServer((req, res) => {
    const url = new URL(req.url, LocalIp);
    const userName = url.searchParams.get("hello");
    console.log(URLSearchParams);

    function checkUser({ date }) {
        const info = date;
        const findInfo = info.indexOf("/info");
        if (findInfo >= 0) {
            return req.url;
        } else {
            return "/?hallo";
        }
    }

    const arrUsers = [
        {
            id: 1,
            name: "/Ivan",
        },
        {
            id: 2,
            name: "/Igor",
        },
        {
            id: 3,
            name: "/Ismail",
        },
        {
            id: 4,
            name: "/Jess",
        },
    ];

    function saveUserName({ name }) {
        const find = arrUsers.find(({ name }) => name === req.url);
        if (find) {
            return req.url;
        } else {
            res.statusCode = 500;
        }
    }

    switch (req.url) {
        case "/?hello":
            res.statusCode = 400;
            res.statusMessage = "Bad Request";
            res.setHeader("Content-Type", "text/plain");
            res.write(`Enter a name`);
            res.end();
            break;

        case "/":
            res.statusCode = 200;
            res.statusMessage = "OK";
            res.setHeader("Content-Type", "text/plain");
            res.write(`Hello world`);
            res.end();
            break;

        case checkUser({ date: req.url }):
            res.statusCode = 200;
            res.statusMessage = "OK";
            res.setHeader("Content-Type", "application/json");
            res.write(getUsers());
            res.end();
            break;

        case saveUserName({ name: req.url }):
            res.statusCode = 200;
            res.statusMessage = "ok";
            res.setHeader("Content-Type", "text/plain");
            res.write(`Hello, ${req.url}! req: ${res.statusCode}`);
            res.end();
            break;

        default:
            res.statusCode = 500;
            res.statusMessage = "Internal Server Error";
            res.setHeader("Content-Type", "text/plain");
            res.write(`..............|.....|.....|\n
.............)_)...)_)...)_)\n 
............)___).)___).)___)\n 
...........)____).)____).)____)\n 
.......(_*_)___|______|______|_______ ${req.url} ERORR :C\n
.........(_______________________/`);
            res.end();
            break;
    }
});

server.listen(port, () => {
    console.log(`Server port:${LocalIp}:${port}/`);
});
