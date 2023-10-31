function choice(items) {
  return items[Math.floor(Math.random() * (items.length - 1))];
}

export { choice };