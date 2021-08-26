const sound = {
    id: 'beep',
    src: "https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav",
}

const soundClipReducer = (state = sound, action) => {
    switch (action.type) {
        case 'PAUSE_SOUND':
            return;
        default:
            return state;
    }
}
export default soundClipReducer;