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
                            "menu": "types"
                        },
                        "data": {
                            "type": "string",
                            "menu": "types"
                        }
                    }
                },
                {
                    "opcode": "receive",
                    "blockType": Scratch.BlockType.EVENT,
                    "text": "when I receive message of type [FILTER_TYPE]",
                    "arguments": {
                        "FILTER_TYPE": {
                            "type": "string",
                            "defaultValue": "turn left"
                        }
                    },
                    "isEdgeActivated": false // Prevent automatic activation
                },
                {
                    "opcode": "getMessageData",
                    "blockType": "reporter",
                    "text": "received message data"
                },
                '---',
                {
                    "opcode": "addtype",
                    "blockType": "command",
                    "text": "add message type option [type]",
                    "arguments": {
                        "type": {
                            "type": "string",
                            "menu": "turn left"
                        }
                    }
                },
                {
                    "opcode": "deleteType",
                    "blockType": "command",
                    "text": "delete message type option [type]",
                    "arguments": {
                        "type": {
                            "type": "string",
                            "defaultValue": "turn left"
                        }
                    }
                },
                {
                    "opcode": "deleteAllTypes",
                    "blockType": "command",
                    "text": "delete all message type options"
                }
            ]
            menus: {
                  key: {
                acceptReporters: false,
                items: [
                  {
                    text: 'space',
                    value: ' '
                  },
                  'a',
                  'b',
                  'c',
                  // ...
                ]
              }
            }
        };
    }

    message({type, data}, util) {
        util.startHats('DataMessage_receive', {FILTER_TYPE: type});
        this.lastMessageType = type;
        this.lastMessageData = data;
    }

    // Method to return the last received message's data
    getMessageData() {
        return this.lastMessageData;
    }
}

// Register the extension
Scratch.extensions.register(new DataMessage());
