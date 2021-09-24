student_array = []
function submit(){
    var name1=document.getElementById("name1").value;
    var name2=document.getElementById("name2").value;
    var name3=document.getElementById("name3").value;
    var name4=document.getElementById("name4").value;
student_array.push(name1)
student_array.push(name2)
student_array.push(name3)
student_array.push(name4)

document.getElementById("display_output").innerHTML=student_array;
document.getElementById("submit-id").style.display="none"
document.getElementById("name1").value=""
document.getElementById("name2").value=""
document.getElementById("name3").value=""
document.getElementById("name4").value=""
document.getElementById("sorting-id").style.display='inline-block'

}

function sorting(){
    student_array.sort()
    document.getElementById("display_output").innerHTML=student_array
    document.getElementById("submit-id").style.display="inline-block"
    document.getElementById("sorting-id").style.display="none"
    document.getElementById("name1").value=""
document.getElementById("name2").value=""
document.getElementById("name3").value=""
document.getElementById("name4").value=""
}