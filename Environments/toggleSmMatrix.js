// TeXworksScript

// Title: SmallMatrix
// Shortcut: Alt+Shift+N
// Description: Gives a smallmatrix environment (as in for inline matrices), defaulting to () around the matrix
// Author: James Rowan
// Version: 0.4
// Date: 2013-14-07

// Script-Type: standalone

// Context: TeXDocument


function addOrRemove(prefix, suffix) {
  var txt = TW.target.selection;
  var len = txt.length;
  var wrapped = prefix + txt + suffix;
  var pos = TW.target.selectionStart;
  if (pos >= prefix.length) {
    TW.target.selectRange(pos - prefix.length, wrapped.length);
    if (TW.target.selection == wrapped) {
      TW.target.insertText(txt);
      TW.target.selectRange(pos - prefix.length, len);
      return;
    }
    TW.target.selectRange(pos, len);
  }
  TW.target.insertText(wrapped);
  TW.target.selectRange(pos + prefix.length, len);
  return;
};

addOrRemove("\\left(\\begin{smallmatrix}", "\\end{smallmatrix}\\right)");
