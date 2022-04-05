function setup() {
  createCanvas(600, 600);

  textAlign(CENTER);
  background(200);
  sel = createSelect();
  sel.position(10, 10);
  sel.option('Sierpiński triangle');
  sel.option('Twin dragon');
  sel.option('Sierpiński hexagon');
  sel.option('Sierpiński pentagon');
  sel.option('Sierpiński carpet');
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
    y_offset = 1.1;
  } else if (item === 'Sierpiński pentagon') {
    attractors = get_sierpinski_pentagon_attractors();
    y_offset = 1.0;
  } else if (item === 'Sierpiński carpet') {
    attractors = get_sierpinski_carpet_attractors();
  } else {
    y_offset = 1.0;
  }
  let s = 'Programmed by Paul Reiners';
  stroke('black');
  text(s, 10, 540, 280, 80);
}

function draw() {
    n = 1000;
    let item = sel.value();
    if (item === 'Twin dragon') {
      x = d_0

      for (i = 0; i < n; i++) {
        r = Math.random()
        color = '';
        if (r < 0.5) {
              x = w_1(x)
              color = 'red'
        } else {
              x = w_2(x)
              color = 'blue'
        }
        p_x = Math.round(200 * (x[0] + 1.0))
        p_y = Math.round(200 * (x[1] + y_offset))
        stroke(color);
        point(p_x, p_y);
      }
    } else if (item === 'Sierpiński carpet') {
      result = get_sierpinski_carpet_attractors(n);
      for (i = 0; i < result.length; i++) {
        p = result[i]
        x = p['x']
        y = p['y']
        x = Math.round(x + 300)
        y = Math.round(y + 300)
        stroke(p['color']);
        point(x, y);
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
