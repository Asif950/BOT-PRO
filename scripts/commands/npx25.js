const fs = require("fs");
module.exports = {
  config:{
	name: "npx25",
        version: "1.0.1",
        prefix: false,
	permssion: 0,
	credits: "Raj", 
	description: "Fun",
	category: "no prefix",
	usages: "",
        cooldowns: 5, 
},

handleEvent: function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
  const content = event.body ? event.body : '';
  const body = content.toLowerCase();
	if (body.indexOf(" ")==0 || body.indexOf("🕵️‍♀️")==0 || body.indexOf("😅")==0 || body.indexOf(" ")==0) {
		var msg = {
				body: "-কারো মনে জায়গা পাই আর না পাই -!!🙂🥀কবরস্থানে একদিন ঠিকই জায়গা হয়ে যাবে ইনশাআল্লাহ্ ❞!🥲😔",
				attachment: fs.createReadStream(__dirname + `/Nayan/nazrul3.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🫠", event.messageID, (err) => {}, true)
		}
	},
	start: function({ nayan }) {

  }
      }
