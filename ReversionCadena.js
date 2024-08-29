function reverF(frase) {
    const palabras = frase.split(" ");

    const palabrasInv = palabras.reverse();
    
    const fraseInv = palabrasInv.join(" ");
    
    console.log(fraseInv);
  }
  const frase = "Hola cómo estás";
  reverF(frase);
  