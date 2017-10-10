function compare(a, b) {
	if (a > b) return 1;
	if (a < b) return -1;
}

var list = [1, 4, 3, 7, 13, 2, 8];
list.sort(compare);
alert(list);
