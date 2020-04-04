"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MessageSender = /** @class */ (function () {
    function MessageSender() {
    }
    MessageSender.prototype.run = function () {
        var messages = this.getMessages();
        var message1 = JSON.stringify(messages[0]);
        var message2 = JSON.stringify(messages[1]);
        var result = message1 === message2 ? 'JSON files are the same' : 'JSON files are not the same!';
        console.log(result);
    };
    MessageSender.prototype.getMessages = function () {
        var fs = require('fs');
        var rawData1 = fs.readFileSync('./src/data/first-input.json');
        var rawData2 = fs.readFileSync('./src/data/second-input.json');
        var message1 = JSON.parse(rawData1);
        var message2 = JSON.parse(rawData2);
        return [message1, message2];
    };
    return MessageSender;
}());
exports.MessageSender = MessageSender;
