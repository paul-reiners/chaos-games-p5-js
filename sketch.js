function setup() {
  createCanvas(600, 600);

  textAlign(CENTER);
  background(200);
  sel = createSelect();
  sel.position(10, 10);
  sel.option('Sierpiński triangle');
  sel.option('Twin dragon');
  sel.option('Sierpiński hexagon');
  sel.selected('Sierpiński triangle');
  sel.changed(mySelectEvent);
  let s = 'Programmed by Paul Reiners';
  text(s, 10, 540, 280, 80);
}

var attractors = get_sierpinski_triangle_attractors();
var y_offset = 0.5;

function mySelectEvent() {
  let item = sel.value();
  background(200);
  if (item === 'Sierpiński triangle') {
    attractors = get_sierpinski_triangle_attractors();
    y_offset = 0.5;
  } else if (item === 'Sierpiński hexagon') {
    attractors = get_sierpinski_hexagon_attractors();
    y_offset = 1.0;
  } else {
    y_offset = 1.0;
  }
}

function draw() {
  stroke['black']
  let s = 'Programmed by Paul Reiners';
  text(s, 10, 540, 280, 80);
    n = 1000;
    let item = sel.value();
    if (item === 'Twin dragon') {
      x = d_0

      for (i = 0; i < n; i++) {
        r = Math.random()
        if (r < 0.5) {
              x = w_1(x)
        } else {
              x = w_2(x)
        }
        p_x = Math.round(200 * (x[0] + 1.0))
        p_y = Math.round(200 * (x[1] + y_offset))
        stroke('purple');
        point(p_x, p_y);
      }
    } else {
      result = ifsp(attractors, n);
      for (i = 0; i < result.length; i++) {
        p = result[i]
        x = Math.round(200 * (p['x'] + 1.0))
        y = Math.round(200 * (p['y'] + y_offset))
        stroke(p['color']);
        point(x, y);
    }
  }
}
