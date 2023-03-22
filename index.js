// Code your solutions in this file
function writeCards(names, eventName) {
  const messages = [];
  for (let i = 0; i < names.length; i++) {
    messages.push(
      `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`
    );
    const element = names[i];
  }

  return messages;
}

function countDown(counter) {
  while (counter >= 0) {
    console.log(counter);
    counter -= 1;
  }
}
