class ScratchHash {
    constructor() {
    }
    
    getInfo() {
        return {
            "id": "Hash",
            "name": "hash",
            "blocks": [
                        {
                            "opcode": "fetchURL",
                            "blockType": "reporter",
                            "text": "convert [input] to hash",
                            "arguments": {
                                "input": {
                                    "type": "string",
                                    "defaultValue": "123"
                                },
                            }
                        },
                ],
        };
    }
    
	async fetchURL({input}) {
		const hashBuffer = await crypto.subtle.digest('SHA-1', new TextEncoder().encode(input));
		const hashArray = Array.from(new Uint8Array(hashBuffer));
		const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
		return hashHex;
	}
}


Scratch.extensions.register(new ScratchHash())
