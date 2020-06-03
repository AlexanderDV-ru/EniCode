/*--- Name: EniCode/Vesion: 0.0.2a/Authors: AlexanderDV/Description: Properties EniCode .js. ---*/
//Properties
var props	=	{}
props.syntax	=	{
	offset_	:	"\t",
	newLine_	:	"\n",
	ekran_	:	"\\",

	to_	:	"~",
	of_	:	".",
	in_	:	"/",
	at_	:	":",

	quotes_	:	"\"",
	regexp_	:	"/",
	regexps	:	{
		flags	:	{
			global	:	"g",
			multiline	:	"m",
			ignoreCase	:	"i"
		},
	},

	multiline	:	{
		start	:	"(",
		end	:	")",
	},
	type	:	{
		start	:	"<",
		end	:	">",
	},
	set	:	{
		start	:	"{",
		end	:	"}"
	},
	index	:	{
		start	:	"[",
		end	:	"]"
	},

	operators	:	{
		incr	:	"++",
		decr	:	"--",
		power	:	"**",
		mult	:	"*",
		plus	:	"+",
		minus	:	"-",
		concat	:	"^",
		divide	:	"/",
		inverse	:	"`",
	},

	enumeration	: ",",

	froms	:	{
		def	:	"",
		comment	:	"#",
		classificationonal	:	"%",
		link	:	"@",
		question	:	"?"
	}
}
props.colors	=	{
	froms	:	{
		def	:	"black",
		comment	:	"green",
		classificationonal	:	"blue",
		link	:	"red",
		question	:	"yellow"
	}
}
props.msgs	=	{
	"ru-RU"	:	{
	},
	"en-US"	:	{
	},
}

// Universal local storage initialization
var storage = window.localStorage
function storageValue(key,val)
{
	var vals
	try {
	vals= JSON.parse(storage[programInfo.name])
	} catch (e) {

	}
	if(!=vals)
		vals={}
	if(arguments.length>=2)
		vals[key]=val
	storage[programInfo.name]=JSON.stringify(vals)
	return vals[key]
}

// Messages language initialization by default value
var messagesLanguage='ru-RU'
// Function for getting message by key
var getMsg=function(key, lang){
	return props.msgs[lang||messagesLanguage][key]
}
