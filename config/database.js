module.exports = ({ env }) => ({
  "defaultConnection": "default",
  "connections": {
    "default": {
      "connector": "mongoose",
      "settings": {
        "uri": "mongodb+srv://huyensim:75nchxjvpsz2lirp@cluster0.iv1uy.mongodb.net/db"
      },
      "options": {
        "ssl": true
      }
    }
  }
});
