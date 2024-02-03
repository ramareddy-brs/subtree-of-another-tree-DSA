function isSubtree(root, subRoot) {
  return checkSubtree(root, subRoot);
}

function checkSubtree() {
  const rootInput = document.getElementById('rootInput').value;
  const subRootInput = document.getElementById('subRootInput').value;

  const root = JSON.parse("[" + rootInput + "]");
  const subRoot = JSON.parse("[" + subRootInput + "]");

  const resultDiv = document.getElementById('result');
  const isSubtreeResult = isSubtree(root, subRoot);

  resultDiv.textContent = isSubtreeResult ? 'Subtree Found!' : 'Not a Subtree!';
}