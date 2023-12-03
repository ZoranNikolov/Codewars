/**You are given a node that is the beginning of a linked list. This list contains a dangling piece and a loop. Your objective is to determine the length of the loop.

For example in the following picture the size of the dangling piece is 3 and the loop size is 12:


// Use the `getNext' method or 'next' property to get the following node.
node.getNext()
node.next */

function loop_size(node) {
	let tortoise = node.getNext();
	let hare = node.getNext().getNext();

	// Move the pointers until they meet
	while (tortoise !== hare) {
		tortoise = tortoise.getNext();
		hare = hare.getNext().getNext();
	}

	// Move one pointer to the start and keep the other at the meeting point
	tortoise = node;
	while (tortoise !== hare) {
		tortoise = tortoise.getNext();
		hare = hare.getNext();
	}

	// Count the length of the loop
	let count = 0;
	do {
		hare = hare.getNext();
		count++;
	} while (tortoise !== hare);

	return count;
}
