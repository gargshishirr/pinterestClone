import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
      <img
  src="https://camo.githubusercontent.com/5046cb083418fd1922b7f5990e594c3bb06f5d87e5516cd8839ae0aa48b3aec4/68747470733a2f2f696d616765732e73717561726573706163652d63646e2e636f6d2f636f6e74656e742f76312f3537363966633430316236333162616231616464623261622f313534313538303631313632342d5445363451474b524a4738535741495553374e532f6b6531375a77644742546f6464493870446d34386b506f73776c7a6a53564d4d2d53784f703743563539425a772d7a505067646e346a557756634a45315a7657515578776b6d794578676c4e714770304976544a5a616d574c49327a76595748384b332d735f3479737a63703272795449304871544f6161556f68724938504936465879386339505774426c7141566c555335697a7064634958445a71445976707252715a32395077306f2f636f64696e672d667265616b2e676966"
  alt="Me sitting with a laptop"
  className={styles.aboutImage}
/>


        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I have used frontend techstack such as HTML, CSS, JS, Bootsrap
                and ReactJS. I have also made some frontend projects such as a
                Pathfinder Visualiser, Medical Records, Pinterest Clone etc.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                For backend I use tech stack of Express, NodeJS, ad MonogDB. I
                have also done authorisation using Passport JS and JWT.
                I have also worked in Devops and used Docker, Shell Commands, Secure Shell (SSH), Power BI and REST API's.
              </p>
            </div>
          </li>
          {/* <li className={styles.aboutItem}>
                <img src={getImageUrl("about/uiIcon.png")} alt="ui icon" />
                <div className={styles.aboutItemText}>
                    <h3>UI Designer</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim fuga consequuntur atque cumque rem, laboriosam nulla. Hic iste consectetur ratione, accusantium et neque!</p>
                </div>
            </li> */}
        </ul>
      </div>
    </section>
  );
};
