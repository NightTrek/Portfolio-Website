import React, {Component} from 'react';
import ImageGallery from 'react-image-gallery';

//import styles
import "../HomePage/style.css";
import "./style.css";
// import "~/react-image-gallery/styles/css/image-gallery.css";

//importing images
import a from "../../img/GalleryImages/1db94ee0efd19ab837739846abe0c427.jpg";
import b from "../../img/GalleryImages/2a4fd34650a8fbf391d36e70aae60bf8.jpg";
import c from "../../img/GalleryImages/02b3f7f6830cc8731f8221e2fbc9e7fa.jpg";
import d from "../../img/GalleryImages/8ec282af667380ee4bf45d2c005661b3.jpg";

import f from "../../img/GalleryImages/579d14446d9fccc430d13f5c8c40409b.jpg";
import g from "../../img/GalleryImages/793f6a7e4dc2f20274200af24df25e98.jpg";
import h from "../../img/GalleryImages/801a65561a89423b715a3cd500d09fc0.jpg";
import i from "../../img/GalleryImages/974be670e48859c9f3ac2cac3aacb042.jpg";
import j from "../../img/GalleryImages/976863362eb989ea02df23cf45c95ad8.jpg";
import k from "../../img/GalleryImages/a6ee6b5c53b412a3f411c65d926bd02e.jpg";
import l from "../../img/GalleryImages/e7823869027f8a798e5d057802f9a06c.jpg";
import m from "../../img/GalleryImages/ef3e28012f62dc13bdd351cdcc2dc48c.jpg";
import n from "../../img/GalleryImages/f0c9f39810c6312dcf8f5574a2fd3740.jpg";
//importing thumbnails
import A from "../../img/GalleryImages/thumpnails/1db94ee0efd19ab837739846abe0c427_tn.jpg";
import B from "../../img/GalleryImages/thumpnails/2a4fd34650a8fbf391d36e70aae60bf8_tn.jpg";
import C from "../../img/GalleryImages/thumpnails/02b3f7f6830cc8731f8221e2fbc9e7fa_tn.jpg";
import D from "../../img/GalleryImages/thumpnails/8ec282af667380ee4bf45d2c005661b3_tn.jpg";

import F from "../../img/GalleryImages/thumpnails/579d14446d9fccc430d13f5c8c40409b_tn.jpg";
import G from "../../img/GalleryImages/thumpnails/793f6a7e4dc2f20274200af24df25e98_tn.jpg";
import H from "../../img/GalleryImages/thumpnails/801a65561a89423b715a3cd500d09fc0_tn.jpg";
import I from "../../img/GalleryImages/thumpnails/974be670e48859c9f3ac2cac3aacb042_tn.jpg";
import J from "../../img/GalleryImages/thumpnails/976863362eb989ea02df23cf45c95ad8_tn.jpg";
import K from "../../img/GalleryImages/thumpnails/a6ee6b5c53b412a3f411c65d926bd02e_tn.jpg";
import L from "../../img/GalleryImages/thumpnails/e7823869027f8a798e5d057802f9a06c_tn.jpg";
import M from "../../img/GalleryImages/thumpnails/ef3e28012f62dc13bdd351cdcc2dc48c_tn.jpg";
import N from "../../img/GalleryImages/thumpnails/f0c9f39810c6312dcf8f5574a2fd3740_tn.jpg";

const images = [
    {
        original: m,
        thumbnail: M,
    },
    {
        original: a,
        thumbnail: A,
    },
    {
        original: b,
        thumbnail: B,
    },
    {
        original: c,
        thumbnail: C,
    },
    {
        original: d,
        thumbnail: D,
    },
    // {
    //     original: e,
    //     thumbnail: E,
    // },
    {
        original: f,
        thumbnail: F,
    },
    {
        original: g,
        thumbnail: G,
    },
    {
        original: h,
        thumbnail: H,
    },
    {
        original: i,
        thumbnail: I,
    },
    {
        original: j,
        thumbnail: J,
    },
    {
        original: k,
        thumbnail: K,
    },
    {
        original: l,
        thumbnail: L,
    },
    {
        original: n,
        thumbnail: N,
    }
];


class Gallery extends Component {
    render() {
        return (
            <div className={"flexColumn galleryPage"}>
                <div className={"flexRow"}>
                    <div>
                        <h2 className={"galleryHeader"}> A passion for art and photography</h2>
                    </div>
                    <div className={"whyIDoPhotos"}>
                        <p>
                            Ive been luck enough to spend a lot of time traveling and exploring. I like to share these experiences with my photography hobby.
                            Not everyone gets to stand on a 10,000 year old glacier or stay up all night in the desert. With some some practice and patients
                            i can share these experiences so that others may benefit. I hope you enjoy some of my work.
                        </p>
                    </div>
                </div>
                <div className={"galleryCenter"} id={"photogallery"}>
                    <div className={"galleryContainer"}>
                        <ImageGallery items={images}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Gallery;