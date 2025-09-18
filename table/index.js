
async function getData(){
    let response = await fetch("https://fakestoreapi.com/products")
    // let response = await fetch("http://localhost:3000/products")
    try{
    if(!response.ok){
        throw new Error("data not found")
    }
    let data = await response.json();
    appendData(data);
}catch(error){
    console.log(error.msg);
}

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

// let fetchdata = document.createElement("button");
// fetchdata.innerText = "Fetch data";
// fetchdata.onclick = getData;
// document.body.appendChild(fetchdata);



// let deleteBtn = document.createElement("button");
// deleteBtn.innerText="Delete";

// document.body.appendChild(deleteBtn);


// let id = 1
// async function deletedata(){
//     let res = await fetch(`http://localhost:3000/products/${id}`,{"method":"DELETE"});
//     if(res.ok){
//         console.log("deletion success");
        
//     }else console.log("failed");
    
//     id++;
// }

// deleteBtn.onclick = deletedata;






// async function getData() {
//     try {
//         const response = await fetch("http://localhost:3000/products");
//         if (!response.ok) throw new Error("Data not found (status " + response.status + ")");
//         const data = await response.json();
//         appendData(data);
//     } catch (error) {
//         // error.message is more reliable than error.msg
//         console.error("Fetch error:", error.message);
//     }
// }

// function clearExistingTable() {
//     const existing = document.getElementById("products-table-wrapper");
//     if (existing) existing.remove();
// }

// function appendData(data) {
//     // remove previous rendering
//     clearExistingTable();

//     const wrapper = document.createElement("div");
//     wrapper.id = "products-table-wrapper";

//     let table = document.createElement("table");
//     table.style.borderCollapse = "collapse";
//     table.style.width = "100%";
//     table.style.marginTop = "16px";

//     // header
//     let thead = document.createElement("thead");
//     let headings = ["id", "title", "price", "description", "category", "image", "actions"];
//     let trow = document.createElement("tr");
//     headings.forEach(ele => {
//         let th = document.createElement("th");
//         th.innerText = ele;
//         th.style.border = "1px solid #ddd";
//         th.style.padding = "8px";
//         th.style.textAlign = "left";
//         trow.appendChild(th);
//     });
//     thead.appendChild(trow);

//     // body
//     let tbody = document.createElement("tbody");
//     data.forEach(obj => {
//         let tr = document.createElement("tr");

//         // id
//         let tdId = document.createElement("td");
//         tdId.innerText = obj.id;
//         tdId.style.border = "1px solid #ddd";
//         tdId.style.padding = "8px";
//         tr.appendChild(tdId);

//         // title
//         let tdTitle = document.createElement("td");
//         tdTitle.innerText = obj.title ?? "";
//         tdTitle.style.border = "1px solid #ddd";
//         tdTitle.style.padding = "8px";
//         tr.appendChild(tdTitle);

//         // price
//         let tdPrice = document.createElement("td");
//         tdPrice.innerText = obj.price ?? "";
//         tdPrice.style.border = "1px solid #ddd";
//         tdPrice.style.padding = "8px";
//         tr.appendChild(tdPrice);

//         // description
//         let tdDesc = document.createElement("td");
//         tdDesc.innerText = obj.description ?? "";
//         tdDesc.style.border = "1px solid #ddd";
//         tdDesc.style.padding = "8px";
//         tr.appendChild(tdDesc);

//         // category
//         let tdCat = document.createElement("td");
//         tdCat.innerText = obj.category ?? "";
//         tdCat.style.border = "1px solid #ddd";
//         tdCat.style.padding = "8px";
//         tr.appendChild(tdCat);

//         // image
//         let tdImg = document.createElement("td");
//         tdImg.style.border = "1px solid #ddd";
//         tdImg.style.padding = "8px";
//         if (obj.image) {
//             let img = document.createElement("img");
//             img.src = obj.image;
//             img.alt = obj.title ?? "image";
//             img.style.width = "60px";
//             img.style.height = "60px";
//             img.style.objectFit = "cover";
//             tdImg.appendChild(img);
//         }
//         tr.appendChild(tdImg);

//         // actions (row-level delete)
//         let tdActions = document.createElement("td");
//         tdActions.style.border = "1px solid #ddd";
//         tdActions.style.padding = "8px";
//         const deleteBtn = document.createElement("button");
//         deleteBtn.innerText = "Delete";
//         deleteBtn.onclick = () => deleteById(obj.id);
//         tdActions.appendChild(deleteBtn);
//         tr.appendChild(tdActions);

//         tbody.appendChild(tr);
//     });

//     table.appendChild(thead);
//     table.appendChild(tbody);
//     wrapper.appendChild(table);
//     document.body.appendChild(wrapper);
// }

// /**
//  * Delete by id and refresh UI after success.
//  */
// async function deleteById(id) {
//     if (!confirm(`Are you sure you want to delete product id ${id}?`)) return;

//     try {
//         const res = await fetch(`http://localhost:3000/products/${id}`, { method: "DELETE" });
//         if (!res.ok) {
//             // json-server returns 200/204 on success. If not ok, read possible message
//             const text = await res.text();
//             console.error("Deletion failed:", res.status, text);
//             alert("Deletion failed: " + res.status);
//             return;
//         }
//         console.log("Deletion success for id", id);
//         // refresh list after deletion
//         await getData();
//     } catch (error) {
//         console.error("Delete error:", error.message);
//     }
// }

// // global "Fetch data" button (initial load)
// const fetchdata = document.createElement("button");
// fetchdata.innerText = "Fetch data";
// fetchdata.onclick = getData;
// document.body.appendChild(fetchdata);

// // Optional: Delete sequentially by id (if you still want it)
// let sequentialId = 1;
// const deleteSeqBtn = document.createElement("button");
// deleteSeqBtn.innerText = "Delete Next (sequential id)";
// deleteSeqBtn.style.marginLeft = "8px";
// deleteSeqBtn.onclick = async () => {
//     try {
//         const res = await fetch(`http://localhost:3000/products/${sequentialId}`, { method: "DELETE" });
//         if (res.ok) {
//             console.log("Deleted sequential id", sequentialId);
//             sequentialId++;
//             await getData(); // refresh after delete
//         } else {
//             console.log("Failed to delete sequential id", sequentialId, "status", res.status);
//             // increment anyway if you want to skip missing ids; comment next line if you want to retry same id
//             sequentialId++;
//             await getData();
//         }
//     } catch (error) {
//         console.error("Sequential delete error:", error.message);
//     }
// };
// document.body.appendChild(deleteSeqBtn);

// // initial fetch on page load (optional)
// getData();



