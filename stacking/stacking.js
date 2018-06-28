

class Stack(){
this.items = [];

this.coount = this.items.length;
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


