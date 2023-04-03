import React from "react";
import "../css/Dialog.scss";

function MemoDialog(props) {
  const { addmemo, memocheck, editmode, closememo, todoadd, id, index } = props;
  return (
    <dialog open={editmode}>
      <p className="memo_title">Add Memo</p>
      <textarea
        placeholder="메모를입력하세용"
        value={addmemo}
        maxLength={20}
        onChange={(e) => {
          memocheck(e, index);
        }}
      />
      <div className="btn_wrap">
        <button className="dialog_add" onClick={() => todoadd(id)}>
          추가
        </button>
        <button className="dialog_close" onClick={closememo}>
          닫기
        </button>
      </div>
    </dialog>
  );
}

export default MemoDialog;
