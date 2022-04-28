import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [todoText, setTodoText] = useState(``);
  // 未完了TODO State
  const [incompleteTodos, setIncompleteTodos] = useState(["あああ", "いいい"]);
  // 完了TODO State
  const [completeTodos, setCompleteTodos] = useState(["ううう"]);
  const onChangeTodoText = (event) => setTodoText(event.target.value);
  // 追加ボタン機能
  const onClickAdd = () => {
    if (todoText === ``) return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText(``);
  };
  // 削除ボタン機能
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    // splice(どのインデックス番号から, 何個要素を削除)
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };
  // 完了ボタン機能
  const onClickComplete = (index) => {
    // 未完了TODOの削除
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);
    setIncompleteTodos(newIncompleteTodos);
    // 完了TODOに追加
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setCompleteTodos(newCompleteTodos);
  };
  // レンダリング対象
  return (
    <>
      <div className="input-area">
        <input
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
