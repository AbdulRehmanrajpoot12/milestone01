const toggleButton = document.getElementById(`toggleSkills`) as HTMLButtonElement;
const skills = document.getElementById(`skills`) as HTMLButtonElement;

toggleButton.addEventListener(`click`,()=> {
    if (skills.style.display === `none`){
        skills.style.display = `block`
    } else{
        skills.style.display = `none`
    }
});