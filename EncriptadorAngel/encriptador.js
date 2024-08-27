function encryptText() {
    const inputText = document.getElementById("inputText").value;
    let encryptedText = '';
    
    for (let i = 0; i < inputText.length; i++) {
        let charCode = inputText.charCodeAt(i);
        
        // Desplaza las letras mayúsculas
        if (charCode >= 65 && charCode <= 90) {
            encryptedText += String.fromCharCode((charCode - 65 + 3) % 26 + 65);
        }
        // Desplaza las letras minúsculas
        else if (charCode >= 97 && charCode <= 122) {
            encryptedText += String.fromCharCode((charCode - 97 + 3) % 26 + 97);
        } 
        // Otros caracteres no se encriptan
        else {
            encryptedText += inputText.charAt(i);
        }
    }
    
    document.getElementById("result").innerText = encryptedText;
}