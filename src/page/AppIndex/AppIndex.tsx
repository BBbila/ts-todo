import React, {useState} from "react";
import styles from './AppIndex.module.scss';
import title_app from '../../lib/image/title_app.png';
import logo_app from '../../lib/image/logo_app.png';
import andro_app from '../../lib/image/andro_app.png';
import pg_app from '../../lib/image/pg_app.png';

const AppIndex = () => {
    
    return (
        <div className={styles.appPage_Wrap}>
            <div className="backg_Wrap">
                <div className="flex_center logo_center">
                    <div className="logo_Con"><img src={logo_app} className="gimg"></img></div>
                </div>
                <div className="flex_center title_center">
                    <div className="title_Con"><img src={title_app} className="gimg"></img></div>
                </div>
                <div className="flex_center btn_center">
                    <article className="btn_Con">
                        <button className=""  ><img src={pg_app} className="sm_icon"></img>Windows版下载</button>
                        <button className=""  ><img src={andro_app} className="sm_icon"></img>mac版下载</button>
                    </article>
                </div>
            </div>
        </div>
    );
}
 
export default AppIndex;