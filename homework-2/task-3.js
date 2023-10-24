/*
Task: Create a function that computes periodic compound interest.
*/

function periodicCompoundInterest(P, r, n, t) {     
    let result = P * (1 + r/n) ** (n * t);
    return result;
}
module.exports.periodicCompoundInterest = periodicCompoundInterest;
