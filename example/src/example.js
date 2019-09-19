import { nil } from "@jacarma/nil";

export default function writeExampleToDom(el) {
  el.innerHTML = `
    <dl>
      <dt>nil(null)</dt> <dd>${nil(null)}</dd></dt>
      <dt>nil(undefined)</dt> <dd>${nil(undefined)}</dd></dt>
      <dt>nil("")</dt> <dd>${nil("")}</dd></dt>
      <dt>nil(NaN)</dt> <dd>${nil(Number.NaN)}</dd></dt>
      <dt>nil(false)</dt> <dd>${nil(false)}</dd></dt>
      <dt>nil(0)</dt> <dd>${nil(0)}</dd></dt>
      <dt>nil([])</dt> <dd>${nil([])}</dd></dt>
      <dt>nil({})</dt> <dd>${nil({})}</dd></dt>
    </dl>
  `;
}
