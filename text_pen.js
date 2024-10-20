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
                                "input": {
                                    "type": "string",
                                    "defaultValue": "apple"
                                },
                            }
                        },
                ],
			"menus": {
                "sides": [{text:"both",value:0}, {text:"left",value:1}, {text:"right",value:2}],
            }            
        };
    }
    
	async text({text}) {
	}
}
Scratch.extensions.register(new ScratchHash())
