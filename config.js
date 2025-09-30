const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "SHABAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUxQcU9rWW1SRmR3L1dwRys2R3RhNWxjTUZad3dFS3NwbXpjWWlVUmdVYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWisvcFU4RTBaRUpOTkVqdGVhWVN5ajFubWtPajd5KzVrUktQN3pEWUN5bz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrUDdrNmpycG9FbVoyNjlVYW1tUm5qWlVZTkd5dnZ1MGxGL0tTcWVsbTNRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI3MU5tRkw4YnZ0RE5DenZwQ3Z1TTdxRmJiOUppNGQ3bVNvZmNqMFlpWXc0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVMd25hdVBlNHRCMGcwSmJ6ZVhNQ05nTnUvc3kvSXZtdTZmSTJzZ0krSHM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllLYTRWRE9OK2o0Uk5DeCtsSyt2cDdOZkVQMVpzUzhKd202SHRjcUFtaWc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUs2RkxRQjg1V0lqUDNMbHBrclVzTk5WblF4VTNxbTlVQk9oQk1nUFpuZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWm5lazBseTVkZCtqTXZkVUNlWEMzM0hDRHBiY2dsd1hmUnRDN21pU1h5az0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkN0cTdzMFpTaEw5eGdnRWEycWEyeWJ2dEhqbjBwd3lQc3FHa28rWnB3dW5HeW9mK0xQYld5dnErdlV4TFRmTVQ2OVJ6c2x2NU0vNXQ0SWF5WXpDTUJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzAsImFkdlNlY3JldEtleSI6ImUveXJPWnE4b1ZUNy9BemlZNlNDN0tlRzRFd05BMXM5V2hpQW05TkRlMFE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IkZCREdMNlJHIiwibWUiOnsiaWQiOiI5MjMxOTE3NzY3NDQ6MjhAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiaGFzaGltIEFiYmFzIiwibGlkIjoiMjIwNDA5NjAxNDk1MTIzOjI4QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTWJpcCtBQ0VNYnQ2Y1lHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiV25GQW9DQUZZSE1Wb29nVEFvM1RwdHRSYlIvemtTdGgraGltU0RYcit5OD0iLCJhY2NvdW50U2lnbmF0dXJlIjoibHY3ZjhQNU5aS0k5aU9WeG54Wm15eTY3Y2NYbmNvR0o1U2l4OU00NHJub04xM0VJbUlPaUxwTUpiMkdPbjhoZFoxd09oVUNJN2NEVkExYVBUdjMxQUE9PSIsImRldmljZVNpZ25hdHVyZSI6IkxlRUQ3Uk0vYnM1RTVZWW8rSUVyMmhmbDdTU2xja3NPRndtZ2NrU3dCcmZFbms2SGxTQk5jdWdTcEhtNGZmT3JaY2VPNUkyV3dYNW8xc1JuZzFwU0RBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMTkxNzc2NzQ0OjI4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlZweFFLQWdCV0J6RmFLSUV3S04wNmJiVVcwZjg1RXJZZm9ZcGtnMTYvc3YifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBZ0lCUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1OTE0NzcyMiwibGFzdFByb3BIYXNoIjoiUFdrNUIifQ==",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SᴇᴇN YᴏᴜʀE SᴛᴀᴛᴜS JᴜsT NᴏW Sʜᴀʙᴀɴ-Mᴅ 𓅓*",
// set the auto reply massage on status reply
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group  
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/l7z5sh.jpg",
// add custom menu and mention reply image url   
BOT_NAME: process.env.BOT_NAME || "HASHUM x HACKER-MD V5",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "HASHIM_X_HACKER-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself  
OWNER_NUMBER: process.env.OWNER_NUMBER || "923191776744",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "MR-SHABAN",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© HASHIM x HACKER-MD*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://ik.imagekit.io/mrshaban/Picsart_25-02-01_22-47-44-239.jpg",
// add img for alive msg 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups  
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923191776744",
//replace with your whatsapp number        
ANTI_CALL: process.env.ANTI_CALL || "false",
REJECT_MSG: process.env.REJECT_MSG || "*_SOORY MY BOSS IS BUSY PLEASE DONT CALL ME_*",
ANTI_DELETE: process.env.ANTI_DELETE || "false",
// set true false for anti delete
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
