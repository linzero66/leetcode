export default (str) => {
    return str.split(/\s/g).map(item => {
        return item.split('').reverse().join('')
    }).join(' ')
}