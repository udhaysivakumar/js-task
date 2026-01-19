const students =[];

function addstudent(name,score){
    score= Number(score);
    score=score ?? 0;
    name=name.trim().toUpperCase();
    students.push({name,score})
}

function getgrades(){
    return students.map((student)=>{
        let grade="f";
        if(student.score>=90)grade="A";
        else if (student.score>=75)grade="B";
        else if (student.score>=50)grade="C";
        else if (student.score>=35)grade="D";
        return {...student,grade}
    })
}
function gettopscore(){
    return students.filter((student)=>student.score>=75)
}

function findstudend(name){
    return students.find((student) =>student.name==name)
}

function hasfailures(){
    return students.some((student)=>student.score<35)
}
//display data

function displayall(){
    const graded=getgrades();
    console.log("student Data");
    console.log("All student with grades");
    graded.forEach((student)=>{
        console.log(`${student.name} | ${student.score} | ${student.grade}`)
    })
}
addstudent("udhay",99);
addstudent("venky",79);
addstudent("tharun",49);
addstudent("mani",34);

// display students data 
displayall();

//top scores

console.log("\n top scores:")
console.log(gettopscore())

//find student

console.log("\n searching for Ravi");
console.log(findstudend("UDHAY"))

// check failures
console.log("any failures");
console.log(hasfailures()?"yes some students failed":"no failures");