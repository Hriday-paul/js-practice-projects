async function promis(){
    return await $.ajax("http://openapi.programming-hero.com/api/course/curriculum", "GET")
}

promis()
.then((res)=>{
    console.log(res.data)
    res.data.forEach((ary)=>{
        let milestone = document.createElement("div");
        milestone.classList.add("milestone");
        milestone.innerHTML = `<div class="m-nm d-flex justify-content-between">
                        <p>${ary.name}</p>
                        <i class="fa-solid fa-caret-down"></i>
                    </div>`
        document.querySelector(".milestones").appendChild(milestone);

        milestone.addEventListener("click" , function(){
            document.querySelector(".thambnail").src = ary.image;
        })
        
            let modules = document.createElement("div");
            modules.classList.add("modules");
            milestone.appendChild(modules);

        ary.modules.forEach((modul_element)=>{
            let module = document.createElement("div");
            module.classList.add("module");
            module.innerHTML = `<p>${modul_element.name}</p>`
            modules.appendChild(module);
            
            
        })
    })
    var milestones_txt = document.querySelectorAll(".milestone .m-nm");
    milestones_txt.forEach((element)=>{
        element.addEventListener("click", function(){
            let nextmodules =element.nextElementSibling
            let showpanel = document.querySelector(".mileston-animation");
            if(!nextmodules.classList.contains("mileston-animation") && showpanel){
                showpanel.classList.remove("mileston-animation");
            }
            nextmodules.classList.toggle("mileston-animation");
            element.querySelector("i").classList.toggle("icon-animation")
            console.log(element)
        })
    })
})
