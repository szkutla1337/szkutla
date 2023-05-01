var upcomingProject = document.querySelector("#upcomingProjectTitle")

class selfWritingText{
    constructor(document, speed, delay, textToWrite){
        this.document = document;
        this.textToWrite = textToWrite;
        this.speed = speed;
        this.delay = delay;
        this.animationStage = 0;
        this.wait = 0;
    }

    writeText(){
        this.document.innerHTML = this.textToWrite.slice(0,this.animationStage)
        if(this.wait == 0){
            this.animationStage++;
        }
        else if(this.wait < this.delay){
            this.wait++;
        }
        else{
            this.wait = 0;
            this.animationStage = 1;
        }
        if(this.animationStage > this.textToWrite.length){
            this.wait ++;
        }
        setTimeout(this.writeText.bind(this), this.speed);
        }
}

var writingText = "Upcoming Project...";

let project = new selfWritingText(upcomingProject, 30, 175, writingText);
project.writeText();

var language = "English";

var languageButtonImage = document.querySelector("#languageButtonImage")
var languageButton = document.querySelector("#languageButton")

var downloadButton = document.querySelector("#downloadButton")
var downloadButton2 = document.querySelector("#downloadButton2")
var documentationButton = document.querySelector("#documentationButton")
var aboutProjectsButton = document.querySelector("#aboutProjectsButton")
var projectsTextLabel = document.querySelector("#projectsTextLabel")
var descriptionDownloadButton = document.querySelector("#descriptionDownloadButton")
var descriptionText = document.querySelector("#descriptionText")
var descriptionTitle = document.querySelector("#descriptionTitle")

function changeLanguage(){
    if (language == "Polish"){
        downloadButton.innerHTML = "Pobierz";
        downloadButton2.innerHTML = "Pobierz";
        documentationButton.innerHTML = "Dokumentacja";
        aboutProjectsButton.innerHTML = "O Projektach";
        projectsTextLabel.innerHTML = "Obecne Projekty";
        project.textToWrite = "Nadchodzący Projekt...";
        descriptionDownloadButton.innerHTML = "Pobierz";
        descriptionText.innerHTML = "Pełna dokumentacja silnika w pliku .txt";
        descriptionTitle.innerHTML = "Dokumentacja Silnika";
    } else{
        downloadButton.innerHTML = "Download";
        downloadButton2.innerHTML = "Download";
        documentationButton.innerHTML = "Documentation";
        aboutProjectsButton.innerHTML = "About Projects";
        projectsTextLabel.innerHTML = "Current Projects";
        project.textToWrite = "Upcoming Project...";
        descriptionDownloadButton.innerHTML = "Download";
        descriptionText.innerHTML = "Full documentation of engine in .txt file";
        descriptionTitle.innerHTML = "Engine Documentation";
    }
}

languageButton.addEventListener("click", function() {
    if (language == "English"){
        language = "Polish";
        languageButtonImage.src = "assets/polish-flag.png";
    }
    else{
        language = "English";
        languageButtonImage.src = "assets/uk-flag.png";
    }
    changeLanguage();
  });

var overlay = document.createElement("div");
overlay.classList.add("overlay");

var infoButton = document.querySelector("#infoButton")
var closeButton = document.querySelector("#projectInfoCloseButton")

infoButton.addEventListener("click", function(){
    document.body.style.overflow = "hidden";
    document.body.appendChild(overlay);
    document.getElementsByClassName("project-info-container")[0].classList.add("active");
});

closeButton.addEventListener("click", function(){
    document.body.style.overflow = "auto";
    document.body.removeChild(overlay);
    document.getElementsByClassName("project-info-container")[0].classList.remove("active");
});