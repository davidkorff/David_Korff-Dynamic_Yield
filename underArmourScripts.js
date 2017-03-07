//This is the basic answer
for (let i = 0; i<$('.tile').length; i++){
    if (parseInt($('.tile')[i].children[5].innerText.replace('$',''))>100){
        $('.tile')[i].style.visibility="hidden"
    }
}

// this will change the tile's details
for (let i = 0; i<$('.tile').length; i++){
  var price = parseFloat($('.tile')[i].children[5].innerText.replace('$','')
   if (price)>100){
       $('.tile')[i].children[0].outerHTML="<img src='http://www.theloop.ca/wp-content/uploads/2015/11/spend.jpg'>"
       $('.tile')[i].children[4].innerHTML=`Really Expensive ${$('.tile')[i].children[4].innerHTML.split(" ").pop()}`
       $('.tile')[i].children[5].innerText = `$${Math.floor((parseFloat($('.tile')[i].children[5].innerText.replace('$',''))-100)*100)/100} to Expensive`
   }
}
