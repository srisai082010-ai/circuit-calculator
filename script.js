const voltage = document.getElementById("voltage");
const current = document.getElementById("current");
const resistance = document.getElementById("resistance");
const calculate = document.getElementById("calculate");
const result = document.getElementById("result");

calculate.addEventListener("click", function() {
    let v = parseFloat(voltage.value);
    let i = parseFloat(current.value);
    let r = parseFloat(resistance.value);

    if (isNaN(v)) {
        let answer = i * r;
        result.textContent = "Voltage = " + answer + " V";
    
    } else if (isNaN(i)) {
      let answer = v / r;
      result.textContent = "Current = " + answer + " A"

      } else if (isNaN(r)) {
        let answer = v / i;
        result.textContent = "Resistance = " + answer + " Ω"
      }
})


