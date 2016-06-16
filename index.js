//->动态计算REM的换算比例
+function (desW) {
    var winW = document.documentElement.clientWidth;
    document.documentElement.style.fontSize = winW / desW * 100 + "px";
}(320);
//->音频的自动播放
+function () {
    var audioBox = document.querySelector(".audio"),
        myAudio = audioBox.getElementsByTagName("audio")[0];
    window.setTimeout(function () {
        myAudio.play();
        myAudio.addEventListener("canplay", function () {
            audioBox.style.display = "block";
            audioBox.className += " audioMove";
        }, false);
    }, 1000);
    audioBox.addEventListener("click", function () {
        if (myAudio.paused) {
            myAudio.play();
            audioBox.className = "audio audioMove";
            return;
        }
        myAudio.pause();
        audioBox.className = "audio";
    }, false);
}();
//->给滑屏区域进行初始化设置
+function () {
    var step = 0, divList = null;
    var swp = new Swiper(".swiper-container", {
        loop: true,
        direction: 'vertical',
        // effect : 'cube',
        onSlidePrevEnd: function () {
            step--;
            change();
            if (step === 0) {
                step = 4;
            }
        },
        onSlideNextEnd: function () {
            step++;
            change();
            if (step === 5) {
                step = 1;
            }
        }
    });


    function change() {
        divList = document.querySelectorAll(".swiper-slide");
        [].forEach.call(divList, function (curDiv, index) {
            curDiv.id = index === step ? curDiv.getAttribute("trueId") : null;
            if (step===1||step===5){
                $(".myResume").addClass(" animated flipInY");
                $(".hi").addClass(" animated bounceInRight");
            }else {
                $(".myResume").removeClass("animated flipInY");
                $(".hi").removeClass("animated bounceInRight");
            }
            if (step===2){
                $(".inFoList>li").addClass("animated rollIn");
                $(".mouse").addClass(" animated fadeInLeft");
            }else {
                $(".inFoList>li").removeClass("animated rollIn");
                $(".mouse").removeClass("animated fadeInLeft");
            }
            if (step===3){
                $(".box>div:not(:nth-child(5))").addClass("animated flip");
            }else {
                $(".box>div:not(:nth-child(5))").removeClass("animated flip");
            }
            if (step===4||step===0){
                $(".page4>div:nth-child(1)").addClass("animated flipInY");
                $(".page4>div:nth-child(3)").addClass("animated flipInY");
                $(".page4>div:nth-child(2)").addClass("animated flipInX");
                $(".page4>div:nth-child(4)").addClass("animated flipInX");
            }else {
                $(".page4>div:nth-child(1)").removeClass("animated flipInY");
                $(".page4>div:nth-child(3)").removeClass("animated flipInY");
                $(".page4>div:nth-child(2)").removeClass("animated flipInX");
                $(".page4>div:nth-child(4)").removeClass("animated flipInX");
            }
            if (step===5||step===0){
               
            }else {
              

            }






        });
    }
    // //->给区域增加一个loop:true的时候,会自己往开头和结尾各增加一张一模一样的,但是我还需要把区域定位到“真实的第一张”,所以开始会自己向下切换一次,我们让初始的step=0即可
}();











