const input = [
  "011010010110",
  "101110100110",
  "011011011110",
  "100011010001",
  "011011100111",
  "011000100101",
  "101101011001",
  "010001001001",
  "100010110111",
  "001110110101",
  "100111011001",
  "100110111011",
  "000000111101",
  "000000011101",
  "011101000011",
  "101101001111",
  "110101011101",
  "010100000100",
  "100111010001",
  "111110001000",
  "000110110110",
  "001001101101",
  "001110110111",
  "101110110101",
  "010001111000",
  "111101010111",
  "110011101110",
  "010111011100",
  "100101011111",
  "111011011011",
  "100110100111",
  "001000101010",
  "101000010000",
  "101010000111",
  "000100100101",
  "111111111101",
  "000100101010",
  "101000101000",
  "101010010111",
  "111011000010",
  "100101010110",
  "010011000101",
  "010010111011",
  "100101100000",
  "001011111000",
  "101011111011",
  "111110101100",
  "100011100110",
  "101011010001",
  "100010010110",
  "110000000101",
  "101111011000",
  "011110000000",
  "000100110010",
  "111110000011",
  "011000101010",
  "101011010011",
  "001000011111",
  "010001100101",
  "110011010000",
  "110111001100",
  "000111100001",
  "010000011011",
  "111001101111",
  "001010010111",
  "110100100000",
  "010100100110",
  "110010001001",
  "111000000000",
  "100010000011",
  "101100000011",
  "111010101011",
  "110100011010",
  "010010111111",
  "100001011110",
  "110001011000",
  "001000010111",
  "100110110100",
  "110010010101",
  "101010100011",
  "011001100101",
  "000011001001",
  "100000000101",
  "001000100010",
  "011101001010",
  "011111001001",
  "010010001010",
  "101010011111",
  "110100111000",
  "111110011000",
  "001100110010",
  "111010111001",
  "000100110110",
  "001000111010",
  "001111100100",
  "011101110000",
  "100110100110",
  "011111010111",
  "111111001110",
  "010000111010",
  "011010001010",
  "010100011110",
  "101110111101",
  "101010110100",
  "110111101010",
  "110000100110",
  "100001010000",
  "111101001011",
  "000001001000",
  "000001100100",
  "010011010100",
  "001100010110",
  "111111111010",
  "000001110101",
  "100011110001",
  "001011110100",
  "100110101011",
  "001111000001",
  "111111100110",
  "100001111100",
  "101010101100",
  "011101000101",
  "001110011101",
  "111101000101",
  "110000100001",
  "101110100111",
  "000100100011",
  "101010000100",
  "001011100100",
  "110100001010",
  "001001111001",
  "000001011110",
  "111110011110",
  "110111111100",
  "101110011110",
  "100110000111",
  "000011011111",
  "100100000110",
  "101000100011",
  "010100110110",
  "010101101100",
  "000101110011",
  "000111000111",
  "101000011000",
  "100010011010",
  "010011010110",
  "010011011010",
  "010000010011",
  "011010011000",
  "001101100001",
  "000100101111",
  "000100011110",
  "010001100010",
  "010110000000",
  "010100101000",
  "010010111101",
  "101100111111",
  "111001010100",
  "101100101001",
  "001000100110",
  "110001100000",
  "101110000010",
  "100111010100",
  "111001110001",
  "100010010111",
  "010010010110",
  "011010111111",
  "011110001111",
  "001100010000",
  "111011000110",
  "101010000000",
  "100000010110",
  "100001101100",
  "011101101000",
  "000000010101",
  "110111000011",
  "010101100110",
  "110111011111",
  "111000110100",
  "100011100000",
  "110000101001",
  "010011110100",
  "101000001110",
  "001000010011",
  "111110101101",
  "110111100001",
  "001110001100",
  "001101110111",
  "011000101111",
  "010111111011",
  "110011111010",
  "001000011110",
  "001010000111",
  "000010101001",
  "011011101101",
  "000100010000",
  "101111111001",
  "100101111011",
  "000001001001",
  "000001001100",
  "011100010110",
  "010111000000",
  "100101001110",
  "001001101000",
  "100010110110",
  "110010111011",
  "011000000111",
  "010110111111",
  "011111010010",
  "111000010110",
  "010010101111",
  "110111011100",
  "100101101011",
  "110000110111",
  "100011000001",
  "010101010111",
  "011011111111",
  "110111010010",
  "000000110010",
  "100010110001",
  "110101111100",
  "100100100011",
  "111111101100",
  "110000111101",
  "000001001111",
  "011100110101",
  "001100000011",
  "111100011101",
  "111001100011",
  "000100100100",
  "011100011011",
  "100110011010",
  "001011110111",
  "100100010111",
  "110100000100",
  "010001001111",
  "101101110000",
  "000001011100",
  "010011111110",
  "111110111100",
  "011101110100",
  "100010011111",
  "101001101101",
  "111100001101",
  "101001010110",
  "101010101010",
  "000101000101",
  "001101110000",
  "101110111100",
  "100101010100",
  "100011111000",
  "010000111110",
  "100001000100",
  "100101101110",
  "101001001000",
  "110100111111",
  "010111000100",
  "010001011011",
  "001001011101",
  "110101111111",
  "011011100100",
  "001010000001",
  "010111001111",
  "101101011110",
  "011011001011",
  "111001100000",
  "000000000111",
  "010001000010",
  "011100001101",
  "011010101011",
  "100111001101",
  "101010011000",
  "001100010111",
  "111001001111",
  "101011011001",
  "110001100110",
  "000011111000",
  "001001010111",
  "000010010000",
  "100110111001",
  "000101111110",
  "011101011011",
  "000000011111",
  "100001110011",
  "010000010100",
  "101001011111",
  "001110000110",
  "011010101001",
  "000100011000",
  "010110110010",
  "110000011001",
  "110101001100",
  "010010000100",
  "010011001011",
  "001110101010",
  "111011011000",
  "010111101101",
  "001111011100",
  "000011010111",
  "100011110100",
  "000000101000",
  "000111011011",
  "000111100110",
  "111010011000",
  "100100100111",
  "110101110011",
  "100011011110",
  "001100111110",
  "111100110011",
  "110100011101",
  "101101000000",
  "010000001100",
  "010100111011",
  "010001011111",
  "101100011000",
  "000011101010",
  "001011100000",
  "011010010111",
  "100101110100",
  "000011001011",
  "100111110111",
  "100001001111",
  "101111011100",
  "100000100010",
  "001010011001",
  "110110010100",
  "010001000101",
  "011110111010",
  "001011010110",
  "100011011100",
  "111101010101",
  "111101000011",
  "011011100011",
  "011001011010",
  "111001001100",
  "110010100110",
  "110100010010",
  "111010100001",
  "010000110100",
  "000011101111",
  "001001101001",
  "011101110110",
  "001101011001",
  "010111111001",
  "100100011111",
  "010001101011",
  "011000000011",
  "000001111101",
  "001111001110",
  "001100101111",
  "111010000110",
  "000101100110",
  "100100000100",
  "100011110110",
  "011101011101",
  "011101010001",
  "101100111001",
  "110100011111",
  "100001011101",
  "110111100110",
  "001010011011",
  "100010100001",
  "100001100011",
  "111011100001",
  "100111000100",
  "100001010110",
  "001011011101",
  "010101111000",
  "110010111000",
  "010001000111",
  "001010001000",
  "001011100001",
  "011001010110",
  "001100111101",
  "100011110101",
  "111011101000",
  "110001010101",
  "010010101000",
  "000110101011",
  "111101010010",
  "010001000001",
  "110001000010",
  "101001010111",
  "010011101101",
  "000010000000",
  "111000101100",
  "111001101110",
  "111010011011",
  "011011010000",
  "110100000000",
  "010000101000",
  "110010100000",
  "011110011101",
  "001010111010",
  "010111011000",
  "100111011111",
  "010010011000",
  "010000010101",
  "011101101111",
  "100001110001",
  "110111011101",
  "000110011101",
  "011111001010",
  "110010011010",
  "001010111101",
  "101011100100",
  "101001011011",
  "010010001101",
  "011011011010",
  "011100001011",
  "010101111110",
  "010011111001",
  "110011010100",
  "110111010111",
  "010010010001",
  "110011111110",
  "100100100110",
  "100111100101",
  "101110011000",
  "000011001100",
  "111000000110",
  "011111001100",
  "101100010010",
  "110000001110",
  "011000101011",
  "010101110100",
  "100000000100",
  "111010010000",
  "000010100100",
  "100011011111",
  "010100000010",
  "010010000011",
  "011000001011",
  "010010011001",
  "110110011111",
  "010111001110",
  "110111000100",
  "010111110110",
  "101000100010",
  "101111000011",
  "001000100100",
  "100010111101",
  "110111011110",
  "001011100010",
  "011111011110",
  "010101110001",
  "100101111110",
  "111111011111",
  "000001000110",
  "011100111101",
  "110010000001",
  "001100000100",
  "011011101010",
  "011110111001",
  "100101010101",
  "001011011010",
  "010000001011",
  "111000111000",
  "110000010000",
  "100011001101",
  "010111000011",
  "111101001110",
  "110000111111",
  "011000100100",
  "010011110011",
  "011010011001",
  "000110001111",
  "010000010110",
  "001110011111",
  "100011011000",
  "111100011001",
  "001000011001",
  "100010101101",
  "011111011101",
  "001110000001",
  "100100110001",
  "101010000001",
  "110110110100",
  "101001010000",
  "100010010000",
  "100101111101",
  "011010000011",
  "010001001110",
  "000000011110",
  "110001100100",
  "001100001000",
  "100001100100",
  "010010011101",
  "111011001000",
  "010011001100",
  "100110001010",
  "000010110001",
  "010101101101",
  "000110000000",
  "110000010100",
  "111001111101",
  "001000111100",
  "110010110001",
  "001011101000",
  "101101100000",
  "001000011010",
  "000001001010",
  "011001110000",
  "001001110001",
  "110111001011",
  "001110000111",
  "101111101001",
  "100110001000",
  "011111111111",
  "011000110101",
  "110110100100",
  "101011111010",
  "001001010001",
  "111001000100",
  "010110111100",
  "010001001010",
  "011110010111",
  "000010010111",
  "110101100011",
  "101000111100",
  "011110110110",
  "011011011011",
  "100111001011",
  "111010000101",
  "101101010001",
  "100100011100",
  "111001010010",
  "111110111111",
  "000101011100",
  "111101111000",
  "001010000000",
  "110010000100",
  "101011100001",
  "001000101100",
  "100101010001",
  "101111000001",
  "001000110111",
  "100101010111",
  "100110101110",
  "000001111010",
  "100001100111",
  "101101000101",
  "100001010011",
  "011001111101",
  "101100000100",
  "100001111010",
  "101010110001",
  "011110101111",
  "101010010000",
  "001111111100",
  "111100110001",
  "111010110100",
  "010110110110",
  "000000001111",
  "000010001100",
  "001011010111",
  "111001111000",
  "011111111101",
  "110110101010",
  "100011111111",
  "000101011001",
  "101000101001",
  "000001100110",
  "000011000001",
  "010000010001",
  "000101101000",
  "100100101000",
  "000111011001",
  "001010111111",
  "001011001101",
  "100001011001",
  "100000110011",
  "111010101000",
  "100000001010",
  "111001101000",
  "011111001101",
  "111000010011",
  "001111110111",
  "100110001110",
  "000100100001",
  "111010000111",
  "100000101010",
  "001101101100",
  "011111101111",
  "010101000101",
  "111011100111",
  "000011110100",
  "001001100100",
  "000111001000",
  "100010000100",
  "010101101000",
  "111101010001",
  "101101011010",
  "000011111011",
  "111001010110",
  "101001001101",
  "100110100101",
  "011010101101",
  "111001001010",
  "000100100111",
  "010010001001",
  "001011110000",
  "101101101100",
  "000101101101",
  "000111100100",
  "110111110111",
  "111011100110",
  "001111100001",
  "001001100010",
  "000001110000",
  "101100101010",
  "001100110110",
  "011001110110",
  "010100110011",
  "111101101011",
  "000011101001",
  "111101100010",
  "001110001001",
  "101001100000",
  "111000010101",
  "001011101111",
  "111010100101",
  "011101001001",
  "101010000101",
  "110000100011",
  "001000110000",
  "111101101100",
  "001101010011",
  "101010110010",
  "010001101000",
  "101100100111",
  "000001111000",
  "111011010011",
  "000001111011",
  "101111000111",
  "100111011101",
  "100000100110",
  "001001101111",
  "000111110100",
  "100011110010",
  "010110000001",
  "101001111100",
  "001010001010",
  "001110101000",
  "101100111010",
  "110011111000",
  "101101010010",
  "010111001100",
  "111111010000",
  "011011111011",
  "110001110100",
  "011011101000",
  "100010011101",
  "110001011010",
  "010000001010",
  "101110000100",
  "001001011000",
  "001111101110",
  "100110001100",
  "000000011011",
  "101110001110",
  "100111000011",
  "010100000101",
  "000110100011",
  "110001010110",
  "000101111001",
  "001100010010",
  "000000110011",
  "110110010110",
  "011010110100",
  "000000001001",
  "111000101001",
  "110010000101",
  "001010001110",
  "110101110111",
  "010110001110",
  "111001001011",
  "111101101101",
  "111100101110",
  "000101100111",
  "000010110011",
  "001000110011",
  "110011010001",
  "101000010111",
  "101011010000",
  "111000100000",
  "101110000000",
  "010001110101",
  "111101011011",
  "000110111010",
  "001100011001",
  "111000010111",
  "110101101001",
  "010001010001",
  "011000110100",
  "001000011101",
  "010001000110",
  "010010000010",
  "110001001000",
  "000110100100",
  "010010011110",
  "110010101001",
  "110011111100",
  "001000010001",
  "110000000010",
  "100100001001",
  "010101000010",
  "010100111010",
  "011110000100",
  "110101001110",
  "000101111111",
  "001111101001",
  "010000111101",
  "101101010000",
  "010100111001",
  "010000111001",
  "011001111110",
  "101010001111",
  "101010111111",
  "001101111010",
  "001001011001",
  "001011101101",
  "000101001011",
  "001011111010",
  "111000111100",
  "010010010011",
  "110000010011",
  "110000110000",
  "010101100101",
  "001010001100",
  "100101010011",
  "101110101101",
  "101001111111",
  "101001010010",
  "000110010000",
  "000001011111",
  "001000001000",
  "110100101001",
  "101011101011",
  "100010010010",
  "110000000000",
  "001011000010",
  "010110011001",
  "001001001111",
  "000111010111",
  "100101100101",
  "111000101011",
  "011111011111",
  "100100101110",
  "100110101000",
  "000100111111",
  "110111001010",
  "110110011011",
  "110010101000",
  "011100000100",
  "110001111101",
  "101110111110",
  "001101100110",
  "011011110101",
  "000110011111",
  "100000001110",
  "110001010011",
  "101111011110",
  "001011010011",
  "110110000001",
  "100010101000",
  "111001010011",
  "110111110000",
  "110100010001",
  "010010011010",
  "001110110001",
  "110010111101",
  "000111110001",
  "010101100001",
  "001110000010",
  "000001101001",
  "000010100010",
  "010011011111",
  "100011010110",
  "010000000111",
  "100010101001",
  "111011010001",
  "011001101000",
  "000111110101",
  "100100110011",
  "101111110111",
  "011111110000",
  "000000100000",
  "010011011110",
  "010111011011",
  "100010011011",
  "010001011010",
  "101011011101",
  "001110010000",
  "100101101010",
  "111101000100",
  "101011011011",
  "000011110110",
  "011110000001",
  "000110101101",
  "000101110010",
  "100101111010",
  "001011001001",
  "111100001100",
  "001010011111",
  "111011110010",
  "101010111000",
  "101010101101",
  "101100001000",
  "011000001111",
  "011011111001",
  "010010111100",
  "011101101101",
  "011010111101",
  "110000010110",
  "000100101011",
  "110001100111",
  "000100111100",
  "000011101110",
  "111100000011",
  "111011000101",
  "010100001001",
  "000100101100",
  "010100000000",
  "100111110001",
  "010100110101",
  "100111001110",
  "010101010001",
  "011011010100",
  "100110001011",
  "010011011001",
  "011100001000",
  "111111001000",
  "001101111000",
  "110111010100",
  "001011100111",
  "010100100100",
  "100101100110",
  "101000110110",
  "101001011000",
  "101010001110",
  "101111001011",
  "010011001101",
  "011101111000",
  "100111100110",
  "010001001011",
  "010101100111",
  "011010010010",
  "100000100000",
  "100000000111",
  "010110010011",
  "110011101011",
  "100010111011",
  "100000101011",
  "001110100000",
  "111010111100",
  "111000010001",
  "010101100100",
  "011011000110",
  "010011101011",
  "100101001000",
  "100110111101",
  "110110010111",
  "000111001010",
  "011001111010",
  "000011111001",
  "010010100011",
  "011000011100",
  "011011100101",
  "110111010011",
  "001011011001",
  "110100010111",
  "101110110011",
  "010010100001",
  "111110000100",
  "001011001110",
  "111111000011",
  "101111010010",
  "011011111100",
  "111101110101",
  "000010110010",
  "000111000101",
  "100010001111",
  "111000111010",
  "101111111110",
  "011010100100",
  "110010010000",
  "110011111001",
  "111110001011",
  "010110000011",
  "001110101101",
  "001111010011",
  "001101010101",
  "111011100101",
  "011010101100",
  "011101111011",
  "011111110011",
  "101100110011",
  "100011001111",
  "001000011100",
  "110110110010",
  "001010110011",
  "101100100001",
  "001100100011",
  "000101001110",
  "000110111110",
  "010000110011",
  "101100110100",
  "011111000000",
  "100000000000",
  "100011010101",
  "110011110001",
  "101111100001",
  "101011111100",
  "101100110010",
  "111101011000",
  "101111101111",
  "011111110100",
  "101001001010",
  "111000110111",
  "011100111010",
  "000011010101",
  "011111111011",
  "000100110111",
  "011110001011",
  "001100001011",
  "010001101001",
  "110001111001",
  "000110010001",
  "001111011000",
  "110011110111",
  "001000001010",
  "011001110010",
  "010001010111",
  "001111101000",
  "100100001101",
  "011011001111",
  "101101111110",
  "111111010111",
  "000100000001",
  "011101011000",
  "000011100010",
  "011110100101",
  "100111111011",
  "011010110001",
  "010110100000",
  "111111111011",
  "101000011001",
  "001011110101",
  "110111100000",
  "010111011111",
  "001000010000",
  "111011111010",
  "011111010000",
  "101000000010",
  "001100001010",
  "111010010110",
  "001000000000",
  "001110110100",
  "100010110000",
  "010010101110",
  "010100010111",
  "110101011111",
  "110101101100",
  "000011010100",
  "000101000010",
  "100101000001",
  "110000110011",
  "010011101111",
  "011110100110",
  "100010110101",
  "001101000110",
  "111110100111",
  "100110111000",
  "001100110001",
  "111101111110",
  "110011000100",
  "101000110011",
  "011110010110",
  "001010110010",
  "110110101000",
  "111010111111",
  "010010010000",
  "011111101011",
  "100001111101",
  "001010110001",
  "111110110001",
  "010101010000",
  "000111001110",
  "000111110011",
  "100001000000",
  "011010111011",
  "101100011001",
  "000110011000",
  "011100110011",
  "001010011100",
  "011111011100",
  "010101110101",
  "011010100000",
  "011010111110",
];

