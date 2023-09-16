var mobileFlag = false;
function openMobile() {
	var doc = document.querySelector(".mobile-side-bar");
	doc.style.display = "flex";
	mobileFlag = true;
}
function closeMobile() {
	var doc = document.querySelector(".mobile-side-bar");
	doc.style.display = "none";
	mobileFlag = false;
}

gsap.set(".top-img-wrapper", { perspective: 400, autoAlpha: 1 });

var tl = gsap
	.timeline({
		scrollTrigger: {
			trigger: ".top-img-wrapper",
			pin: true,
			scrub: true,
		},
	})
	.to(".top-img", {
		transformOrigin: "-500% 50% -100px",
		rotationX: 0,
		z: 0,
	});

var perfectResponsiveDoc = document.querySelector(".perfect-img-container")
	.children.length;
[...new Array(perfectResponsiveDoc)].forEach((v, index) => {
	gsap.to(`#image${index}`, {
		opacity: 1,
		scrollTrigger: {
			trigger: `#image${index}`,
			start: "center center+=230px",
			end: "center center",
			scrub: 1,
			// or //
			//toggleActions: "play none none reverse"
		},
	});

	ScrollTrigger.create({
		trigger: `#image${index}`,
		pin: `#image${index} .img`,
		pinSpacing: index === 4 ? true : false,
		start: "center center",
		end: "+=100%",
		markers: true,
	});

	gsap.to(`#image${index}`, {
		opacity: 0,
		immediateRender: false,
		scrollTrigger: {
			trigger: `#image${index}`,
			start: "center center-=" + window.innerHeight,
			end: "+=230px",
			scrub: 1,
			// or //
			//toggleActions: "play none none reverse"
		},
	});
});
