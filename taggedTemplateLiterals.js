function highlight([first,...strings], ...values){
       return values.reduce((acc, cur)=>
        [...acc, `<span>${cur}</span>`, strings.shift()], [first]
       ).join('')
}

var course = '.Net'
var brand = 'MS'
const html = highlight`<p>Hoc lap trinh ${course} tai ${brand}!</p>`

document.querySelector('h2').innerHTML = html