
  const correctAnswers = ['8', '10', '3', '25'];
  const form = document.querySelector('.question-form');
  const result = document.querySelector('.result');
  const button=document.querySelector('.btn');
  console.log(form);
  console.log(result);
  form.addEventListener('submit', (e) => {
  e.preventDefault();
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
  ];
  let score = 0;
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 25;
    }
  });
  result.classList.remove('d-none');
  result.querySelector('#percentage').textContent = `${score}%`;
  console.log(result.classList);
  const next= document.querySelector('.next');
if(score===100){
  next.classList.remove('d-none');
  button.classList.add('disabled');
}
});
