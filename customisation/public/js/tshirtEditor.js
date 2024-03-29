AWS.config.update({
  accessKeyId: "AKIA2R3K4L6HSVL5IN7C",
  secretAccessKey: "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",
  region: "ap-south-1",
});

var canvas;
var tshirts = new Array(); //prototype: [{style:'x',color:'white',front:'a',back:'b',price:{tshirt:'12.95',frontPrint:'4.99',backPrint:'4.99',total:'22.47'}}]
var a;
var b;
var line1;
var line2;
var line3;
var line4;

$(document).ready(function () {
	//setup front side canvas 
  canvas = new fabric.Canvas("tcanvas", {
    hoverCursor: "pointer",
		selection: true,
    selectionBorderColor: "blue",
	});
	canvas.on({
    "object:moving": function (e) {
			e.target.opacity = 0.5;
		},
    "object:modified": function (e) {
			e.target.opacity = 1;
		},
    "object:selected": onObjectSelected,
    "selection:cleared": onSelectedCleared,
	});
	// piggyback on `canvas.findTarget`, to fire "object:over" and "object:out" events
	canvas.findTarget = (function (originalFn) {
		return function () {
			var target = originalFn.apply(this, arguments);
			if (target) {
				if (this._hoveredTarget !== target) {
          canvas.fire("object:over", { target: target });
					if (this._hoveredTarget) {
            canvas.fire("object:out", { target: this._hoveredTarget });
					}
					this._hoveredTarget = target;
				}
      } else if (this._hoveredTarget) {
        canvas.fire("object:out", { target: this._hoveredTarget });
				this._hoveredTarget = null;
			}
			return target;
		};
	})(canvas.findTarget);

  canvas.on("object:over", function (e) {
		//e.target.setFill('red');
		//canvas.renderAll();
	});

  canvas.on("object:out", function (e) {
		//e.target.setFill('green');
		//canvas.renderAll();
	});

  document.getElementById("add-text").onclick = function () {
		var text = $("#text-string").val();
		var textSample = new fabric.Text(text, {
			left: fabric.util.getRandomInt(40, 40),
			top: fabric.util.getRandomInt(40, 40),
      fontFamily: "helvetica",
			angle: 0,
      fill: "#000000",
			scaleX: 0.5,
			scaleY: 0.5,
      fontWeight: "",
      hasRotatingPoint: true,
		});
		canvas.add(textSample);
		canvas.item(canvas.item.length - 1).hasRotatingPoint = true;
    $("#texteditor").css("display", "block");
    $("#imageeditor").css("display", "block");
	};
	$("#text-string").keyup(function () {
		var activeObject = canvas.getActiveObject();
    if (activeObject && activeObject.type === "text") {
			activeObject.text = this.value;
			canvas.renderAll();
		}
	});
  $(document).on("click", ".img-polaroid", function (e) {
		var el = e.target;
    /temp code/;
		var offset = 50;
		var left = fabric.util.getRandomInt(0 + offset, 200 - offset);
		var top = fabric.util.getRandomInt(0 + offset, 400 - offset);
		var angle = fabric.util.getRandomInt(-20, 40);
		var width = fabric.util.getRandomInt(30, 50);
    var opacity = (function (min, max) {
      return Math.random() * (max - min) + min;
    })(0.5, 1);

		fabric.Image.fromURL(el.src, function (image) {
			image.set({
				left: left,
				top: top,
				angle: 0,
				padding: 10,
				cornersize: 10,
        hasRotatingPoint: true,
			});
			//image.scale(getRandomNum(0.1, 0.25)).setCoords();
			canvas.add(image);
		});
	});
  document.getElementById("remove-selected").onclick = function () {
		var activeObject = canvas.getActiveObject(),
			activeGroup = canvas.getActiveGroup();
		if (activeObject) {
			canvas.remove(activeObject);
			$("#text-string").val("");
    } else if (activeGroup) {
			var objectsInGroup = activeGroup.getObjects();
			canvas.discardActiveGroup();
			objectsInGroup.forEach(function (object) {
				canvas.remove(object);
			});
		}
	};
  document.getElementById("bring-to-front").onclick = function () {
		var activeObject = canvas.getActiveObject(),
			activeGroup = canvas.getActiveGroup();
		if (activeObject) {
			activeObject.bringToFront();
    } else if (activeGroup) {
			var objectsInGroup = activeGroup.getObjects();
			canvas.discardActiveGroup();
			objectsInGroup.forEach(function (object) {
				object.bringToFront();
			});
		}
	};
  document.getElementById("send-to-back").onclick = function () {
		var activeObject = canvas.getActiveObject(),
			activeGroup = canvas.getActiveGroup();
		if (activeObject) {
			activeObject.sendToBack();
    } else if (activeGroup) {
			var objectsInGroup = activeGroup.getObjects();
			canvas.discardActiveGroup();
			objectsInGroup.forEach(function (object) {
				object.sendToBack();
			});
		}
	};
	$("#text-bold").click(function () {
		var activeObject = canvas.getActiveObject();
    if (activeObject && activeObject.type === "text") {
      activeObject.fontWeight = activeObject.fontWeight == "bold" ? "" : "bold";
			canvas.renderAll();
		}
	});
	$("#text-italic").click(function () {
		var activeObject = canvas.getActiveObject();
    if (activeObject && activeObject.type === "text") {
      activeObject.fontStyle =
        activeObject.fontStyle == "italic" ? "" : "italic";
			canvas.renderAll();
		}
	});
	$("#text-strike").click(function () {
		var activeObject = canvas.getActiveObject();
    if (activeObject && activeObject.type === "text") {
      activeObject.textDecoration =
        activeObject.textDecoration == "line-through" ? "" : "line-through";
			canvas.renderAll();
		}
	});
	$("#text-underline").click(function () {
		var activeObject = canvas.getActiveObject();
    if (activeObject && activeObject.type === "text") {
      activeObject.textDecoration =
        activeObject.textDecoration == "underline" ? "" : "underline";
			canvas.renderAll();
		}
	});
	$("#text-left").click(function () {
		var activeObject = canvas.getActiveObject();
    if (activeObject && activeObject.type === "text") {
      activeObject.textAlign = "left";
			canvas.renderAll();
		}
	});
	$("#text-center").click(function () {
		var activeObject = canvas.getActiveObject();
    if (activeObject && activeObject.type === "text") {
      activeObject.textAlign = "center";
			canvas.renderAll();
		}
	});
	$("#text-right").click(function () {
		var activeObject = canvas.getActiveObject();
    if (activeObject && activeObject.type === "text") {
      activeObject.textAlign = "right";
			canvas.renderAll();
		}
	});
	$("#font-family").change(function () {
		var activeObject = canvas.getActiveObject();
    if (activeObject && activeObject.type === "text") {
			activeObject.fontFamily = this.value;
			canvas.renderAll();
		}
	});
  $("#text-bgcolor").miniColors({
		change: function (hex, rgb) {
			var activeObject = canvas.getActiveObject();
      if (activeObject && activeObject.type === "text") {
				activeObject.backgroundColor = this.value;
				canvas.renderAll();
			}
		},
		open: function (hex, rgb) {
			//
		},
		close: function (hex, rgb) {
			//
    },
	});
	// $('#text-fontcolor').miniColors({
	// 	change: function(hex, rgb) {
	// 	  var activeObject = canvas.getActiveObject();
	//       if (activeObject && activeObject.type === 'text') {
	//     	  activeObject.fill = this.value;
	//     	  canvas.renderAll();
	//       }
	// 	},
	// 	open: function(hex, rgb) {
	// 		//
	// 	},
	// 	close: function(hex, rgb) {
	// 		//
	// 	}
	// });

	canvas.on("selection:cleared", function () {
		document.getElementById("text-fontcolor").value = "#000000";
	});

	var fontColorInput = document.getElementById("text-fontcolor");
	fontColorInput.addEventListener("input", function () {
		var color = fontColorInput.value;
		var activeObject = canvas.getActiveObject();
		if (activeObject && activeObject.type === "text") {
			activeObject.fill = color;
			canvas.renderAll();
		}
	});
	// $('#text-strokecolor').miniColors({
	// 	change: function(hex, rgb) {
	// 	  var activeObject = canvas.getActiveObject();
	//       if (activeObject && activeObject.type === 'text') {
	//     	  activeObject.strokeStyle = this.value;
	//     	  canvas.renderAll();
	//       }
	// 	},
	// 	open: function(hex, rgb) {
	// 		//
	// 	},
	// 	close: function(hex, rgb) {
	// 		//
	// 	}
	// });

	var strokeColorInput = document.getElementById("text-strokecolor");

	canvas.on("selection:created", function (event) {
		var activeObject = event.target;
		if (activeObject && activeObject.type === "text") {
			strokeColorInput.value = activeObject.stroke;
		}
	});

	canvas.on("selection:updated", function (event) {
		var activeObject = event.target;
		if (activeObject && activeObject.type === "text") {
			strokeColorInput.value = activeObject.stroke;
		}
	});

	strokeColorInput.addEventListener("input", function () {
		var color = strokeColorInput.value;

		var activeObject = canvas.getActiveObject();
		if (activeObject && activeObject.type === "text") {
			activeObject.strokeStyle = color;
			canvas.renderAll();
		}
	});
	//canvas.add(new fabric.fabric.Object({hasBorders:true,hasControls:false,hasRotatingPoint:false,selectable:false,type:'rect'}));
	$("#drawingArea").hover(
		function () {
			canvas.add(line1);
			canvas.add(line2);
			canvas.add(line3);
			canvas.add(line4);
			canvas.renderAll();
		},
		function () {
			canvas.remove(line1);
			canvas.remove(line2);
			canvas.remove(line3);
			canvas.remove(line4);
			canvas.renderAll();
		}
	);

  $(".color-preview1").click(function () {
		var color = $(this).css("background-color");
		//    document.getElementById("shirtDiv").style.backgroundColor = color;		   
	});
  $("#rotate").click(function (e) {
		e.preventDefault();
		rotate();
	});

	function dataURItoBlob(dataURI) {
    var byteString = atob(dataURI.split(",")[1]);
    var mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];
		var ab = new ArrayBuffer(byteString.length);
		var ia = new Uint8Array(ab);
		for (var i = 0; i < byteString.length; i++) {
			ia[i] = byteString.charCodeAt(i);
		}
		return new Blob([ab], { type: mimeString });
	}

	function generateUniqueFilename() {
		// Generate a random string of characters
    const randomString =
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15);

		// Generate a timestamp
		const timestamp = Date.now();

		// Combine the random string and timestamp to create a unique filename
    const uniqueFilename = randomString + "_" + timestamp;

		return uniqueFilename;
	}

	// Get all the quantity input elements and increment/decrement buttons
  const quantityInputs = document.querySelectorAll(".quantity");
  const incrementButtons = document.querySelectorAll(".increment");
  const decrementButtons = document.querySelectorAll(".decrement");

	// Add event listeners to each increment button
	incrementButtons.forEach((button, index) => {
    button.addEventListener("click", function () {
			// Increment the quantity value of the corresponding input
			quantityInputs[index].value = parseInt(quantityInputs[index].value) + 1;
		});
	});

	// Add event listeners to each decrement button
	decrementButtons.forEach((button, index) => {
    button.addEventListener("click", function () {
			// Decrement the quantity value of the corresponding input, but ensure it doesn't go below the minimum value
			const currentValue = parseInt(quantityInputs[index].value);
			if (currentValue > parseInt(quantityInputs[index].min)) {
				quantityInputs[index].value = currentValue - 1;
			}
		});
	});

	// Get the "Confirm Order" button element
	const orderConfirmationButton = document.getElementById("addToTheBag");

	// Add an event listener to the button
	orderConfirmationButton.addEventListener("click", async () => {
		const xsQuantity = parseInt(document.querySelector(".xs-input").value);
		const sQuantity = parseInt(document.querySelector(".s-input").value);
		const mQuantity = parseInt(document.querySelector(".m-input").value);
		const lQuantity = parseInt(document.querySelector(".l-input").value);
		const xlQuantity = parseInt(document.querySelector(".xl-input").value);
		const xxlQuantity = parseInt(document.querySelector(".xxl-input").value);

    var cookieValue = Cookies.get("Authorization");
    let emailid = Cookies.get("Email");
		var nocookie = 0;
		if (cookieValue) {
			console.log("Cookie value: " + cookieValue);
			console.log("Email: " + emailid);
      document.getElementById("userIcon").style.display = "none";
      document.getElementById("emailText").innerText = emailid
        .charAt(0)
        .toUpperCase();
      document.getElementById("emailBox").innerText = emailid;
      document.getElementById("emailText").style.display = "block";
      document.getElementById("emailText").style.fontSize = "28px";
      document.getElementById("emailText").style.color = "#FE4536";
      document.getElementById("emailText").style.fontFamily = "Lobster";
      document.getElementById("emailText").style.fontWeight = "bold";
      document.getElementById("emailText").style.marginRight = "14px";
      document.getElementById("ellipse-div").style.backgroundColor = "#FFF1F0";
		} else {
			console.log("Cookie not found");
			nocookie = nocookie + 1;
		}

		if (nocookie === 1) {
			// Redirect the user to 127.0.0.1:3000/register
			// window.location.href = "https://www.hattyhood.com/register";
			window.location.href = "http://localhost:3000/register";

			return; // Stop further execution of the code
		}
		var doc = new jsPDF();
		doc.setFontSize(20);
		// Get the hex code of the text color
    var textColor = $("#text-fontcolor").val();

		// Get the hex code of the text color
    var textBorderColor = $("#text-strokecolor").val();

		// Get the hex code of the t-shirt color
    var tshirtColor = $("#favcolor").val();
		const s3 = new AWS.S3();
		const uniqueFilename = generateUniqueFilename();

		html2canvas(document.querySelector("#shirtDiv"))
      .then((canvas) => {
				function convertCanvasToImage(c, doc) {
					var image = new Image();
					image.src = c.toDataURL("image/jpeg");
          doc.addImage(image.src, "JPEG", 30, 5, 145, 125);
					return image;
				}
				convertCanvasToImage(canvas, doc);

        return new Promise((resolve) => {
					setTimeout(() => {
						resolve(canvas);
					}, 400);
				});
			})
      .then((canvas) => {
				rotate();
				setTimeout(() => {
          html2canvas(document.querySelector("#shirtDiv")).then((canvas) => {
							function convertCanvasToImage(c) {
								var image = new Image();
								image.src = c.toDataURL("image/jpeg");
              doc.addImage(image.src, "JPEG", 30, 150, 145, 125);
								return image;
							}

							convertCanvasToImage(canvas);

							doc.addPage();
							doc.setFontSize(12);
							doc.text("Text Color: " + textColor, 30, 20);
							doc.text("Text Border Color: " + textBorderColor, 30, 30);
							doc.text("T-Shirt Color: " + tshirtColor, 30, 40);
							doc.text("XS Quantity: " + xsQuantity, 30, 50);
							doc.text("S Quantity: " + sQuantity, 30, 60);
							doc.text("M Quantity: " + mQuantity, 30, 70);
							doc.text("L Quantity: " + lQuantity, 30, 80);
							doc.text("XL Quantity: " + xlQuantity, 30, 90);
							doc.text("XXL Quantity: " + xxlQuantity, 30, 100);

							// Save the PDF as base64-encoded string
            const pdfDataUriString = doc.output("datauristring");

							// Convert the base64 string to a Blob object
							const pdfBlob = dataURItoBlob(pdfDataUriString);

							// Create a new instance of the AWS SDK
							var s3 = new AWS.S3();

							// Specify the S3 bucket name and desired key for the file
            var bucketName = "hattyhood";
            var key = "pdf/" + uniqueFilename + ".pdf";

							// Create the object parameters for S3 upload
							var params = {
								Bucket: bucketName,
								Key: key,
								Body: pdfBlob,
              ACL: "public-read", // Optional: Set the ACL permissions for the uploaded file
							};

							// Upload the PDF to S3
							s3.upload(params, function (err, data) {
								if (err) {
                console.error("Error uploading PDF to S3:", err);
								} else {

									// Calculate the sum of all size quantities
									const sum = xsQuantity + sQuantity + mQuantity + lQuantity + xlQuantity + xxlQuantity;

									// Check if the sum is zero
									if (sum === 0) {
										Swal.fire({
											icon: 'error',
											title: 'No Size Selected',
											text: 'Please select the quantity',
										});
										return; // Stop further execution of the code
									}

									// Prepare the request payload
									const payload = {
										email: emailid,
										xs: xsQuantity,
										s: sQuantity,
										m: mQuantity,
										l: lQuantity,
										xl: xlQuantity,
										xxl: xxlQuantity,
										product: data.Location,
									};

									// Send the POST request to the server
									fetch("https://www.hattyhood.com/api/customization/", {
										method: "POST",
										headers: {
											"Content-Type": "application/json",
										},
										body: JSON.stringify(payload),
									})
										.then(response => {
											if (response.ok) {
												Swal.fire({
													icon: 'success',
													title: 'Order Confirmed',
													text: 'Our agent will get back to you soon with the quotation.',
												});
												return response.json();
											} else {
												throw new Error("Request failed with status: " + response.status);
											}
										})
										.then(data => {
											console.log(data); // Handle the successful response data
										})
										.catch(error => {
											console.error("Error:", error);
										});
								}
							});

							$('#test').empty();
						});
				}, 400);
			});
	});


	function checkCookies() {
		var cookieValue = Cookies.get('Authorization');
		var emailid = Cookies.get('Email');
		if (cookieValue) {
			console.log("Cookie value: " + cookieValue);
			console.log("Email: " + emailid);
			document.getElementById('userIcon').style.display = 'none';
			document.getElementById('emailText').innerText = emailid.charAt(0).toUpperCase();
			document.getElementById('emailBox').innerText = emailid;
			document.getElementById('emailText').style.display = 'block';
			document.getElementById('emailText').style.fontSize = '28px';
			document.getElementById('emailText').style.color = '#FE4536';
			document.getElementById('emailText').style.fontFamily = 'Lobster';
			document.getElementById('emailText').style.fontWeight = 'bold';
			document.getElementById('emailText').style.marginRight = '14px';
			document.getElementById('ellipse-div').style.backgroundColor = '#FFF1F0';
		} else {
			console.log("Cookie not found");
		}
	}
	// Call the function on page load

