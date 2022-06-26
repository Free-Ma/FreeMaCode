## 分割数组

请编写一个函数，该函数将一个数组（第一个参数）拆分成若干长度为 `size`（第二个参数）的子数组，并将它们作为二维数组返回。

```javascript
//一
function chunkArrayInGroups(arr, size) {
	let temp = [];
	let result = [];

	for (let a = 0; a < arr.length; a++) {
		if (a % size !== size - 1) temp.push(arr[a]);
		else {
			temp.push(arr[a]);
			result.push(temp);
			temp = [];
		}
	}

	if (temp.length !== 0) result.push(temp);
	return result;
}

//二
function chunkArrayInGroups(arr, size) {
	// Break it up.
	let newArr = [];
	for (let i = 0; i < arr.length; i += size) {
		newArr.push(arr.slice(i, i + size));
	}
	return newArr;
}

//三
function chunkArrayInGroups(arr, size) {
	// Break it up.
	let newArr = [];
	let i = 0;

	while (i < arr.length) {
		newArr.push(arr.slice(i, i + size));
		i += size;
	}
	return newArr;
}
chunkArrayInGroups(['a', 'b', 'c', 'd'], 2);

//四
function chunkArrayInGroups(arr, size) {
	let newArr = [];
	while (arr.length > 0) {
		newArr.push(arr.splice(0, size));
	}
	return newArr;
}

//五
function chunkArrayInGroups(arr, size) {
	if (arr.length <= size) {
		return [arr];
	} else {
		return [arr.slice(0, size)].concat(chunkArrayInGroups(arr.slice(size), size));
	}
}
```
