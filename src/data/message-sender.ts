export class MessageSender {
    run() {
        const messages: Object[] = this.getMessages();

        const message1: string = JSON.stringify(messages[0]);
        const message2: string = JSON.stringify(messages[1]);
        
        const result: string = message1 === message2 ? 'JSON files are the same' : 'JSON files are not the same!';
        console.log(result);
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