let FimageUrl;
let BimageUrl;

	window.onload = function () {
		checkCookies();


		//checking id
		var url = window.location.href;
		var productId = url.split("customisation/?")[1];
		// var productId = url.split("/?")[1];
		if (productId.endsWith('#')) {
		productId = productId.slice(0, -1);
		}
		console.log(productId);



		const imageMapping = {
			mh10: {
				FimageUrl: './img/mens_hoodie_front.png',
				BimageUrl: './img/mens_hoodie_back.png',
			},
			mh11: {
				FimageUrl: './img/mens_hoodie_front.png',
				BimageUrl: './img/mens_hoodie_back.png',
			},
			mh12: {
				FimageUrl: './img/crew_front.png',
				BimageUrl: './img/crew_back.png',
			},
			mh14: {
				FimageUrl: './img/mens_longsleeve_front.png',
				BimageUrl: './img/mens_longsleeve_back.png',
			},
			mh15: {
				FimageUrl: './img/womens_crew_front.png',
				BimageUrl: './img/womens_crew_back.png',
			}
		};
			const imageInfo = imageMapping[productId];

			if (imageInfo) {
				FimageUrl = imageInfo.FimageUrl;
    			BimageUrl = imageInfo.BimageUrl;
				const imageElement = document.getElementById('tshirtFacing'); // Replace 'myImage' with the actual ID of your image element
				imageElement.src = FimageUrl;
			} else {
			console.log("No data found for the productId: " + productId);
			}
		};

	function rotate() {
		$('#flip').click();
	}
	$('#flip').click(function () {
		// console.log(./img/crew_front.png);
		if ($(this).attr("data-original-title") == "Show Back View") {
			$(this).attr('data-original-title', 'Show Front View');
			console.log(BimageUrl);
			console.log(FimageUrl);
			$("#tshirtFacing").attr("src", BimageUrl);
			a = JSON.stringify(canvas);
			canvas.clear();
			try {
				var json = JSON.parse(b);
				canvas.loadFromJSON(b);
			} catch (e) { }

		} else {
			$(this).attr('data-original-title', 'Show Back View');
			$("#tshirtFacing").attr("src", FimageUrl);
			b = JSON.stringify(canvas);
			canvas.clear();
			try {
				var json = JSON.parse(a);
				canvas.loadFromJSON(a);
			} catch (e) { }
		}
		canvas.renderAll();
		setTimeout(function () {
			canvas.calcOffset();
		}, 200);
	});

	$(".clearfix button,a").tooltip();
	line1 = new fabric.Line([0, 0, 180, 0], { "stroke": "#000000", "strokeWidth": 1, hasBorders: false, hasControls: false, hasRotatingPoint: false, selectable: false });
	line2 = new fabric.Line([179, 0, 180, 320], { "stroke": "#000000", "strokeWidth": 1, hasBorders: false, hasControls: false, hasRotatingPoint: false, selectable: false });
	line3 = new fabric.Line([0, 0, 0, 320], { "stroke": "#000000", "strokeWidth": 1, hasBorders: false, hasControls: false, hasRotatingPoint: false, selectable: false });
	line4 = new fabric.Line([0, 320, 180, 319], { "stroke": "#000000", "strokeWidth": 1, hasBorders: false, hasControls: false, hasRotatingPoint: false, selectable: false });
});//doc ready


