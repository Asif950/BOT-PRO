const fs = require("fs");
module.exports = {
  config:{
	name: "npx4",
        version: "1.0.1",
        prefix: false,
	permssion: 0,
	credits: "Fahim", 
	description: "Fun",
	category: "no prefix",
	usages: "",
        cooldowns: 5, 
},

handleEvent: function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
  const content = event.body ? event.body : '';
  const body = content.toLowerCase();
	if (body.indexOf(" ")==0 || body.indexOf("🕵️‍♀️")==0 || body.indexOf("🙄")==0 || body.indexOf(" ")==0) {
		var msg = {
				body: "ও্ঁই্ঁ বে্ঁটা্ উ্ঁপ্ঁরে্ঁ কি্ঁ দে্ঁখ্ঁস্ঁ আ্ঁমি্ঁ এ্ঁই্ঁ দি্ঁকে্ঁ 😚🌺",
				attachment: fs.createReadStream(__dirname + `/Nayan/upray.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("👀", event.messageID, (err) => {}, true)
		}
	},
	start: function({ nayan }) {

  }
    }