let oxygen = input.slice();
let oxygenIndex = 0;
// const results = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

while (oxygen.length > 1) {
  let count = 0;
  oxygen.forEach((line) => {
    if (line[oxygenIndex] === "1") {
      count++;
    } else {
      count--;
    }
  });

  console.log(count);

  oxygen = oxygen.filter((o) => o[oxygenIndex] === (count >= 0 ? "1" : "0"));
  oxygenIndex++;
}

const oxygenValue = oxygen[0];
console.log(oxygenValue);

let co2 = input.slice();
let co2Index = 0;

while (co2.length > 1) {
  let count = 0;
  co2.forEach((line) => {
    if (line[co2Index] === "1") {
      count++;
    } else {
      count--;
    }
  });

  console.log(count);

  co2 = co2.filter((o) => o[co2Index] === (count < 0 ? "1" : "0"));
  co2Index++;
}

const co2Value = co2[0];
console.log(co2Value);

const binary2Dec = (str) => {
  let result = 0;
  str.split("").forEach((char, index) => {
    const binaryValue = Math.pow(2, 11 - index);
    if (char === "1") {
      result += binaryValue;
    }
  });
  return result;
};

const oxygenRating = binary2Dec(oxygenValue);
const co2Rating = binary2Dec(co2Value);

console.log(oxygenRating * co2Rating);
