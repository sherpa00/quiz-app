// after load get the questions
const highScore = document.querySelector("high_score");
const score_cont = document.querySelector(".main_score");
const main_question = document.querySelector(".main_question");
const game_cont = document.querySelector(".game_container");
const try_again = document.querySelector(".try_again");
const question_num = document.querySelector("#question_num")

const first = document.querySelector("#first");
const second = document.querySelector("#second");
const third = document.querySelector("#third");
const fourth = document.querySelector("#fourth");

var score = 0;

window.addEventListener("load", () => {
    const base = "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple";
    console.log(base);
    let counter = 0;
    fetch(base).then((res) => {
            return res.json();
        })
        .then((data) => {
            let res = data.results;
            let res_all = []
            for (let i = 0; i < res.length; i++) {
                let exp = {};
                exp.question = res[i].question;
                exp.correct = res[i].correct_answer;
                exp.ans_list = [...res[i].incorrect_answers]
                let rand = Math.floor(Math.random() * 3);
                exp.ans_list.splice(rand, 0, exp.correct);
                res_all.push(exp);
                exp.ind = rand;
            }
            console.log(res_all);

            displayQuestions(counter, res_all);

            first.addEventListener("click", () => {
                if (first.textContent == res_all[counter].correct) {
                    score += 1;
                    first.style.background = "lightgreen";
                    setTimeout(() => {
                        first.style.background = "gray";
                    }, 1000);
                } else {
                    first.style.background = "crimson";
                    setTimeout(() => {
                        first.style.background = "gray";
                    }, 1000);

                    if (res_all[counter].ind == 0) {
                        first.style.background = "lightgreen";
                        setTimeout(() => {
                            first.style.background = "gray";
                        }, 1000);
                    };

                    if (res_all[counter].ind == 1) {
                        second.style.background = "lightgreen";
                        setTimeout(() => {
                            second.style.background = "gray";
                        }, 1000);
                    };

                    if (res_all[counter].ind == 2) {
                        third.style.background = "lightgreen";
                        setTimeout(() => {
                            third.style.background = "gray";
                        }, 1000);
                    };

                    if (res_all[counter].ind == 3) {
                        fourth.style.background = "lightgreen";
                        setTimeout(() => {
                            fourth.style.background = "gray";
                        }, 1000);
                    };
                }

                counter += 1;

                if (counter >= 10) {
                    game_cont.style.display = "none";
                    try_again.style.display = "block"
                } else {
                    setTimeout(() => {
                        displayQuestions(counter, res_all);
                    }, 1000)
                }
                question_num.textContent = `${counter}/10`;
                score_cont.textContent = score;
            })

            second.addEventListener("click", () => {
                if (second.textContent == res_all[counter].correct) {
                    score += 1;
                    second.style.background = "lightgreen";
                    setTimeout(() => {
                        second.style.background = "gray";
                    }, 1000);
                } else {
                    second.style.background = "crimson";
                    setTimeout(() => {
                        second.style.background = "gray";
                    }, 1000);

                    if (res_all[counter].ind == 0) {
                        first.style.background = "lightgreen";
                        setTimeout(() => {
                            first.style.background = "gray";
                        }, 1000);
                    };

                    if (res_all[counter].ind == 1) {
                        second.style.background = "lightgreen";
                        setTimeout(() => {
                            second.style.background = "gray";
                        }, 1000);
                    };

                    if (res_all[counter].ind == 2) {
                        third.style.background = "lightgreen";
                        setTimeout(() => {
                            third.style.background = "gray";
                        }, 1000);
                    };

                    if (res_all[counter].ind == 3) {
                        fourth.style.background = "lightgreen";
                        setTimeout(() => {
                            fourth.style.background = "gray";
                        }, 1000);
                    };
                }

                counter += 1;

                if (counter >= 10) {
                    game_cont.style.display = "none";
                    try_again.style.display = "block"
                } else {
                    setTimeout(() => {
                        displayQuestions(counter, res_all);
                    }, 1000)
                }
                question_num.textContent = `${counter}/10`;
                score_cont.textContent = score;
            })

            third.addEventListener("click", () => {
                if (third.textContent == res_all[counter].correct) {
                    score += 1;
                    third.style.background = "lightgreen";
                    setTimeout(() => {
                        third.style.background = "gray";
                    }, 1000);
                } else {
                    third.style.background = "crimson";
                    setTimeout(() => {
                        third.style.background = "gray";
                    }, 1000);

                    if (res_all[counter].ind == 0) {
                        first.style.background = "lightgreen";
                        setTimeout(() => {
                            first.style.background = "gray";
                        }, 1000);
                    };

                    if (res_all[counter].ind == 1) {
                        second.style.background = "lightgreen";
                        setTimeout(() => {
                            second.style.background = "gray";
                        }, 1000);
                    };

                    if (res_all[counter].ind == 2) {
                        third.style.background = "lightgreen";
                        setTimeout(() => {
                            third.style.background = "gray";
                        }, 1000);
                    };

                    if (res_all[counter].ind == 3) {
                        fourth.style.background = "lightgreen";
                        setTimeout(() => {
                            fourth.style.background = "gray";
                        }, 1000);
                    };
                }

                counter += 1;

                if (counter >= 10) {
                    game_cont.style.display = "none";
                    try_again.style.display = "block"
                } else {
                    setTimeout(() => {
                        displayQuestions(counter, res_all);
                    }, 1000)
                }
                question_num.textContent = `${counter}/10`;
                score_cont.textContent = score;
            })

            fourth.addEventListener("click", () => {
                if (fourth.textContent == res_all[counter].correct) {
                    score += 1;
                    fourth.style.background = "lightgreen";
                    setTimeout(() => {
                        fourth.style.background = "gray";
                    }, 1000);
                } else {
                    fourth.style.background = "crimson";
                    setTimeout(() => {
                        fourth.style.background = "gray";
                    }, 1000);

                    if (res_all[counter].ind == 0) {
                        first.style.background = "lightgreen";
                        setTimeout(() => {
                            first.style.background = "gray";
                        }, 1000);
                    };

                    if (res_all[counter].ind == 1) {
                        second.style.background = "lightgreen";
                        setTimeout(() => {
                            second.style.background = "gray";
                        }, 1000);
                    };

                    if (res_all[counter].ind == 2) {
                        third.style.background = "lightgreen";
                        setTimeout(() => {
                            third.style.background = "gray";
                        }, 1000);
                    };

                    if (res_all[counter].ind == 3) {
                        fourth.style.background = "lightgreen";
                        setTimeout(() => {
                            fourth.style.background = "gray";
                        }, 1000);
                    };
                }

                counter += 1;

                if (counter >= 10) {
                    game_cont.style.display = "none";
                    try_again.style.display = "block"
                } else {
                    setTimeout(() => {
                        displayQuestions(counter, res_all);
                    }, 1000)
                }
                question_num.textContent = `${counter}/10`;
                score_cont.textContent = score;
            })
        });
})

function displayHighScore(name, score) {
    highScore.textContent = `${name}   ${score}`
}

function displayQuestions(counter, arr) {
    main_question.textContent = arr[counter].question;
    first.textContent = arr[counter].ans_list[0];
    second.textContent = arr[counter].ans_list[1];
    third.textContent = arr[counter].ans_list[2];
    fourth.textContent = arr[counter].ans_list[3];
}

try_again.addEventListener("click", () => {
    window.location = window.location;
})