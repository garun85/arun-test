var myElements = document.querySelectorAll("input,textarea,button");

function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

// var el = document.createElement("span");
// el.innerHTML = "test";
// var div = document.getElementById("foo");
// insertAfter(div, el);

for (var i1 = 0; i1 < myElements.length; i1++) {
 var newSpan = document.createElement('span');
  console.log('newSpan',newSpan);

    // add the class to the 'spam'
    newSpan.setAttribute('class', 'badge1');
    // newSpan.setAttribute('class', 'data-badge');
    // myElements[i1].appendChild(newSpan);

insertAfter(myElements[i1], newSpan);

// var x = document.createElement("SPAN");
//     var t = document.createTextNode("This is a span element.");
//     x.appendChild(t);
//     document.body.appendChild(x);

}

var myElements1 = document.querySelectorAll("span");
 
for (var i = 0; i < myElements.length; i++) {
    // myElements[i].style.background = 'red';
     myElements[1].setAttribute('value',"arunkumar");
    myElements[i].setAttribute('value',i+1);
    myElements1[i].setAttribute('data-badge',i+1);

    Object.assign(myElements[i].style,{fontsize:"12px",left:"200px",top:"100px",color:"blue"});
    // Object.assign(myElements[i].style,{position:"absolute",top:"-10px",right:"-10px",'font-size':".7em",background:"green",color:"white",width:"18px",height:"18px"});
    
}