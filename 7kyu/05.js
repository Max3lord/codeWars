// Digits explosion

function explode(str) {
    return str.split('').map( elem => {
        let out = '';
        for(let i = 0; i < +elem; i++){
            out += elem
        }
        return out
    }).join('')
}