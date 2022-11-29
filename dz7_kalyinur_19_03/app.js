const cards = document.querySelectorAll('.card')
const title = document.querySelectorAll('.title')
const NodeBody = document.querySelectorAll('.body')



cards.forEach((item)=>{
    
    fetch(`https://jsonplaceholder.typicode.com/posts/${item.id}`).then((resp)=>{return resp.json()}).then((data=>{
            if(title[0]===title[0]){
                title[0].innerText = data.title
                NodeBody[0].innerText = data.body
            }
            title[item.id].innerText = data.title
            NodeBody[item.id].innerText = data.body
            
    }))
})