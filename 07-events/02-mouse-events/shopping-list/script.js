const logo = document.querySelector("img");

const onClick = () => console.log("click event");

const onDblClick = () => {
    // console.log("double click event")

    if (document.body.style.backgroundColor !== "purple") {
        document.body.style.backgroundColor = "purple";
        document.body.style.color = "white";
    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    }
};

const onRightClick = () => console.log("right click event");

const onMouseDown = () => console.log("mouse down event");

const onMouseUp = () => console.log("mouse up event");

const onMouseWheel = () => console.log("mouse wheel event");

const onMouseOver = () => console.log("mouse over event");

const onMouseOut = () => console.log("mouse out event");

const onDragStart = () => console.log("drag start event");

const onDragEnd = () => console.log("drag end event");

const onDrag = () => console.log("drag event");

// Event listeners
logo.addEventListener("click", onClick);
logo.addEventListener("dblclick", onDblClick);
logo.addEventListener("contextmenu", onRightClick);
logo.addEventListener("mousedown", onMouseDown); // long press mouse
logo.addEventListener("mouseup", onMouseUp); // release mouse press
logo.addEventListener("wheel", onMouseWheel);
logo.addEventListener("mouseover", onMouseOver);
logo.addEventListener("mouseout", onMouseOut);
logo.addEventListener("dragstart", onDragStart);
logo.addEventListener("dragend", onDragEnd);
logo.addEventListener("drag", onDrag);