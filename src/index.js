import x from './x.js'
import jpg from './assets/1.jpg'

console.log(jpg)

const div = document.getElementById('app1')
div.innerHTML = `
    <img src="${jpg}" width=50px}>
`

const button = document.createElement('button')
button.innerText = '懒加载'
button.onclick = () =>{
    const promise = import('./lazy') //用import函数加载目标文件，获得promise
    promise.then(
        (module) => {
            const fn = module.default
            fn()
        },
        ()=>{
            console.log('模块加载错误')
        }
    )
}

div.appendChild(button)