import React from "react";

export const InputTodo = (props) => {
  // 親コンポーネント（App.jsx）から「props.todoText」、「props.onChange」、「props.onClick」として子コンポーネント（InputTodo.jsx）に渡される
  // propsはオブジェクトとして渡される
  // 下記は親から渡されたpropsを分割代入する
  const { todoText, onChange, onClick, disabled } = props;
  // jsxのルールに従ってcss実装
  const style = {
    backgroundColor: "#c1ffff",
    width: "400px",
    height: "30px",
    borderRadius: "8px",
    padding: "8px",
    margin: "8px"
  };

  return (
    <>
      <div style={style} className="input-area">
        {/* disabledにはtrueかfalseが入る */}
        <input
          disabled={disabled}
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChange}
        />
        <button disabled={disabled} onClick={onClick}>
          追加
        </button>
      </div>
    </>
  );
};
