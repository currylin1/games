// game.js

var isFlipped = false; // 标记是否已经翻过卡牌

function flipCard(imgElement, newImageSrc, detail) {
    if (!isFlipped) {
        // 切换图片
        imgElement.src = newImageSrc;

        // 显示详细信息
        displayDetails(imgElement, detail);

        // 更新标记
        isFlipped = true;
    }
}

function displayDetails(imgElement, detail) {
    // 隐藏所有详细信息
    var details = document.getElementsByClassName('details');
    for (var i = 0; i < details.length; i++) {
        details[i].style.display = 'none';
    }

    // 显示被点击图片的详细信息
    var detailDiv = imgElement.nextElementSibling;
    detailDiv.innerHTML = detail;
    detailDiv.style.display = 'block';
}

function flipCard(imgElement, newImageSrc, detail) {
    if (!isFlipped) {
        // 添加 spinning-and-enlarging 类以触发旋转和放大动画
        imgElement.classList.add('spinning-and-enlarging');

        // 延迟切换图片和显示详细信息，以便动画顺利完成
        setTimeout(function() {
            // 切换图片
            imgElement.src = newImageSrc;

            // 显示详细信息
            displayDetails(imgElement, detail);
        }, 2000); // 延迟时间应与 CSS 动画的时长一致

        // 更新标记
        isFlipped = true;
    }
}



function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}



document.addEventListener('DOMContentLoaded', function() {
    let container = document.querySelector('.image-container');
    let images = Array.from(container.children);
    shuffle(images);
    
    // 清空原有的子元素
    container.innerHTML = '';
    
    // 添加随机排序后的子元素
    images.forEach(image => container.appendChild(image));
    
    // 剩下的代码 ...
});

