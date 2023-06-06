import React from "react";
import "./Brands.css";

const brr = [
  {
    imag: "https://th.bing.com/th/id/OIP.GsEaK1ZyQVh7IvUeCTZQTwHaHa?pid=ImgDet&rs=1",
    txt: "Apple",
  },
  {
    imag: "https://th.bing.com/th/id/R.eb06e8a774febae3a0e0d3bbfcdb8df2?rik=7jyBih7gcX6LBQ&riu=http%3a%2f%2fnetwork.napco.com%2fpromo-marketing%2fwp-content%2fuploads%2fsites%2f12%2f2015%2f12%2fadidas-Performance-Logo-Black-Square-transparent-background-300x300.png&ehk=m6rn15XYRmw53Wa8NbyPZj%2bfbtDaAMEuFSLjCnMQ9C0%3d&risl=&pid=ImgRaw&r=0",
    txt: "Adidas",
  },
  {
    imag: "https://play-lh.googleusercontent.com/_pNh_Gpmfd3Uvv-j23sEaLdF_P1Jy-KYq0VHJwzz_wPOU_bcawyzL3yCnxgM-Tp5vw",
    txt: "FireBoltt",
  },
  {
    imag: "https://th.bing.com/th/id/R.2a74d2c46d293eb035481dc8482cb0bd?rik=b24S86vuq6IM5g&riu=http%3a%2f%2fosher4u.co.il%2fwp-content%2fuploads%2f2019%2f08%2fdell-logo-transparent-1024x1024.png&ehk=iRtIqpA2U3KZ6NA%2fF8Y2myzKTHfWR4%2bPI6hFk3LT4aQ%3d&risl=&pid=ImgRaw&r=0",
    txt: "Dell",
  },
  {
    imag: "https://th.bing.com/th/id/OIP.O1PczSw1u_Zm4-pnckqvIgHaHa?pid=ImgDet&rs=1",
    txt: "Nike",
  },
  {
    imag: "https://allmytech.pk/wp-content/uploads/2019/10/samsung-square-logo.jpg",
    txt: "Samsung",
  },
  {
    imag: "https://photorumors.com/wp-content/uploads/2021/01/sony-logo.png",
    txt: "Sony",
  },
  {
    imag: "https://th.bing.com/th/id/OIP.fqb0qecgPkucKjB1lhr_fAHaGE?pid=ImgDet&rs=1",
    txt: "JBL",
  },
];

function Brands() {
  return (
    <div className="brands">
      {brr.map((br) => (
        <a href="">
          <div className="brand">
            <div>
              <img src={br.imag}></img>
            </div>
            <div className="brand-name">
              <h3>{br.txt}</h3>
            </div>
          </div>
        </a>
      ))}
      {/* <div className="brand">
        <div>
          <img src="https://th.bing.com/th/id/R.eb06e8a774febae3a0e0d3bbfcdb8df2?rik=7jyBih7gcX6LBQ&riu=http%3a%2f%2fnetwork.napco.com%2fpromo-marketing%2fwp-content%2fuploads%2fsites%2f12%2f2015%2f12%2fadidas-Performance-Logo-Black-Square-transparent-background-300x300.png&ehk=m6rn15XYRmw53Wa8NbyPZj%2bfbtDaAMEuFSLjCnMQ9C0%3d&risl=&pid=ImgRaw&r=0"></img>
        </div>
        <div className="brand-name">
          <h3>Adidas</h3>
        </div>
      </div>
      <div className="brand">
        <div>
          <img src="https://th.bing.com/th/id/OIP.GsEaK1ZyQVh7IvUeCTZQTwHaHa?pid=ImgDet&rs=1"></img>
        </div>
        <div className="brand-name">
          <h3>Fireboltt</h3>
        </div>
      </div>
      <div className="brand">
        <div>
          <img src="https://yt3.ggpht.com/slBPezMH7-IgWtsFt7kbW0slpVm6XGsfM_8s-Xi1WYpk3PYoJIyurpLskzZkoAX69MiGOh7iLg=s900-c-k-c0x00ffffff-no-rj"></img>
        </div>
        <div className="brand-name">
          <h3>Fireboltt</h3>
        </div>
      </div>
      <div className="brand">
        <div>
          <img src="https://yt3.ggpht.com/slBPezMH7-IgWtsFt7kbW0slpVm6XGsfM_8s-Xi1WYpk3PYoJIyurpLskzZkoAX69MiGOh7iLg=s900-c-k-c0x00ffffff-no-rj"></img>
        </div>
        <div className="brand-name">
          <h3>Fireboltt</h3>
        </div>
      </div>
      <div className="brand">
        <div>
          <img src="https://yt3.ggpht.com/slBPezMH7-IgWtsFt7kbW0slpVm6XGsfM_8s-Xi1WYpk3PYoJIyurpLskzZkoAX69MiGOh7iLg=s900-c-k-c0x00ffffff-no-rj"></img>
        </div>
        <div className="brand-name">
          <h3>Fireboltt</h3>
        </div>
      </div>
      <div className="brand">
        <div>
          <img src="https://yt3.ggpht.com/slBPezMH7-IgWtsFt7kbW0slpVm6XGsfM_8s-Xi1WYpk3PYoJIyurpLskzZkoAX69MiGOh7iLg=s900-c-k-c0x00ffffff-no-rj"></img>
        </div>
        <div className="brand-name">
          <h3>Fireboltt</h3>
        </div>
      </div> */}
    </div>
  );
}

export default Brands;
