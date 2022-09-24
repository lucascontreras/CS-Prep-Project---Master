//TO DO LIST
  //methods:
    //create (add new element to the list)
      //Truman
    //read (print all the of the list)
      //Queen
    //update (modify an element of the list)
      //Lucas
    //delete (removes an element)
      //Morgan
//each element of the list would be an object within the list object

///basic structure of the list:
const list = { 
  1 : {
    text : 'Go to bed'
  },
  2 : {
    text : 'Brush teeth'
  }
}

//function u (Update)
const u = () => {
  let itemToBeUpdated = prompt("Which element do you want to update [" + Object.keys(list) + "]?")
  let newText = prompt("Enter the new text for the element " + itemToBeUpdated)
  list[itemToBeUpdated]['text'] = newText
  let result = "\r\n";
  for (key in list) {
    result += key + ": " + list[key]['text'] + "\r\n"
  }
  return result
}

//create function
function c () {
  const keys = Object.keys(list);
  const lastKey = Number(keys[keys.length -1]);
  const newText = prompt('What would you like to add?');
  list[lastKey + 1] = { text : newText };
  /////////////////
  let result = "\r\n";
  for (key in list) {
    result += key + ": " + list[key]['text'] + "\r\n"
  }
  //insert queens function here
  return result;
}

//initial prompt to select the action to be performed
const newLine = "\r\n"
console.log("Your to do list:")
for (key in list) {
  console.log(key + ": ", list[key]['text'])
}
console.log(newLine + "What do you want to do?" + newLine + "[c] Create: add a new element to the list" + newLine + "[r] Read: print all the elements of the list" + newLine + "[u] Update: modify an element of the list" + newLine + "[d] Delete: remove an element from the list" + newLine)
const input = prompt("Enter your answer [c, r, u, d] here:")

//update an element from the list
if (input === "u") {
  console.log("List has been updated:", u())
}
if(input === 'c' || input === 'create' ){
  console.log('Item added',c())
}

// delete an element from the list
