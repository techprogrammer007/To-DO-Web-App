let b1=document.querySelector('button');
let div2=document.getElementById("d2");

b1.addEventListener('click',()=>{
    var ta=document.getElementById("t2").value;
    var t3=document.getElementById("t1").value;
    var elem = document.createElement("div");
    var dv1 = document.createElement("div");
    var dv2 = document.createElement("div");
    var dv3 = document.createElement("div");
    var elem2 = document.createElement("pre");
    var elem3 = document.createElement("button");
    var elem4 = document.createElement("label");
    elem.classList.add("ndv");
    elem3.classList.add("b2");
    dv1.classList.add("d1");
    dv2.classList.add("d2");
    dv3.classList.add("d3");
    elem3.innerHTML="X";
    elem2.classList.add("p1");
    elem.appendChild(dv1);
    elem.appendChild(dv2);
    elem.appendChild(dv3);
    dv1.appendChild(elem4);
    dv2.appendChild(elem2);
    dv3.appendChild(elem3);
    div2.appendChild(elem);
    elem2.innerHTML=ta;
    elem4.innerHTML=t3;
    elem3.addEventListener('click',()=>{
        elem.remove();
    })
})