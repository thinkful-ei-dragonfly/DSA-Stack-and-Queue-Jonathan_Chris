class _Node {
  constructor(data, next) {
    this.data = data
    this.next = next
  }
}

class Stack {
  constructor() {
    this.top = null
  }
  push(item) {
    this.top = new _Node(item, this.top)
  }
  pop() {
    const node = this.top
    this.top = node.next
    return node.data
  }
}

function peek(stack) {
  return stack.top
}

function isEmpty(stack) {
  if (stack.top === null) {
    return true
  }
  return false
}

function display(stack) {
  let currentNode = stack.top;
  while (currentNode !== null) {
    console.log(currentNode.data);
    currentNode = currentNode.next;
  }
}
//sample input: 'dad'
//sampule output: true

//algorithm:
//convert the string to lowercase
//create a new stack
//declare a temporary variable that is the result string that we compare to our input string
//Create a for loop that takes each character from the input string and places it to the top of a stack
//While the top of the stack is not null, Remove the data from the top of the stack and concatenate that data to our result string
//Then we compare the result string to our input string
//if they are the same, we return true
//otherwise we return false


function is_palindrome(str) {
  str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "")
  let stack = new Stack()
  let result = ''
  for (let i = 0; i < str.length; i++) {
    stack.push(str[i])
  }
  while (stack.top !== null) {
    let char = stack.pop()
    result = result.concat('', char)
  }

  if (result === str) {
    return true
  }
  return false
}

//Take a parantheses expression and split it in half: eg: "({[]})" to "({[" and "]})"
// push "({[" onto a stack 
//create array of Expressions = [{}, [], (),]
//concatenate the first char of the string and the top of the stack and check to see if
//the expressions array includes that string
//if matching, then pop "[" from stack and compare next stack.top to next string char
//if they don't match, immediately return false 
//if stack.top === null, then return true 

function matchingParantheses(str) {
  if (str.length % 2 !== 0) {
    return false
  }
  let stack = new Stack()
  for (i = 0; i < str.length / 2; i++) {
    stack.push(str[i])
  }
  let newStr = '';
  for (i = str.length / 2; i < str.length; i++) {
    newStr = `${newStr}${str[i]}`
  }
  let expressionsArray = ['{}', '[]', '()', `''`, `""`]
  while (stack.top !== null) {
    for (i = 0; i < newStr.length; i++) {
      let tempExpression = peek(stack).data.concat('', newStr[i])
      if (!expressionsArray.includes(tempExpression)) {
        return false;
      }
      else {
        stack.pop()
      }
    }
  }
  return true;
}

//Stack has a grouping of values 
    //
    //75431
    //


function main() {
  starTrek = new Stack()
  emptyStack = new Stack()
  starTrek.push('Kirk')
  starTrek.push('Spock')
  starTrek.push('McCoy')
  starTrek.push('Scotty')

  // console.log(starTrek)
  // peek(starTrek)

  // console.log(isEmpty(starTrek))
  // console.log(isEmpty(emptyStack))
  // display(starTrek)
  // console.log('')

  // starTrek.pop()
  // starTrek.pop()
  // display(starTrek)

  // console.log(is_palindrome('dad'))
  // console.log(is_palindrome('Hello'))

  console.log(matchingParantheses(`("'")`))
}




main()