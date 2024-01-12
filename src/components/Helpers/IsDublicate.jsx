export const IsDublicate = ({ name, number }, contacts) => {
  const normalizedName = name.toLowerCase();
  const normalizedNumber = number.toLowerCase();
  return contacts.some(
    ({ name, number }) =>
      name.toLowerCase().includes(normalizedName) &&
      number.toLowerCase().includes(normalizedNumber)
  );
};
