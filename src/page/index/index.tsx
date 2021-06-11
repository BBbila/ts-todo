import React, {useState} from "react";
import styles from './index.module.scss';
import List from '../../components/List/List';


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
              setAddList={setAddList} 
              isShowView={isShowView}
              haveViewList = {haveViewList}
              setHaveViewList = {setHaveViewList}
            ></List>
            <div className="separate_mod view_txt">已读</div>
            <List 
              list={haveViewList}
              setAddList={setHaveViewList} 
              isShowView={false}
            />
          </div>
        </article>
    </div>
  );
}
 
export default Index;