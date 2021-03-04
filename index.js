alert("ciao");


var style = document.createElement('style');
style.type = 'text/css';
var keyFrames = '
.div-click-wa {
	border-style: solid;
	border-width: 5px;
	border-color: green;
	height: 200px;
	width: 350px;
}
.text-click-wa {
	color: green;
	font-size: 20px;
	text-align: center;
	margin-block-start: 0.1em;
	margin-block-end: 0em;
	margin-inline-start: 0.1px;
	margin-inline-end: 0px;
}
.wa-number {
	border-style: solid;
	border-width: 3px;
	border-color: green;
	font-size: 20px;
	color: green;
	height: 28px;
	width: 150px;
	margin: 10px 5px 15px 0px;
}
.custom-select {
	position: relative;
	font-family: Arial;
}
.custom-select select {
	display: none;
}
.select-selected {
	background-color: green;
}
.select-selected:after {
	position: absolute;
	content: "";
	top: 14px;
	right: 10px;
	width: 0;
	height: 0;
	border: 6px solid transparent;
	border-color: #fff transparent transparent transparent;
}
.select-selected.select-arrow-active:after {
	border-color: transparent transparent #fff transparent;
	top: 7px;
}
.select-items div,.select-selected {
	color: #ffffff;
	padding: 8px 16px;
	border: 1px solid transparent;
	border-color: transparent transparent rgba(0, 0, 0, 0.1) transparent;
	cursor: pointer;
	user-select: none;
}

.select-items {
	position: absolute;
	background-color: green;
	top: 100%;
	left: 0;
	right: 0;
	z-index: 99;
}

.select-hide {
	display: none;
}

.select-items div:hover, .same-as-selected {
	background-color: rgba(0, 0, 0, 0.1);
}';


style.innerHTML = keyFrames;
document.getElementsByTagName('head')[0].appendChild(style);

