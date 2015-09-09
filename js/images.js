// image data in JSON	
	var text = '	{'
	+'	   "outer":{'
	+'	      "photo":['
	+'	         {'
	+'	   "title": "Laptop",'
	+'	            "id":"1",'
	+'	            "url":"http://rtm.ebaystatic.com/0/RTMS/Image/30901_July_30_HALO_656x402_Laptop.jpg"'
	+'	         },'
	+'	         {'
	+'	  "title": "Old car",'
	+'	            "id":"2",'
	+'	            "url":"http://i3.ebayimg.com/images/g/QdUAAOSw~gRVta9e/s-l500.webp"'
	+'	         },'
	+'	         {'
	+'	   "title": "Desk",'
	+'	            "id":"3",'
	+'	            "url":"http://i.ebayimg.com/images/g/s~wAAOSwqu9VQ3yS/s-l500.webp"'
	+'	         },'
	+'	         {'
	+'	   "title": "Macbook Pro",'
	+'	            "id":"4",'
	+'	            "url":"http://i.ebayimg.com/images/g/G-4AAOSw~gRVt~mq/s-l500.webp"'
	+'	         },'
	+'	         {'
	+'	   "title": "Watch",'
	+'	            "id":"5",'
	+'	            "url":"http://i.ebayimg.com/images/g/YWMAAOSwl8NVcrHE/s-l500.webp"'
	+'	         }'
	+'	      ]'
	+'	   }'
	+'	}';
	
	var images=JSON.parse(text);
	var x=images.outer;
	var y=x.photo;
	var numImages=y.length;
	var pindex;
    
	function prev(){
		if(pindex>0) {
			pindex--;
			showImage();
		}
	}
	
	function next(){
		  if(pindex<numImages-1) {
			  pindex++;
			  console.log("pindex="+pindex);
			  showImage();
		  }
	}
	
	function showImage() {
		var x=images.outer;
		var y=x.photo;
		var image=y[pindex];
		var title=image.title;
		var id=image.id;
		$("#title").html(id+":"+title);
		var url=image.url;
		$("#ImageHolder").attr("src", url);
	}
	
	function init() {
		pindex=0;
		showImage();
	}
	