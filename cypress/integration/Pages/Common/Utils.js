const generateRandomLettersAndNumber = (numberOfCharacters) => {
  var text = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < numberOfCharacters; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
};
export default {
  generateRandomLettersAndNumber,
};
