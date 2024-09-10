let previewContainer=document.querySelector(".package-preview");
let previewBox=previewContainer.querySelector(".preview");
document.querySelectorAll(".card").forEach(package=>{
    package.onclick=()=>{
        previewContainer.style.display=flex;
        let name=package.getAttribute(data-name);
        previewBox.forEach(preview=>{
           let target= preview.getAttribute("data-target");
            if(name==target){
                preview.classList.add("active");
            }
        });
    };
    
})