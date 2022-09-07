
// author: dekitarpg@gmail.com
// small function to get the name of class function or property
// from within the function or property getter in strict mode.
// call getName() from some class property getter or function
// and it will return that function or property name!

const POSSIBLE_MATCHES = [
    // match class property getter functions
    // try this first as match class will match '.get'
    /at Function.get ([^ ]+)/,
    // match class functions
    /at Function.([^ ]+)/,
];

module.exports = {
    getName: () => {
        let match = null;
        const stackLine = (new Error()).stack.split('\n')[2].trim();
        for (const possible of POSSIBLE_MATCHES) {
            match = stackLine.match(possible)?.[1];
            if (match) return match;
        }
        return match;
    },
};