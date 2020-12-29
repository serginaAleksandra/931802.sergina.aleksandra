function add() {
	document.getElementById('content').insertAdjacentHTML('beforeend', 
        `<div id="element">
			<input>
			<input>
			<button onclick="up(this)">↑</button>
		    <button onclick="down(this)">↓</button>
		    <button onclick="Remove(this)">x</button>
	    </div>`)
}

function save() {
	let parent = document.querySelectorAll("#content > #element > input");
    let out = "{";
    for (let i = 0; i < parent.length; i += 2)
    {
        out += '"' + parent[i].value + '":"' + parent[i + 1].value + '"';
        if (i != parent.length - 2)
            out += ',';
    }
    out += "}";
    let answer = document.getElementById("output");
    answer.innerHTML = out;
}

function up(element) {
    let elem = element.parentNode;
    let parent = elem.parentNode;
    let childrens = parent.children;
    for (let i = 0; i < childrens.length; i++)
    {
        if (childrens[i] === elem && i != 0)
            parent.insertBefore(elem, childrens[i - 1]);
    }
}

function down(element) {
    let elem = element.parentNode;
    let parent = elem.parentNode;
    let childrens = parent.children;
    for (let i = 0; i < childrens.length; i++)
    {
        if (childrens[i] === elem && i != (childrens.length - 1)) {
            parent.insertBefore(childrens[i + 1], elem);
            break;
        }
    }
}

function Remove(element) 
    {
        element.parentElement.remove()
    };