// Altere apenas o código abaixo desta linha
function urlSlug(title) {
    let myArr = title
      .toLowerCase()
      .trim()
      .split(/\s+/)
      .join("-")
      
  
    return myArr;  
    
  
  }
  // Altere apenas o código acima desta linha
  console.log(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone"));