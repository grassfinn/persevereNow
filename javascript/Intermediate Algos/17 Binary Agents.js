function binaryAgent(str) {
  const binary = str.split(' ');
  const charCode = binary.map((item) => parseInt(item, 2));
  const charCodeString = charCode.map((item) => item.toString());
  const message = charCodeString.map((item) => String.fromCharCode(item));

  return message.join('');
}
