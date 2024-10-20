class TextPen {
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
                            "text": "draw text [text] at current pos",
                            "arguments": {
                                "text": {
                                    "type": "string",
                                    "defaultValue": "apple"
                                }
                            }
                        }
                ]         
        };
    }
}
Scratch.extensions.register(new Textpen())
