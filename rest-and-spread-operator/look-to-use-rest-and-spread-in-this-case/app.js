const MathLibrary = {
    calculateProduct(...rest) {
        console.log('Please use the mutiply method instead');
        return this.multiply(...rest);
    },
    multiply(a, b) {
        return a * b;
    }
};