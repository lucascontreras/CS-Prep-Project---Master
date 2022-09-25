//TO DO LIST
  //methods:
    //create (add new element to the list)
      //Truman
    //read (print all the of the list)
      //Queen
    //function to calculate days left until due date
      //Lucas
    //delete (removes an element)
      //Morgan
//each element of the list would be an object within the list object

//dummy comment 20220925
//features ideas:
  //due date
    //sort criteria
    //how many days left until due calculates (higher order function)
  //alerts
    //generate alerts when close to the due date
  //categories
    //sort list items by category
  //priority levels
    //sort list items by priority
  //responsible
    //assign item to a person
//sdfgdfg
///basic structure of the list:
const list = { 
  1 : {
    text : "Buy brother's birthday present",
    category : 'home',
    due : '2022/09/26'
  },
  2 : {
    text : "Apply to Codesmith",
    category : 'home',
    due : '2022/09/26'
  }
}

//use this as you need in the prompts
const newLine = "\r\n"

//initial prompt
let initialPrompt = newLine
initialPrompt += "Select an action:" + newLine
initialPrompt += "[c] Create: add a new element to the list" + newLine
initialPrompt += "[u] Update: modify an element of the list" + newLine
initialPrompt += "[d] Delete: remove an element from the list" + newLine

let updateColumnPrompt = `${newLine}Select a column to modify${newLine}`
updateColumnPrompt += `[a] text${newLine}`
updateColumnPrompt += `[b] category${newLine}`
updateColumnPrompt += `[c] due date${newLine}`

//function u (Update)
const u = (itemToBeUpdated) => {
  //comment by lucas
  let columnInput
  while (true) {
    console.log(updateColumnPrompt)
    columnInput = prompt("Enter your selection")
    if (['a', 'b', 'c'].includes(columnInput)) break
    console.log(`${newLine}Error - please enter a correct value!`)
  }
  let columns = {a: 'text', b: 'category', c: 'due'}
  list[itemToBeUpdated][columns[columnInput]] = prompt(`Enter the new ${columns[columnInput]} for the element ${itemToBeUpdated}`)
  console.log("Item " + itemToBeUpdated + " updated")
    console.table(list)
}

//create function
function c () {
  const keys = Object.keys(list);
  const lastKey = Number(keys[keys.length -1]);
  const newText = prompt('What would you like to add?');
  list[lastKey + 1] = { text : newText };
  //this is a test
  /////////////////
  let result = "\r\n";
  for (key in list) {
    result += key + " | " + list[key]['text'] + "\r\n"
  }
  //insert queens function here
  return result;
}

//index that will determine if the "Your to do list:" message will be displayed
let i = true;
while (true) {
  //only diplay this message the first time
  if (i) console.log("Your to do list:")
  if (i) console.table(list)
  
  i = false
  
  //initial prompt to select the action to be performed
  console.log(initialPrompt)
  
  //determine operation to execute
  const input = prompt("Enter your answer [c, u, d] here")
  
  //update an element from the list
  if (input === "u") u(prompt("Which element do you want to update [" + Object.keys(list) + "]?"))

  //create a new element in the list
  if(input === 'c' || input === 'create' ){
    console.log('Item added',c())
  }
  
  // delete an element from the list

}
