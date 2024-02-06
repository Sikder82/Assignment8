//Create function
function findAddress(address){
    const str=address.street || '__';
    const hus=address.house || '__';
    const sty=address.society|| '__';
    return add = str+', '+hus+', '+sty;
}

const address={
    street: '10',
    house: '15A',
    society: 'Earth Perfect'
}

console.log(findAddress(address))