module.exports.config = {
	name: "leave",
	eventType: ["log:unsubscribe"],
	version: "1.0.0",
	credits: "𝐀𝐒𝐈𝐅",
	description: "notify leave.",
};

module.exports.run = async function({ api, event, Users, Threads }) {
	if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
	const { createReadStream, existsSync, mkdirSync } = global.nodemodule["fs-extra"];
	const { join } =  global.nodemodule["path"];
	const { threadID } = event;
	const data = global.data.threadData.get(parseInt(threadID)) || (await Threads.getData(threadID)).data;
	const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
	const type = (event.author == event.logMessageData.leftParticipantFbId) ? "কই যাস বলদ দেক তোরে আবার এড দিছি 😂,  :(" : "ইস বাল পাকনামির কারণে কিক খাইলো 🤧🤖.";
	const path = join(__dirname, "nayan", "leaveGif");
	const gifPath = join(path, `l.gif`);
	var msg, formPush

	if (existsSync(path)) mkdirSync(path, { recursive: true });

	(typeof data.customLeave == "undefined") ? msg = "ইস {name} তোর কতো বড় সাহস আমি 𝐀𝐒𝐈𝐅 bot থাকতে তুই লিফট নিবি? থাপ্পর চিনো তুই☹️😡 🥱দারা তোরে আবার এট দিবো 🤨 🤖. .\n\n{type} " : msg = data.customLeave;
	msg = msg.replace(/\{name}/g, name).replace(/\{type}/g, type);

	if (existsSync(gifPath)) formPush = { body: msg, attachment: createReadStream(gifPath) }
	else formPush = { body: msg }
	
	return api.sendMessage(formPush, threadID);
}
