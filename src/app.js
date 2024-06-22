const getUsers = require("./modules/users");
const http = require("http");
const port = 3003;
const LocalIp = "http://127.0.0.1";

const server = http.createServer((req, res) => {
    const url = new URL(req.url, LocalIp);
    const userName = url.searchParams.get("hello");
    console.log(url);
    console.log(url.searchParams);
    console.log("aaaaaaaaaaaaaaaaaaaaaaaaaa", userName);

    if (userName) {
        res.statusCode = 200;
        res.statusMessage = "ok";
        res.setHeader("Content-Type", "text/plain");
        res.write(`Hello, ${req.url}! req: ${res.statusCode}`);
        res.end();
        return;
    }
    switch (req.url) {
        case "/users":
            res.statusCode = 200;
            res.statusMessage = "OK";
            res.setHeader("Content-Type", "application/json");
            res.write(getUsers());
            res.end();
            break;

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

        default:
            res.statusCode = 500;
            res.statusMessage = "Internal Server Error";
            res.setHeader("Content-Type", "text/plain");
            res.write(`..............|.....|.....|\n
.............)_)...)_)...)_)\n 
............)___).)___).)___)\n 
...........)____).)____).)____)\n 
.......(_*_)___|______|______|_______ ERORR :C\n
.........(_______________________/`);
            res.end();
            break;
    }
});

server.listen(port, () => {
    console.log(`Server port:${LocalIp}:${port}/`);
});
