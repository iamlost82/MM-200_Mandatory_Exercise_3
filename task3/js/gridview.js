function createGridView(data){
    let view = null;
    let containerDiv = document.createElement('div');
    containerDiv.id = 'chocContainerGrid';
    containerDiv.className = 'chocContainerGrid';
    for(i in data){
        //Create elements
        let div = document.createElement('div');
        let image = document.createElement('img');
        let title = document.createElement('h2');
        let price = document.createElement('p');
        //Set div ID of parent
        div.id = `choc${i}`;
        //Add eventlistener
        div.addEventListener('click',function(){
            let active = document.querySelector('.highlightedGrid');
            if(active){active.classList.remove('highlightedGrid')};
            let higlight = document.querySelector('#'+this.id);
            higlight.classList.add('highlightedGrid');
        });
        div.addEventListener('click',function(evt){
            let currentID = evt.currentTarget.id
            currentID = parseInt(currentID.slice(4));
            let event = new Event('choco_select');
            event.value = {
                id: data[currentID].id,
                type: data[currentID].type,
                name: data[currentID].name,
                description: data[currentID].description,
                price: data[currentID].price,
                img_small: data[currentID].img_small,
                img_large: data[currentID].img_large,
                on_sale: data[currentID].on_sale
            }
            document.dispatchEvent(event);
        });
        //Set element values
        image.src = data[i].img_small;
        title.innerHTML = data[i].name;
        price.innerHTML = `Kr. ${data[i].price},-`;
        //Set element classes
        div.className = 'chocDivGrid';
        image.className = 'chocImgGrid';
        title.className = 'chocTitleGrid';
        price.className = 'chocPriceGrid';
        //Append elements
        div.appendChild(image);
        div.appendChild(title);
        div.appendChild(price);
        containerDiv.appendChild(div);
    }
    view = containerDiv
    return view;
}