var Original_JZZ_MIDI_SMF = JZZ.MIDI.SMF;
JZZ.MIDI.SMF = function(Midi_File){
	var Midi_File_Name = document.title.replace(" MIDI 音乐下载试听 :: MidiShow","") + ".mid"
	var Midi_File_Binary_Array = new Uint8Array(Midi_File.length);
	for (var Binary_Pointer = 0; Binary_Pointer < Midi_File.length ; Binary_Pointer++) { 
		Midi_File_Binary_Array[Binary_Pointer] = Midi_File.charCodeAt(Binary_Pointer);
	}
	var Midi_File_Blob = new Blob([Midi_File_Binary_Array],{type:''});
	var Midi_File_Url = URL.createObjectURL(Midi_File_Blob);
	var Midi_Downloader = document.createElement("a");
	Midi_Downloader.setAttribute("href",Midi_File_Url);
	Midi_Downloader.setAttribute("download",Midi_File_Name);
	Midi_Downloader.setAttribute("target","_blank");
	let Click_Event = document.createEvent("MouseEvents");
	Click_Event.initEvent("click",true,true);	
	Midi_Downloader.dispatchEvent(Click_Event);
	return Original_JZZ_MIDI_SMF(Midi_File);
}