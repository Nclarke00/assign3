function quiz() {
    const questions = [
      'How many moons does Earth have?',
      'How many moons does Saturn have?',
      'How many moons does Venus have?'
    ];
    const answers = [1, 82, 0];
  
    let score = 0;
  
    for (let i = 0; i < questions.length; i++) {
      const num = Math.floor(Math.random() * questions.length);
      const question = questions[num];
      const userAnswer = prompt(question);
  
      if (parseInt(userAnswer) === answers[num]) {
        score++;
        alert('Correct!');
      } else {
        alert('Wrong!');
      }
    }
  
    const scoreArea = document.querySelector('.score-area');
    scoreArea.innerHTML = `You got ${score} out of ${questions.length} questions correct!`;
  }
  
  alert('Are you ready for a quiz?');
  quiz();
  
