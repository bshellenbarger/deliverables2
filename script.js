let rain = prompt("How many inches of rain fell?"); {
    let inches = "*"
    

    console.log("Rainfall: " + inches.repeat(rain));
}

let fertilizer = prompt("Did you use fertilizer?");

if (fertilizer === "no") {

    if (rain <= 10) {
        console.log("The yeild should be " + (50 * .8) + " bushels per year.");
    } else if (rain > 10 && rain < 20) {
        console.log("The yield should be 50 bushels per year.");
    } else if (rain >= 20) {
        console.log("The yield should be " + (50 * .9) + " bushels per year.");
    }

}

newFunction();

    
function newFunction() {
    if (fertilizer === "yes") {
        let brand = prompt("Did you use premium or regular fertilizer?");

        if (brand === "premium") {

            if (rain <= 10) {
                console.log("The yeild should be" + (50 * .8) * 1.15 + "bushels per year.");
            }
            else if (rain > 10 && rain < 20) {
                console.log("The yeild should be " + (50) * 1.15 + "bushels per year.");
            }
            else if (rain >= 20) {
                console.log("The yield should be" + (50 * .9) + "bushels per year.");
            }
        }
        else if (brand === "regular") {

            if (rain <= 10) {
                console.log("The yeild should be " + (50 * .8) * 1.1 + "bushels per year.");
            }
            else if (rain > 10 && rain < 20) {
                console.log("The yeild should be" + (50 * 1.1) + "bushels per year.");
            }
            else if (rain >= 20) {
                console.log("The yeild should be" + (50 * .9) * 1.1 + "bushels per year.");
            }
        }
    }
}

