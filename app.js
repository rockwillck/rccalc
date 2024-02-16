function update() {
    document.getElementById("ws").innerText = 1/2 * 0.76 * (parseFloat(document.getElementById("vf").value)**2 - parseFloat(document.getElementById("v0").value)**2 + 9.8*(parseFloat(document.getElementById("hf").value) - parseFloat(document.getElementById("h0").value)))
}