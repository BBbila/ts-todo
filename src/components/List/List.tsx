import React  from "react";
import { CloseCircleOutlined ,FolderViewOutlined } from '@ant-design/icons';

const styles = {
    ListPageWrap:{
        height: 'auto',
        padding: '0',
        margin: '0',
        border: '0',
        overflow: 'hidden'
    }
}

interface IProps  {
    list : Array<string>;
    isShowView: boolean
}

const List = (props: IProps) => {

    return (
        <div className="ListPageWrap" style={styles.ListPageWrap}>
            <ul className="conul" style={{width:'100%'}}>
                {props.list.map((item,index)=>{
                    return <li key={index}>{item}
                    {props.isShowView &&
                    <FolderViewOutlined 
                        style={{position:'absolute',right:'30px',top:'0',color:'blue'}} 
                        // onClick={() => {handleClickViewBtn(item ,index)}}
                    />
                }
                <CloseCircleOutlined 
                    style={{position:'absolute',right:'0',top:'0',color:'red'}} 
                    // onClick={() => {handleClickCancleBtn(index)}}
                />
                </li>;
                })}
            </ul>
        </div>
    );
}
 
export default List;