window.onload=prepareFrame()

function prepareFrame() {
        name = prompt("Please enter your name", "")
        if (name!=="" && name!=="null"){
          var iframe = document.createElement("iframe")
          iframe.setAttribute("src", "frame.html")
          iframe.setAttribute("name", `${name}`)
          iframe.setAttribute("id", `${name}`)
          iframe.setAttribute("style", "width: 250px; height: 500px;")
          iframe.setAttribute("class", "movable")
          document.body.appendChild(iframe)
          sendJoinMessage(`${name}`)
      }
    }
window.addEventListener('message', receiveMessage)

function receiveMessage(){
  var array = document.getElementsByTagName("iframe")
  for (let i = 0; i<array.length; i++){
    var receiver = array[i].contentWindow
    receiver.postMessage(event.data, '*');
  }
}

function sendJoinMessage(name){
  var array = document.getElementsByTagName("iframe")
  for (let i = 0; i<array.length; i++){
    var receiver = array[i].contentWindow
    receiver.postMessage(`[system] - ${name} joined the conversation<br>`, '*')
  }
}
