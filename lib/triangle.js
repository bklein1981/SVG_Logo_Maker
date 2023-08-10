class Triangle {
    constructor (color, text, textColor){
        this.color = color;
        this.text = text;
        this.textColor = textColor;
    }
    render(color) {
        this.color = color
        return (`<polygon points="150, 5 250, 200 50, 200" fill="${this.color}"/>`)
    }
    renderText(textColor,text) {
        this.text = text;
        this.textColor = textColor;
        return (`<text x='150' y='180' fill="${this.textColor}" font-size="50pt" text-anchor="middle">${this.text}</text>`)
    }
};

module.exports = Triangle;