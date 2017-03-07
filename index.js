//This is the basic answer
// for (let i = 0; i<$('.tile').length; i++){
//     if (parseInt($('.tile')[i].children[5].innerText.replace('$',''))>=100){
//         $('.tile')[i].remove()
//     }
// }

//this will change it to the appropriate pic
// for (let i = 0; i<$('.tile').length; i++){
//    if (parseInt($('.tile')[i].children[5].innerText.replace('$',''))>=100){
//        $('.tile')[i].firstChild.lastChild.outerHTML="<img src='http://www.theloop.ca/wp-content/uploads/2015/11/spend.jpg'>"
//    }
// }








window.onload=prepareFrame()
function prepareFrame() {
        name = prompt("Please enter your name", "")
        if (name!=="" && name!=="null"){
          var iframe = document.createElement("iframe")
          iframe.setAttribute("src", "frame.html")
          iframe.setAttribute("name", `${name}`)
          iframe.setAttribute("id", `${name}`)
          iframe.style.width = "500px"
          iframe.style.height = "500px"
          document.body.appendChild(iframe)
          addHandle(document.getElementById(`${name}`), window)

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
