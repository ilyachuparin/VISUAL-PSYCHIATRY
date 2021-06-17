// Переменные, константы, функции, условия
let box = "начало";
        const shell = 1;
        function printWord(numWord, pen){
            if(!numWord)
                return "error";
            let word = "empty";
            if(!numWord){
                word = "one";
            }
            else if((pen === true && numWord === "4") || pen === false){
                word = "zero";
            }
            else if(numWord > 2){
                word = "two";
            }
            else{
                word = "none";
            }
            return word;
        }
        // box = printWord("", false);
        // console.log(box);


// Массивы, объекты, циклы 
let teeth = [
    "клык",
    "премоляр",
    [
        "передний резец",
        "боковой резец",
    ],
    "моляр",
];
// let number = 0;
// while(number < teeth.length){
//     console.log(teeth[number]);
//     number++;
// }
// for(let i = 0; i < teeth.length; i++){
//     if(Array.isArray(teeth[i])){
//         for(let t = 0; t < teeth[i].length; t++){
//             console.log(teeth[i][t]);
//         }
//         break;
//     }
//     console.log(teeth[i]);
// }
// объект
let staff = {
    surgeon: "Василий",
    therapist: {
        first: "Игорь",
        second: "Мария",
    },
    orthopaedist: "Олег",
};
for(let doctor in staff){
    if(doctor == "therapist"){
        for(let category in staff[doctor]){
            console.log(staff[doctor][category]);
        }
        continue;
    }
    console.log(staff[doctor]);
}