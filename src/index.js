module.exports = function reverse (n) {
    if(n < 0){
        let res = (n * -1);
        return res.toString().split('').reverse().join('');
    }else{
   return n.toString().split('').reverse().join('');
    }
}
