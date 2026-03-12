function generate() {
  const topicInput = document.getElementById('topic');
  const result = document.getElementById('result');
  const topic = topicInput.value.trim();

  if (!topic) {
    result.textContent = 'Please enter a topic first.';
    return;
  }

  const captions = [
    `Discover the power of ${topic} today! ✨`,
    `${topic} made simple, smart, and effective.`,
    `Level up with ${topic} — one step at a time.`,
    `Your next big idea starts with ${topic}.`,
    `Make every post count with ${topic}!`
  ];

  const randomCaption = captions[Math.floor(Math.random() * captions.length)];
  result.textContent = randomCaption;
}
