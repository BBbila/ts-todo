import { CloseCircleOutlined ,FolderViewOutlined } from '@ant-design/icons';
import './List.scss';


interface IProps  {
    list : Array<string>,
    haveViewList?: Array<string>,
    isShowView: boolean,
    clickLooked?: Function,
    clickCancel: Function
}

const List = (props: IProps) => {

    const {clickLooked, clickCancel} = props;

    //已读
    const handleClickLooked = (item: string, index: number) => {
        if(clickLooked) {
            clickLooked(item, index);
        }
    }

    //删除
    const handleClickCancelBtn = (index: number ,status: boolean) =>{
        clickCancel(index, status);
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
                            onClick={() => {handleClickLooked(item, index)}}
                        />
                        }
                        <CloseCircleOutlined 
                            className="del_icon"
                            onClick={() => {handleClickCancelBtn(index, props.isShowView)}}
                        />
                    </li>;
                })}
            </ul>
        </div>
    );
}
 
export default List;