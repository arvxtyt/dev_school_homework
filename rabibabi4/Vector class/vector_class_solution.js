let Vector = function (components) {

    this.components = components;

    function validate_dims(v1, v2) {
      if (v1.components.length !== v2.components.length) throw new Error("fuck you");
      return true;
    }  
  
    this.add = (vector) => validate_dims(this, vector) ? new Vector(this.components.map((coord, i) => coord + vector.components[i])) : null;

    this.subtract = (vector) => validate_dims(this, vector) ? new Vector(this.components.map((coord, i) => coord - vector.components[i])) : null;

    this.dot = (vector) => validate_dims(this, vector) ? this.components.map((coord, i) => coord * vector.components[i]).reduce((curr, next) => curr + next, 0) : null;

    this.norm = () => Math.sqrt(this.components.reduce((cur, next) => cur + next * next), 0);

    this.toString = function () {
        let buf = '(';
        for (const coord of this.components.slice(0, -1)) {
            buf += coord + ',';
        }
        buf += this.components.at(-1);
        buf += ')';
        return buf;
    }

    this.equals = function (vector) {
        for (let i = 0; i < this.components.length; i++) {
            if (this.components[i] !== vector.components[i]) {
                return false;
            }
        }
        return true;
    }
};
