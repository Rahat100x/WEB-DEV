const quotes = [
  "Be yourself; everyone else is already taken.",
  "In the middle of every difficulty lies opportunity.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "Life is what happens when you're busy making other plans.",
  "Do not go where the path may lead, go instead where there is no path and leave a trail.",
  "The only way to do great work is to love what you do.",
  "You miss 100% of the shots you don’t take.",
  "Whether you think you can, or you think you can't – you're right.",
  "The purpose of our lives is to be happy.",
  "It does not matter how slowly you go as long as you do not stop.",
  "If you tell the truth, you don't have to remember anything.",
  "What we think, we become.",
  "To live is the rarest thing in the world. Most people exist, that is all.",
  "Happiness is not something ready made. It comes from your own actions.",
  "Not everything that is faced can be changed, but nothing can be changed until it is faced.",
  "Imagination is more important than knowledge.",
  "If you want to go fast, go alone. If you want to go far, go together.",
  "A day without laughter is a day wasted.",
  "Don’t watch the clock; do what it does. Keep going.",
  "It always seems impossible until it's done."
];

const generateButton = document.getElementById('generateButton');
const quoteDisplay = document.getElementById('quoteDisplay');

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    console.log(randomIndex);
    quoteDisplay.innerText = quotes[randomIndex];
}

generateButton.addEventListener('click', () => {
    generateQuote();
});


a
a
i
o
o
j
a
v
a
s
c
r
i
p
t
l
o
o
p
s

a
a
i
o
o
j
v
s
c
r
p
t
l
p
s
