import React  from "react";
import {ItemProps} from "../../page/index/index";
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
    list : Array<string>,
    haveViewlist?: Array<string>,
    isShowView: boolean,
    setAddList: (param: string[]) => void,
    setHaveViewlist?: (param: string[]) => void
}

const List = (props: IProps) => {

    //已读
    const handleClickViewBtn = (item: string, index: number) =>{
        if(props.setHaveViewlist && props.haveViewlist) {
            props.setHaveViewlist([...props.haveViewlist, item]);
        }
        props.list.splice(index,1);
        props.setAddList([...props.list]);
    }

    //删除
    const handleClickCancleBtn = (index: number) =>{
        props.list.splice(index,1);
        props.setAddList([...props.list]);
    }


    return (
        <div className="ListPageWrap" style={styles.ListPageWrap}>
            <ul className="conul" style={{width:'100%'}}>
                {props.list.map((item,index)=>{
                    return <li key={index}>{item}
                    {props.isShowView &&
                    <FolderViewOutlined 
                        style={{position:'absolute',right:'80px',top:'0',color:'blue'}} 
                        onClick={() => {handleClickViewBtn(item ,index)}}
                    />
                }
                <CloseCircleOutlined 
                    style={{position:'absolute',right:'50px',top:'0',color:'red'}} 
                    onClick={() => {handleClickCancleBtn(index)}}
                />
                </li>;
                })}
            </ul>
        </div>
    );
}
 
export default List;