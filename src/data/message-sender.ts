export class MessageSender {
    run() {
        console.log('Getting the messages');
        const messages: Object[] = this.getMessages();
        console.log(messages[0]);
    }

    private getMessages(): Object[]{
        const fs = require('fs');

        let rawData1 = fs.readFileSync('./src/data/first-input.json');
        let rawData2 = fs.readFileSync('./src/data/second-input.json');

        let message1 = JSON.parse(rawData1);
        let message2 = JSON.parse(rawData2);

        return [message1, message2];
    }
}