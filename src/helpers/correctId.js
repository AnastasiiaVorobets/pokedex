export function correctId(id) {
  if (typeof id === 'number') {
    if (id < 10) {
      return ' #00' + id;
    } else if (id < 100) {
      return ' #0' + id;
    } else {
      return ' #' + id;
    }
  }

  return id;
}
