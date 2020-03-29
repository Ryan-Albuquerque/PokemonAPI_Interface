
const baseURL = "https://pokeapi.co/api/v2/pokemon/"

document.querySelector("form button").addEventListener("click", function(e){
    e.preventDefault()

    var search = document.querySelector("input").value.toLowerCase()

    
        console.log(baseURL + search)

        var hxr = new XMLHttpRequest()

        hxr.open("GET", baseURL + search)

        hxr.addEventListener("load", function(){

            if(search.length>0 && hxr.status == 200){
                
                var object = JSON.parse(hxr.responseText)
    
                // console.log(object.forms[0].name)
                // console.log(object)
                // console.log(object.id)
                // console.log(object.height);
                // console.log(object.weight);
                // console.log(object.sprites.front_default)
                // console.log(object.types[0].type.name);
                // console.log(object.base_experience);
        
                const criacao = () =>{
                    document.querySelector(".modal-title").innerHTML = object.forms[0].name.toUpperCase()
        
                    const criar = `
                        <div class="d-flex justify-content-center">
                            <img src="${object.sprites.front_default}" alt="" srcset="" class="justify-content-center">
                        </div>
                            <table class="table">
                            <tbody>
                                <tr>
                                     <th scope="row">ID</th>
                                     <td>${object.id}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Name</th>
                                    <td>${object.forms[0].name}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Type</th>
                                    <td>${object.types[0].type.name}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Base Experience</th>
                                    <td>${object.base_experience}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Height</th>
                                    <td>${object.height}</td>
                                </tr>
                                <tr>
                                    <th scope="row">weight</th>
                                    <td>${object.weight}</td>
                                </tr>
                                </tr>
                            </tbody>
                        </table>
                    `
        
                    
                    document.querySelector(".modal-body").innerHTML = criar
        
                }
        
                
                criacao()
            
                    
                document.querySelector("input").value = ''
                
            }else{
                document.querySelector(".modal-title").innerHTML = "Pokemon not found"
                document.querySelector(".modal-body").innerHTML = "Try another poke name"

                
                document.querySelector("input").value = ''
                
            }
            

            
        })
        hxr.send()
   
    

    

    
})

