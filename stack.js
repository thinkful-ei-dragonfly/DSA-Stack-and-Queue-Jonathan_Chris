class _Node{
  constructor(data, next){
    this.data = data
    this.next = next
  }
}

class Stack{
  constructor(){
    this.top = null
  }
  push(item){
    this.top = new _Node(item, this.top)
  }
  pop(){
    const node = this.top
    this.top = node.next
    return node.data
  }
}

function peek(stack){
  console.log(stack.top)
}

function isEmpty(stack){
  if(stack.top === null){
    return true
  }
  return false
}

function display(stack){
  let currentNode = stack.top;
  while(currentNode !== null){
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

function is_palindrome(str){
  str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "")
  let stack = new Stack()
  let result = ''
  for(let i = 0; i < str.length; i++){
    stack.push(str[i])
  }
  while(stack.top !== null){
    let char = stack.pop()
    result = result.concat('', char)
  }
  
  if(result === str){
    return true
  }
  return false
}

function main(){
starTrek = new Stack()
emptyStack = new Stack()
starTrek.push('Kirk')
starTrek.push('Spock')
starTrek.push('McCoy')
starTrek.push('Scotty')

console.log(starTrek)
peek(starTrek)

console.log(isEmpty(starTrek))
console.log(isEmpty(emptyStack))
display(starTrek)
console.log('')

starTrek.pop()
starTrek.pop()
display(starTrek)

console.log(is_palindrome('dad'))
console.log(is_palindrome('Hello'))
}


main()