function getRandomNum(min, max) {
	return Math.random() * (max - min) + min;
}

function onObjectSelected(e) {
	var selectedObject = e.target;
	$("#text-string").val("");
	selectedObject.hasRotatingPoint = true
	if (selectedObject && selectedObject.type === 'text') {
		//display text editor	    	
		$("#texteditor").css('display', 'block');
		$("#text-string").val(selectedObject.getText());
		// $('#text-fontcolor').miniColors('value',selectedObject.fill);
		$('#text-strokecolor').miniColors('value', selectedObject.strokeStyle);
		$("#imageeditor").css('display', 'block');
	}
	else if (selectedObject && selectedObject.type === 'image') {
		//display image editor
		// $("#texteditor").css('display', 'none');	
		$("#imageeditor").css('display', 'block');
	}
}
function onSelectedCleared(e) {
	//  $("#texteditor").css('display', 'none');
	$("#text-string").val("");
	//  $("#imageeditor").css('display', 'none');
}
function setFont(font) {
	var activeObject = canvas.getActiveObject();
	if (activeObject && activeObject.type === 'text') {
		activeObject.fontFamily = font;
		canvas.renderAll();
	}
}
function removeWhite() {
	var activeObject = canvas.getActiveObject();
	if (activeObject && activeObject.type === 'image') {
		activeObject.filters[2] = new fabric.Image.filters.RemoveWhite({ hreshold: 100, distance: 10 });//0-255, 0-255
		activeObject.applyFilters(canvas.renderAll.bind(canvas));
	}
}


document.getElementById("sizeChartIcon").addEventListener("click", function () {
	var sizeChartModal = document.getElementById("sizeChartModal");
	var sizeTable = document.getElementById("table");
	var bag = document.getElementById("addToTheBag");
	var arrow = document.getElementById("sizeChartIconArrow");

	if (sizeChartModal.style.display === "none") {
		sizeChartModal.style.display = "block";
		sizeTable.style.visibility = "hidden";
		bag.style.visibility = "hidden"
		arrow.classList.remove('fa-chevron-down');
		arrow.classList.add('fa-chevron-up');
	} else {
		sizeChartModal.style.display = "none";
		sizeTable.style.visibility = "visible";
		bag.style.visibility = "visible"
		arrow.classList.remove('fa-chevron-up');
		arrow.classList.add('fa-chevron-down');
	}

});