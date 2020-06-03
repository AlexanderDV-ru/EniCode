//--- Name: EniCode/Vesion: 0.0.1a/Authors: AlexanderDV/Description: Main EniCode .js. ---
var programInfo={
	Name : "EniCode",
	Version : "0.0.1a",
	Authors : "AlexanderDV"
}
programInfo.Title= programInfo.Name + " v" + programInfo.Version + " by " + programInfo.Authors
document.title=programInfo.Title
// End of standard initialization ---
var model=`
	vector
		length
			drob
			cel
		dir
			axes
					sign	+|-
					axis	[name]
	path	vector...
		length	summ(...all.length)
		summary	summ(...all)
			length
			dir

`
