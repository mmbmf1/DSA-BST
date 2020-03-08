// 1. Draw a BST
// Given the data 3,1,4,6,9,2,5,7, if you were to insert this into an empty binary search tree, what would the tree look like? (Draw the tree, no coding needed here.)
// Draw the BST with the keys - E A S Y Q U E S T I O N

//     3
//    / \
//   1   4
//        \
//         6
//          \
//           9
//          / \
//         2   5
//              \
//               7

// 2. Remove the root
// Show how the above trees would look like if you deleted the root of each tree. (Draw the trees, no coding needed here.)

// 1
//  \
//   4
//    \
//     6
//    / \
//   2   5
//        \
//         7

// 3. Create a BST class
// Walk through the binary search tree code in the curriculum and understand it well. Then write a BinarySearchTree class with its core functions (insert(), remove(), find()) from scratch.

// Create a binary search tree called BST and insert 3,1,4,6,9,2,5,7 into your tree. Compare your result with the result from the 1st exercise.
// Create a binary search tree called BST and insert E A S Y Q U E S T I O N into your tree. Compare your result with the result from the 1st exercise.

const BinarySearchTree = require("./bst");

function main() {
  const BST1 = new BinarySearchTree();
  const data = [3, 1, 4, 6, 9, 2, 5, 7];

  for (let i = 0; i < data.length; i++) {
    BST1.insert(data[i], data[i]);
  }

  //   console.log(BST1);
  //   console.log(BST1.right);
  console.log(BST1.right.right);
}

main();

//     3
//    / \
//   1   4
//    \   \
//     2   6
//        / \
//       5   9
//          /
//         7

// 4. What does this program do?

// function tree(t) {
//   if (!t) {
//     return 0;
//   }
//   return tree(t.left) + t.value + tree(t.right);
// }

// Without running this code in your code editor, explain what the following program does. Show with an example the result of executing this program. What is the runtime of this algorithm?

//O(log(n))
//Sums the BST node values

// 5. Height of a BST
// Write an algorithm to find the height of a binary search tree. What is the time complexity of your algorithm?
