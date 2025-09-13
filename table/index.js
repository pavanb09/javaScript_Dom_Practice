async function getData(){
    let response = await fetch("https://fakestoreapi.com/products")
    if(!response.ok){
        throw new Error("data not found")
    }
    let data = await response.json();
    appendData(data);
}



function appendData(data){
    let table = document.createElement("table");
    let thead = document.createElement("thead");

    let headings = ["id", "title", "price", "description","category","image"];
    let trow = document.createElement("tr");
    headings.forEach(ele => {
        let th = document.createElement("th");
        th.innerText = ele;
        trow.appendChild(th);
    })
    thead.appendChild(trow);


    let tbody = document.createElement("tbody");
    data.forEach(obj => {
        let tr = document.createElement("tr");
        for(let key in obj){
            let td = document.createElement("td");
            if(key !== "rating"){
                if(key == "image"){
                    let img = document.createElement("img");
                    img.src = obj[key];
                    td.appendChild(img);
                    tr.appendChild(td);
                }else{
                td.innerText = obj[key];
                tr.appendChild(td);}
            }
        }
        tbody.appendChild(tr);
    })





    table.append(thead,tbody);

    document.body.appendChild(table);


}

getData();