import React from "react";

export const InputTodo = (props) => {
  // 親コンポーネント（App.jsx）から「props.todoText」、「props.onChange」、「props.onClick」として子コンポーネント（InputTodo.jsx）に渡される
  // propsはオブジェクトとして渡される
  // 下記は親から渡されたpropsを分割代入する
  const { todoText, onChange, onClick } = props;
  return (
    <>
      <div className="input-area">
        <input placeholder="TODOを入力" value={todoText} onChange={onChange} />
        <button onClick={onClick}>追加</button>
      </div>
    </>
  );
};
