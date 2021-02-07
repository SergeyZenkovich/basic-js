const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(direction) {
    if (direction === false) {
      this.direct = false;
    }
    else {
      this.direct = true;
    }

  }
  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error()
    }
    else {
      let encryptedString = '';
      let mes = message.toLowerCase();
      let keyLower = key.toLowerCase();
      if (this.direct === false) {
        mes = mes.split('').reverse().join('');
      }
      for (var i = 0, x = 0; i < mes.length; i++) {
        var char = mes.charCodeAt(i);
        var keyChar = keyLower.charCodeAt(x % keyLower.length);

        if (mes[i] === mes[i].toUpperCase()) {
          encryptedString += mes[i];
        }
        else {
          encryptedString += String.fromCharCode((char - 97 + keyChar - 97) % 26 + 97)
          x++;
        }
      }
      return encryptedString.toUpperCase();
    }
  }
  decrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error()
    }
    else {
      let decryptedString = '';
      let x = 0;
      let mes = message.toLowerCase();
      if (this.direct === false) {
        mes = mes.split('').reverse().join('');
      }
      let keyLower = key.toLowerCase();
      for (var i = 0; i < message.length; i++) {
        if (x === key.length) {
          x = 0;
        }
        if (mes[i] === mes[i].toUpperCase()) {
          decryptedString += mes[i];
          x--;
        }
        else {
          let code = (mes[i].charCodeAt(0) - 97) < (keyLower[x].charCodeAt(0) - 97) ? 26 - ((keyLower[x].charCodeAt(0) - 97) - (mes[i].charCodeAt(0) - 97)) : (mes[i].charCodeAt(0) - 97) - (keyLower[x].charCodeAt(0) - 97);
          decryptedString += String.fromCharCode(97 + code);
        }
        x++;
      }
      return decryptedString.toLocaleUpperCase();

    }
  }
}

module.exports = VigenereCipheringMachine;
