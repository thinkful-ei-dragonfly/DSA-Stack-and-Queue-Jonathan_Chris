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
    // if(this.top === null){
    //   this.top = new _Node(item, this.top)
    //   return
    // }
    // const node = new _Node(item, this.top)
    // this.top = node
    this.top = new _Node(item, this.top)

  }
  pop() {
    const node = this.top
    this.top = node.next
    return node.data
  }
}

function peek(stack) {
  if (stack.top === null) {
    return null
  }
  return stack.top.data
}

function isEmpty(stack) {
  return stack.top === null
  // if (stack.top === null) {
  //   return true
  // }
  // return false
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
//5,2,7
//1,3,4
//let a - null

function sort(stack) {
  let tempStack = new Stack()

  while (stack.top !== null) {
    let a = stack.pop()
    while (peek(tempStack) > a && !isEmpty(tempStack)) {

      stack.push(tempStack.pop())
    }
    tempStack.push(a)
  }
  while (!isEmpty(tempStack)) {
    stack.push(tempStack.pop())
  }
  // return stack
}

class Queue {
  constructor() {
    this.first = null
    this.last = null
  }
  enqueue(item) {
    const node = new _Node(item)
    if (this.first === null) {
      this.first = node;
    }
    if (this.last) {
      this.last.next = node;

    }
    this.last = node;
    
    node.next = null
  }
  dequeue() {
    if (this.first === null) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;

    if (node === this.last) {
      this.last = null;
    }
    return node.value;
  }
}

function displayQueue(queue) {
  let currentNode = queue.first;
  while (currentNode !== null) {
    console.log(currentNode.data);
    currentNode = currentNode.next;
  }
}

function peekQ(queue) {
  if (queue.first === null) {
    return null
  }
  return queue.first.data
}

function isEmptyQ(queue) {
  return queue.start === null
}

class DoubleQueue {
  constructor() {
    this.first = null
    this.last = null
  }

  enqueueDouble(item) {
    const node = new _DoubleNode(item, null, this.last)
    if (this.first === null) {
      this.first = node;
      node.prev = null;
    }
    if (this.last) {
      this.last.next = node;
    }
    this.last = node;
    
    node.next = null
  }

  dequeueDouble() {
    if (this.first === null) {
      return;
    }
    const node = this.first; 
    this.first = this.first.next; 
    this.first.prev = null;
  
    if (node === this.last) {
      this.last = null;
    }
    return node.value;
  }
}

class _DoubleNode {
  constructor(data, next, prev) {
    this.data = data
    this.next = next
    this.prev = prev
  }
}

class queueWithStack {
  constructor() {
    this.firstStack = new Stack();
    this.reverseStack = new Stack();
  }

  enqueue(item) {
    // if(this.top === null){
    //   this.top = new _Node(item, this.top)
    //   return
    // }
    // const node = new _Node(item, this.top)
    // this.top = node
    this.firstStack.push(item);
  }

  dequeue() {
    let currentNode = this.firstStack.top//Sulu
    while (currentNode !== null) {//true
      // console.log(currentNode)
      currentNode = currentNode.next
      this.reverseStack.push(this.firstStack.pop())//push Sulu to TEMP: ['Sulu', 'Uhura', 'Spock', 'Kirk']
    }
    let popped = this.reverseStack.pop()//Removes Kirk from temp
    // console.log(display(temp))
    while (!isEmpty(this.reverseStack)) {//true
      this.enqueue(this.reverseStack.pop())// ['Spock', 'Uhura', 'Sulu']
    }
    return popped;
  }
}

function displayQueueStack(stack) {
  while (stack.firstStack.top !== null) {
    console.log(stack.firstStack.top.data);
    stack.firstStack.pop();
  }
}







function main() {
  // starTrek = new Stack()
  // emptyStack = new Stack()
  // starTrek.push('Kirk')
  // starTrek.push('Spock')
  // starTrek.push('McCoy')
  // starTrek.push('Scotty')

  // // // console.log(starTrek)
  // // // peek(starTrek)

  // // // console.log(isEmpty(starTrek))
  // // // console.log(isEmpty(emptyStack))
  // // // display(starTrek)
  // // // console.log('')

  // // // starTrek.pop()
  // // // starTrek.pop()
  // // // display(starTrek)

  // // // console.log(is_palindrome('dad'))
  // // // console.log(is_palindrome('Hello'))

  // // console.log(matchingParantheses(`("'")`))

  // unsorted = new Stack()
  // unsorted.push(7)
  // unsorted.push(2)
  // unsorted.push(4)
  // unsorted.push(3)
  // unsorted.push(6)
  // unsorted.push(1)
  // console.log(unsorted)
  // sort(unsorted)
  // display(unsorted)

  starTrekQ = new Queue()
  // starTrekQ.enqueue('Kirk')
  // starTrekQ.enqueue('Spock')
  // starTrekQ.enqueue('Uhura')
  // starTrekQ.enqueue('Sulu')
  // starTrekQ.enqueue('Checkov')
  // console.log(starTrekQ.last)
  // displayQueue(starTrekQ)
  // console.log('')
  // console.log(peekQ(starTrekQ))
  // console.log(isEmptyQ(starTrekQ))
  // starTrekQ.dequeue()
  // starTrekQ.dequeue()
  // displayQueue(starTrekQ)
  // starTrekDouble = new DoubleQueue()
  // starTrekDouble.enqueueDouble('Kirk')
  // starTrekDouble.enqueueDouble('Spock')
  // starTrekDouble.enqueueDouble('Uhura')
  // starTrekDouble.enqueueDouble('Sulu')
  // starTrekDouble.enqueueDouble('Checkov')
  // displayQueue(starTrekDouble);
  // console.log(starTrekDouble.first)
  starTrekStackQueue = new queueWithStack()
  starTrekStackQueue.enqueue('Kirk')
  starTrekStackQueue.enqueue('Spock')
  starTrekStackQueue.enqueue('Uhura')
  starTrekStackQueue.enqueue('Sulu')
  starTrekStackQueue.dequeue()
  displayQueueStack(starTrekStackQueue)
}




main()