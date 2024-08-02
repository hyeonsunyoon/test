document.addEventListener("DOMContentLoaded", () => {
    const circle = document.getElementById("circle");

    // 랜덤한 위치에 원 배치
    function placeCircleRandomly() {
        const maxWidth = window.innerWidth - circle.offsetWidth;
        const maxHeight = window.innerHeight - circle.offsetHeight;
        const randomX = Math.floor(Math.random() * maxWidth);
        const randomY = Math.floor(Math.random() * maxHeight);

        circle.style.left = `${randomX}px`;
        circle.style.top = `${randomY}px`;
    }

    placeCircleRandomly();

    // 원을 드래그해서 움직이는 기능
    let isDragging = false;
    let offsetX, offsetY;

    function startDrag(e) {
        isDragging = true;
        const clientX = e.clientX || e.touches[0].clientX;
        const clientY = e.clientY || e.touches[0].clientY;
        offsetX = clientX - circle.getBoundingClientRect().left;
        offsetY = clientY - circle.getBoundingClientRect().top;
        circle.style.transition = "none";
        e.preventDefault();  // 터치 이벤트에서 클릭을 방지하기 위해 기본 동작 방지
    }

    function onDrag(e) {
        if (isDragging) {
            const clientX = e.clientX || e.touches[0].clientX;
            const clientY = e.clientY || e.touches[0].clientY;
            const x = clientX - offsetX;
            const y = clientY - offsetY;
            circle.style.left = `${x}px`;
            circle.style.top = `${y}px`;
        }
    }

    function endDrag() {
        isDragging = false;
        circle.style.transition = "left 0.1s ease-out, top 0.1s ease-out";
    }

    circle.addEventListener("mousedown", startDrag);
    circle.addEventListener("touchstart", startDrag, { passive: false });

    document.addEventListener("mousemove", onDrag);
    document.addEventListener("touchmove", onDrag, { passive: false });

    document.addEventListener("mouseup", endDrag);
    document.addEventListener("touchend", endDrag);

    // 창 크기 변경 시 원 위치 재조정
    window.addEventListener("resize", placeCircleRandomly);
});
