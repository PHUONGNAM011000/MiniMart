export function validateModalFormCategory(item) {
  return (
    (item.name !== '' && item.decripstion !== '') ||
    (item.name !== null && item.decripstion !== null)
  );
}
