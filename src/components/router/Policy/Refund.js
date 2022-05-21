import React from "react";
import CommonBgUI from "../commonBg/CommonBgUI";
import allcommonBg from "../commonBg/allCommonBg";


const Terms = () => {
  return (
    <div className="contactus">
      <div className="main_banner"></div>
      <CommonBgUI
        bgImg={allcommonBg[7].bgImg}
        bgTitle={allcommonBg[7].bg_title}
      />
      <div className="container mb-5">
        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet turpis et nulla tempus, quis iaculis odio malesuada. Proin nec commodo quam, vel suscipit lorem. In rutrum eleifend eros, at consectetur felis mollis ac. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In at mollis nulla. Nam iaculis, turpis ac pretium eleifend, nisi magna suscipit velit, eu efficitur urna nisi non leo. Mauris porta sollicitudin diam nec lacinia. Quisque condimentum leo sit amet rutrum vehicula.</p>
        <h4>Praesent vitae tellus vehicula, faucibus ante vulputate, aliquam nibh.</h4>
        <p>Proin nunc quam, ornare quis quam et, euismod fermentum ex. Fusce in tortor eget felis sodales gravida. Curabitur et consequat risus. Proin in risus sagittis, cursus quam et, ultricies nulla. Quisque ut nunc urna. Donec maximus elit at convallis feugiat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse odio augue, ultricies non euismod condimentum, consectetur ac lorem. Duis non nibh tristique, viverra metus ut, interdum nisl. Integer fringilla ex libero, non laoreet odio consequat a. In posuere scelerisque erat, in euismod risus malesuada a. Aenean sit amet tempor dolor.</p>
        <h4>In et metus dictum, faucibus est in, facilisis dolor.</h4>
        <p>Suspendisse hendrerit vehicula dui, non finibus nulla commodo id. Nam interdum eros vel feugiat tempor. Fusce a dolor at erat malesuada vestibulum. Curabitur ultricies ante urna, at aliquet urna volutpat ut. Integer erat ex, sagittis gravida pharetra ac, tempus non nunc. Curabitur vestibulum sollicitudin libero sit amet lobortis. Nunc eget justo sed dui aliquam pellentesque. Sed sed consectetur augue. Proin magna tortor, volutpat non lorem vitae, dictum auctor purus.</p>
        <h4>Suspendisse hendrerit nulla vel ligula laoreet suscipit.</h4>
        <p>Phasellus eget lacus id augue ullamcorper pellentesque ac ac velit. Sed rutrum placerat est sed mattis. Duis cursus imperdiet tortor a facilisis. Suspendisse cursus enim velit, vel eleifend lacus fringilla sit amet. Etiam libero arcu, gravida varius condimentum sit amet, bibendum sed arcu. Nulla molestie et ligula dignissim mattis. Morbi vehicula, ligula eu fringilla elementum, augue enim tincidunt mauris, id venenatis mauris ante porta mi.</p>
        <h4>Duis facilisis sapien at velit semper aliquam.</h4>
        <p>Mauris varius tincidunt rhoncus. Praesent eleifend lectus risus. Proin dictum vel urna pellentesque varius. Praesent quis imperdiet erat. Etiam ut nisi vel turpis commodo tempor. Phasellus pellentesque, quam ac porttitor aliquam, ex odio efficitur diam, nec dapibus quam arcu nec leo. Fusce congue orci eu urna ornare porta. Morbi vel ante lectus. Proin ornare condimentum purus a rutrum.</p>
      </div>
    </div>
  );
};

export default Terms;
