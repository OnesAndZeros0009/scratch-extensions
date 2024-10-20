class ScratchHash {
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
                                    "defaultValue": "banana"
                                },
                            }
                        },
						                        {
                            "opcode": "salt",
                            "blockType": "reporter",
                            "text": "salt [input] [times] times on side [sides]",
                            "arguments": {
                                "input": {
                                    "type": "string",
                                    "defaultValue": ""
                                },
								"times": {
                                    "type": "number",
                                    "defaultValue": "50"
                                },
								"sides": {
                                    "type": "number",
                                    "menu": "sides"
                                },
                            }
                        },
                ],
			"menus": {
                "sides": [{text:"both",value:0}, {text:"left",value:1}, {text:"right",value:2}],
            }            
        };
    }
    
	async hash({input}) {
		const hashBuffer = await crypto.subtle.digest('SHA-1', new TextEncoder().encode(input));
		const hashArray = Array.from(new Uint8Array(hashBuffer));
		const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
		return hashHex;
	}
	salt({input, times, sides}) {
		function makerand(length) {
			let result = '';
			const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
			const charactersLength = characters.length;
			let counter = 0;
			while (counter < length) {
			  result += characters.charAt(Math.floor(Math.random() * charactersLength));
			  counter += 1;
			}
			return result;
		}
			
		var text = input
		if (sides == 0){
			text = makerand(times) + text;
			text = makerand(times) + text;
		}else if (sides == 1){
			text = makerand(times) + text;
		} else {
			text += makerand(times)
		}
		return text
	}
}
Scratch.extensions.register(new ScratchHash())
