import React from 'react';
import Carousel from 'nuka-carousel';
import Favorite from './../Favorite';
import UploadForm from '../UploadForm';


class MyDesigns extends React.Component {
  constructor (props) {
    super (props);
  }
  
  render() {
    return (
      <div>  
        <h2>My Designs</h2>
        
          <div className="image_grid">  
            <Carousel slidesToShow={3} decorators={Carousel.getDefaultProps().decorators.slice(0, 2)}>
            {this.props.myDesigns.map ((images, i) => <Favorite addToProfileFavorites={this.props.addToProfileFavorites} typeOfImage='design' i={i} images={images}/> )}
            </Carousel>
            {loggedInUser.id === this.props.viewedUser ? (
              <UploadForm image_type="design" />
            )
            :
            null}
          </div>
      </div>
    );
  }
}

export default MyDesigns;