
let members = ["Mary","Sam","Joey","Paul","Mike","Char","Jenny","Kennedy","Kaden","Kurt","Anne"]
let memberName = ""
    
    

Button1.onclick=function(){
  memberName = inptFirstName.value
  if (members.includes(memberName)) {
      members.push(memberName)
      console.log(members)
      ChangeForm(ABMadLibs)
 } else { 
      
    
    NSB.MsgBox("You are not a member")
    inptFirstName.value = ""
    ChangeForm(ABMadLibs)
}  
}
