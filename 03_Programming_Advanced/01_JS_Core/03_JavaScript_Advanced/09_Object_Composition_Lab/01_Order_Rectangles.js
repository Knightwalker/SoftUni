// let rectangleList = [];
function OrderRectangles(inputNestedArr) {

  class Rectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }

    area() {
      return this.width * this.height;
    }

    compareTo(other) {
      return other.area() - this.area() || other.width - this.width;
    }
  }

  let rectangleList = [];
  for (let i = 0; i < inputNestedArr.length; i++) {
    let currentRectangle = inputNestedArr[i];
    let width = currentRectangle[0];
    let height = currentRectangle[1];

    let rectangle = new Rectangle(width, height);
    rectangleList.push(rectangle);
  }

  // sort
  rectangleList.sort(function(a, b){
    let a_rect_area = a.area();
    let b_rect_area = b.area();
    
    if (a_rect_area < b_rect_area) {
      return 1;
    } else if (a_rect_area > b_rect_area) {
      return -1;
    } else {
      let a_rect_width = a.width;
      let b_rect_width = b.width;
      if (a_rect_width < b_rect_width) {
        return 1;
      } else if (a_rect_width > b_rect_width) {
        return -1;
      }
    }
  });

  return rectangleList;
}