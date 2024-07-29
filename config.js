const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,94779673525";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_03_14_07_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNyxcbiAgICAgICAgMTYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIwLFxuICAgICAgICAyNDksXG4gICAgICAgIDksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDMyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDc3LFxuICAgICAgICAzMyxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDg3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjMxLFxuICAgICAgICA3LFxuICAgICAgICA3NSxcbiAgICAgICAgNyxcbiAgICAgICAgMTcsXG4gICAgICAgIDQ2LFxuICAgICAgICA0MCxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTgsXG4gICAgICAgIDkxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTkwLFxuICAgICAgICA5NSxcbiAgICAgICAgMTg4LFxuICAgICAgICA2OSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMzksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTcxLFxuICAgICAgICA4OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgODUsXG4gICAgICAgIDI0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNjgsXG4gICAgICAgIDY0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjIyLFxuICAgICAgICA0NCxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgODcsXG4gICAgICAgIDg3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE4LFxuICAgICAgICAxNzksXG4gICAgICAgIDg2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTYxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDkwLFxuICAgICAgICA2NixcbiAgICAgICAgOTcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMzQsXG4gICAgICAgIDU1LFxuICAgICAgICAxODQsXG4gICAgICAgIDE4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDgzLFxuICAgICAgICA4MCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDg1LFxuICAgICAgICA4NSxcbiAgICAgICAgMjA5LFxuICAgICAgICA1NSxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNzYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjIyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMjI2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTkyLFxuICAgICAgICAyLFxuICAgICAgICAzNixcbiAgICAgICAgNTMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjIwLFxuICAgICAgICAzOSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNCxcbiAgICAgICAgNjIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgODMsXG4gICAgICAgIDI0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDY4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NixcbiAgICAgICAgMTY3LFxuICAgICAgICA0LFxuICAgICAgICA1NCxcbiAgICAgICAgNDUsXG4gICAgICAgIDkxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMzcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDM5LFxuICAgICAgICA0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNixcbiAgICAgICAgMjAxLFxuICAgICAgICAxODksXG4gICAgICAgIDE5MSxcbiAgICAgICAgNzgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjEzLFxuICAgICAgICA0OCxcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDkxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTczLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTA3LFxuICAgICAgICA1LFxuICAgICAgICAyMDksXG4gICAgICAgIDExMixcbiAgICAgICAgMjIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTE2LFxuICAgICAgICA0NixcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDQzLFxuICAgICAgICA3MCxcbiAgICAgICAgMjM2LFxuICAgICAgICA0LFxuICAgICAgICA3LFxuICAgICAgICAxODAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjQxLFxuICAgICAgICA3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDMwLFxuICAgICAgICA3MixcbiAgICAgICAgNDIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTA1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjAsXG4gICAgICAgIDc3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDQ4LFxuICAgICAgICA3MCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA2MyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxODAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTI4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMjIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwieUsvdkc5WG8rV0dldmgyTTFpTTBjSzJ0cG9Jb2xYZTV3V1FTbGYyVHFpST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiVFNpNDZRUlJRUW0xaWlvbkxtVmxHd1wiLFxuICBcInBob25lSWRcIjogXCI5MjgwNWQyNi0zNzNhLTQ2ODUtYTk4MC0yZjg5OGNhMDNmNGZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDgsXG4gICAgICAyMDMsXG4gICAgICAxOTMsXG4gICAgICAyMTAsXG4gICAgICAzMSxcbiAgICAgIDc1LFxuICAgICAgMTgzLFxuICAgICAgNDYsXG4gICAgICA2NixcbiAgICAgIDI0LFxuICAgICAgMTkxLFxuICAgICAgMjQ3LFxuICAgICAgMjUxLFxuICAgICAgMjQyLFxuICAgICAgMjA3LFxuICAgICAgMjQ3LFxuICAgICAgMjQwLFxuICAgICAgNzYsXG4gICAgICA0MyxcbiAgICAgIDE0N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTksXG4gICAgICA4OCxcbiAgICAgIDE1NixcbiAgICAgIDI1MixcbiAgICAgIDEzNCxcbiAgICAgIDE1NSxcbiAgICAgIDU5LFxuICAgICAgMTk0LFxuICAgICAgODEsXG4gICAgICAyMjUsXG4gICAgICAxMzcsXG4gICAgICAyOSxcbiAgICAgIDE4LFxuICAgICAgMTY0LFxuICAgICAgMjA2LFxuICAgICAgNzAsXG4gICAgICAxMDMsXG4gICAgICAyMTYsXG4gICAgICA3NCxcbiAgICAgIDM5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkdONlNER1lXXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc0MTY5ODY1MzoyN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIuGfmvCdkI7wnZCL8J2QgyDwnZCK8J2QiPCdkI3wnZCGIPCdkILMuMqc4bSA4bSLyo8g8J2Qgcy44bSH4bSAy4PLg8uDXCIsXG4gICAgXCJsaWRcIjogXCIxNzIxNTU3MTEwMjUzNDE6MjdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTG5BeWJVREVQNlJuTFVHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJSNmhpZ3BNSFgxZC9sMEFpU3FCc0tER0c5cGw2YTBIR3YySDRnMHQvR3lzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImhqWVpqK1U3dFl1QjBWblBoYk81TVdUdG1ZaGpRSmJHb29TN1FlbGExd25rb0pvN1FzYlRjdWFlVS9KdjJtTE9SdGdoUXBQb1R5WkduK3VrMWJHQUJBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIktwUkRGZmFGcGpzVVhBdndaakhtc1B4bjJCN3RTNVk5M1RUOG5wKzFoN3JodFd0dWJwZFplMHZNQnFOa2ZhQUZ1Y01XYXRMRHhwQlpJUkVPMDAyY2pRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzQxNjk4NjUzOjI3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDQzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjIyMjI4NTVcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "CHAKY",
  packname: process.env.PACK_NAME || "CHAKY",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
