let calculator = {
    value: 0,
    add: function(a) {
        this.value = this.value + a;
        return this;
    },
    subtract: function(b) {
        this.value = this.value - b;
        return this;
    },
    out: function() {
        return this.value;
    }
  };


let result = calculator.add(4).add(5).subtract(3).out();
console.log(result);