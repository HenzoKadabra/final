document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function () {
        var columnw = document.querySelector('.columnw');
        if (columnw) {
            var position = columnw.getBoundingClientRect();
            if (position.top < window.innerHeight && position.bottom >= 0) {
                columnw.style.animationPlayState = 'running';
            } else {
                columnw.style.animationPlayState = 'paused';
            }
        }
    });
});
