
const _items = new WeakMap();

class Stack {
	 constructor() {
        _items.set(this, []);
       
    }

    get count() {
    	return _items.get(this).length;
    }

    push(item) {
    	_items.get(this).push(item)
    }

    pop() {
    	cosnt items = _items.get(this)
    	if(items.length < 1)
    		throw new Error('Stack empty')
    	return items.pop()
    }

    peek() {
    	const len = _items.get(this).length;

    	if (len === 0 )
    		throw new Error('Stack is Empty')
    	return _items.get(this)[len-1]
    }




}


