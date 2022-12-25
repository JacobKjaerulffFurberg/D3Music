class ToneManager {
    constructor() {

        this.synth = new Tone.PolySynth({}, Tone.Synth, {
            oscillator : {
                volume: 5,
                count: 3,
                spread: 40,
                type : "fatsawtooth"
              }
            
          })
        this.synth.set({
            envelope: {
              release: 0.2
          }
        });

          this.synth.maxPolyphony = 7;

          const player = this.synth;
          player.autostart = true;
          const filter = new Tone.AutoFilter(1).start();
const distortion = new Tone.Distortion(0);
// connect the player to the filter, distortion and then to the master output
player.chain(filter, distortion, Tone.Destination);
    }
}