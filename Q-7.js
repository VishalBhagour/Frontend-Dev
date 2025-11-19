let feedback = "Great product! Fast delivery and amazing sound quality!";

let words = feedback.split(" ").length;

let hasNegative = feedback.toLowerCase().includes("bad") || feedback.toLowerCase().includes("poor");

if (hasNegative) {
    console.log("Needs Improvement");
} else {
    console.log("Positive Feedback");
}

console.log("Word Count:", words);