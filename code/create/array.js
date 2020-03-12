export default (n = 100000) =>{
    let arr = []
    for(let i = 0;i<n;i++){
        let num = Math.floor(Math.random()*n );
        arr.push(num)
    }
    return arr;
}