import React from "react";

export const CompleteTodos = (props) => {
  const { completeTodos, onClickBack } = props;
  const style = {
    backgroundColor: "#ffffe0",
    width: "400px",
    minHeight: "200px",
    padding: "8px",
    margin: "8px",
    bordeRadius: "8px"
  };

  return (
    <>
      <div style={style} className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
