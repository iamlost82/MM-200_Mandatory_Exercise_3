(function(){
    displayTask1b();
})();
//Render template elements
function addTemplateElementToPage(element){
    document.getElementById('content').appendChild(element);
}
function clearScreen(){
    document.getElementById('content').innerHTML = "";
}
function createElementFromTemplate(templateID){
    let template = document.querySelector(templateID);
    let clone = document.importNode(template.content, true);
    return clone;
}

//Displays

function displayTask1a(){
    let pageContent = createElementFromTemplate('#task1aTemp');
    clearScreen();
    addTemplateElementToPage(pageContent);
    task1aController();
}

function displayTask1b(){
    let pageContent = createElementFromTemplate('#task1bTemp');
    clearScreen();

    addTemplateElementToPage(pageContent);
    task1bController();
}

function task1aController(){
    let cars = ["Volvo", "Peugeot", "Citroen", "Porche", "Skoda"];
    let container = document.querySelector('#task1aContainer');
    let saveCarBtn = document.querySelector('#saveCarBtn');
    let carInput = document.querySelector('#carInput');
    function refreshList(){
        container.innerHTML = "";
        for (i in cars) {
            let div = document.createElement("div");
            let btn1 = document.createElement("button");
            let btn2 = document.createElement("button");
            btn1.innerHTML = "Edit";
            btn2.innerHTML = "Delete";
            div.innerHTML = cars[i];
            btn1.value = i;
            btn2.value = i;
            div.appendChild(btn1);
            div.appendChild(btn2);
            container.appendChild(div);
            btn1.addEventListener('click', function(e){
                let elementIndex = e.toElement.value;
                carInput.value = cars[elementIndex];
                saveCarBtn.value = elementIndex;
            });
            btn2.addEventListener('click', function(e){
                let elementIndex = e.toElement.value;
                cars.splice(elementIndex,1);
                refreshList();
            });
        }
    }
    saveCarBtn.addEventListener('click',function(){
        if(saveCarBtn.value === 'new'){
            if(carInput.value.length > 0){
                cars.push(carInput.value);
                carInput.value = "";
                refreshList();
            } else{
                console.log('Cannot save blank name');
            }
        } else{
            if(carInput.value.length > 0){
                cars[saveCarBtn.value] = carInput.value;
                carInput.value = '';
                saveCarBtn.value = 'new';
                refreshList();
            } else{
                console.log('Cannot save blank name');
            }
        }
    });
    refreshList();
}

function task1bController(){
    let cars = ["Volvo", "Peugeot", "Citroen", "Porche", "Skoda"];
    let container = document.querySelector('#task1bContainer');
    let saveCarBtn = document.querySelector('#saveCarBtn2');
    let carInput = document.querySelector('#carInput2');
    let trashCan = document.querySelector('#trashcanImg');
    
    function drag(ev){
        ev.dataTransfer.setData("text", ev.toElement.lastChild.value);
    }
    function allowDrop(ev) {
        ev.preventDefault();
    }
    function dropTrash(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        cars.splice(data,1);
        refreshList();
    }
    function dropInput(ev){
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        carInput.value = cars[data];
        saveCarBtn.value = data;
    }
    function refreshList(){
        container.innerHTML = "";
        for (i in cars) {
            let div = document.createElement("div");
            let btn1 = document.createElement("button");
            btn1.innerHTML = "Edit";
            div.innerHTML = cars[i];
            div.draggable = true;
            btn1.value = i;
            div.appendChild(btn1);
            container.appendChild(div);
            btn1.addEventListener('click', function(e){
                let elementIndex = e.toElement.value;
                carInput.value = cars[elementIndex];
                saveCarBtn.value = elementIndex;
            });
            div.addEventListener('dragstart', function(event){
                drag(event)
            });
        }
    }
    trashCan.addEventListener('dragover',function(event){allowDrop(event)});
    trashCan.addEventListener('drop',function(event){dropTrash(event)});
    carInput.addEventListener('dragover',function(event){allowDrop(event)});
    carInput.addEventListener('drop',function(event){dropInput(event)});
    saveCarBtn2.addEventListener('click',function(){
        if(saveCarBtn.value === 'new'){
            if(carInput.value.length > 0){
                cars.push(carInput.value);
                carInput.value = "";
                refreshList();
            } else{
                console.log('Cannot save blank name');
            }
        } else{
            if(carInput.value.length > 0){
                cars[saveCarBtn.value] = carInput.value;
                carInput.value = '';
                saveCarBtn.value = 'new';
                refreshList();
            } else{
                console.log('Cannot save blank name');
            }
        }
    });
    refreshList();    
}