class Circle {
    constructor (color, text, textColor){
        this.color = color;
        this.text = text;
        this.textColor = textColor;
    }
    render(color) {
        this.color = color;
        return (`<circle cx="150" cy="100" r="100" fill="${this.color}" />`)
    }
    renderText(textColor,text) {
        this.textColor = textColor;
        this.text = text;
        return(`<text x="150" y='120' font-size="50pt" fill="${this.textColor}" text-anchor="middle">${this.text}</text>`);  
    }
};

module.exports = Circle;