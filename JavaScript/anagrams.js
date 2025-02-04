function clean(str) {
    return str.toLowerCase().replace(/[\W]/g, '').split('').sort().join('');
}

function anagram(stringA, stringB) {
    // const charmapA = {};
    // const charmapB = {};

    // stringA = stringA.toLowerCase().replace(/[\W]/g, '');
    // stringB = stringB.toLowerCase().replace(/[\W]/g, '');

    // for ( let char of stringA)
    //     charmapA[char] = ++charmapA[char] || 1;

    // for ( let char of stringB)
    //     charmapB[char] = ++charmapB[char] || 1;

    // if(Object.keys(charmapA).length !== Object.keys(charmapB).length) return false;
    // for (let key in charmapA){
    //     if(charmapA[key] !== charmapB[key]) return false;
    // }

    
    return clean(stringA) === clean(stringB)
}

console.log(anagram("Rail! SAFETY!",'fairy tales'))