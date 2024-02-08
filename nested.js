const collage = {
    nam: "vnc",
    class: ["11", "12"],
    speacility: "blue",
    unique: {
        color: "blue",
        result: {
            gpa: 5,
            marite: "top",
            travel: ["satoru", "gojo", "makami", "yuzi"]
        }
    }
}

console.log(collage.unique.result.marite)
collage.unique.result.travel[1]="itaduri";
console.log(collage.unique.result.travel)