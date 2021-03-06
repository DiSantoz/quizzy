// place correct answers in array
const correctAnswer = ["B", "B", "B", "B"];

const form = document.querySelector(".quiz-form");

const result = document.querySelector(".result");

// when submit is clicked, verify user's answers
form.addEventListener("submit", (e) => {
  // prevent's page refreshing upon click
  e.preventDefault();

  //   user score defaults to 0
  let score = 0;

  //   users answers are place in array
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
  ];

  //   check users answers against correct answer
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswer[index]) {
      score += 25;
    }
  });

  //   show results

  //   scroll to top of page
  scrollTo(0, 0);

  //   remove class to display score
  result.classList.remove("d-none");

  //   score animation
  let output = 0;
  const timer = setInterval(() => {
    result.querySelector("span").textContent = `${output}%`;
    if (output === score) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 10);
});
