function sortDescending(){
    let data = JSON.parse(localStorage.getItem('DataProduct'));
    let convert;
    for(i = 0; i < data.length; i++){
        for(j = i+1; j < data.length; j++){
            if(parseInt(data[i].price) < parseInt(data[j].price)){
                
                convert = data[i];
                data[i] = data[j];
                data[j] = convert;
            }
        }
    }
    localStorage.setItem('DataProduct', JSON.stringify(data));
    showProductDiv();
}

function sortAscending(){
    let data = JSON.parse(localStorage.getItem('DataProduct'));
    let convert;
    for(i = 0; i < data.length; i++){
        for(j = i+1; j < data.length; j++){
            if(parseInt(data[i].price) > parseInt(data[j].price)){
                convert = data[i];
                data[i] = data[j];
                data[j] = convert;
            }
        }
    }
    localStorage.setItem('DataProduct', JSON.stringify(data));
    showProductDiv();
}

// function sortAlphabetDown(){
//     let data = JSON.parse(localStorage.getItem('DataProduct'));
//     data.sort();
//     localStorage.setItem('DataProduct', JSON.stringify(data));
//     showProductDiv();
// }

// function sortAlphabetUp(){
//     let data = JSON.parse(localStorage.getItem('DataProduct'));
//     data.sort();
//     data.reverse();
//     localStorage.setItem('DataProduct', JSON.stringify(data));
//     showProductDiv();
// }