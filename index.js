const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

password1Element = document.getElementById("pw1-el")
password2Element = document.getElementById("pw2-el")

function generatePassword(){
  let newPassword1 = ""
  let newPassword2 = ""
  let passwordLength = 8
  for (let i = 0;i < passwordLength; i++){
    newPassword1 += characters[Math.floor(Math.random() * characters.length)]
  }
  for (let i = 0;i < passwordLength; i++){
    newPassword2 += characters[Math.floor(Math.random() * characters.length)]
  }
  
  password1Element.textContent = newPassword1
  password2Element.textContent = newPassword2
  
  
  
}





