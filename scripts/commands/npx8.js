const fs = require("fs");
module.exports = {
  config:{
	name: "npx8",
        version: "1.0.1",
        prefix: false,
	permssion: 0,
	credits: "𝐀𝐒𝐈𝐅", 
	description: "Fun",
	category: "no prefix",
	usages: "",
        cooldowns: 5, 
},

handleEvent: function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
  const content = event.body ? event.body : '';
  const body = content.toLowerCase();
	if (body.indexOf(" ")==0 || body.indexOf("🕵️‍♀️")==0 || body.indexOf("😋")==0 || body.indexOf(" ")==0) {
		var msg = {
				body: "বাবু খাইছো___//🤗🙈😩",
				attachment: fs.createReadStream(__dirname + `/𝐀𝐒𝐈𝐅/babukaiso.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😩", event.messageID, (err) => {}, true)
		}
	},
	start: function({ nayan }) {

  }
}
