// BEGIN
function Point(x, y) {
    this.x = x;
    this.y = y;

    this.getX = function() {
      return this.x;
    };

    this.getY = function() {
      return this.y;
    };
  }

function Segment(beginPoint, endPoint) {
    this.beginPoint = beginPoint;
    this.endPoint = endPoint;

    this.getBeginPoint = function() {
      return this.beginPoint;
    };

    this.getEndPoint = function() {
      return this.endPoint;
    };
  }

function reverse(segment) {
    const newBeginPoint = new Point(segment.getEndPoint().getX(), segment.getEndPoint().getY());
    const newEndPoint = new Point(segment.getBeginPoint().getX(), segment.getBeginPoint().getY());

    return new Segment(newBeginPoint, newEndPoint);
  }
  export {Point, Segment, reverse};
// END
