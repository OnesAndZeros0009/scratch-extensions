class DataMessage {
    constructor() {
        this.lastMessageType = null;    // Store the last message type
        this.lastMessageData = null;    // Store the last message data
    }

    getInfo() {
        return {
            "id": "DataMessage",
            "name": "data messaging",

            "blocks": [
                {
                    "opcode": "message",
                    "blockType": "command",
                    "text": "send message of type [type] with data [data]",
                    "arguments": {
                        "type": {
                            "type": "string",
                            "defaultValue": "turn left"
                        },
                        "data": {
                            "type": "string",
                            "defaultValue": "90"
                        }
                    }
                },
                {
                    "opcode": "receive",
                    blockType: Scratch.BlockType.EVENT,
                    "text": "when I receive message of type [FILTER_TYPE]",
                    "arguments": {
                        "FILTER_TYPE": {
                            "type": "string",
                            "defaultValue": "turn left"
                        }
                    },
                    "isEdgeActivated": false // Prevent automatic activation
                },
                'happy',
                {
                    "opcode": "getMessageData",
                    "blockType": "reporter",
                    "text": "received message data"
                },
            ]
        };
    }
    message({type, data}, util) {
        util.startHats('DataMessage_receive', {FILTER_TYPE: reporter});
    } 

    // Method to return the last received message's data
    getMessageData() {
        return this.lastMessageData
    }
}

// Register the extension
Scratch.extensions.register(new DataMessage());
