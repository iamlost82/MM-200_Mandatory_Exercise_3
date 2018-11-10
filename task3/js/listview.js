function createListView(data){
    let view = null;
    let containerDiv = document.createElement('div');
    for(i in data){
        //Create elements
        let div = document.createElement('div');
        let image = document.createElement('img');
        let title = document.createElement('h2');
        let info = document.createElement('p');
        let price = document.createElement('p');
        //Set element values
        image.src = data[i].img_small;
        title.innerHTML = data[i].name;
        info.innerHTML = data[i].description;
        price.innerHTML = `Kr. ${data[i].price},-`;
        //Set element classes
        div.className = 'chocDiv';
        image.className = 'chocImg';
        title.className = 'chocTitle';
        info.className = 'chocInfo';
        price.className = 'chocPrice';
        //Append elements
        div.appendChild(image);
        div.appendChild(title);
        div.appendChild(info);
        div.appendChild(price);
        containerDiv.appendChild(div);
    }
    view = containerDiv
    return view;
}

function createListViewExt(data){
    let view = null;
    let containerDiv = document.createElement('div');
    for(i in data){
        //Create elements
        let div = document.createElement('div');
        let image = document.createElement('img');
        let title = document.createElement('h2');
        let info = document.createElement('p');
        let price = document.createElement('p');
        //Set div ID of parent
        div.id = `choc${i}`;
        //Add eventlistener
        div.addEventListener('click',function(){
            let active = document.querySelector('.highlightedList');
            if(active){active.classList.remove('highlightedList')};
            let higlight = document.querySelector('#'+this.id);
            higlight.classList.add('highlightedList');
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
        info.innerHTML = data[i].description;
        price.innerHTML = `Kr. ${data[i].price},-`;
        //Set element classes
        div.className = 'chocDivList';
        image.className = 'chocImgList';
        title.className = 'chocTitleList';
        info.className = 'chocInfoList';
        price.className = 'chocPriceList';
        //Append elements
        div.appendChild(image);
        div.appendChild(title);
        div.appendChild(info);
        div.appendChild(price);
        containerDiv.appendChild(div);
    }
    view = containerDiv
    return view;
}