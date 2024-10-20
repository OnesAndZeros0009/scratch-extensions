class ScratchHash {
    constructor() {
    }
    
    getInfo() {
        return {
            "id": "Text_pen",
            "name": "Text Pen",
            "blocks": [
                        {
                            "opcode": "text",
                            "blockType": "command",
                            "text": "write text [text] at current pos",
                            "arguments": {
                                "text": {
                                    "type": "string",
                                    "defaultValue": "apple"
                                },
                            }
                        },
                ],
        };
    }
}
Scratch.extensions.register(new ScratchHash())
