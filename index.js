window.onload=prepareFrame()//prepares initial frame

function prepareFrame() {
        name = prompt("Please enter your name", "")//gets user's name for assingment to frame name and id
        if (name!=="null"){//only allows message to go through if it's not null
          if (name!==""){//only allows message to go through if it's not blank
            var iframe = document.createElement("iframe")
            iframe.setAttribute("src", "frame.html")
            iframe.setAttribute("name", `${name}`)
            iframe.setAttribute("id", `${name}`)
            iframe.setAttribute("style", "width: 250px; height: 500px;")
            iframe.setAttribute("class", "movable")
            document.body.appendChild(iframe)
            $(`#${name}`).draggable()// makes frame draggable by id
            sendJoinMessage(`${name}`)
        }
        else{
          alert('You must enter a name to initialize a new chat window')
          prepareFrame()//call prepareFrame() again.
        }
      }
    }
window.addEventListener('message', receiveMessage)// event listener for messages received from postMessage and calls receiveMessage()

function receiveMessage(){
  var iframeList = document.getElementsByTagName("iframe")//gets list of iframes to loop through
  for (let i = 0; i<iframeList.length; i++){
    var receiver = iframeList[i].contentWindow
    receiver.postMessage(event.data, '*')// sends message with proper formatting to children windows
  }
}

function sendJoinMessage(name){//send message to each frame when a user joins the chat
  var iframeList = document.getElementsByTagName("iframe")//gets list of iframes to loop through
  for (let i = 0; i<iframeList.length; i++){
    iframeList[i].contentWindow.postMessage(`[system] - ${name} joined the conversation<br>`, '*')// sends message with proper formatting to children windows
  }
}
