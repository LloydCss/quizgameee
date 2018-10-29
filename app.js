const quiz = [
	{
		question: "What is your favorite color?",
		answers: [
			{ src: "images/black.jpg", score: 20 },
			{ src: "images/blue.jpg", score: 5},
			{ src: "images/green.jpeg", score: 0 },
			{ src: "images/red.png", score: 35 }
		] 
	}, 
	{
		question: "What do you feel like doing with your partner or if you had one?",
		answers: [
			{ src: "images/alone.jpg", score: 20 }, 
			{ src: "images/comp.jpg", score: 3 }, 
			{ src: "images/guy.jpg", score: 20}, 
			{ src: "images/cuddling.jpeg", score:15 }
		]
	},
	{
		question: "What is your favorite hobby?", 
		answers:[
			{ src: "images/sing.jpg", score:15 },
			{ src: "images/reading.jpg", score: 20 },
			{ src: "images/sports.jpg", score: 0 },
            { src: "images/games.jpg", score: 0 }
		]
	},
    {
		question: "Do you even believe in horoscopes??", 
		answers:[
			{ src: "images/yes.png", score:15 },
			{ src: "images/no.png", score: 20 },
		]
	},
    {
		question: "What is your personality like?", 
		answers:[
			{ src: "images/Focused.png", score:15 },
			{ src: "images/witty.jpeg", score: 20 },
			{ src: "images/calm.png", score: 6 },
            { src: "images/alone.gif", score: 0 }
		]
	}
];



const container = document.getElementById('quiz');

// build quiz HTML
for (let i = 0; i < quiz.length; i++) {
	const q = quiz[i];
	
	// create question container 
	const questionDiv = document.createElement('div');
	questionDiv.classList.add('question');
	
	// add question
	const p = document.createElement('p');
	p.textContent = q.question;
	questionDiv.appendChild(p);
	
	
	// option div
	const options = document.createElement('div');
	options.classList.add('options');
	questionDiv.appendChild(options);
	
	// add answers
	for (let j = 0; j < q.answers.length; j++) {
		const a = q.answers[j];
		const img = new Image();
		img.src = a.src;
		options.appendChild(img);
		
		img.onclick = function() {
			q.score = a.score;
            console.log(a.score)
		};
	}
	// add to container
	container.appendChild(questionDiv);
}



// < 0 introvert - > 0 extrovert

const resultsBtn = document.getElementById('results');
resultsBtn.onclick = function() {
	let score = 0;
	for (let i = 0; i < quiz.length; i++) {
		score += quiz[i].score;
	}
	const response = document.getElementById('response');
	if (score > 60) {
		response.textContent = "You are a cancer.";
	} else if (score > 50) {
		response.textContent = " You are a ARIES.";
	} else if (score > 40) {
        response.textContent = " You are a Tarus.";
    } else if (score > 30) {
        response.textContent = " You are a Capricorn.";
    } else if (score > 20) {
        response.textContent = " You are a Gemini.";
    } else if (score > 10) {
        response.textContent = " You are a Leo.";
    } 
};
