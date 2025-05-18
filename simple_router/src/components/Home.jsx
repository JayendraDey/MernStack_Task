import React from 'react'

import styles from './Home.module.css'
const Home = () => {
  return (
     <div className={styles.dashBord_mainContainer}>
          <div className={styles.leftdiv}>
            <div className={styles.left_img_div}>
              <img
                src="https://www.mediaservicepartner.de/wp-content/uploads/2022/08/1900pexels-splitshire-1528.jpg"
                alt=""
              />
            </div>
            <div className={styles.left_description}>
              <div className={styles.left_description_heading}>
                <h3>TITLE HEADING</h3>
              </div>
              <div className={styles.left_description_paragraph}>
                <p>Title description, May 17, 2025</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ea
                  nisi officia beatae, deserunt asperiores dicta quam quisquam ipsa
                  vitae quod ullam unde earum. Temporibus, exercitationem, ipsam
                  dolor hic ad architecto placeat excepturi laborum officia optio
                  perspiciatis, earum nam vel?
                </p>
              </div>
             
            </div>
          </div>
          <div className={styles.rightdiv}>
            <div className={styles.rightdiv_1}>
              <div className={styles.rightdiv_1_img}>
                <img
                  src="https://image.shutterstock.com/image-illustration/engineering-designer-design-3d-cad-260nw-2153824189.jpg"
                  alt=""
                />
              </div>
              <div className={styles.rightdiv_1_description}>
                <h2>My Name</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
                  aperiam velit, in eligendi dolore iu Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Nostrum, unde molestiae? Laborum
                  libero, culpa facere quaerat consequuntur eaque asperiores
                  corrupti? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sequi, perspiciatis!
                </p>
              </div>
            </div>
          </div>
        </div>

    
  )
}

export default Home