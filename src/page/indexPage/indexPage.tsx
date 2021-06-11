import React, {useState , useEffect} from "react";
import styles from './indexPage.module.scss';
import the_title from '../../lib/image/the_title.png';
import the_logo from '../../lib/image/rui_logo.png';
import ques from '../../lib/image/ques.png';

import title_app from '../../lib/image/title_app.png';
import logo_app from '../../lib/image/logo_app.png';
import android_app from '../../lib/image/android_app.png'; 
import pg_app from '../../lib/image/pg_app.png';

const AndroidURL = "https://api.pwmqr.com/qrcode/create/?url=http%3A%2F%2Fupdate.realmerit.com.cn%2Frealmerit_release_2.17.5.apk";
const iosURL = "https://api.pwmqr.com/qrcode/create/?url=https://itunes.apple.com/cn/app/id1489291760";
const WindowsURL = "http://setup.realmerit.com.cn/setup-win32.exe?t="
const MacURL = "http://setup.realmerit.com.cn/setup-mac.dmg?t="
const appAndroidURL = "http://update.realmerit.com.cn/realmerit_release_2.17.5.apk";



const IndexPage = () => {
    const [isPcState , setIsPcState] = useState<boolean>(true);

    useEffect(() => {
        //判断是pc还是移动端
        let state = judgeBrowser();
        if(state === 'pc') {
            setIsPcState(true);
        }else {
            setIsPcState(false);
        }
    },[])

    const judgeBrowser =() => {
        var sUserAgent: any = navigator.userAgent.toLowerCase();
        var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
        var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
        var bIsMidp = sUserAgent.match(/midp/i) == "midp";
        var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
        var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
        var bIsAndroid = sUserAgent.match(/android/i) == "android";
        var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
        var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
        if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
            return 'phone';
        } else {
            return 'pc';
        }
    }

    //下载监听事件--PC端
    const handleLinkTo = (url: string) => {
        let localTimestamp: number = new Date().getTime();
        window.location.href = url + localTimestamp;
    }

    //下载监听事件--移动端
    const handleLinkDownload = (url : string) => {
        window.location.href = url ;
    }

    

    if(isPcState){
        return  <div className={styles.indexPage_Wrap}>
            <div className="background_Wrap">
                <div className="content_cover">
                    <div className="logo_con"><img src={the_logo} className="gImg"></img></div>
                    <div className="title_con"><img src={the_title} className="gImg"></img></div>
                    <article className="btn_con">
                        <div className="row_btn_con">
                        <button onClick={()=>{handleLinkTo(WindowsURL)}}><div className="sm_icon win_black"></div>Windows版下载</button>
                        <button onClick={()=>{handleLinkTo(MacURL)}}><div className="sm_icon apple_black apd"></div>mac版下载</button>
                        </div>
                        <div className="row_btn_con">
                            <div className="android_btn_con">
                                <button><div className="sm_icon ad_black"></div>Android版下载</button>
                                <div className="pop pop_ad_con">
                                    <div className="cube"></div>
                                    <img src={AndroidURL} className="gImg"></img>
                                </div>
                            </div>
                            <div className="ios_btn_con">
                                <button><div className="sm_icon apple_black"></div>iphone版下载</button>
                                <div className="pop pop_ios_con">
                                    <div className="cube"></div>
                                    <img src={iosURL} className="gImg"></img>
                                </div>
                            </div>
                        </div>
                    </article>
                    <div className="des_con">
                        <span>系统依赖（Windows）</span><a className="down_link" href="http://setup.realmerit.com.cn/NDP472-KB4054530-x86-x64-AllOS-ENU.exe">.NET Framework4.7.2</a>
                        <div className="ques_con">
                            <img src={ques} className="gImg">
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
        </div>
    } 
    return <div className={styles.appPage_Wrap}>
        <div className="bg_wrap">
            <div className="flex_center logo_center">
                <div className="logo_con"><img src={logo_app} className="gImg"></img></div>
            </div>
            <div className="flex_center title_center">
                <div className="title_con"><img src={title_app} className="gImg"></img></div>
            </div>
            <div className="flex_center btn_center">
                <article className="btn_con">
                    <button onClick={()=>{handleLinkDownload(iosURL)}} ><img src={android_app} className="sm_icon"></img>iphone版下载</button>
                    <button onClick={()=>{handleLinkDownload(appAndroidURL)}} ><img src={pg_app} className="sm_icon"></img>Android版下载</button>
                </article>
            </div>
        </div>
    </div>
}
 
export default IndexPage;