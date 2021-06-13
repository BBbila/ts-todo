import React, {useState} from "react";
import styles from './index.module.scss';
import List from '../../components/List/List';

interface GroupItems {
  content: string,
  type: boolean
}

const Index = () => {
  const [val, setVal] = useState('');
  const [addList, setAddList] = useState<string[]>([]);
  const [haveViewList, setHaveViewList] = useState<string[]>([]);
  const [isShowView] = useState(true);

  
  //输入监听
  const handleVal = (e: React.ChangeEvent) =>{
    const _val =  (e.target as HTMLInputElement).value;
    setVal(_val);
  }

  //添加
  const handleClickAddBtn = () =>{
    if(val !== null && val !== "") {
      setAddList([...addList, val]);
    }else {
      alert('内容不能为空!');
    }
    setVal('');
  }

  //已读
  const handleClickViewBtn = (item: string, index: number) =>{
    setHaveViewList([...haveViewList, item]);
    addList.splice(index , 1);
    setAddList([...addList]);
  }

  //删除
  const handleClickCancelBtn = (index: number , status: boolean)=>{
    if(status === true) {
      addList.splice(index , 1);
      setAddList([...addList]);
    }else {
      haveViewList.splice(index , 1);
      setHaveViewList([...haveViewList]);
    }
    
  }

  return (
    <div className={styles.index_Wrap}>
        <div className="header_con">TodoList</div>
        <article className="content_con">
          <div className="content">
            <input className="input_box" value={val} onChange={(e) => handleVal(e)} ></input>
            <button className="add_btn" onClick={() => {handleClickAddBtn()}}>添加</button>
            <div className="separate_mod all_txt">全部</div>
            <List 
              list={addList}
              isShowView={isShowView}
              clickLooked={handleClickViewBtn}
              clickCancel={handleClickCancelBtn}
            ></List>
            <div className="separate_mod view_txt">已读</div>
            <List 
              list={haveViewList}
              clickCancel={handleClickCancelBtn}
              isShowView={false}
            />
          </div>
        </article>
    </div>
  );
}
 
export default Index;