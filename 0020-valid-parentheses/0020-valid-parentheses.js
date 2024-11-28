var isValid = function(s) {
        const stack = [];
        const mapping = {
            ')': '(',
            '}': '{',
            ']': '['
        };

        for (const c of s) {
        //If the c is the open bracket, such as the value of the mapping, push to the stack
            if (Object.values(mapping).includes(c)) {
                stack.push(c);
                //If not, it is the close bracket.
            } else if (mapping.hasOwnProperty(c)) {
            //If the stack.lengt is empty, return false and
            // close bracket(c) is not matched with mapping's key, return ffalse
            //
                if (!stack.length || mapping[c] !== stack.pop()) {
                    return false;
                }
            }
        }
				//If the stack's element are poped successfully, return true
        return stack.length === 0;    
};