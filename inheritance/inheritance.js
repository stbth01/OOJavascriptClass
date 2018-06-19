
function HtmlElement(){
    this.focus = function() {
        console.log("focused");
    }
}


HtmlElement.prototype.click = function() {
    console.log("clicked");
}

function HtmlSelectElement(items){
this.items = items? items : [];
this.addItmes = function(item) {
    this.items.push(item)
} ;
this.removeItem = function(item) {
    const index = this.items.indexOf(item);
    if (index > -1) {
        this.items.splice(index, 1);
    }
}
}

HtmlSelectElement.prototype = new HtmlElement();
// HtmlSelectElement.prototype.constructor = HtmlElement; 

