import React from 'react';
// your ImageSlider code here!

class ImageSlider extends React.Component {
    constructor() {
        super()
        this.state = {
            currentSlideIndex: 0
        }
      }

    render(){
        return `I am on slide ${this.state.currentSlideIndex}`
    }
}

export default ImageSlider