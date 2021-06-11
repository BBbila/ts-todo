import { CloseCircleOutlined ,FolderViewOutlined } from '@ant-design/icons';
import './List.scss';


interface IProps  {
    list : Array<string>,
    haveViewList?: Array<string>,
    isShowView: boolean,
    setAddList: (param: string[]) => void,
    setHaveViewList?: (param: string[]) => void
}

const List = (props: IProps) => {

    //已读
    const handleClickViewBtn = (item: string, index: number) =>{
        if(props.setHaveViewList && props.haveViewList) {
            props.setHaveViewList([...props.haveViewList, item]);
        }
        props.list.splice(index , 1);
        props.setAddList([...props.list]);
    }

    //删除
    const handleClickCancelBtn = (index: number) =>{
        props.list.splice(index , 1);
        props.setAddList([...props.list]);
    }

    return (
        <div className="ListPage_Wrap" >
            <ul className="con_ul">
                {props.list.map((item , index)=>{
                    return <li key={index}>
                        <span className="content_text" title={item}>{item}</span>
                        {props.isShowView &&
                        <FolderViewOutlined
                            className="view_icon"
                            onClick={() => {handleClickViewBtn(item , index)}}
                        />
                        }
                        <CloseCircleOutlined 
                            className="del_icon"
                            onClick={() => {handleClickCancelBtn(index)}}
                        />
                    </li>;
                })}
            </ul>
        </div>
    );
}
 
export default List;