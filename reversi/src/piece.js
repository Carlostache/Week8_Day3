/**
 * Initializes the Piece with its color.
 */
function Piece (color) {
    this.color = color;
}

/**
 * Returns the color opposite the current piece.
 */
Piece.prototype.oppColor = function () {
    if (this.color === "black") {
        this.color = "white";
    } else {
        this.color = "black";
    }
};

/**
 * Changes the piece's color to the opposite color.
 */
Piece.prototype.flip = function () {
    this.oppColor();
};

/**
 * Returns a string representation of the piece
 * based on its color.
 */
Piece.prototype.toString = function () {
    if (this.color === "black") {
        return "B";
    } else {
        return "W";
    }
};

// DON'T TOUCH THIS CODE
if (typeof window === 'undefined'){
    module.exports = Piece;
}
// DON'T TOUCH THIS CODE