let number = 5;

const sumOfFirstnNumbers = (n)=> {
    let num = 0
    for(let i = 1 ; i <= n ; i++) {
        num += i
    }
    return num
}

const PrintTable = (num)=> {
    for(let i = 1 ; i <=10 ; i++) {
        console.log(`${num} X ${i} = ${num*i}`);
    }
}
PrintTable(number)
