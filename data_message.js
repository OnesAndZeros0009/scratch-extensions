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
                    "blockType": "hat",
                    "text": "when I receive message of type [type]",
                    "arguments": {
                        "type": {
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
                }
            ]
        };
    }

    // Method to send a message with a specific type and data
    message({type, data}, util) {
        this.lastMessageType = type;    // Store the last message type
        this.lastMessageData = data;    // Store the last message data

        // Manually trigger the hat block for the specific message type
        util.startHats("DataMessage_receive");
    }

    // Method to return the last received message's data
    getMessageData() {
        return this.lastMessageData + this.lastMessageType || "";
    }
  
    receive({type}) {
      return true;
    }
}

// Register the extension
Scratch.extensions.register(new DataMessage());
