let x = document.getElementById("btn").addEventListener("click", function(){
    let y = document.getElementById("inputWord").value
    let z = document.getElementById("fontType").value
    document.getElementById("result").innerHTML = `<p style="font-family:${z};"> ${y}</p>`;
    });