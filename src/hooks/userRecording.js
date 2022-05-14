import {useState , useEffect } from 'react'
import { startRecording, saveRecording } from "../handlers/recorder-controls";

//state of the voice recording 
/**recordingMinutes and recordingSeconds are use to show 
 * the recording time and initRecording initializates the recorder. 
mediaStream  - media device provide by mediaDevices.getUserMedia() and 
mediaRecorder -  the instance of MediaRecorder (A Built-In class to use for audio recording) 
audio -  URL mentioned previously. */
const initialState = {
    recordingMinutes : 0,
    recordingSeconds : 0,
    initRecordings: false,
    mediaStram : null , 
    mediaRecorder: null ,
    audio: null 
}
const useRecording = ()=>{

}
export default useRecording;