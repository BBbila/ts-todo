import React, {useState} from "react";
import styles from './index.module.scss';
import List from '../../components/List/List';

export interface ItemProps {
    index: number;
    content: string;
}

const Index = () => {
  const [val, setVal] = useState('');
  const [addlist, setAddList] = useState<string[]>([]);
  const [haveViewlist, setHaveViewlist] = useState<string[]>([]);
  const [isShowView, setIsShowView] = useState(true);

  
  //输入监听
  const handleVal = (e: React.ChangeEvent) =>{
    const _val =  (e.target as HTMLInputElement).value;
    setVal(_val);
  }

  //添加
  const handleClickAddBtn = () =>{
    if(val !== null && val !== "") {
      setAddList([...addlist, val]);
    }else {
      alert('内容不能为空!');
    }
    setVal('');
  }

  return (
    <div className={styles.indexPageWrap}>
        <div className="headerCon">TodoList</div>
        <article className="contentCon">
          <div className="content">
            <input value={val} onChange={(e) => handleVal(e)} style={{width:'85%',height:'30px'}}></input>
            <button onClick={() => {handleClickAddBtn()}} style={{height:'36px'}}>添加</button>
            <h3>全部</h3>
            <List 
              list={addlist}
              setAddList={setAddList} 
              isShowView={isShowView}
              haveViewlist = {haveViewlist}
              setHaveViewlist = {setHaveViewlist}
            ></List>
            <h3>已读</h3>
            <List 
              list={haveViewlist}
              setAddList={setHaveViewlist} 
              isShowView={false}
            />
          </div>
        </article>
    </div>
  );
}
 
export default Index;