const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const book = document.querySelector("#book");

const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");
const paper3 = document.querySelector("#p3");
const paper4 = document.querySelector("#p4");

prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);

let currentLocation = 1;
let numOfPapers = 4;
let maxLocation = numOfPapers + 1;

// Hide the Previous button initially
prevBtn.classList.add("hidden");

function openBook() {
    book.style.transform = "translateX(50%)";
    prevBtn.style.transform = "translateX(-180px)";
    nextBtn.style.transform = "translateX(180px)";
}

function closeBook(isAtBeginning) {
    if (isAtBeginning) {
        book.style.transform = "translateX(0%)";
    } else {
        book.style.transform = "translateX(100%)";
    }

    prevBtn.style.transform = "translateX(0px)";
    nextBtn.style.transform = "translateX(0px)";
}

function goNextPage() {
    if (currentLocation < maxLocation) {
        switch (currentLocation) {
            case 1:
                openBook();
                paper1.classList.add("flipped");
                paper1.style.zIndex = 1;
                // Show the Previous button when reaching Paper 2
                prevBtn.classList.remove("hidden");
                break;
            case 2:
                paper2.classList.add("flipped");
                paper2.style.zIndex = 2;
                break;
            case 3:
                paper3.classList.add("flipped");
                paper3.style.zIndex = 3;
                break;
            case 4:
                paper4.classList.add("flipped");
                paper4.style.zIndex = 4;
                closeBook(false);
                break;
            default:
                throw new Error("unknown state");
        }
        currentLocation++;
        
        if (currentLocation === maxLocation) {
            nextBtn.classList.add("hidden"); // Hide the Next button
        }
    }
}

function goPrevPage() {
    if (currentLocation > 1) {
        switch (currentLocation) {
            case 2:
                closeBook(true);
                paper1.classList.remove("flipped");
                paper1.style.zIndex = 4;
                break;
            case 3:
                paper2.classList.remove("flipped");
                paper2.style.zIndex = 3;
                break;
            case 4:
                paper3.classList.remove("flipped");
                paper3.style.zIndex = 2;
                break;
            case 5:
                openBook();
                paper4.classList.remove("flipped");
                paper4.style.zIndex = 1;
                break;
            default:
                throw new Error("unknown state");
        }

        currentLocation--;

        // Reset button positions when going back
        if (currentLocation < maxLocation) {
            nextBtn.classList.remove("hidden"); // Show the Next button again
        }
        
        // Hide the Previous button when returning to Paper 1
        if (currentLocation === 1) {
            prevBtn.classList.add("hidden");
        }
    }
}
