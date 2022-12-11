/*
 * @Descripttion: 
 * @version: 
 * @Author: tzy1997
 * @Date: 2022-12-05 18:09:55
 * @LastEditors: tzy1997
 * @LastEditTime: 2022-12-11 20:49:20
 */
var audio = document.getElementById('audio');
audio.play();
var lis = document.querySelectorAll('ul.jj li');
lis.forEach(li => {
    li.onclick = function() {
		if(this.innerHTML=='黑人抬鸡(棺)'){
			audio.src = 'https://npm.elemecdn.com/ethan4116-blog/ikun/audio/' + this.getAttribute('m') + '.mpeg';
			audio.play();
		}else{
			audio.src = 'https://npm.elemecdn.com/ethan4116-blog/ikun/audio/' + this.getAttribute('m') + '.mp3';
			audio.play();
			console.log(this.innerHTML)
		}
    }
});
document.querySelector('.s1').onclick = function() {
    audio.currentTime = 0;
    console.log('重开')
};
document.querySelector('.s2').onclick = function() {
    audio.pause();
    console.log('停止')
}