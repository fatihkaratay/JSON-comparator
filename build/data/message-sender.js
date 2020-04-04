"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MessageSender = /** @class */ (function () {
    function MessageSender() {
    }
    MessageSender.prototype.run = function () {
        console.log('Getting the messages');
        var messages = this.getMessages();
        console.log(messages[0]);
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
