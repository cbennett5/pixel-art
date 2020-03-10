window.onload = function(){
    let current_color = 'red';
    
    let colorChoices = ['red', 'orange', 'yellow', 'green', 'blue', 'purple','black','white'];
    let myPalette = document.querySelector("#palette");

    for(let color of colorChoices) {
        
        let box = document.createElement('div');
        box.style.height = '25px';
        box.style.width = '25px';
        box.style.border = '1px solid black';
        box.style.backgroundColor = color;
        box.setAttribute("id","color_selector");
        box.addEventListener('click',function(event) {
            current_color = event.target.style.backgroundColor
        })
        myPalette.appendChild(box)
    }
    
    let container = document.querySelector("#canvas")

        for(let i =0; i < 400; i++) {
            let box = document.createElement('span');
            box.style.height = '18px';
            box.style.width = '18px';
            box.style.border = '1px solid black';
            box.setAttribute("id",i);
            box.addEventListener('click',function(event) {
                event.target.style.backgroundColor = current_color
            }) 

            container.appendChild(box);

        }
        document.body.appendChild(container);
        this.document.body.appendChild;
let clickPixel = document.querySelector('span');

}
