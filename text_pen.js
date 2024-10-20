class TextPen {
    constructor(runtime) {
        this.penColor = '#000000';
        this.runtime = runtime
        this._penSkinId = -1;
        this._penDrawableId = -1;
    }

    _getPenLayerID () {
        if (this._penSkinId < 0 && this.runtime.renderer) {
            this._penSkinId = this.runtime.renderer.createPenSkin();
            this._penDrawableId = this.runtime.renderer.createDrawable(StageLayering.PEN_LAYER);
            this.runtime.renderer.updateDrawableSkinId(this._penDrawableId, this._penSkinId);
        }
        return this._penSkinId;
    }

    getInfo() {
        return {
            id: 'Textpen',
            name: 'Text Pen',
            blocks: [
                {
                    opcode: 'text',
                    blockType: 'command',
                    text: 'draw text [text]',
                    arguments: {
                        text: {
                            type: 'string',
                            defaultValue: 'apple'
                        },
                    }
                },
                {
                    opcode: 'setTextColor',
                    blockType: 'command',
                    text: 'set text color [color]',
                    arguments: {
                        color: {
                            type: 'color',
                            defaultValue: '#000000'
                        },
                    }
                },
                {
                    opcode: 'getTextColor',
                    blockType: 'reporter',
                    text: 'get text color',
                },
                {
                    opcode: 'rgbToHex',
                    blockType: 'reporter',
                    text: 'convert rgb [r] [g] [b] to hex',
                    arguments: {
                        r: { type: 'number', defaultValue: 0 },
                        g: { type: 'number', defaultValue: 0 },
                        b: { type: 'number', defaultValue: 0 }
                    }
                }
            ],
        };
    }

    text({text}) {
        console.log(`Drawing text "${text}" with color ${this.penColor}`);
        this.runtime.requestRedraw();
    }

    setTextColor({color}) {
        this.penColor = color;
    }

    getTextColor() {
        return this.penColor;
    }

    rgbToHex({r, g, b}) {
        const hex = (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1).toUpperCase();
        return `#${hex}`;
    }
}

Scratch.extensions.register(new TextPen());
