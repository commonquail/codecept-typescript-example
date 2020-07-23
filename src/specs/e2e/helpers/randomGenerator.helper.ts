class RandomGeneratorHelper extends Helper {
  public async generateRandomString(len: number, alphabet?: string) {
    alphabet = alphabet || "0123456789";
    let randomString = "";
    for (let i = 0; i < len; i++) {
      const randomPoz = Math.floor(Math.random() * alphabet.length);
      randomString += alphabet.substring(randomPoz, randomPoz + 1);
    }
    return randomString;
  }
}

module.exports = RandomGeneratorHelper;
