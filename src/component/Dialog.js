import React from "react";
import "../css/Dialog.scss";
function Dialog(props) {
  const { open, closedialog } = props;

  return (
    <dialog open={open}>
      <p>할 일은 10개까지만 입력가능 합니다!~!~!~!</p>
      <button className="dialog_close" onClick={closedialog}>
        닫기!
      </button>
    </dialog>
  );
}

export default Dialog;
