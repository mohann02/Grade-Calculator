function calculateGrade(){
    const subj1 = parseFloat(document.getElementById("subj1").value);
    const subj2 = parseFloat(document.getElementById("subj2").value);
    const subj3 = parseFloat(document.getElementById("subj3").value);
    const subj4 = parseFloat(document.getElementById("subj4").value);
    const subj5 = parseFloat(document.getElementById("subj5").value);

    const total = subj1+subj2+subj3+subj4+subj5;
    // console.log(total)
    const average = total/5;

    let grade;
    if(average>=90){
        grade = "A+";
    }else if(average>=80){
        grade = "A"
    }else if(average>=70){
        grade ="B"
    }else if(average>=60){
        grade= "C"

    }else if(average>=50){
        grade = "D"
    }else{
        grade ="F"
    }
    
    document.getElementById("total").innerHTML = total;
    console.log(total)
    document.getElementById("average").innerHTML = average.toFixed(2);
    document.getElementById("grade").innerHTML = grade;
}