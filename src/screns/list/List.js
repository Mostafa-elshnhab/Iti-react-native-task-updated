import React,{useState} from "react";
import { styles } from "./style";

import {
    Image,
    FlatList,
  } from 'react-native';

  export default function List(){
    const [images, setimages] = useState([
        require('../../../1.jpg'),
        require('../../../1.jpg'),
        require('../../../1.jpg'),
        require('../../../1.jpg'),
        require('../../../1.jpg'),
        require('../../../1.jpg'),
        require('../../../1.jpg'),
        require('../../../1.jpg'),
      ]);

      return(
        <FlatList
        horizontal={false} 
        showsHorizontalScrollIndicator={false} 
        data={images}
        renderItem={ ({ item, index }) => (
          <Image source={item} 
            key={index+1} 
            style={styles.img}
          />
        )}
      />
      );
  }