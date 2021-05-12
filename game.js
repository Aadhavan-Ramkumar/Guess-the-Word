function LogOut() {
    window.location = "login.html";
}

User1Name = localStorage.getItem("Player1");
User2Name = localStorage.getItem("Player2");

User1Score = 0;
User2Score = 0;

document.getElementById("User1Name").innerHTML = User1Name + " - ";
document.getElementById("User2Name").innerHTML = User2Name + " - ";

document.getElementById("User1Score").innerHTML = User1Score;
document.getElementById("User2Score").innerHTML = User2Score;

document.getElementById("PlayerQuestion").innerHTML = "Question - " + User1Name;
document.getElementById("PlayerAnswer").innerHTML = "Answer - " + User2Name;

function Send() {
    GetWord = document.getElementById("Word").value;
    Word = GetWord.toLowerCase();
    console.log(Word);

    CharAt1 = Word.charAt(1);
    console.log(CharAt1);
    
    LengthDividedBy2 = Math.floor(Word.length / 2);
    CharAt2 = Word.charAt(LengthDividedBy2);
    console.log(CharAt2);

    LengthMinus1 = Word.length - 1;
    CharAt3 = Word.charAt(LengthMinus1);
    console.log(CharAt3);

    RemoveCharAt1 = Word.replace(CharAt1, "_");
    RemoveCharAt2 = RemoveCharAt1.replace(CharAt2, "_");
    RemoveCharAt3 = RemoveCharAt2.replace(CharAt3, "_");

    Question = "<h4 id='DisplayWord'> Q." + RemoveCharAt3 + "</h4>";
    Input = "<br> Answer : <input type='text' id='CheckInput'>";
    Check = "<br><br><button class='btn btn-info' onclick='CheckAnswer()'> Check </button>";
    Row = Question + Input + Check;
    document.getElementById("Output").innerHTML = Row;
    document.getElementById("Word").value = "";
}

PlayerQuestion = "Player1";
PlayerAnswer = "Player2";

function CheckAnswer() {
    GetAnswer = document.getElementById("CheckInput").value;
    Answer = GetAnswer.toLowerCase();
    console.log("Answer in Lowercase = " + Answer);

    if (Answer == Word) {
        if (PlayerAnswer == "Player1") {
            User1Score = User1Score + 1;
            document.getElementById("User1Score").innerHTML = User1Score;
        } else {
            User2Score = User2Score + 1;
            document.getElementById("User2Score").innerHTML = User2Score;
        }
    } else {
        if (PlayerAnswer == "Player1") {
            User2Score = User2Score + 1;
            document.getElementById("User2Score").innerHTML = User2Score;
        } else {
            User1Score = User1Score + 1;
            document.getElementById("User1Score").innerHTML = User1Score;
        }
    }

    if (PlayerQuestion == "Player1") {
        PlayerQuestion = "Player2";
        document.getElementById("PlayerQuestion").innerHTML = "Question - " + User2Name;
    } else {
        PlayerQuestion = "Player1";
        document.getElementById("PlayerQuestion").innerHTML = "Question - " + User1Name;
    }

    if (PlayerAnswer == "Player1") {
        PlayerAnswer = "Player2";
        document.getElementById("PlayerAnswer").innerHTML = "Answer - " + User2Name;
    } else {
        PlayerAnswer = "Player1";
        document.getElementById("PlayerAnswer").innerHTML = "Answer - " + User1Name;
    }

    document.getElementById("Output").innerHTML = "";
}