import React, { useState, useEffect } from 'react'
import axios from 'axios';
import firebase from 'firebase';

import './Products.css';
import Product from './Product/Product';


var firebaseConfig = {
    apiKey: "AIzaSyCphVyk4gHjdx_bucWtKV1jkBZchjCFyOU",
    authDomain: "monkey-products.firebaseapp.com",
    databaseURL: "https://monkey-products.firebaseio.com",
    projectId: "monkey-products",
    storageBucket: "monkey-products.appspot.com",
    messagingSenderId: "751599675087",
    appId: "1:751599675087:web:fcc95539f04bd9818cb9ba"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

var storageRef = firebase.storage().ref();

console.log(`${storageRef}photo.png`)

const Products = () => {
   const [images, setImages] = useState({});

    useEffect(() => {
        const importAll = (r) => {
            let imgs = {};
            r.keys().forEach( item => { imgs[item.replace('./', '')] = r(item); });
            return imgs;
        }
        let allImg = importAll(require.context('../../assets/img/products', true))
        
        setImages(allImg)

        axios.get('https://monkey-products.firebaseio.com/products.json')
        .then(responseData => {
            console.log("Réponse de axios " + responseData.data.photo.name)
        })
    }, [])

    var metadata = {
        contentType: 'image/png',
      };
    
    let gallery = Object.keys(images).map(image => {
    
       var file = images[image];
        // Create a reference to all images
        storageRef.child(images[image].default).put(file, metadata);
        var imagesRef = storageRef.child(images[image].default);
        let imageUrl;

        imagesRef.getDownloadURL().then(function(url){
            imageUrl = url;
       })
    

        return (<Product 
            key= {Math.random()}
            url={imagesRef.location.path} />)
    })

    return (
        <div className="category__products">
            <div className="product">
                <div className="product__container-img">
                    {gallery}
                </div>
            </div>
        </div>
    );
}

export default Products;