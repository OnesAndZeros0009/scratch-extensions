class RuntimeCompile {
    constructor() {
        this.variables = {};  // Object to store variables
    }

    getInfo() {
        return {
            "id": "RuntimeCompile",
            "name": "runtime js in scratch",
            "blocks": [
                {
                    "opcode": "run",
                    "blockType": "command",
                    "text": "run code [code]",
                    "arguments": {
                        "code": {
                            "type": "string",
                            "defaultValue": ""
                        }
                    }
                },
                {
                    "opcode": "evaluate",
                    "blockType": "reporter",
                    "text": "run and evaluate [code]",
                    "arguments": {
                        "code": {
                            "type": "string",
                            "defaultValue": ""
                        }
                    }
                },
                {
                    "opcode": "modifyInput",
                    "blockType": "command",
                    "text": "modify variable [key] by [operation] [value]",
                    "arguments": {
                        "key": {
                            "type": "string",
                            "defaultValue": "number"
                        },
                        "operation": {
                            "type": "number",
                            "menu": "operations",
                            "defaultValue": 0
                        },
                        "value": {
                            "type": "number",
                            "defaultValue": 0
                        }
                    }
                },
                {
                    "opcode": "clearVariables",
                    "blockType": "command",
                    "text": "clear variables",
                },
                {
                    "opcode": "getVariables",
                    "blockType": "reporter",  // Reporter block for getting all variable names and values
                    "text": "get all variables",
                },
                {
                    "opcode": "getVariableValue",
                    "blockType": "reporter",  // Reporter block for getting the value of a variable by name
                    "text": "get value of variable [key]",
                    "arguments": {
                        "key": {
                            "type": "string",
                            "defaultValue": "number"
                        }
                    }
                }
            ],
            "menus": {
                "operations": [{ text: "set to", value: 0 }, { text: "change by", value: 1 }],
            }
        };
    }

    run({ code }) {
        try {
            eval(code);
        } catch (error) {
            console.error("Error running code:", error);
        }
    }

    evaluate({ code }) {
        try {
            return eval(code);
        } catch (error) {
            console.error("Error evaluating code:", error);
            return "Error";
        }
    }

    modifyInput({ key, operation, value }) {
        // Initialize the variable if it doesn't exist
        if (this.variables[key] === undefined) {
            this.variables[key] = 0;  // Set a default value for new variables
        }

        if (operation === 0) {  // "set to"
            this.variables[key] = value;  // Set the variable to the specified value
        } else if (operation === 1) {  // "change by"
            this.variables[key] += value;  // Change the variable by the specified value
        }
    }

    getVariables() {
        // Construct a string showing both variable names and their values
        const variableEntries = Object.entries(this.variables); // Get variable name-value pairs
        return variableEntries.map(([key, value]) => `${key}: ${value}`).join(", "); // Format as "name: value"
    }

    getVariableValue({ key }) {
        // Return the value of the specified variable or "" if it doesn't exist
        return this.variables[key] !== undefined ? this.variables[key] : "N/A";  // Return empty string if variable not found
    }
}

Scratch.extensions.register(new RuntimeCompile());
