class Circle {
    constructor (color, text, textColor){
        this.color = color;
        this.text = text;
        this.textColor = textColor;
    }
    
    render() {
        return (`<circle cx="150" cy="100" r="100" fill="${this.color}" />`)
    }
    renderText(text, textColor) {
        return(`<text x="150" y='120' font-size="50pt" color="${this.textColor}" text-anchor="middle">${this.text}</text>`);  
    }
};

module.exports = Circle;