import React from 'react';
import Accordian from  "./components/accordian";
import ImageSlider from './components/image-slider';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';
import LoadMoreData from './components/load-more-data';
import TreeView from './components/tree-view';
import menu from './components/tree-view/data';
import QRCodeGenerator from './components/qr-code-generator';
import LightDarkMode from './components/light-dark-mode';
import ScrollIndicator from './components/scroll-indicator';
import TabTest from './components/custom-tabs/tab-test';
import ModalTest from './components/custom-modal-popup/modal-test';
import Guthubprofilefinder from './components/github-profile-finder';
import SearchAutocomplete from './components/search-autocomplete-with-api';

function App() {
  return (
    <div>
       <Accordian/>
      {/* // <RandomColor/>
      // <StarRating noOfStars = {10}/> */}
      {/* <ImageSlider   url={"https://picsum.photos/v2/list"}
      //   page={"1"}
      //   limit={"5"}/> */}
       {/* Load more products component */}
       {/* <LoadMoreData/> 
       <TreeView menu={menu}/>
       <QRCodeGenerator/>
       <LightDarkMode/> */} 
       {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"}/>  */}
       {/* <TabTest/>
       <ModalTest/> */}
       {/* <Guthubprofilefinder/> */}
       {/* <SearchAutocomplete/> */}
    </div>
  )
}

export default App
