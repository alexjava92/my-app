import WebSocket from 'ws';

let ws = new WebSocket('ws://176.124.211.252:4567/service');

ws.on('error', console.error);

ws.on('open', function open() {
    ws.send('{"jsonrpc": "2.0", "method" : "getAllCurrencies", "id" : 1}');
});


ws.on('message', function message(data) {
    console.log('received: %s', data);

    let JsonAllCeurrencies = JSON.parse(data)

    console.log(JsonAllCeurrencies)
});





