"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by hemisu on 2018/1/24.
 */
var http = require("http");
var server = http.createServer(function (request, response) {
    response.end("Hello Node!");
});
server.listen(8000);
