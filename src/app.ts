//  il! fa passare il comando anche se è nullo
// per farlo funzionare dobbiamo dire esplicitamente nell file config che usiamo la libreria dom
let elem=document.querySelector('button')!;
elem.addEventListener('click',()=>{
    console.log('clicked!');
});
