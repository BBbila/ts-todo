import React, {useState} from "react";
import styles from './indexPage.module.scss';
import thetitle from '../../lib/image/thetitle.png';
import thelogo from '../../lib/image/ruilogo.png';

import ques from '../../lib/image/ques.png';

const AndriodURL = "https://api.pwmqr.com/qrcode/create/?url=http%3A%2F%2Fupdate.realmerit.com.cn%2Frealmerit_release_2.17.5.apk";
const iosURL = "https://api.pwmqr.com/qrcode/create/?url=https://itunes.apple.com/cn/app/id1489291760";

const IndexPage = () => {
    
    return (
        <div className={styles.indexPage_Wrap}>
            <div className="backg_Wrap">
                <div className="logo_Con"><img src={thelogo} className="gimg"></img></div>
                <div className="title_Con"><img src={thetitle} className="gimg"></img></div>
                <article className="btn_Con">
                    <div className="row_btn_Con">
                    <button><div className="sm_icon winbalck "></div>Windows版下载</button>
                    <button><div className="sm_icon appleblack apd"></div>mac版下载</button>
                    </div>
                    <div className="row_btn_Con">
                        <div className="andriod_btn_Con">
                            <button><div className="sm_icon adblack"></div>Andriod版下载</button>
                            <div className="pop pop_ad_Con">
                                <div className="cube"></div>
                                <img src={AndriodURL} className="gimg"></img>
                            </div>
                        </div>
                        <div className="ios_btn_Con">
                            <button><div className="sm_icon appleblack"></div>ipone版下载</button>
                            <div className="pop pop_ios_Con">
                                <div className="cube"></div>
                                <img src={iosURL} className="gimg"></img>
                            </div>
                        </div>
                    </div>
                </article>
                <div className="des_Con">
                    <span>系统依赖（Windows）</span><a className="down_link" href="http://setup.realmerit.com.cn/NDP472-KB4054530-x86-x64-AllOS-ENU.exe">.NET Framework4.7.2</a>
                    <div className="ques_Con">
                        <img src={ques} className="gimg">
                        </img>
                        <ul className="pop_links">
                            <li><a href="http://setup.realmerit.com.cn/ndp48-x86-x64-allos-enu.exe">.NET Framework4.8</a></li>
                            <li><a href="http://setup.realmerit.com.cn/NDP472-KB4054530-x86-x64-AllOS-ENU.exe">.NET Framework4.7.2</a></li>
                            <li><a href="http://setup.realmerit.com.cn/NDP462-KB3151800-x86-x64-AllOS-ENU.exe">.NET Framework4.6.2</a></li>
                            <li><a href="http://setup.realmerit.com.cn/NDP452-KB2901907-x86-x64-AllOS-ENU.exe">.NET Framework4.5.2</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default IndexPage;