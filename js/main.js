// Sign In //
let name = document.getElementById('Name');
let email = document.getElementById('email');
let btn_sign = document.getElementById('sign-ln');
let name_array ;
if(localStorage.namegg != null){  
 name_array = JSON.parse(localStorage.namegg);
}
else{
 name_array = [];
}
function btn_sign() { 
        let name_data={
            name:Name.value,
            email:email.value,
        }
        name_array.push(name_data);
     localStorage.setItem('namegg', JSON.stringify(name_array));
     read_data();
}
function  read_data() {
    for(let i = 0; i < name_array.length; i++){
       document.getElementById('table-body').innerHTML += `
                <tr>
                    <td>${[i]}</td>
                    <td>${name_array[i].name}</td>
                    <td>${name_array[i].email}</td>
                    <td><button onclick="delete_data(${i})" id="Delete" class="btn btn_search">Delete</button>
                </tr>
       `
        }
    }
    read_data();

// funcaion delete
function delete_data(i){
    name_array.splice(i,1);
    localStorage.setItem('namegg', JSON.stringify(name_array))
    document.getElementById('table-body').innerHTML = '';
    read_data()
}
