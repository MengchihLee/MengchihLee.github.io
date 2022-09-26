
// Getting the page elements
let videoObj = document.querySelector('video')
let playBtn = document.querySelector('.play_pause')
let eleSelect = document.getElementById('selRate'); 
// 0. Implement the play button
// 1. Get the required element
// 2. Click the Play button to control the video playback
// 3. Switch to Pause button
// 4. Click the pause button to pause
// 5. Switch
playBtn.addEventListener('click', function () {
    if (videoObj.paused) {
        // 如果视频处于播放状态
        videoObj.play()
        this.classList.remove('fa-play')
        this.classList.add('fa-pause')
    } else {
        videoObj.pause()
        this.classList.add('fa-play')
        this.classList.remove('fa-pause')
    }
})
let progressTimer = document.querySelector('.progress_timer')
let durationTimer = document.querySelector('.duration_timer')
// 0. Implementation time
// 1. Get the required elements
// 2. Time format: hh:mm:ss
// 3. Get the total time and format it
// 4. Get the current video time and format it
// 5. Render to page
let { totalT, presentT } = { totalT: 0, presentT: 0 }
videoObj.addEventListener('canplay', function () {
    totalT = this.duration
    let videoDuration = formatTime(totalT)
    durationTimer.innerHTML = videoDuration
})

videoObj.addEventListener('timeupdate', function () {
    presentT = this.currentTime
    let videoCurrent = formatTime(presentT)
    progressTimer.innerHTML = videoCurrent
})
function formatTime(t) {
    let h = parseInt(t / 3600)
    h = h < 10 ? '0' + h : h
    let m = parseInt(t % 3600 / 60)
    m = m < 10 ? '0' + m : m
    let s = parseInt(t % 60)
    s = s < 10 ? '0' + s : s
    return h + ':' + m + ':' + s
}
let progress = document.querySelector('.progress')
//0. Implement the progress bar
//1. Get the required elements
//2. Percentage by time
let percent = presentT / totalT * 100
progress.style.width = percent + '%'
// 0. Full screen
let expand = document.querySelector('.expand')
expand.addEventListener('click', function () {
    videoObj.webkitRequestFullScreen()
})
//0.change speed 
console.log(eleSelect,"&&&&")
eleSelect.addEventListener('change', function () { 
    var selIndex = eleSelect.selectedIndex;	
    var selValue = eleSelect.options[selIndex].value; 
    console.log(selValue,"sylv ")
    videoObj.playbackRate = selValue; 
});
