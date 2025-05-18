import React from "react";

import styles from "./dashBord.module.css";
export const DashBord = () => {
  return (
    <div className={styles.dashBord_mainContainer}>
      <div className={styles.leftdiv}>
        <div className={styles.left_img_div}>
          <img
            src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/india-globe-3d-render-planet-earth-dof-frank-ramspott.jpg"
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
          <div className={styles.left_description_btn}>
            <button>Read more</button>
            <button>comments 0</button>
          </div>
        </div>
      </div>
      <div className={styles.rightdiv}>
        <div className={styles.rightdiv_1}>
          <div className={styles.rightdiv_1_img}>
            <img
              src="https://th.bing.com/th/id/OIP.X-OS9N5Z0jr9jc9aBOpiPgAAAA?rs=1&pid=ImgDetMain"
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
        <div className={styles.rightdiv_2}>
          <p>Populer post</p>
          <div className={styles.rightdiv_2_comments}>
            <img src="https://th.bing.com/th/id/OIP.TjBNXWlIeS008Y7zpTr31gHaE8?rs=1&pid=ImgDetMain" alt="" />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi?
            </p>
          </div>
          <div className={styles.rightdiv_2_comments}>
            <img src="https://images.pexels.com/photos/6772668/pexels-photo-6772668.jpeg?cs=srgb&dl=pexels-gaspar-zaldo-6772668.jpg&fm=jpg" alt="" />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi?
            </p>
          </div>
            <div className={styles.rightdiv_2_comments}>
            <img src="https://techbreak.com.br/wp-content/uploads/2023/10/bing-image-creator-2-min.jpg" alt="" />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
