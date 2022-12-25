

class CircleManager {
  constructor (g, toneManager) {
    this.circles = [new Circle(200, 200)]
    this.g = g;
    this.toneManager = toneManager;
    this.chord = ['A4', 'C4', 'E4', 'G5']
  }

  draw () {

    console.log(this.circles)

    this.circles = this.g
      .selectAll('.circle')
      .data(this.circles, d => d.id)
      .join(
        enter => {
          enter
          // all static stuff, not needed to be updated
            .append('circle')
            .attr('r', 50)
            .attr('cx', d => d.x)
            .attr('cy', d => d.y)
            .attr('class', 'circle')
            .style('fill', 'pink')
            .on('mousedown', d => this.clicked(d))
            .on("mouseup", d => this.released(d));
        }

        , update => {
          update
        }

        , exit => exit
          .remove()

      )
  }

  clicked(event) {
    this.chord.forEach((note) => {
      this.toneManager.synth.triggerAttack(note)
    });
    // this.toneManager.synth.triggerAttackRelease('C4', '8n')
  }
  released(event) {
    this.chord.forEach((note) => {
      console.log(note)
      this.toneManager.synth.triggerRelease(note)
    });
    // this.toneManager.synth.triggerAttackRelease('C4', '8n')
  }
}


