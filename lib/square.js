class Square {
    constructor (color, text, textColor){
        this.color = color;
        this.text = text;
        this.textColor = textColor;
    }
    render(color) {
        this.color = color;
        return (`<rect x="50" y="0" rx="0" ry="0" width="200" height="200" fill="${this.color}"/>`)
    };
    renderText(textColor,text) {
        this.textColor = textColor;
        this.text = text;
        return(`<text x="150" y='120' font-size="60pt" fill="${this.textColor}" text-anchor="middle">${this.text}</text>`);  
    }
};

module.exports = Square;