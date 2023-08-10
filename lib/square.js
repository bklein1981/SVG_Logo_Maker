class Square {
    constructor (text, textColor){
        this.text = text;
        this.textColor = textColor;
    }
    setColor(color) {
        color = color;
        return color
    };
    render() {
        return (`<rect x="50" y="0" rx="0" ry="0" width="200" height="200" fill="${this.color}"/>`)
    };
    renderText(text, textColor) {
        return(`<text x="150" y='120' font-size="50pt" color="${this.textColor}" text-anchor="middle">${this.text}</text>`);  
    }
};

module.exports = Square;