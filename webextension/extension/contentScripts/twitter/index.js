const {WaifuChain, web3} = require("../../web3/WaifuChain.js");

window.web4=web3;

setTimeout(()=>{

console.log("aaaaaaaaaaaaaaaaaaa");
let elem = document.querySelector("._552n");
elem.innerHTML+='<li class="_6gd _5ep3 _13gi" id="monies"><a aria-label="Send a Like" class="_5j_u _6gb _6wm4" role="button" title="Send a Like" href="#"><svg aria-labelledby="js_1bz" preserveAspectRatio="xMinYMax meet" version="1.1" viewBox="0 0 500 600" xmlns="http://www.w3.org/2000/svg" height="16" width="16"><title id="js_1bz">Send</title><g style="fill: rgb(190, 195, 201);"><path d="M204.78 116.47l4.1 4.1 71.69-71.8L238.78 7a24.1 24.1 0 0 0-33.9 0L167 44.87a24 24 0 0 0 0 33.8zM608 160H437l120.25 120.28A64 64 0 0 1 576 325.54V400a16 16 0 0 1-16 16H264a8 8 0 0 1-8-8v-16a8 8 0 0 1 8-8h163l-64-64h-99a8 8 0 0 1-8-8v-16a8 8 0 0 1 8-8h67L203 160H32a32 32 0 0 0-32 32v288a32 32 0 0 0 32 32h576a32 32 0 0 0 32-32V192a32 32 0 0 0-32-32zM144 415.88V432a8 8 0 0 1-8 8h-16a8 8 0 0 1-8-8v-16.29a57.26 57.26 0 0 1-31.37-11.35 8 8 0 0 1-.57-12.14L91.81 381a8.21 8.21 0 0 1 10.13-.73 24.08 24.08 0 0 0 12.82 3.73h28.11c6.5 0 11.8-5.92 11.8-13.19 0-5.95-3.61-11.19-8.77-12.73l-45-13.5c-18.59-5.58-31.58-23.42-31.58-43.39 0-24.52 19.05-44.44 42.67-45.07V240a8 8 0 0 1 8-8h16a8 8 0 0 1 8 8v16.29a57.18 57.18 0 0 1 31.37 11.35 8 8 0 0 1 .57 12.14L164.18 291a8.22 8.22 0 0 1-10.14.73 23.93 23.93 0 0 0-12.81-3.73h-28.11c-6.5 0-11.8 5.92-11.8 13.19 0 5.95 3.61 11.19 8.77 12.73l45 13.5c18.59 5.58 31.57 23.42 31.57 43.39 0 24.53-19.04 44.44-42.66 45.07zm318.87-41.25a32 32 0 0 0 22.62 9.37H528a16 16 0 0 0 16-16v-42.46a32 32 0 0 0-9.37-22.63L303.17 71.47l-71.7 71.7z"></path><path d="M3.3,6H0.7C0.3,6,0,6.3,0,6.7v8.5C0,15.7,0.3,16,0.7,16h2.5C3.7,16,4,15.7,4,15.3V6.7C4,6.3,3.7,6,3.3,6z"></path></g></svg></a></li>';


document.querySelector("#monies").addEventListener("click", async ()=>{
	let amount = window.prompt("How many usd do you want to send?");
	var accounts = await web3.eth.getAccounts()
    var signature = await web3.eth.personal.sign("{type:send, amount:"+amount+", address: 0x3fa1e84280163FDe90fb65977f0E48cd5C337B9B}", accounts[0])
	//web3.eth.personal.sign('dataToSign', '0x3fa1e84280163fde90fb65977f0e48cd5c337b9b', 'password');
	//web3.eth.sign("{type:send, amount:"+amount+", address: 0x3fa1e84280163FDe90fb65977f0E48cd5C337B9B}", "0x3fa1e84280163fde90fb65977f0e48cd5c337b9b")
});
}, 20000);
	/*

	let currentPage=new URL(window.location.href)
	WaifuChain.methods.getWaifusInProfile(currentPage.hostname + currentPage.pathname).call()
	.then((waifus)=>{
		if(waifus.length){
			document.querySelector(".ProfileHeaderCard-bio").innerHTML+=
				'<br><div id="waifuList"></div>';
		}
		let waifuList=document.querySelector("#waifuList");
		waifus.forEach((waifuId, waifuIndex)=>{
			WaifuChain.methods.tokenURI(waifuId).call()
			.then((waifuURL)=>
				fetch(waifuURL)
			)
			.then((res)=>
				res.json()
			)
			.then((waifu)=>{
				document.querySelector("#waifu-"+waifuIndex+" > img").src=waifu["image"];
				document.querySelector("#waifu-"+waifuIndex+" > p").innerText=waifu["name"].split(' ').slice(0,3).join(' ');
			});
			waifuList.innerHTML+=
				"<div id='waifu-"+waifuIndex+"' class='waifuCard'>"+
					"<img width='85' height='90'>"+
					"<p></p>"+
				"</div>";
		});
	});
}

*/
