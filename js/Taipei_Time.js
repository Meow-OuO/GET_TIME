<script>
setInterval(Time_now);

function Time_now() {
	let date = new Date();
	document.getElementById("time").innerHTML ='板橋標準時間：'+date.toLocaleString('zh-TW',{hourCycle:'h23',timeZone:'Asia/Taipei'});
}
</script>
