function joined(){
    let colorChange=document.getElementById('title');
    colorChange.innerHTML="Thank You for Joining the Class !!!"
    document.getElementById("yes").style.display="none"
    document.getElementById("no").style.display="none"
    
    
}
function missed(){
    let colorChange=document.getElementById('title');
    colorChange.innerHTML="You can watch the recordings !!!"
    document.getElementById("yes").style.display="none"
    document.getElementById("no").style.display="none"
}
function submit(){
    let values=document.getElementById("value").value;
    console.log(values);
    console.log(values*values*values);
    document.getElementById('value').value=''
}
