import React, {useState} from "react";
import styles from './indexPage.module.scss';
import thetitle from '../../lib/image/thetitle.png';
import thelogo from '../../lib/image/ruilogo.png';
import winbalck from '../../lib/image/windows_black.png';
import appleblack from '../../lib/image/apple_black.png';
import winwhite from '../../lib/image/windows_white.png';
import applewhite from '../../lib/image/apple_white.png';

const AndriodURL = "https://api.pwmqr.com/qrcode/create/?url=http%3A%2F%2Fupdate.realmerit.com.cn%2Frealmerit_release_2.17.5.apk";
const iosURL = "https://api.pwmqr.com/qrcode/create/?url=https://itunes.apple.com/cn/app/id1489291760";

const IndexPage = () => {
    const [isSelectedList, setIsSelectedList] = useState<boolean[]>([false,false,false,false]);
    
    const handleSelect = (num: number) =>{
        let newList = isSelectedList.map((item:boolean,index:number) =>{
           return item = false;
        })
        newList[num] = true;
        setIsSelectedList(newList);
    }
    
    return (
        <div className={styles.indexPage_Wrap}>
            <div className="backg_Wrap">
                <div className="logo_Con"><img src={thelogo} className="gimg"></img></div>
                <div className="title_Con"><img src={thetitle} className="gimg"></img></div>
                <article className="btn_Con">
                    <div className="row_btn_Con">
                    <button className={isSelectedList[0] == true ? 'selected_btn' : ''}  onClick={() => handleSelect(0)}><img src={ isSelectedList[0] == true ? winwhite : winbalck } className="sm_icon"></img>Windows版下载</button>
                    <button className={isSelectedList[1] == true ? 'selected_btn' : ''}  onClick={() => handleSelect(1)}><img src={ isSelectedList[1] == true ? applewhite : appleblack} className="sm_icon"></img>mac版下载</button>
                    </div>
                    <div className="row_btn_Con">
                        <button className={isSelectedList[2] == true ? 'selected_btn' : 'andriod_btn'}  onClick={() => handleSelect(2)}><img src={ isSelectedList[2] == true ? winwhite : winbalck } className="sm_icon"></img>Andriod版下载</button>
                        <button className={isSelectedList[3] == true ? 'selected_btn' : 'ios_btn'}  onClick={() => handleSelect(3)}><img src={ isSelectedList[3] == true ? applewhite : appleblack } className="sm_icon"></img>ipone版下载</button>
                    </div>
                    <div className="pop pop_ad_Con">
                        <div className="cube"></div>
                        <img src={AndriodURL} className="gimg"></img>
                    </div>
                    <div className="pop pop_ios_Con">
                        <div className="cube"></div>
                        <img src={iosURL} className="gimg"></img>
                    </div>
                </article>
            </div>
        </div>
    );
}
 
export default IndexPage;