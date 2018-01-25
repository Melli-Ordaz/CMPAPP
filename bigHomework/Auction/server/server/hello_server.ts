/**
 * Created by hemisu on 2018/1/24.
 */
import * as http from 'http'
const server = http.createServer((request, response) => {
    response.end("Hello Node!")
});

server.listen(8000);