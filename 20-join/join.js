function sentensify(str) {
    // Altere apenas o código abaixo desta linha
      str = str.split(/\W/)
      str = str.join(" ")
  
      return str
    // Altere apenas o código acima desta linha
  }
  
  console.log(sentensify("May-the-force-be-with-you"));