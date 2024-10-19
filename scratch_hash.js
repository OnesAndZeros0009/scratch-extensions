class ScratchPasswordUtils{
    constructor() {
    }
    
    getInfo() {
        return {
            "id": "Hash",
            "name": "hash",
            "blocks": [
                        {
                            "opcode": "hash",
                            "blockType": "reporter",
                            "text": "convert [input] to hash",
                            "arguments": {
                                "input": {
                                    "type": "string",
                                    "defaultValue": "123"
                                },
                            }
                        },
						{
                            "opcode": "salt",
                            "blockType": "reporter",
                            "text": "salt [input] on side [side] [salt] times",
                            "arguments": {
                                "input": {
                                    "type": "string",
                                    "defaultValue": "123"
                                },
								"side": {
                                    "type": "number",
                                    "menu": "sides"
                                },
								"salt": {
                                    "type": "string",
                                    "defaultValue": "50"
                                },
                            }
                        },
                ],
				"menus": {
					"sides": [{text:"left",value:1}, {text:"right",value:2}, {text:"both",value:3}],
            }
        };
    }
    
	async hash({input}) {
		const hashBuffer = await crypto.subtle.digest('SHA-1', new TextEncoder().encode(input));
		const hashArray = Array.from(new Uint8Array(hashBuffer));
		const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
		return hashHex;
	}
	
	salt({input, side, salt}) {
		return 0
	}
}


Scratch.extensions.register(new ScratchHash())
