document.querySelector('#send').onclick = function() {
    // Alert if input is empty
    if(document.querySelector('#input').value.length == 0){
        alert("You need to write smth")
    } 

    // Adding task
    else {
        document.querySelector('#list').innerHTML += `
            <div class="list-item">
                <span id="task">
                    ${document.querySelector('#input').value}
                </span>
                <button class="delete" id="delete">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
            `;
    }
    var delete_element = document.querySelectorAll('#delete');
    for(var i=0; i<delete_element.length; i++){
        delete_element[i].onclick = function(){
            this.parentNode.remove();
        }
    }
    // Clear input
    document.querySelector("#input").value = ""; 
};





