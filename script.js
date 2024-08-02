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

    circle.addEventListener("mousedown", (e) => {
        isDragging = true;
        offsetX = e.clientX - circle.getBoundingClientRect().left;
        offsetY = e.clientY - circle.getBoundingClientRect().top;
        circle.style.transition = "none";
    });

    document.addEventListener("mousemove", (e) => {
        if (isDragging) {
            const x = e.clientX - offsetX;
            const y = e.clientY - offsetY;
            circle.style.left = `${x}px`;
            circle.style.top = `${y}px`;
        }
    });

    document.addEventListener("mouseup", () => {
        isDragging = false;
        circle.style.transition = "left 0.1s ease-out, top 0.1s ease-out";
    });

    // 창 크기 변경 시 원 위치 재조정
    window.addEventListener("resize", placeCircleRandomly);
});
