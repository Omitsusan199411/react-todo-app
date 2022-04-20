import "./styles.css";

export const App = () => {
  return (
    <>
      <div class="input-area">
        <input placeholder="TODOを入力" />
        <button>入力</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          <div className="list-row">
            <li>あああ</li>
            <button>完了</button>
            <button>削除</button>
          </div>
          <div className="list-row">
            <li>いいい</li>
            <button>完了</button>
            <button>削除</button>
          </div>
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          <div className="list-row">
            <li>ううう</li>
            <button>戻す</button>
          </div>
        </ul>
      </div>
    </>
  );
};
