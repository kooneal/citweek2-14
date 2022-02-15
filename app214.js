function box(nme){
    let that = this;
    this.number=0;
    this.ele=document.createElement("div");
    this.eleName=document.createElement("h1");
    this.eleName.innerHTML=nme;

    this.button=document.createElement("button");
    this.button.innerHTML='';
    this.button.addEventListener("click", function(){


    })


    this.eleNum=document.createElement("div");
    this.eleNum.innerHTML=this.number;
    this.appendChild(this.eleName);
    this.appendChild(this.button);
    this.appendChild(this.eleNum);

    document.body.appendChild(this.ele);
}
box.prototype.numberUp = function () {
    this.number=this.number+1;
}
let newbox1 = new box(1);
let newbox2 = new box(1);
let newbox3 = new box(1);

