function fn1(x) {
	return x + 1
}

function fn2(x) {
	return x + 2
}

function fn3(x) {
	return x + 3
}

function fn4(x) {
	return x + 4
}

const a = compose(fn1, fn2, fn3, fn4)

console.log(a(2)) // 2+4+3+2+1=12

//解答
function compose() {
	const argFnList = [...arguments]

	return num => argFnList.reduce((pre, cur) => cur(pre), num)
}
