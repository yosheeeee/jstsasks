// 1)
let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
  ];

let readMessages = new WeakSet()
for(let message of messages){
    readMessages.add(message)
}

// 2)

let readMessages_weakMap = new WeakMap()
for (let message of messages){
    readMessages_weakMap.add(
        message,
        {
            isRead: false,
            time: new Date(2023,02,19)
        }
    )
}
